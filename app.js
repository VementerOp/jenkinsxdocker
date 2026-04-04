const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Error loading file");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
