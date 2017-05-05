var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/', function index(req, res) {
  res.sendFile('/index.html', {
    root: __dirname
  });
});

//=============
//   Server
//=============

app.listen(process.env,PORT || 3000, function(){
  console.log('solar system is on 3000');
});
