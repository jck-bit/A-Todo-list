import React,{useContext} from 'react'
import { Do_itContext } from '../context/Do_itContext'
import Do_itDetails from './Do_itDetails'



const Todlist = () => {
    const {todos} = useContext(Do_itContext)
    return  todos.length ? (
        <div>
            <ul>
                {todos.map(todo =>{
                    return(
                        <Do_itDetails  todo = {todo} key={todo.id}/>
                    )
                })}
            </ul>
            
        </div>
      ) : (
         <div classname="empty"> No Task</div>
    )
}

export default Todlist
