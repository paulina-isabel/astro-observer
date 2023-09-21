import './SignCard.css';
import { Link } from 'react-router-dom';

const SignCard = ({ image, selectedSign }) => {

  console.log(selectedSign)

  return (
    <Link to={`/${selectedSign}`}>
      <div className="sign-card">
        <img src={image} className='sign-image'/>
      </div>
    </Link>
  )
}

export default SignCard;