var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync("index.html");
  response.send(buffer.toString());
});

app.get('/css/bootstrap.min.css', function(request, response) {
   var buffer = fs.readFileSync("css/bootstrap.min.css");
   response.send(buffer.toString());
});

app.get('/js/bootstrap.min.js', function(request, response) {
   var buffer = fs.readFileSync("js/bootstrap.min.js");
   response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
