import React,{useContext} from "react";
import { Do_itContext } from "../context/Do_itContext";


const Do_itDetails = ({todo}) => {
    const { removeTask } = useContext(Do_itContext)
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

export default Do_itDetails
