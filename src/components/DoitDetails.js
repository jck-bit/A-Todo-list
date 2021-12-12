import React,{useContext} from "react";
import { DoitContext } from "../context/DoitContext";


const DoitDetails = ({todo}) => {
    const { removeTask } = useContext(DoitContext)
    return (
        <div>
            <li>
                <div className="today">{todo.today}</div>
                <div className="Task">{todo.Task}</div>
            
            <button  className="btn" onClick ={() =>{
                return removeTask(todo.id)
            }}>Remove Task</button>
            </li>
        </div>
    )
}

export default DoitDetails
