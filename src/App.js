import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const taskRef = useRef()
  function addTask (){
    const newTask = taskRef.current.value
    setTasks([...tasks, newTask])
    taskRef.current.value = ""
  }
  return (
    <div className="App">
      <h2>Todo List</h2>
      <ul>
        {
          tasks.map((item) =>{
          return <li>{item}</li>
          })
        }
      </ul>
      <input ref={taskRef} placeholder="Add New Task..."></input>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default App;
