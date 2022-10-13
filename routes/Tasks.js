const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,updateTask ,getTask ,deleteTask } =require('../controllers/Tasks')



router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask);



module.exports = router;