import numpy as np
from scipy.optimize import minimize
from scipy.spatial.distance import pdist, squareform
from typing import Optional, Tuple


def spherical_model(h: np.ndarray, nugget: float, sill: float, range_: float) -> np.ndarray:
    h = np.asarray(h, dtype=float)
    result = np.zeros_like(h)
    mask = h > 0
    h_pos = h[mask]
    h_range = h_pos / range_
    inside = h_range <= 1.0
    result[mask] = np.where(
        inside,
        nugget + sill * (1.5 * h_range - 0.5 * h_range ** 3),
        nugget + sill
    )
    return result


def exponential_model(h: np.ndarray, nugget: float, sill: float, range_: float) -> np.ndarray:
    h = np.asarray(h, dtype=float)
    result = np.zeros_like(h)
    mask = h > 0
    result[mask] = nugget + sill * (1.0 - np.exp(-3.0 * h[mask] / range_))
    return result


def gaussian_model(h: np.ndarray, nugget: float, sill: float, range_: float) -> np.ndarray:
    h = np.asarray(h, dtype=float)
    result = np.zeros_like(h)
    mask = h > 0
    result[mask] = nugget + sill * (1.0 - np.exp(-3.0 * (h[mask] / range_) ** 2))
    return result


MODEL_FUNCS = {
    "spherical": spherical_model,
    "exponential": exponential_model,
    "gaussian": gaussian_model,
}


def compute_experimental_variogram(
    coords: np.ndarray, values: np.ndarray, n_lags: int = 15, lag_tolerance: float = None
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    dists = pdist(coords)
    diff_sq = pdist(values.reshape(-1, 1), metric="sqeuclidean") * 0.5

    max_dist = np.max(dists)
    lag_width = max_dist / n_lags
    if lag_tolerance is None:
        lag_tolerance = lag_width * 0.5

    lag_centers = np.zeros(n_lags)
    gamma = np.zeros(n_lags)
    counts = np.zeros(n_lags)

    for i in range(n_lags):
        lag_center = (i + 0.5) * lag_width
        lag_centers[i] = lag_center
        mask = np.abs(dists - lag_center) <= lag_tolerance
        if np.sum(mask) > 0:
            gamma[i] = np.mean(diff_sq[mask])
            counts[i] = np.sum(mask)
        else:
            gamma[i] = np.nan

    valid = counts > 0
    return lag_centers[valid], gamma[valid], counts[valid]


def fit_variogram(
    lag_centers: np.ndarray,
    gamma: np.ndarray,
    model_type: str = "spherical",
    initial_range: float = None,
    initial_sill: float = None,
    initial_nugget: float = None,
) -> Tuple[float, float, float]:
    if len(lag_centers) < 3:
        return initial_range or float(np.max(lag_centers) * 0.5), \
               initial_sill or float(np.nanmax(gamma)), \
               initial_nugget or 0.0

    if initial_sill is None:
        initial_sill = float(np.nanmax(gamma) * 0.9)
    if initial_nugget is None:
        initial_nugget = float(max(0, np.nanmin(gamma) * 0.5))
    if initial_range is None:
        initial_range = float(lag_centers[np.nanargmax(gamma)] * 0.6)

    model_func = MODEL_FUNCS.get(model_type, spherical_model)

    def objective(params):
        nugget, sill, range_ = params
        if sill <= 0 or range_ <= 0 or nugget < 0:
            return 1e10
        predicted = model_func(lag_centers, nugget, sill, range_)
        return float(np.nansum((gamma - predicted) ** 2))

    result = minimize(
        objective,
        x0=[initial_nugget, initial_sill, initial_range],
        method="L-BFGS-B",
        bounds=[(0, None), (1e-6, None), (1e-6, None)],
    )

    nugget, sill, range_ = result.x
    return float(range_), float(sill), float(nugget)


def apply_anisotropy(
    coords: np.ndarray, angle: float, ratio: float
) -> np.ndarray:
    if ratio <= 0 or abs(angle) < 1e-9:
        return coords.copy()

    theta = np.radians(angle)
    rot = np.array([
        [np.cos(theta), np.sin(theta)],
        [-np.sin(theta), np.cos(theta)]
    ])

    transformed = coords @ rot.T
    transformed[:, 1] /= max(ratio, 1e-6)
    back = transformed @ rot

    return back


def ordinary_kriging(
    coords: np.ndarray,
    values: np.ndarray,
    grid_points: np.ndarray,
    model_type: str = "spherical",
    range_: float = None,
    sill: float = None,
    nugget: float = None,
    aniso_angle: float = 0,
    aniso_ratio: float = 1,
    n_neighbors: int = 20,
) -> Tuple[np.ndarray, np.ndarray]:
    model_func = MODEL_FUNCS.get(model_type, spherical_model)

    if aniso_ratio != 1.0 and aniso_angle != 0:
        coords_k = apply_anisotropy(coords, aniso_angle, aniso_ratio)
        grid_k = apply_anisotropy(grid_points, aniso_angle, aniso_ratio)
    else:
        coords_k = coords.copy()
        grid_k = grid_points.copy()

    if range_ is None or sill is None:
        lag_c, gamma, _ = compute_experimental_variogram(coords_k, values)
        range_, sill, nugget = fit_variogram(lag_c, gamma, model_type,
                                              initial_range=range_,
                                              initial_sill=sill,
                                              initial_nugget=nugget)

    n_data = len(coords_k)
    n_grid = len(grid_k)

    dist_matrix = squareform(pdist(coords_k))
    cov_matrix = model_func(dist_matrix, nugget, sill, range_)
    np.fill_diagonal(cov_matrix, 0)

    cov_matrix_aug = np.zeros((n_data + 1, n_data + 1))
    cov_matrix_aug[:n_data, :n_data] = cov_matrix
    cov_matrix_aug[:n_data, n_data] = 1.0
    cov_matrix_aug[n_data, :n_data] = 1.0
    cov_matrix_aug[n_data, n_data] = 0.0

    try:
        cov_inv = np.linalg.solve(cov_matrix_aug, np.eye(n_data + 1))
    except np.linalg.LinAlgError:
        cov_matrix_aug[:n_data, :n_data] += np.eye(n_data) * 1e-8
        cov_inv = np.linalg.inv(cov_matrix_aug)

    predicted = np.zeros(n_grid)
    variance = np.zeros(n_grid)

    batch_size = min(1000, n_grid)
    for start in range(0, n_grid, batch_size):
        end = min(start + batch_size, n_grid)
        batch_grid = grid_k[start:end]

        dists_to_data = np.sqrt(
            ((batch_grid[:, np.newaxis, :] - coords_k[np.newaxis, :, :]) ** 2).sum(axis=2)
        )

        if n_neighbors < n_data:
            neighbor_idx = np.argpartition(dists_to_data, n_neighbors, axis=1)[:, :n_neighbors]
        else:
            neighbor_idx = np.broadcast_to(np.arange(n_data), (end - start, n_data))

        for i in range(end - start):
            idx = neighbor_idx[i]
            d = dists_to_data[i, idx]

            cov_vec = model_func(d, nugget, sill, range_)
            rhs = np.zeros(len(idx) + 1)
            rhs[:len(idx)] = cov_vec
            rhs[len(idx)] = 1.0

            sub_cov = cov_matrix[np.ix_(idx, idx)]
            sub_aug = np.zeros((len(idx) + 1, len(idx) + 1))
            sub_aug[:len(idx), :len(idx)] = sub_cov
            sub_aug[:len(idx), len(idx)] = 1.0
            sub_aug[len(idx), :len(idx)] = 1.0
            sub_aug[len(idx), len(idx)] = 0.0

            try:
                weights = np.linalg.solve(sub_aug, rhs)
            except np.linalg.LinAlgError:
                sub_aug[:len(idx), :len(idx)] += np.eye(len(idx)) * 1e-8
                weights = np.linalg.solve(sub_aug, rhs)

            predicted[start + i] = np.dot(weights[:len(idx)], values[idx])
            variance[start + i] = max(0, sill - np.dot(weights[:len(idx)], cov_vec) - weights[len(idx)])

    return predicted, variance


def compute_variogram(
    coords: np.ndarray,
    values: np.ndarray,
    model_type: str = "spherical",
) -> dict:
    lag_centers, gamma, counts = compute_experimental_variogram(coords, values)
    range_, sill, nugget = fit_variogram(lag_centers, gamma, model_type)

    model_func = MODEL_FUNCS[model_type]
    h_fine = np.linspace(0, np.max(lag_centers), 100)
    model_values = model_func(h_fine, nugget, sill, range_)

    return {
        "experimental_lags": lag_centers.tolist(),
        "experimental_gamma": gamma.tolist(),
        "experimental_counts": counts.tolist(),
        "model_type": model_type,
        "range": range_,
        "sill": sill,
        "nugget": nugget,
        "model_h": h_fine.tolist(),
        "model_gamma": model_values.tolist(),
    }
