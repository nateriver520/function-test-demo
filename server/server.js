
var express = require('express')
  , app = express();

app.use(express.bodyParser());

app.get('/hello', function(req, res) {
    res.send("hello world");
});
 
app.get('/', function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
  }, 200);
});

app.get('/hi', function (req, res) {
  if (req.param('hello') !== undefined) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello!');
  } else {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('use post instead');
  }
});

app.post('/hi', function (req, res) {
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.param('message') || 'message');
  }, 100);
});


app.get('/user', function(req, res) {
    res.send(
      [
        {name:'jack'}, 
        {name:'tom'}
      ]
    );
});

app.get('/user/:id', function(req, res) {
    res.send({
        id: 1, 
        name: "node js", 
        description: "I am node js"
    });
});

app.post('/user/edit', function (req, res) {
  setTimeout(function () {
    res.send({
      id:req.param('id'),
      status:1
    });
  }, 100);
});


 
app.listen(3000);
console.log('Listening on port 3000...');
