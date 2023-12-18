import React from 'react'
import './styles.css';
interface Props{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  todos:string[],
  setTodos: React.Dispatch<React.SetStateAction<string[]>>

}

const InputEle = ({todo,setTodo,todos,setTodos}:Props) => {
    
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(todo)
        setTodos([...todos,todo])
        setTodo("")

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
