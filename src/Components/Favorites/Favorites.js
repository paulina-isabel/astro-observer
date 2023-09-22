import './Favorites.css';

const Favorites = ({ favoriteReadings }) => {

  console.log(favoriteReadings, 'favs in favs component')

  const favorites = favoriteReadings.map((reading) => {
    return (
      <div className="favorited-reading">
        {reading}
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