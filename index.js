const http = require("node:http");
const fs = require("fs");

const htmlPaths = ["", "contact-me", "about"];

const server = http.createServer((req, res) => {
  const currentUrl = req.url.slice(1);
  const currentPath = htmlPaths.find((path) => path === currentUrl);
  let fileName = "index";

  if (currentPath === undefined) {
    fileName = "404";
  } else if (currentUrl !== "") {
    fileName = currentPath;
  }

  fs.readFile(`${fileName}.html`, "utf8", (err, data) => {
    res.writeHead(fileName === "404" ? 404 : 200, {
      "Content-Type": "text/html",
    });
    res.write(data);
    res.end();
  });
});

server.listen(8080);
