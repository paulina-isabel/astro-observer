import './TodaysReading.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import today from '../.././images/today.png';
import yesterday from '../.././images/yesterday.png';
import weekly from '../.././images/weekly.png';
import favorite from '../.././images/favorite.png';
import unfavorite from '../.././images/unfavorite.png';

import getData from '../../apiCalls';

import Error from '../Error/Error';

const TodaysReading = ({ addToFavorites, removeFromFavorites, favoriteReadings }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');
  const [reading, setReading] = useState('')
  const [error, setError] = useState(false)
  
  const { sign } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(`https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${sign}&timePeriod=${selectedTimePeriod}`);
        setReading(data.prediction)
      } catch (error) {
        if (error instanceof Error) {
          setError(true)
        }
      }
    };

    fetchData();
  }, [selectedTimePeriod]);

  const checkFavorites = (reading, favoriteReadings) => {
    return favoriteReadings.includes(reading);
  };

  const isFavorite = checkFavorites(reading, favoriteReadings)

  return (
    <div>

      {error ? <Error /> :
      <div className='todays-reading'>

        <h3>Select a Time Period to See Reading for {sign}:</h3>

                  <div className='time-periods'>
                    <img 
                      src={today} 
                      className='time-period-img' 
                      alt='today'
                      onClick={() => setSelectedTimePeriod('today')}
                    />
                    <img 
                      src={yesterday} 
                      className='time-period-img' 
                      alt='yesterday'
                      onClick={() => setSelectedTimePeriod('yesterday')}
                    />
                    <img 
                      src={weekly} 
                      className='time-period-img' 
                      alt='weekly'
                      onClick={() => setSelectedTimePeriod('weekly')}
                    />
                  </div>

        <h3>
          {selectedTimePeriod}
        </h3>
        
        {reading.length ? 
          <div className='reading'>
            <p>
              {reading}
            </p>
            <img src={isFavorite ? unfavorite : favorite} className='favorite-button' onClick={isFavorite ? () => removeFromFavorites(reading) : () => addToFavorites(reading)}/>
          </div> 
          : <p>
              Make a selection above to see your reading!
            </p>}
      </div>}

    </div>
  )
};

export default TodaysReading;