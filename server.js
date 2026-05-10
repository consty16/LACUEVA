require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Manejar API routes
  if (req.url.startsWith('/api/create-preference')) {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          req.body = JSON.parse(body);
        } catch (e) {
          req.body = {};
        }
        
        // Mocking Vercel's res.status().json()
        res.status = function(statusCode) {
          res.statusCode = statusCode;
          return res;
        };
        res.json = function(data) {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        };

        // Recargar el módulo en cada request (sin caché) para reflejar cambios sin reiniciar
        const apiPath = require('path').resolve('./api/create-preference.js');
        delete require.cache[apiPath];
        const apiCreatePreference = require(apiPath);
        
        apiCreatePreference(req, res);
      });
      return;
    }
  }

  // Manejar Static Files
  let filePath = '.' + req.url;
  if (filePath === './' || filePath.startsWith('./?')) {
    filePath = './index.html';
  } else {
    // Quitar query params si los hay
    filePath = filePath.split('?')[0];
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js': contentType = 'text/javascript'; break;
    case '.css': contentType = 'text/css'; break;
    case '.json': contentType = 'application/json'; break;
    case '.png': contentType = 'image/png'; break;
    case '.jpg': contentType = 'image/jpg'; break;
    case '.svg': contentType = 'image/svg+xml'; break;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code == 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('500 Internal Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor local corriendo en http://localhost:${PORT}`);
  console.log(`Para probar el checkout, asegurate de tener MP_ACCESS_TOKEN en el .env`);
});
