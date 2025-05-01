const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML

  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Welcome to home page</h1></body>');
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/about') {
    res.write('<html>');
    res.write('<head><title>About</title></head>');
    res.write('<body><h1>This is about page</h1></body>');
    res.write('</html>');
    return res.end(); 
  }

  // Default response for other routes
  res.write('<html>');
  res.write('<head><title>Default</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
