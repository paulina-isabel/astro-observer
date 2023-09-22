import './Favorites.css';
import { useEffect, useState } from 'react';
import unfavorite from '../.././images/unfavorite.png';

const Favorites = ({ favoriteReadings, removeFromFavorites }) => {

  console.log(favoriteReadings, 'favs in favs component')

  const favorites = favoriteReadings.map((reading) => {
    return (
      <div className="favorited-reading">
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
    <div className="favorites-wrapper">
      {favorites}
    </div>
  );
};

export default Favorites;