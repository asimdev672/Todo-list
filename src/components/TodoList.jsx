import React from 'react'

const TodoList=(props)=>{
  
    return(
        <>
        
            <li> <i className="fa fa-times font-cross " onClick={()=>{
                props.onSelect(props.id)
            }}>
            </i>{props.text}</li>
        </>
    );
}
export default TodoList;