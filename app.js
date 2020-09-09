var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();
var port = process.env.PORT || 3000;
var db = process.env.MONGODB_URL;

var tasks = require('./routes/task.routes');

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/add', tasks);
app.use('/list', tasks);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    res.send(' Welcome, this is not valid Api endpoint.');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

process.on('SIGTERM', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    process.exit(1);
  });