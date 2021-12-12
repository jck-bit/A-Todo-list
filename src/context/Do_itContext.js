import React,{createContext, useState} from "react";
import { v4 as uuidv4} from 'uuid'


export const Do_itContext = createContext();

const Do_itContextProvider = (props) => {
    const [todos, setTodo] = useState([
        {today:'go to the market', Task:'Buy bananas', id:1},
        {today:'go to the market', Task:'Buy bananas', id: 2}
    ])

    function addTask(today, Task) {
        setTodo(...todos, { today, Task, id: uuidv4() });
    }

    const removeTask =() =>{
        setTodo(todos.filter(todo => {
            return todo.id !== todo;
        }))
    }
    return (
        <Do_itContext.Provider value ={{todos,addTask, removeTask}}>
            {props.children}
        </Do_itContext.Provider>
    );
}
 
export default Do_itContextProvider;