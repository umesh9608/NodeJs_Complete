const testingSyntax = (url, method) => {
    // console.log("I am inside testing syntax");
    //unclosed syntax
    // console.log("I am inside testing syntax"    //this is error

    //run time error
    // console.log(x) //reference error (x is not defiend)

    //tye error (num is not a fuction)
    // let num = 10;
    // num();

    //invalid JSON parser (syntax Error)
    // let JSONstring ={name:'John'}";
    // JSON.parse(JSONstring);

    //file not found error )fs module
    // const fs = require('fs');
    // fs.readFileSync('nonexistenFile.txt'); //Throws error: ENDENT (file not found)
    
};

module.exports = testingSyntax;
