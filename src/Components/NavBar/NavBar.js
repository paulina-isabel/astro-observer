import './NavBar.css';
import headerimg from '../../images/astroobserver.png';
import { Link } from 'react-router-dom';
import unfavorite from '../.././images/unfavorite.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={headerimg} alt='title' className='header'/>
      </Link>
      <Link to={'/favorites'}>
        <img src={unfavorite} alt='favorites page' className='favorites-page-icon'/>
      </Link>
    </div>
  );
};

export default NavBar;