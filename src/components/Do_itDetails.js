import React from "react";



const  Do_itDetail = ({todo}) => {
    return ( 
        <div>
            <li>{todo.today}</li>
            <li>{todo.Task}</li>
        </div>
     );
}
 
export default Do_itDetail;