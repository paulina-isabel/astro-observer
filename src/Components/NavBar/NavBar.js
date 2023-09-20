import './NavBar.css';
import headerimg from '../../images/astroobserver.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img src={headerimg} alt='title' className='header'/>
    </div>
  );
};

export default NavBar;