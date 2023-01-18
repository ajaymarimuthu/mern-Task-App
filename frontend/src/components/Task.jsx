import React from 'react'
import { MdDelete,MdEditNote ,MdDoneAll} from "react-icons/md";

function Task() {
  return (
    <div>

        <p>
            <b>1.</b>
            Task 1
        </p>

        <div className="task-icons">
            <MdDoneAll color='green'/>
            <MdEditNote color='purple'/>
         
            <MdDelete color='red'/>
        </div>
        
    </div>
  )
}

export default Task