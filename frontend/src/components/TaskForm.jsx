 
import React ,{useState} from 'react'


const TaskForm = ({createTask,name,handleChange}) => {


 
  return (
    <form onSubmit={createTask}>
        <input type="text" placeholder='Add Task' 
        onChange={handleChange}
        name='name'  value={name} />
      

        <button type='submit'>Add</button>
    </form>
  )
}

export default TaskForm