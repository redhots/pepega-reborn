import React from 'react'
import "./index.css";
import Voting from './components/pages/Voting';
import MemeGallery from './components/pages/Memegallery';
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  
  return (
    <div>
   
    <Routes>
      <Route path="/" element= {<Home/>}></Route>
      <Route path="/memegallery" element={<MemeGallery/>}/>
      <Route path="/voting" element={<Voting/>}/>
    </Routes>
    </div>
  );
}

export default App;