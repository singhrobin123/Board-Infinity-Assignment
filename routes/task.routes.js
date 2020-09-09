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
    let newTask = new Task();
    let {task_name, task_description, creator, duration, createdAt} = req.body;
    newTask.task_name = task_name;
    newTask.task_description = task_description;
    newTask.creator = creator;
    newTask.duration = duration;
    newTask.createdAt = createdAt;
    duration = parseInt(duration);
    
    if(duration === -1){
         newTask.expireAt = null;
    }
    else{
        let curr_date = new Date ();
        let final_date = new Date (curr_date);
        final_date.setMinutes ( curr_date.getMinutes() +  parseInt(req.body.duration));
        newTask.expireAt = final_date;
    }
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