import React, { useContext } from 'react'
import {Do_itContext} from '../context/Do_itContext';


export const Navbar = () => {
    const {todos} = useContext(Do_itContext);
    return (
        <div className="nien"> 
            <h1>Nie&ns Todo list</h1>
            <p>you currently have {todos.length} Tasks</p>
        </div>
    )
}
export default Navbar