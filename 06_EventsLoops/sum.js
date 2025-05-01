//async code and its problem
const sumRequestHandler = (req, res) => {
    console.log("1. In sumRequestHandler", req.url);
    const body = [];
    let result;
    req.on('data', chunk => {
        body.push(chunk);
        console.log("2. Chanks came");
    });
    req.on('end', () => {
        console.log("3 End event came");
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log("Calculated Result:", result);
    });

    console.log("4. Sending the response");
    res.setHeader('Content-Type', 'text/html');
    res.write(`
            <html>
            <head><title>Sum Result</title></head>
            <body>
                <h1>Your Result is: ${result}</h1>
                <a href="/calculator">Back to Calculator</a>
            </body>
            </html>
        `);
    return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
