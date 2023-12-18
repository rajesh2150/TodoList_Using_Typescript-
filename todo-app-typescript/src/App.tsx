import {useState} from 'react';
import './App.css';
import InputEle from './components/InputEle';
import TodoList from './components/TodoList';


function App() {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<string[]>([])

  return (
    <div className="App">
      <h2 className='heading'>Taskify</h2>
      <InputEle todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo}/>
    </div>
  );
}


export default App;
