import './Favorites.css';
import { useEffect, useState } from 'react';
import unfavorite from '../.././images/unfavorite.png';
import Error from '../Error/Error';

const Favorites = ({ favoriteReadings, removeFromFavorites }) => {

  console.log(favoriteReadings)

  const favorites = favoriteReadings.map((reading, index) => {
    return (
      <div className="favorited-reading" key={index}>
        <p>
          {reading}
        </p>
        <img 
          src={unfavorite} 
          className='favorite-button' 
          onClick={() => {
            removeFromFavorites(reading)
          }
        }/>
      </div>
    )
  })

  return (
    <>
      <h2>Favorite Readings</h2>
      <div className="favorites-wrapper">
        {favoriteReadings.length ? favorites : <p>Add a reading to your favorites to see it here</p>}
      </div>
    </>
  );
};

export default Favorites;