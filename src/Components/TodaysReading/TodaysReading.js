import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getData from '../../apiCalls';

const TodaysReading = () => {
  
  const [selectedSign, setSelectedSign] = useState('')
  const sign = useParams();
  
  useEffect((selectedSign) => {
    setSelectedSign(sign)
    console.log(sign, 'selected sign inside fetch call')
    const apiCall = async(selectedSign) => {
      try {
        const data = await getData(`https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=scorpio&timePeriod=today`)
        console.log(data, 'this is data testing')
        console.log(sign, 'omfg')
      } catch(error) {
        if(error instanceof Error) {
          console.log('there was an error')
        }
      }
    }
    apiCall(selectedSign)
  }, [])

  console.log(selectedSign, 'this is selected sign')

  return (
    <div>
      todays reading goes here
    </div>
  )
}

export default TodaysReading