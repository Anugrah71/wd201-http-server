const fs = require("fs");
const http = require("http");

  const server =http.createServer((req ,res) => {
    fs.readFile("sample.txt", (err,data) => {
      res.end(data);
    });
  });
  server.listen(3000);
  