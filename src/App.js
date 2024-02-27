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
    // sorttask()
    // console.log(tasks)
  }

  function itemDone(index){
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed 
    setTasks(newTasks)
    // console.log(newTasks)
    sorttask()
  }
  
  const deleteTask = (index) =>{
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const sorttask =()=>{
    const unfinishedTasks = tasks.filter((item)=>{
      return(item.completed===false)
    })
    console.log(unfinishedTasks)
    const finishedTasks = tasks.filter((item)=>{
      return(item.completed===true)
    })
    if(finishedTasks && unfinishedTasks){
    
    setTasks([...unfinishedTasks,...finishedTasks])
    // console.log(finishedTasks,"      ", unfinishedTasks)
    }
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <ul>
        {
          tasks.map(({newTask, completed}, index) =>{
          return (
            <div className='task-section'>
              <li className={completed?"done":""} onClick={()=>itemDone(index)}>{newTask}</li>
              <div className='delete-span'>
              <span onClick={()=>deleteTask(index)}>X</span>
              </div>
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
