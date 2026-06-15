import json
from fastapi import WebSocket, WebSocketDisconnect

_active_ws: dict[str, list[WebSocket]] = {}


async def ws_model_progress(websocket: WebSocket, project_id: str):
    await websocket.accept()
    run_id = websocket.query_params.get("run_id", "")
    key = f"{project_id}:{run_id}"
    if key not in _active_ws:
        _active_ws[key] = []
    _active_ws[key].append(websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        if websocket in _active_ws.get(key, []):
            _active_ws[key].remove(websocket)


async def notify_progress(run_id: str, project_id: str, progress: float, status: str):
    key = f"{project_id}:{run_id}"
    connections = _active_ws.get(key, [])
    msg = json.dumps({"run_id": run_id, "progress": progress, "status": status})
    for ws in connections[:]:
        try:
            await ws.send_text(msg)
        except Exception:
            try:
                connections.remove(ws)
            except ValueError:
                pass
