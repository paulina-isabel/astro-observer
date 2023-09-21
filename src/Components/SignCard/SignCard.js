import './SignCard.css';
import { Link } from 'react-router-dom';

const SignCard = ({ image, signName }) => {

  return (
    <Link to={`/${signName}`}>
      <div className="sign-card">
        <img src={image} className='sign-image'/>
      </div>
    </Link>
  )
}

export default SignCard;