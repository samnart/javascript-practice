const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome");
});

// Using Event Emitter API
const server1 = http.createServer();

server1.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5100);
server1.listen(5000);
