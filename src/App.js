import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
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
      <input placeholder="Add New Task..."></input>
      <button>Add task</button>
    </div>
  );
}

export default App;
