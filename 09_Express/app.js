//Core Modules
const http = require('http');

//External Module
const  express = require('express');

//Local Module
// const requestHandler = require('./user');

const app = express();

app.use((req,res,next) => {
    console.log("Came in first middleware", req.url,req.method);
    next();
});

app.use((req,res,next) => {
    console.log("Came in second middleware", req.url,req.method);
    res.send("<p>Weclome to Complet Node js series</p>");
});

const server = http.createServer(app);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://
        localhost:${PORT}`);
});


//********************understand get and use method in express*************************** */
// app.use() is for middleware logic — like logging, authentication, etc.

// app.get() is for handling GET requests to specific paths and sending responses.