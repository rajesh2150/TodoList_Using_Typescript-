import React from 'react';
import SingleTodo from './SingleTodo'
interface Todo{
    todo:string,
    todos:string[],
    setTodos:React.Dispatch<React.SetStateAction<string[]>>
}
const handleDelete=(e:React.FormEvent)=>{
    
}
const TodoList = ({todo,todos,setTodos}:Todo) => {
  return (
    <div>
      <li>{todo}</li>
      <button onClick={(e)=>handleDelete(e)}>delete</button>
      
    </div>
  )
}

export default TodoList
