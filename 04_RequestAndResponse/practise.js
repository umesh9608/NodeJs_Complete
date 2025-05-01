// *******practise*********
// create a page that show a navigation bar of Myntra with the following lines:
// 1. Home       4.kids
//2. men         5. cart
//3. women
//clicking on each liks should nevigate to that page and a welcome to secion text is shown there.
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/home') {
        res.write('<h1>Welcome to Myntra</h1>');
        return res.end();
    } else if (req.url === '/men') {
        res.write('<h1>Welcome to mens section</h1>');
        return res.end();
    } else if (req.url === '/woment') {
        res.write('<h1>Welcome to womens section</h1>');
        return res.end();
    } else if (req.url === '/kisd') {
        res.write('<h1>Welcome to kids section </h1>');
        return res.end();
    } else if (req.url === '/cart') {
        res.write('<h1>welcome to cart section</h1');
        return res.end();
    }
    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">men</a></li>
            <li><a href="/women">women</a></li>
            <li><a href="/kids">kids</a></li>
            <li><a href="/cart">cart</a></li>

        
        </ul>
    </nav>
    
</body>
</html>
`);
    res.end();
});

server.listen(3001, () => {
    console.log('server is running on address http://localhost:3001');
});