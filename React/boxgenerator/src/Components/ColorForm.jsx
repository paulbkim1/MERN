import react, { useState } from 'react';


const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor( color );
        setColor('');
    };
    
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <label>Color </label> 
                <input type="text" value= {color} onChange={ (e) => setColor(e.target.value) }/>
                <button>Add</button>
            </form>
        </div>
    );
};
    
export default ColorForm;