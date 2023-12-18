import React,{useState} from 'react'
interface Props{
  todos:string[],
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    setTodos:React.Dispatch<React.SetStateAction<string[]>>
}
const SingleTodo = ({todo,todos,setTodo,setTodos}:Props) => {
  const [edit,setEdit] = useState(false)
  const [editValue,setEditValue] = useState(todo);
  const [done,setDone] = useState(false)
  const handleDelete=(todoval:any)=>{
    const todosList=todos.filter((todo)=>todo !==todoval)
    setTodos(todosList)
      
  }
  const handleSave=(saveTodo:any)=>{
    setEdit(!edit)
    console.log(editValue)
    
  
  }
  const handleDone=()=>{
    setDone(!done)

  }
  return (
    <div className='TodosList-div'>
      {edit ? <input value={editValue} onChange={(e)=>setEditValue((e.target.value))}/> : (done ?<s>{todo}</s> :  <li> {todo} </li>) }
     <div>
     <button onClick={()=>handleDelete(todo)}>Delete</button>

    {/* {edit?<button onClick={()=>handleSave(todo)}>Save</button>: <button onClick={()=>setEdit(!edit)}>Edit</button>} */}
    <button onClick={()=>handleDone()}>Done</button>

     </div>
     
          

        
      
    </div>
  )
}

export default SingleTodo
