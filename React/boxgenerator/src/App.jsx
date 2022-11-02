import logo from './logo.svg';
import './App.css';
import React, { useState } from  'react';
import ColorForm from './Components/ColorForm';
import Display from './Components/Display';



function App() {
  const [colorList, setColorList] = useState('');
  const addColor = ( newColor ) => {
    const addColor =[newColor, ...colorList];
    setColorList( addColor );
    console.log(colorList)
  }


  return(
    <>
      <ColorForm onNewColor= {addColor} />
      <Display colorList= {colorList} />
    </>
  );
};


export default App;
