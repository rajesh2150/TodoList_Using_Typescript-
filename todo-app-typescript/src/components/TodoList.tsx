import React from 'react';
import SingleTodo from './SingleTodo';

interface Todo{
    todos:string[],
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    setTodos:React.Dispatch<React.SetStateAction<string[]>>
}

const TodoList = ({todos,setTodos,setTodo,todo}:Todo) => {
 
  return (
    <div className='tasksList'>
      <h2 className='TaskHeading'>Task-List</h2>
      { todos.map((todo)=><SingleTodo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>)}
      
      
    </div>
  )
}

export default TodoList
