const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  try { fs.appendFileSync(path.join(__dirname, 'server.log'), line); } catch (_) {}
  console.log(line.trim());
}

// Simple request logger to debug routing
app.use((req, res, next) => {
  log(`${req.method} ${req.path}`);
  next();
});

// Health & ping FIRST
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
app.get('/ping', (req, res) => res.send('pong'));

// Docs route using regex to capture any subpath
const docsRoot = path.join(__dirname, 'docs');
app.get(/^\/docs\/(.+)/, (req, res) => {
  const rel = req.params[0];
  const resolvedPath = path.resolve(docsRoot, rel);
  if (!resolvedPath.startsWith(docsRoot)) {
    return res.status(400).send('Invalid path');
  }
  res.sendFile(resolvedPath, err => {
    if (err) res.status(err.status || 404).send('Not Found');
  });
});

// Static assets
app.use(express.static(path.join(__dirname, 'public')));
app.use('/docs', express.static(docsRoot));

// 404 fallback
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  log(`RespoGen server running at http://localhost:${PORT}`);
});