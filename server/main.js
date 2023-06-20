var express = require('express');
var morgan = require('morgan');

var app = express();
app.use(morgan('combined'));

var server = app.listen(3000, function(){
    console.log('express start. port:' + server.address().port);
});

app.get('/internal/home', function(req, res){
  res.send('get /internal/home success!');
});
