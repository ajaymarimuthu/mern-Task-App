const express = require("express");
// const Task = require("../models/taskModel");
const {createTask,getTasks, getTask, deleteTask, updateTask}=require("../controllers/taskController")
const router = express.Router();


router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask)



// Below set of lines has been changed with above two lines 

// GET ----
// router.get("/", getTasks) 
// Post---------------
// router.post("/",createTask)

// ---------------------


// GET ----
// router.get("/:id", getTask) 
//update
// router.put("/:id", updateTask) 
//DELETE
// router.delete("/:id", deleteTask) 







module.exports = router;
