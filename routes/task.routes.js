var express = require('express');
var Task = require('../models/task.model');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all Tasks');
    Task.find({}).exec(function(err, tasks){
        if(err) {
            res.send({success : false, status : 500, data : null, msg : 'something went wrong!'});
        } else {
            console.log(tasks);
            res.json({success : true, status : 200, data : tasks});
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
    newTask.save(function(err, createdtask){
        if(err) {
            res.json({success : false, status : 500, data : null, msg : 'something went wrong!'});
        } else {
            res.json({success : true, status : 200, data : createdtask});
        }
    });
});



module.exports = router;