const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Welcome to calculator</h1>
                <a href="/calculator">Go to Calculator</a>
            </body>
            </html>
        `);
        return res.end();
    } else if (req.url.toLowerCase() === "/calculator") {
        res.write(`
            <html>
            <head><title>Calculator</title></head>
            <body>
                <h1>Here is the calculator</h1>
                <form action="/calculate-result" method="POST">
                    <input type="text" placeholder="First Num" name="first" required />
                    <input type="text" placeholder="Second Num" name="second" required />
                    <input type="submit" value="Sum" />
                </form>
            </body>
            </html>
        `);
        return res.end();
    } else if (req.url.toLowerCase() === "/calculate-result" && req.method === 'POST') {
        return sumRequestHandler(req, res);
    }

    // 404 Page
    res.write(`
        <html>
        <head><title>404 Not Found</title></head>
        <body>
            <h1>404 Page not found</h1>
            <a href="/">Go to Home</a>
        </body>
        </html>
    `);
    res.end();
};

exports.requestHandler = requestHandler;
