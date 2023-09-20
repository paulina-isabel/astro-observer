import './App.css';
import NavBar from '../NavBar/NavBar';
import { useEffect, useState } from 'react';
import getData from '../../apiCalls';

function App() {

  useEffect(() => {
    const apiCall = async() => {
      try {
        const data = await getData('https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=aries&timePeriod=yesterday')
        console.log(data, 'this is data testing')
      } catch(error) {
        if(error instanceof Error) {
          console.log('there was an error')
        }
      }
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
