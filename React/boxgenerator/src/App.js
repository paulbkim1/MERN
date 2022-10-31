import logo from './logo.svg';
import './App.css';
import React, { useState } from  'react';




function App() {
  const ListOfColors = []

  const [colorList, setColorList] = useState(ListOfColors);
  console.log(ListOfColors)
  const [color, setColor] = useState('')

  const addColor = (event) => {
    event.preventDefault();
    const newColor = {
      color : color,
    };
    const addColorToList = [newColor, ...colorList];
    ListOfColors = addColorToList
    console.log(ListOfColors)
  }


  return(
    <div>
      <form onSubmit={(e) => {
        addColor(e);
      }}>
        <div>
          <label>Color </label> 
          <input type="text" onChange={ (e) => setColor(e.target.value) } />
          <button>Add</button>
        </div>
      </form>

      <main>
        {ListOfColors.map((list, idx) => (
          <section key={idx}>
            <p>{list.color}</p>
          </section>
        ))}
      </main>
    </div>
  );
};


export default App;
