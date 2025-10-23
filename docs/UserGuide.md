# RespoGen User Guide

This guide helps you get the most from RespoGen — a repository generator with professional templates and optional advanced configuration (Git Hooks, CI/CD, Docker, Testing, Linting/Formatting, VS Code setup).

## Who This Is For
- Developers who want a ready-to-run repo in minutes.
- Teams standardizing scaffolds and best practices.
- Educators and students learning modern project setup.

## Quick Start
1. Install Node.js (v18+ recommended).
2. In the project directory, run: `node server.js`.
3. Open the app in your browser: `http://localhost:3000`.

Alternatively: use the JSON API at `POST /api/generate`.

## Using the Web UI
- Visit `http://localhost:3000`.
- Enter a `Repository Name`.
- Choose a `Template` (see "Templates" below).
- Optionally enable advanced options:
  - `Git Hooks` (pre-commit, commit-msg)
  - `CI/CD` (GitHub Actions for Node/Python)
  - `Docker` (Dockerfile, docker-compose; excluded for `docker-node` template)
  - `Testing` (Jest/Pytest baseline)
  - `Linting/Formatting` (ESLint+Prettier or Flake8+Black)
  - `VS Code` (settings, extensions, launch configs)
- Upload additional files or a ZIP if needed.
- Click `Generate` to download a ZIP of your repo.

## Using the API
- `POST /api/generate` with JSON payload:

```json
{
  "repoName": "my-repo",
  "template": "react-app",
  "advancedConfig": {
    "gitHooks": true,
    "cicd": true,
    "docker": false,
    "testing": true,
    "linting": true,
    "vscode": true
  }
}
```

- Response: `{ "status": "ok", "repo": "my-repo" }`
- Errors:
  - 400 for invalid `advancedConfig` (must be JSON object with allowed keys; booleans or boolean-like strings).

## Templates
- `react-app` — React + Vite starter
- `nextjs-app` — Next.js starter
- `node-api` — Express REST API skeleton
- `python-app` — Python app starter
- `docker-node` — Node app pre-dockerized template (Docker files from options are skipped to avoid duplication)
- `static-site` — Plain HTML/CSS/JS
- `monorepo` — Multi-package layout (example)

Each template is paired with sensible defaults and integrates optional advanced configuration when selected.

## Advanced Configuration Details
- Git Hooks
  - Adds `pre-commit` (runs linters/tests) and `commit-msg` (enforces commit message rules).
- CI/CD
  - Adds GitHub Actions workflows for Node.js (build/test/lint) and Python (pytest/flake8/black).
- Docker
  - Adds `Dockerfile` and `docker-compose.yml` for Node/Python (skipped for `docker-node` template).
- Testing
  - Adds Jest (React/Next/Node) or Pytest (Python) with basic configs.
- Linting/Formatting
  - Node: ESLint + Prettier configs.
  - Python: Flake8 + Black configs.
- VS Code Integration
  - `.vscode/settings.json`, recommended extensions, and launch configurations.

## CLI and Scripts
- Use package scripts for common tasks:
  - `npm run dev` — Start dev server.
  - `npm run dev:debug` — Start with debugging enabled.
  - `npm run lint` / `npm run format` — Code quality.
  - `npm run build` / `npm run serve` — Build and serve.
  - `npm run docker:*` — Build/run with Docker.

Note: On Windows, if `npm.ps1` is blocked by PowerShell policy, run `node server.js` or set policy per-session:
`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`.

## Uploads
- You can upload multiple files and ZIPs in the UI.
- ZIP contents are merged with template files; conflicts may be resolved by the generator’s predefined logic.

## Troubleshooting
- Server doesn’t start via `npm start` on Windows:
  - Use `node server.js` or adjust execution policy (see above).
- `advancedConfig` errors:
  - Ensure it’s valid JSON with only allowed keys: `gitHooks`, `cicd`, `docker`, `testing`, `linting`, `vscode`.
  - Values should be booleans or boolean-like strings (`"true"`, `"false"`).
- Empty or tiny ZIP:
  - Confirm the correct template and options.
  - Check server logs for errors.

## Security & Privacy
- Uploaded files exist transiently during request processing.
- No data is sent externally; generation happens locally.

## Contributing
- See `README.md` for contribution guidelines.
- PRs welcome for templates, actions, testing configs, and docs.

## Support
- File issues or proposals in the project’s repository.
- For feature requests: include template, options, and intended use case.
