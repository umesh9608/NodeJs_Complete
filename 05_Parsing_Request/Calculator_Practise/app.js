//Create a Calculator
//create a new Node.js project name Calculator
//On the home page (route"/"), show a welcome message and a link to hte calculator page
//On the "/calculator" page, display a from with two input fields and a "Sum" button
//When  the user clicks the "Sum" button, they should be taken to the "/calculate-result" page, which show the sum of the two numbers
//   . Make sure the request goes to the server
//   . Create a seprate module for the addition function
//    .Create another module to handle incoming requests
//  .On the "/calculate-result" page, parse the user inpuut , use the addition module to claulate the sum, and display the result on a new HTML page

const http = require("http");
const { requestHandler} = require('./handler')

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});

