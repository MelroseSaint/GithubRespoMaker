# GithubRespoMaker

A simple Node.js + Express app that generates a GitHub-ready repository structure from uploaded files/ZIPs and streams the generated project as a ZIP download. Includes a lightweight web UI in `public/`.

## Features
- Web UI to enter `repoName` and upload files/ZIPs
- Server-side repo scaffolding and ZIP streaming via `/generate`
- Optional JSON workflow via `/api/generate`
- Static assets served from `public/`
- Project output excluded from version control (`.gitignore` covers `output/`, `node_modules/`, logs, env files)

## Requirements
- Git
- Node.js `>= 18`
- npm `>= 9` (or compatible)

## Quick Start
```bash
git clone https://github.com/MelroseSaint/GithubRespoMaker.git
cd GithubRespoMaker
npm install
npm start
# open http://localhost:3000
```

## Getting Started

### Clone and install
```bash
# Clone your repo
git clone https://github.com/MelroseSaint/GithubRespoMaker.git
cd GithubRespoMaker

# Install dependencies
npm install
```

### Run the server
```bash
# Start the server (default port 3000)
node server.js
# or
npm start
```
Then open `http://localhost:3000` in your browser.

## Usage

### Web UI
1. Open `http://localhost:3000`.
2. Enter a repository name in the input (defaults to `my-project`).
3. Upload a ZIP or files as prompted.
4. Click "Generate". The server will stream back a ZIP containing the scaffolded project.

The input field in `public/index.html` is:
```html
<input type="text" id="repoName" placeholder="my-awesome-project" value="my-project">
```

### API Endpoints

- `POST /generate`
  - Purpose: Generates and streams the resulting repository as a ZIP.
  - Form fields: `repoName`, and uploaded files/ZIP.
  - Response: `application/zip` streamed.

- `POST /api/generate`
  - Purpose: Accepts uploads and returns a JSON acknowledgment.
  - Response example:
    ```json
    { "status": "ok", "repoName": "my-project" }
    ```

Exact behavior depends on `server.js`. The typical flow for downloading is via `/generate`.

### cURL Examples

Download a generated ZIP directly:
```bash
curl -X POST http://localhost:3000/generate \
  -F "repoName=my-project" \
  -F "zip=@path/to/your.zip" \
  -o my-project.zip
```

Hit the JSON endpoint:
```bash
curl -X POST http://localhost:3000/api/generate \
  -F "repoName=my-project" \
  -F "zip=@path/to/your.zip"
```

## Project Structure
```
RespoGen/
├── .gitignore
├── headers.txt
├── package.json
├── package-lock.json
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
└── server.js
```



## Configuration
- Environment variables: none required by default
- Port: defaults to `3000` (`http://localhost:3000`)
- Output directory: `output/` (ignored by Git)

## Troubleshooting
- `Error: Server error: <!DOCTYPE html>`
  - Cause: Request path mismatch or route not registered; the server returned an HTML error page.
  - Fix: Ensure you POST to `/generate` for ZIP and `/api/generate` for JSON. Verify the server started without syntax errors and that `app.listen(...)` is top-level.

- `404 Not Found` on `/generate`
  - Ensure the route is registered in `server.js` and not nested inside another route or block. Restart the server after any file edits.

- Port conflicts / server not starting
  - Stop any previous Node processes bound to port `3000`. On Windows PowerShell:
    ```powershell
    Get-Process node | Stop-Process -Force
    ```

## Security Notes
- The app accepts uploaded files/ZIPs. Avoid processing untrusted content.
- Consider validating filenames and sanitizing paths if extending functionality.

## Contributing
- Fork the repo and create a feature branch.
- Keep changes focused and consistent with existing style.
- Submit a pull request with a clear description of changes.

## License
- No explicit license provided. If you plan to open-source, add a `LICENSE` file and update this section accordingly.
