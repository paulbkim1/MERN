import logo from './logo.svg';
import './App.css';
import React, { useState } from  'react';


function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmpassword] = useState("");  


  return(
    <div>
      <form>
        <div>
          <label>First Name: </label> 
          <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
        </div>
        <div>
          <label>Last Name: </label> 
          <input type="text" onChange={ (e) => setLastname(e.target.value) } />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
        </div>
      </form>

      <h1>Your Form Data</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
};


export default App;
