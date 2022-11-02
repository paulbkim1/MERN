import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {TabWrapper} from './Components/TabWrapper'

function App() {
  const [tabs, setTabs] = useState([
    {
        name: "tab1",
        message: "this is the content from tab1",
        isSelected: true,
    },
    {
        name: "tab2",
        message: "this is the content from tab2",
        isSelected: false,
    },
    {
        name: "tab3",
        message: "this is the content from tab3",
        isSelected: false,
    }
  ])
  return (
    <>
      <TabWrapper tabs = {tabs} setTabs= {setTabs} />
    </>
  );
}

export default App;
