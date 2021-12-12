import React,{useContext} from "react";
import { Do_itContext } from "../context/Do_itContext";


const Do_itDetails = ({todo}) => {
    const { removeBook } = useContext(Do_itContext)
    return (
        <div>
            <li>
                <div className="today">{todo.oday}</div>
                <div className="Task">{todo.Task}</div>
            </li>
        </div>
    )
}

export default Do_itDetails
