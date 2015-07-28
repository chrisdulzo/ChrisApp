var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

//app.use(express.bodyParser());
//app.use(app.router);

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('home')
});

//app.get('/', function(req, res){
//  res.sendfile("./home.ejs");
//});

//app.post('/place', function(req, res) {
//    
//    res.send('firstname: '+req.body.firstname); 
//});

app.get('/place', function(req, res){
    res.send("Welcome " + req.query['firstname'] + req.query['lastname'] + ".");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
