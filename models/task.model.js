var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    task_name        : { type: String, required: true },
    task_description : { type: String, required: true },
    creator          : { type: String, required: true },
    duration         : { type: Number, required: true },
    createdAt        : { type: Date, required: false, default: Date.now },
    expireAt         : { type: Date, default: Date.now()}


});
TaskSchema.index({expireAt: 1},{expireAfterSeconds: 0});


module.exports = mongoose.model('task', TaskSchema);