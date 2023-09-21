import './App.css';
import NavBar from '../NavBar/NavBar';
import AllSigns from '../AllSigns/AllSigns';
import { useEffect, useState } from 'react';
import getData from '../../apiCalls';
import { Routes, Route, Switch } from 'react-router-dom';


function App() {

  // useEffect(() => {
  //   const apiCall = async() => {
  //     try {
  //       const data = await getData('https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=aries&timePeriod=yesterday')
  //       console.log(data, 'this is data testing')
  //     } catch(error) {
  //       if(error instanceof Error) {
  //         console.log('there was an error')
  //       }
  //     }
  //   }
  //   apiCall()
  // }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllSigns />} />
      </Routes>
        
    </div>
  )
}

export default App;
