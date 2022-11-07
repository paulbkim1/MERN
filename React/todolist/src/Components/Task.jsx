import React, { useState } from 'react';

const Task = (props) => {
    const taskClasses = ["bold", "italic"];

    if (props.task.complete) {
        taskClasses.push("line-through")
    }


    return (
        <div>
                <input onChange={(event) => {
            props.toggleComplete(props.i);
            }} 
            checked= {props.task.complete} 
            type="checkbox" />
            <span className={taskClasses.join(" ")}>{props.task.description}</span>
            <button onClick={(event) => {
            props.deleteEvent(props.i);
            }}>Delete</button>
        </div>
    )
};
    
export default Task;