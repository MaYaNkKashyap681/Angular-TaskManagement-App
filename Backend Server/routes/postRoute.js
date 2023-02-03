const express = require("express");
const { sampleFunc, getAllTasks, addNewTask, deleteTask, setToggle } = require("../controllers/postController.js");
const router = express.Router();

router.get("/", sampleFunc);

router.get('/allTasks', getAllTasks);

router.post('/add', addNewTask);

router.delete('/delete/:id', deleteTask);

router.patch('/reminder/:id', setToggle);

module.exports = router;
