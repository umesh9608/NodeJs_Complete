const http = require('http');
const requestHandler= require('./user.js');
const server = http.createServer(requestHandler);



const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});