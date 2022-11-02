import react, { useState } from 'react';


const TaskForm = (props) => {
    const [task, setTask] = useState("");
    const {addTask} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task : task,
            complete : false
        }
        addTask( newTask );
        setTask('');
    };
    
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <input type="text" value= {task} onChange={ (e) => setTask(e.target.value) }/>
                <button>Add</button>
            </form>
        </div>
    );
};
    
export default TaskForm;