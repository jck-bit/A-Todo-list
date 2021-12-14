import React,{useContext} from 'react'
import { DoitContext } from '../context/DoitContext'
import DoitDetails from './DoitDetails'



const Todlist = () => {
    const {todos} = useContext(DoitContext)
    return  todos.length ? (
        <div className="style">
            <ul>
                {todos.map(todo =>{
                    return(
                        <DoitDetails  todo = {todo} key={todo.id}/>
                    )
                })}
            </ul>
            
        </div>
      ) : (
         <div classname="empty">Wooho....No Tasks</div>
    )
}

export default Todlist
