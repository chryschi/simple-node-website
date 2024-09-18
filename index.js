const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(8080);
