import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const taskRef = useRef()
  function addTask (){
    const newTask = taskRef.current.value
    const newData = {completed:false, newTask}
    setTasks([...tasks, newData])
    taskRef.current.value = ""
  }

  function itemDone(index){
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed 
    setTasks(newTasks)
    console.log(newTasks)
  }
  
  const deleteTask = (index) =>{
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <ul>
        {
          tasks.map(({newTask, completed}, index) =>{
          return (
            <div>
              <li className={completed?"done":""} onClick={()=>itemDone(index)}>{newTask}</li>
              <span onClick={()=>deleteTask(index)}>X</span>
            </div>
          )
          })
        }
      </ul>
      <input ref={taskRef} placeholder="Add New Task..."></input>
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default App;
