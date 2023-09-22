import './NavBar.css';
import headerimg from '../../images/astroobserver.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={headerimg} alt='title' className='header'/>
      </Link>
      <Link to={'/favorites'}>
        favorites page
      </Link>
    </div>
  );
};

export default NavBar;