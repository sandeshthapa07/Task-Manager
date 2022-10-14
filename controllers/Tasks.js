const Task = require("../models/Tasks");
const asyncWrapper = require("../middleware/async");
const createCustomError = require('../errors/customError')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res)=> {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
})

const getTask = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
   
    return next(createCustomError(`There is no task with  ${taskId}`,404))
  }
  res.json({ task });
});

const updateTask = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidtors: true,
  });
  if (!task) {
    return next(createCustomError(`There is no task with  ${taskId}`,404))
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`There is no task with  ${taskId}`,404))
  }
  res.json({ task: null, status: "Task Deleted" });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
