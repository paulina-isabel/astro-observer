import './App.css';
import NavBar from '../NavBar/NavBar';
import AllSigns from '../AllSigns/AllSigns';
import TodaysReading from '../TodaysReading/TodaysReading';
import Favorites from '../Favorites/Favorites';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [favoriteReadings, setFavoriteReadings] = useState([])

  useEffect(() => {
    const favorites = JSON.parse(window.localStorage.getItem('favoriteReadings'));
    if (favorites) {
      setFavoriteReadings(favorites);
      console.log(favorites, 'there are stored favorites, set in useeffect')
    }
  }, []);

  const addToFavorites = (newReading) => {
    window.localStorage.setItem('favoriteReadings', JSON.stringify([...favoriteReadings, newReading]))
    setFavoriteReadings(JSON.parse(localStorage.favoriteReadings))
  }

  // const removeFromFavorites = (reading) => {
  //   const filteredProducts = savedProducts.filter(oldProduct => oldProduct.id !== product.id)
  //   window.localStorage.setItem('favoriteReadings', JSON.stringify(filteredProducts))
  //   setSavedProducts(JSON.parse(localStorage.savedProducts))
  // }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllSigns />} />
        <Route path='/:sign' element={<TodaysReading addToFavorites={addToFavorites} favoriteReadings={favoriteReadings}/>} />
        <Route path='/favorites' element={<Favorites favoriteReadings={favoriteReadings} />} />
      </Routes>
    </div>
  )
}

export default App;