const Task=require("../models/taskModel");
const mongoose = require("mongoose");
 
// POst method---------
const createTask= async(req,res) =>{
    try {
        const newTask = req.body;

    const task = new Task(newTask);
    await task.save();

    res.status(200).json(task);
        
    } catch (error) {
        res.status(200).json({ msg: error.message });
    }
}

// GET ALL method---------
const getTasks= async(req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}

// GET  method---------
const getTask = async (req,res)=>{   
    try {
        const {id}=req.params
        // console.log(req.params);      
        const task=await Task.findById(id);       

        if(!task){
            return res.status(404).json(`Task not found with id ${id}`);
        }     
        res.status(200).json(task)
        // res.send(id)       
   
    }
     catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
 
// Delete  method---------

const deleteTask= async(req,res)=>{

    try {
        const {id}=req.params
        // console.log(req.params);      
        const task=await Task.findByIdAndDelete(id);       

        if(!task){
            return res.status(404).json(`Task not found for deleting with id ${id}`);
        }     
        res.status(200).json(task)
        // res.send("Task deleted")       
   
    }
     catch (error) {
        res.status(500).json({ msg: error.message });
    }


   
}


const updateTask = async (req,res)=>{   
    try {
        const {id}=req.params
        // console.log(req.params);      
        const task=await Task.findByIdAndUpdate(
            {_id:id}, req.body , {new: true, runValidators:true , }
        )

        if(!task){
            return res.status(404).json(`Task not found with id ${id}`);
        }     
        res.status(200).json(task)
        // res.send(id)       
   
    }
     catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
 
module.exports={
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
 
} 
 
// updateTasks,
// deleteTasks