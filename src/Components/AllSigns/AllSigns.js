import './AllSigns.css'
import allSigns from '../../allSigns';
import SignCard from '../SignCard/SignCard';

const AllSigns = () => {
  const signDisplay = allSigns.map(sign => {
    return (
      <SignCard
        image={sign.image}
        id={sign.id}
        key={sign.id}
        signName={sign.sign}
      />
    )
  })

  return (
    <div className='all-signs-wrapper'>
      Welcome to Astro Observer! Please select the time period you wish to see, then click on your star sign to see a reading. 
      {signDisplay}
    </div>
  )
};

export default AllSigns;