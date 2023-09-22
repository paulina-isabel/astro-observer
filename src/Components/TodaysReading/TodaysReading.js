import './TodaysReading.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import today from '../.././images/today.png';
import yesterday from '../.././images/yesterday.png';
import weekly from '../.././images/weekly.png';
import favorite from '../.././images/favorite.png';
import unfavorite from '../.././images/unfavorite.png';
import getData from '../../apiCalls';

const TodaysReading = ({ addToFavorites, favoriteReadings }) => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');
  const [reading, setReading] = useState('this is a test')
  
  const { sign } = useParams();

  console.log(favoriteReadings, 'this is FAVORITE READINGS')

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData(`https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${sign}&timePeriod=${selectedTimePeriod}`);
  //       console.log(data.prediction, 'this is data testing');
  //       setReading(data.prediction)
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.log('there was an error');
  //       }
  //     }
  //   };

  //   fetchData();
  // }, [selectedTimePeriod]);

  return (
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
      <div className='reading'>
        <p>
          Your friendly, kind and noble nature brings people close to you. You won't have to take any great efforts to do this.The love and joy that you would see in your partner's eyes would make toda
          {reading}
        </p>
        <img src={favorite} className='favorite-button' onClick={() => addToFavorites(reading)}/>
      </div>

    </div>
  )
};

export default TodaysReading;