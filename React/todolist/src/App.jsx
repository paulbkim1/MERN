import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Task from './Components/Task';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitEvent = (event) => {
    event.preventDefault();

    const taskItem = {
      description : newTask,
      complete: false
    }

    setTasks([...tasks, taskItem])
  }

  const deleteEvent = (delIdx) => {
    const filteredTasks = tasks.filter((tasks,i) => {
      return i !== delIdx;
    });

    setTasks(filteredTasks);
  }

  const toggleComplete = (idx) => {
    const updatedTasks = tasks.map((task, i) => {
      if (idx === i) {
        task.complete = !task.complete;
      }

      return task;
    })

    setTasks(updatedTasks)
  }
  return (
    <>
      <form onSubmit={(event) => {
        submitEvent(event);
      }}>
        <input onChange={(event) => {
          setNewTask(event.target.value);
        }} 
        type="text" 
        value={newTask}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      {
        tasks.map((task, i) => {
          return (
            <Task 
              key={i}
              task={task} 
              toggleComplete= {toggleComplete}
              deleteEvent= {deleteEvent}
              i={i}/>
          );
        })
      }
    </>
  );
}

export default App;
