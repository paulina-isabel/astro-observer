import './SignCard.css'

const SignCard = ({ image }) => {
  return (
    <div className="sign-card">
      <img src={image} className='sign-image'/>
    </div>
  )
}

export default SignCard;