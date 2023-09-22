import './ReadingCard.css';

const ReadingCard = ({ reading }) => {
  return (
    <div>
    {/* {reading.length ? 
      <div className='reading'>
        <p>
          {reading}
        </p>
        <img src={isFavorite ? unfavorite : favorite} className='favorite-button' onClick={isFavorite ? () => removeFromFavorites(reading) : () => addToFavorites(reading)}/>
      </div> : <p>Make a selection above to see your reading!</p> }    */}
    </div>
  )
};

export default ReadingCard;