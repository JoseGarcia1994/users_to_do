const {Router} = require("express");
const {createTask, updateTasks, deleteTasks} = require("../controllers/tasks.controllers"); 

const router = Router();

// Create a new task
router.post('/tasks/:id', createTask);

// Update completed task 

router.put("/tasks/:id", updateTasks);

// Delete task

router.delete("/tasks/:id", deleteTasks)

module.exports = router;
