import './AllSigns.css'
import allSigns from '../../allSigns';
import SignCard from '../SignCard/SignCard';

const AllSigns = ({ selectedSign }) => {
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
      {signDisplay}
    </div>
  )
};

export default AllSigns;