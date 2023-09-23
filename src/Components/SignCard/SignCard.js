import './SignCard.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignCard = ({ image, signName }) => {
  return (
    <Link to={`/${signName}`}>
      <div className="sign-card" role="button">
        <img src={image} className='sign-image' alt={signName}/>
      </div>
    </Link>
  )
}

export default SignCard;

SignCard.propTypes = {
  image: PropTypes.string,
  signName: PropTypes.string
};