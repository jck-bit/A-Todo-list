import React,{useContext} from 'react'
import { DoitContext } from '../context/DoitContext'
import DoitDetails from './DoitDetails'



const Todlist = () => {
    const {todos} = useContext(DoitContext)
    return  todos.length ? (
        <div>
            <ul>
                {todos.map(todo =>{
                    return(
                        <DoitDetails  todo = {todo} key={todo.id}/>
                    )
                })}
            </ul>
            
        </div>
      ) : (
         <div classname="empty"></div>
    )
}

export default Todlist
