var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('combined'));

var server = app.listen(3000, function(){
    console.log('express start. port:' + server.address().port);
});

app.post('/internal/home', function(req, res){
  const authHeader = req.headers.authorization;

  if (authHeader === "accessToken_home") {
    res.send('get /internal/home success!');
  } else {
    res.status(401).send('Unauthorized /internal/home')
  }
});

app.get('/internal/auth', function(req, res){
  const authHeader = req.headers.authorization;

  if (authHeader === "accessToken_auth") {
    res.setHeader('Authorization', 'accessToken_home')
    res.send('get /internal/auth success!');
  } else {
    res.status(401).send('Unauthorized /internal/auth')
  }
});
