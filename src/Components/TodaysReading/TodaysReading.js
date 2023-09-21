import './TodaysReading.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import today from '../.././images/today.png';
import yesterday from '../.././images/yesterday.png';
import weekly from '../.././images/weekly.png';
import getData from '../../apiCalls';

const TodaysReading = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');
  const [prediction, setPrediction] = useState('')
  
  const { sign } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(`https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${sign}&timePeriod=${selectedTimePeriod}`);
        console.log(data, 'this is data testing');
        setPrediction(data.prediction)
      } catch (error) {
        if (error instanceof Error) {
          console.log('there was an error');
        }
      }
    };

    fetchData();
  }, [selectedTimePeriod]);

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
      <p className='prediction'>
        {prediction}
      </p>

    </div>
  )
};

export default TodaysReading;