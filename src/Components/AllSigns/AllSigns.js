import './AllSigns.css'
import allSigns from '../../signs';
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
        Welcome! Please select your star sign to begin. 
      </h2>
      <div className='signs-wrapper'>
        {signDisplay}
      </div>
    </div>
  )
};

export default AllSigns;