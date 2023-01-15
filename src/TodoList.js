import React from 'react';

const ToDoList = (props) => {


    
    return (
        <>
            <li>
                
                {props.itm}
                <button id="btn2" onClick={ ()=>{
                 props.deleteitem(props.id);
                }}> Done </button> 
            </li>
        </>
    );
}

export default ToDoList;