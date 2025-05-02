const http = require('http');
const testingSyntax = require('./syntax');
const logical = require('./logical');
const logical = require('./logical')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    testingSyntax(req.url, req.method);
    // logical(); //logical error
    
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
