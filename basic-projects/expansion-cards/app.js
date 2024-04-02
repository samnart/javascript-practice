const http = require("http");
const { readFileSync } = require("fs");

const html = readFileSync("./index.html");
const script = readFileSync("./script.js");
const style = readFileSync("./styles.css");

const server = http.createServer((req, res) => {
  const post = req.url;
  if (post === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(html);
    res.end();
  } else if (post === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  } else if (post === "/script.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(script);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("Page not found");
    res.end();
  }
});

server.listen(5000);
