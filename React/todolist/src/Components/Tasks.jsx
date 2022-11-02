import React, { useState } from 'react';
import TaskForm from './TaskForm';
import OneTask from './OneTask'

const Tasks = (props) => {
    const [tasksList, setTasksList] = useState('');

    let newTasksList = [...tasksList]

    const addTask = ( newTask ) => {
        const addTask =[newTask,, ...tasksList];
        setTasksList( addTask );
        console.log(newTasksList)
    }

    const DeleteTask = (event, idxToRemove) => {
        event.stopPropagation();
        const filteredTasks = newTasksList.filter((card, i) => {
            return idxToRemove !== i;
        })

        setTasksList(filteredTasks)
    }

    return (
        <div>
            <TaskForm addTask= {addTask} />
            {newTasksList.map((taskDescription, i) => {
                return (
                <OneTask
                    taskDescription = {taskDescription}
                    DeleteTask = {DeleteTask}
                    key = {i}
                    idx = {i}
                />
                )
                })
            }
        </div>
    );
};
    
export default Tasks;