//************create a simple node server************/
// const http = require('http');

// const server = http.createServer((req, res) => {
// console.log(req);
// });

// const port = 3001
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


//************create a simple node server with response************/
const http = require('http');

const server = http.createServer((req, res) => {
console.log(req.url, req.method, req.headers);
// process.exit(); // stop the server after the first request
});

const port = 3001
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
