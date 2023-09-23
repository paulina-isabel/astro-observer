import './App.css';
import NavBar from '../NavBar/NavBar';
import AllSigns from '../AllSigns/AllSigns';
import TodaysReading from '../TodaysReading/TodaysReading';
import Favorites from '../Favorites/Favorites';
import Error from '../Error/Error';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [favoriteReadings, setFavoriteReadings] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem('favoriteReadings'));
    if (favorites) {
      setFavoriteReadings(favorites);
    }
  }, []);

  const addToFavorites = (newReading) => {
    window.localStorage.setItem('favoriteReadings', JSON.stringify([...favoriteReadings, newReading]));
    setFavoriteReadings(JSON.parse(localStorage.favoriteReadings));
  };

  const removeFromFavorites = (reading) => {
    const filteredReadings = favoriteReadings.filter(oldReading => oldReading !== reading);
    window.localStorage.setItem('favoriteReadings', JSON.stringify(filteredReadings));
    setFavoriteReadings(JSON.parse(localStorage.favoriteReadings));
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllSigns />} />
        <Route path='/:sign' element={<TodaysReading addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favoriteReadings={favoriteReadings}/>} />
        <Route path='/favorites' element={<Favorites favoriteReadings={favoriteReadings} removeFromFavorites={removeFromFavorites}/>} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;