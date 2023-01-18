import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Task from './Task'
import TaskForm from './TaskForm'
 import Axios from "axios"
//  import { URL } from '../App'

 //http://localhost:3000/api/tasks


const TaskList = () => {
    const [formData, setFormData] = useState({
        name: "",
        completed: false
    })
    const { name } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const createTask = async (e) => {
        e.preventDefault();
        // e.target.value=""
        // console.log(formData);
        if(name === ""){
            return toast.error("Input Field cannot be empty");
        }

        try {
            await Axios.post("http://localhost:3000/api/tasks", formData)
            toast.success("Task Added successfully");
            setFormData({...formData,name:""})
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Task Managing App</h1>
            <TaskForm name={name} handleChange={handleChange} createTask={createTask} />

            <div>
                <p>
                    <b>Total Tasks:</b>0
                </p>

                <p>
                    <b>Completed Tasks:</b>0
                </p>

            </div>

            <hr />

            <Task />


        </div>
    )
}

export default TaskList