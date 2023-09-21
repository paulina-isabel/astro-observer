import './App.css';
import NavBar from '../NavBar/NavBar';
import AllSigns from '../AllSigns/AllSigns';
import TodaysReading from '../TodaysReading/TodaysReading';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllSigns />} />
        <Route path='/:sign' element={<TodaysReading />} />
      </Routes>
    </div>
  )
}

export default App;