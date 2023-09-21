import aries from '../../images/aries.png';
import taurus from '../../images/taurus.png';
import gemini from '../../images/gemini.png';
import cancer from '../../images/cancer.png';
import leo from '../../images/leo.png';
import virgo from '../../images/virgo.png';
import libra from '../../images/libra.png';
import scorpio from '../../images/scorpio.png';
import sagittarius from '../../images/sagittarius.png';
import capricorn from '../../images/capricorn.png';
import aquarius from '../../images/aquarius.png';
import pisces from '../../images/pisces.png';
import SignCard from '../SignCard/SignCard';

const AllSigns = () => {
  const allSigns = [
    {
      sign: 'aries',
      image: aries,
      id: 1
    },
    {
      sign: 'taurus',
      image: taurus,
      id: 2
    },
    {
      sign: 'gemini',
      image: gemini,
      id: 3
    },
    {
      sign: 'cancer',
      image: cancer,
      id: 4
    }
    //  'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ]

  const signDisplay = allSigns.map(sign => {
    return (
      <SignCard
        image={sign.image}
        sign={sign.sign}
        id={sign.id}
        key={sign.id}
      />
    )
  })

  console.log(signDisplay)

  return (
    <div>

      {signDisplay}
    </div>
  )
}

export default AllSigns