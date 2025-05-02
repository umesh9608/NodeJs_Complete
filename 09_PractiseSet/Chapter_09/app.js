/* Create a new project
1. install nodemon and express
2. Add two dummy middleware that logs request path and request method respectively
3. Add a third middleware that returns a response
4. Now add handling using two more middleware that handle path /, a request to  /contact-us page.
5. Contact us should return a form with name and email as inout fields that submits to  /contact-us page.
6. Also handle POST incoming request to  /contact-us path using a peprate middleware 

*/

const express = require('express')

const app = express();

app.use((req,res,next) =>{
    console.log("Fisrt Dummy Middleware", req.path,req.method);
    next();
});

app.use((req,res, next) =>{
    console.log("Second Dummy Middleware", req.url, req.method);
    next();
});

// app.use((req,res,next) =>{
//     console.log("Third Middleware", req.url, req.method);
//     res.send("<h1>welcome to Complete Conding Nodejs</h1>");
// });

app.get("/", (req,res, next) => {
    console.log("Handling / for GET", req.url, req.method);
    res.send( `<h1>Weclome to Complete Coding</h1>`);
});
app.get("/contact-us", (req,res, next) => {
    console.log("Handling / contact-us for GET", req.url, req.method);
    res.send( `<h1>Weclome to Complete Coding</h1>`);
});
const PORT = 3000;
app.listen(PORT,() =>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});