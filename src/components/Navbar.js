import React, { useContext } from 'react'
import {DoitContext} from '../context/DoitContext';


export const Navbar = () => {
    const {todos} = useContext(DoitContext);
    return (
        <div className="nien"> 
            <h1>Nie&ns Todo list</h1>
            <p>you currently have {todos.length} Tasks</p>
        </div>
    )
}
export default Navbar