import React from 'react'
import {TodoItem} from "./TodoItem"

export const TODOs = (props) => {
    return (
        <div className="container">
        <h3 className="text-center my-3">TODOs List </h3>
        {props.todos.length===0?"No TODOs to display":
             props.todos.map((todo) =>{
                 return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             } )
        }
       
        </div>
    )
}
