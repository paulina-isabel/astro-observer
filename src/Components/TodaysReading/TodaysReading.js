import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TodaysReading = () => {
  const sign = useParams();

  const [selectedSign, setSelectedSign] = useState('')


  useEffect(() => {
    setSelectedSign(sign)
  })

  console.log(selectedSign, 'this is selected sign')

  return (
    <div>
      todays reading goes here
    </div>
  )
}

export default TodaysReading