import react, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SearchForm = (props) => {
    const [search, setSearch] = useState("people");
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        props.newSearch( search );
        props.newId(id)
        navigate(`/${search}/${id}`)
    };


    
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <label>Search for:  </label> 
                <select onChange={ (e) => setSearch(e.target.value) }>
                    <option>people</option>
                    <option>planets</option>
                </select>

                <label>ID: </label> 
                <input type="number" onChange={ (e) => setId(e.target.value) }/>
                <button>Search</button>
            </form>
        </div>
    );
};
    
export default SearchForm;