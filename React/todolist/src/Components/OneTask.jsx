import React from "react";

const OneTask = (props) => {
    const {idx: i, taskDescription, DeleteTask} = props
    // const {task, complete} = taskDescription

    return(
        <>
            {/* <p>{props.taskDescription.complete}</p> */}
            {/* <button onClick= {(e) => {
                DeleteTask(e,i)
                }}>Delete
            </button> */}
        </>
    )
}

export default OneTask;