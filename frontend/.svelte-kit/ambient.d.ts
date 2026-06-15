
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const GIT_PAGER: string;
	export const HOMEBREW_CELLAR: string;
	export const TRAE_BRAND_NAME: string;
	export const INFOPATH: string;
	export const GIT_ASKPASS: string;
	export const npm_config_user_agent: string;
	export const SAFE_RM_PROTECTION_FLAG: string;
	export const TRAE_SANDBOX_SOURCE_FLAG_PATH: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_config_prefix: string;
	export const SHLVL: string;
	export const GRADLE_USER_HOME: string;
	export const SAFE_RM_SOURCE_FLAG: string;
	export const TENCENT_NEWS_INSTALL: string;
	export const VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
	export const VSCODE_INJECTION: string;
	export const XPC_SERVICE_NAME: string;
	export const TRAE_SANDBOX_LOG_DIR: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_version: string;
	export const npm_config_npm_version: string;
	export const TRAE_SANDBOX_DUMP_DIR: string;
	export const LANG: string;
	export const EDITOR: string;
	export const npm_config_node_gyp: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const npm_config_userconfig: string;
	export const TRAE_SANDBOX_STORAGE_PATH: string;
	export const USER_ZDOTDIR: string;
	export const TRAE_SANDBOX_CONFIG_NAME: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_lifecycle_event: string;
	export const TRAE_JWT_TOKEN_PATH: string;
	export const PATH: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_config_init_module: string;
	export const NODE: string;
	export const SAFE_RM_DENIED_PATH: string;
	export const npm_package_json: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XPC_FLAGS: string;
	export const npm_command: string;
	export const TRAE_SANDBOX_CLI_PATH: string;
	export const PAGER: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const HOMEBREW_PIP_INDEX_URL: string;
	export const npm_config_globalconfig: string;
	export const __CFBundleIdentifier: string;
	export const USER: string;
	export const MAVEN_HOME: string;
	export const COMMAND_MODE: string;
	export const FPATH: string;
	export const AI_AGENT: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const SSH_AUTH_SOCK: string;
	export const TRAE_SANDBOX_TRACE_FILE: string;
	export const npm_package_name: string;
	export const npm_config_noproxy: string;
	export const npm_config_cache: string;
	export const TERM_PROGRAM_VERSION: string;
	export const CONFIG_MASTER_KEY: string;
	export const HOMEBREW_BOTTLE_DOMAIN: string;
	export const npm_config_global_prefix: string;
	export const TERM: string;
	export const MallocNanoZone: string;
	export const TMPDIR: string;
	export const NODE_ENV: string;
	export const isArchMatched: string;
	export const SVELTEKIT_FORK: string;
	export const npm_node_execpath: string;
	export const PYTHON_BASIC_REPL: string;
	export const PYTHONSTARTUP: string;
	export const _: string;
	export const npm_config_registry: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const COLOR: string;
	export const ZDOTDIR: string;
	export const SHELL: string;
	export const COLORTERM: string;
	export const HOMEBREW_API_DOMAIN: string;
	export const LOGNAME: string;
	export const npm_config_local_prefix: string;
	export const SAFE_RM_ALLOWED_PATH: string;
	export const npm_lifecycle_script: string;
	export const FILESYSTEM_CASE_SENSITIVE: string;
	export const JAVA_HOME: string;
	export const SAFE_RM_AUTO_ADD_TEMP: string;
	export const HOME: string;
	export const TERM_PRODUCT: string;
	export const TERM_PROGRAM: string;
	export const PYDEVD_DISABLE_FILE_VALIDATION: string;
	export const BUNDLED_DEBUGPY_PATH: string;
	export const TRAE_AI_SHELL_ID: string;
	export const INIT_CWD: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		GIT_PAGER: string;
		HOMEBREW_CELLAR: string;
		TRAE_BRAND_NAME: string;
		INFOPATH: string;
		GIT_ASKPASS: string;
		npm_config_user_agent: string;
		SAFE_RM_PROTECTION_FLAG: string;
		TRAE_SANDBOX_SOURCE_FLAG_PATH: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_config_prefix: string;
		SHLVL: string;
		GRADLE_USER_HOME: string;
		SAFE_RM_SOURCE_FLAG: string;
		TENCENT_NEWS_INSTALL: string;
		VSCODE_DEBUGPY_ADAPTER_ENDPOINTS: string;
		VSCODE_INJECTION: string;
		XPC_SERVICE_NAME: string;
		TRAE_SANDBOX_LOG_DIR: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_version: string;
		npm_config_npm_version: string;
		TRAE_SANDBOX_DUMP_DIR: string;
		LANG: string;
		EDITOR: string;
		npm_config_node_gyp: string;
		PWD: string;
		npm_execpath: string;
		npm_config_userconfig: string;
		TRAE_SANDBOX_STORAGE_PATH: string;
		USER_ZDOTDIR: string;
		TRAE_SANDBOX_CONFIG_NAME: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_lifecycle_event: string;
		TRAE_JWT_TOKEN_PATH: string;
		PATH: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_config_init_module: string;
		NODE: string;
		SAFE_RM_DENIED_PATH: string;
		npm_package_json: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XPC_FLAGS: string;
		npm_command: string;
		TRAE_SANDBOX_CLI_PATH: string;
		PAGER: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		HOMEBREW_PIP_INDEX_URL: string;
		npm_config_globalconfig: string;
		__CFBundleIdentifier: string;
		USER: string;
		MAVEN_HOME: string;
		COMMAND_MODE: string;
		FPATH: string;
		AI_AGENT: string;
		VSCODE_PROFILE_INITIALIZED: string;
		SSH_AUTH_SOCK: string;
		TRAE_SANDBOX_TRACE_FILE: string;
		npm_package_name: string;
		npm_config_noproxy: string;
		npm_config_cache: string;
		TERM_PROGRAM_VERSION: string;
		CONFIG_MASTER_KEY: string;
		HOMEBREW_BOTTLE_DOMAIN: string;
		npm_config_global_prefix: string;
		TERM: string;
		MallocNanoZone: string;
		TMPDIR: string;
		NODE_ENV: string;
		isArchMatched: string;
		SVELTEKIT_FORK: string;
		npm_node_execpath: string;
		PYTHON_BASIC_REPL: string;
		PYTHONSTARTUP: string;
		_: string;
		npm_config_registry: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		COLOR: string;
		ZDOTDIR: string;
		SHELL: string;
		COLORTERM: string;
		HOMEBREW_API_DOMAIN: string;
		LOGNAME: string;
		npm_config_local_prefix: string;
		SAFE_RM_ALLOWED_PATH: string;
		npm_lifecycle_script: string;
		FILESYSTEM_CASE_SENSITIVE: string;
		JAVA_HOME: string;
		SAFE_RM_AUTO_ADD_TEMP: string;
		HOME: string;
		TERM_PRODUCT: string;
		TERM_PROGRAM: string;
		PYDEVD_DISABLE_FILE_VALIDATION: string;
		BUNDLED_DEBUGPY_PATH: string;
		TRAE_AI_SHELL_ID: string;
		INIT_CWD: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
