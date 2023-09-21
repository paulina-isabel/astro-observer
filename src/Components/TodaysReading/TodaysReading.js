import './TodaysReading.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import today from '../.././images/today.png';
import yesterday from '../.././images/yesterday.png';
import weekly from '../.././images/weekly.png';
import getData from '../../apiCalls';

const TodaysReading = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');
  const [selectedSign, setSelectedSign] = useState('');
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

    setSelectedSign(sign);

    fetchData();
  }, [selectedTimePeriod]);

  console.log(selectedTimePeriod)

  return (
    <div className='todays-reading-card'>

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

      <p className='prediction'>
        {prediction}
        {/* Your friendly, kind and noble nature brings people close to you. You won't have to take any great efforts to do this.The love and joy that you would see in your partner's eyes would make today very happy and peaceful for you too. As it is their happiness that makes you happy.You have a forceful personality that can easily overpower any enemy that you might have. But try and restrain showing it in public today.Try not to get affected by small issues. It will only drain you emotionally and mentally. Spend some time to refresh you mind and body. */}
      </p>

    </div>
  )
};

export default TodaysReading;