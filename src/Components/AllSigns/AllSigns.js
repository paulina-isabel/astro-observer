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
    <div className='home-page'>
      <h2>
        Welcome to Astro Observer! Please select your star sign. 
      </h2>
      <div className='signs-wrapper'>
        {signDisplay}
      </div>
    </div>
  )
};

export default AllSigns;