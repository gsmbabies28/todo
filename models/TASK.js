const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        default: Date.now()
    },
    reminder:  {
        type: Boolean,
        default: false
    }
});




const Task = mongoose.model("Task ", taskSchema);

module.exports = Task;