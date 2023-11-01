const express = require('express')
const router = express.Router();
//import modules from task.js controllers 
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask,
    }= require('../controllers/task')

 router.route('/').get(getAllTasks).post(createTask)
 router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router;