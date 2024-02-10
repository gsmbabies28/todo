const Tasks = require('../models/TASK.js')

module.exports.getTasks =  async (req,res) => {
    try {
        const getTasks = await Tasks.find();
        if(getTasks.length) return res.status(200).send({result: getTasks})
        return res.status(404).send({msg: "Empty tasks"})
    } catch (error) {
        res.status(500).send({error: error})
    }    
}

module.exports.addTask = async (req, res) => {
    const task = req.body
    try {
        const newTask = await new Tasks(task);
        const savingTask = await newTask.save();
        return res.status(200).send({result: savingTask})
    } catch (error) {
        res.status(500).send({error: error})
    }
}

module.exports.toggleReminder = async (req, res) => {
    const id = req.params.id;
    try {
        const findTask = await Tasks.findById(id);
        findTask.reminder = !findTask.reminder;
        findTask.save();
        return res.status(200).send({result: findTask})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports.deleteTask = async (req,res) => {
    const id = req.params.id;
    try {
        const findTask = await Tasks.findByIdAndDelete(id);
        if(findTask) return res.status(200).send({result:findTask});
        return res.status(404).send({error: "Task not found"})
    } catch (error) {
        res.sendStatus(500);
    }
}