import logo from "./logo.svg";
import "./App.css";
import React, { useState } from  'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import {SearchApi} from './views/SearchApi'
import SearchForm from './Components/SearchForm';

function App() {
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");

  const newSearch = (searchData) => {
    setSearch(searchData);
  }

  const newId = (idData) => {
    setId(idData);
  };

  return (
    <>
      <SearchForm newSearch= {newSearch} newId= {newId}/>

      <Routes>
        {/* <Route path="/" element={<Navigate to="/" />}/> */}
        <Route path= "/:search/:id" element={<SearchApi search={search} id={id}/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
