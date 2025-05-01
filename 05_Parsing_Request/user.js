const fs = require('fs');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
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
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
    return;
  }

  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Like and follow</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;
