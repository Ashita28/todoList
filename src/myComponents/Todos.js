import React from 'react'
import TodoItem from "../myComponents/TodoItem";

const Todos = (props) => {
  let container= {
    display: "block",
    margin: "45px auto",
    width: "62%",
    minHeight: "70vh"
  }
  return (
    <div className='my-2' style={container}>
      {props.todos.length ===0 ? "No tasks to be displayed" :
      props.todos.map((todo)=>{
        return(<TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })}
    </div>
  )
}

export default Todos
