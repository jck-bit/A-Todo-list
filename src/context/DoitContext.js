import React,{createContext, useState} from "react";
import { v4 as uuidv4} from 'uuid'


export const DoitContext = createContext();

const DoitContextProvider = (props) => {
    const [todos, setTodo] = useState([
        {today:'go to the market', Task:'Buy bananas', id:1},
        {today:'go to the market', Task:'Buy bananas', id: 2}
    ])

    function addTask(Today, Task) {
        setTodo([...todos, { Today, Task, id: uuidv4() }]);
    }

    function removeTask(id) {
        setTodo(todos.filter(todo => {
            return todo.id !== id;
        }));
    }
    return (
        <DoitContext.Provider value ={{todos,addTask, removeTask}}>
            {props.children}
        </DoitContext.Provider>
    );
}
 
export default DoitContextProvider  ;