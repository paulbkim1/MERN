import logo from './logo.svg';
import './App.css';
import React, { useState } from  'react';


function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  

  const firstNameMessage = () => {
    if (firstName.length === 1) {
      return "First name must be at least 2 characters"
    }
  }

  const lastNameMessage = () => {
    if (lastName.length === 1) {
      return "Last name must be at least 2 characters"
    }
  }

  const emailMessage = () => {
    if (email.length === 0) {
      return ""
    }
    else if (email.length < 5) {
      return "Email must be at least 5 characters"
    }
  }

  const passwordMessage = () => {
    if (password.length === 0) {
      return ""
    }
    else if (password.length < 8) {
      return "Password must be at least 8 characters"
    }
  }

  const confirmPasswordMessage = () => {
    if (confirmPassword.length === 0) {
      return ""
    }
    else if (confirmPassword != password) {
      return "Passwords do not match"
    }
  }


  return(
    <div>
      <form>
        <div>
          <label>First Name: </label> 
          <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
          <p>{ firstNameMessage() }</p>
        </div>
        <div>
          <label>Last Name: </label> 
          <input type="text" onChange={ (e) => setLastname(e.target.value) } />
          <p>{ lastNameMessage() }</p>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" onChange={ (e) => setEmail(e.target.value) } />
          <p>{ emailMessage() }</p>
        </div>
        <div>
          <label>Password: </label>
          <input type="text" onChange={ (e) => setPassword(e.target.value) } />
          <p>{ passwordMessage() }</p>
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
          <p>{ confirmPasswordMessage() }</p>
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
