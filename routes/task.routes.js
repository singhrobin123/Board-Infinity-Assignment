var express = require('express');
var Task = require('../models/task.model');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all Tasks');
    Task.find({}).exec(function(err, Tasks){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(Tasks);
            res.json(Tasks);
        }
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    var newTask = new Task();
    newTask.task_name = req.body.task_name;
    newTask.task_description = req.body.task_description;
    newTask.creator = req.body.creator;
    newTask.duration = req.body.duration;
    newTask.createdAt = req.body.createdAt;
    var curr_date = new Date ();
    var final_date = new Date (d1);
    final_date.setMinutes ( curr_date.getMinutes() +  parseInt(req.body.duration));
    newTask.expireAt = final_date;
    newTask.save(function(err, Task){
        if(err) {
            res.send('error saving Task');
        } else {
            console.log(Task);
            res.send(Task);
        }
    });
});



module.exports = router;