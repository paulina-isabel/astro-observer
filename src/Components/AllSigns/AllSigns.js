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
      />
    )
  })

  return (
    <div className='all-signs-wrapper'>
      {signDisplay}
    </div>
  )
}

export default AllSigns;