import React from "react";



const  Do_itDetail = ({todo}) => {
    return ( 
        <div className="navbar">
            <li className="hello">{todo.today}</li>
            <li className="hello">{todo.Task}</li>
        </div>
     );
}
 
export default Do_itDetail;