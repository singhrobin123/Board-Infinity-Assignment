var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var db = 'mongodb+srv://tast:15061994@cluster0-mf6tb.mongodb.net/board_infinity?retryWrites=true&w=majority';

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
    res.send('task express nodejs mongodb');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});