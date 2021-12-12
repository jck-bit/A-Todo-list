import React,{useContext, useState} from 'react'
import { DoitContext } from '../context/DoitContext'

const DoitForm = () => {
    const {addTask} = useContext(DoitContext)

    const [day, setDay] = useState('')
    const [task, setTask] = useState('')
    
    const handleSubmit =(e) =>{
            e.preventDefault();
            addTask(day, task);
            setDay('')
            setTask('')   
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder=" Day" value={day}
            onChange = {(e) =>setDay(e.target.value)} required
            />

            <input type="text" placeholder=" Set Task" value={task}
               onChange = {(e) =>setTask(e.target.value)} required/>
            <input type="submit" value="Add Task"/>
        </form>
    )
}

export default DoitForm
