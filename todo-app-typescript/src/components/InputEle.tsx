import React, {useState,useReducer} from 'react'
import './styles.css';
import TodoList from './TodoList';
export interface Todo{
    todo?:string;
    todos?:string[]
}

const InputEle:React.FC = () => {
    const [todo,setTodo] = useState<string>("")
    const [todos,setTodos] = useState<string[]>([])
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo("")
        console.log(todo)
    }
  return (<>
    <form className='input' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className='inputBox' placeholder='Enter Task' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' className='input_submit' >ADD</button>
    </form>
  </>
  )
}

export default InputEle
