const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h2>Enter your Details</h2>');
    res.write('<form action="/submit-Details" method="POST">');

    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"><br>');

    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLocaleLowerCase() === '/submit-Details' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'User Details: ');
    res.statusCode = 302; // Redirect status code
    res.setHeader('Location', '/'); // Redirect to the home page
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Like and follow</h1></body>');
  res.write('</html>');
  res.end();

});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
