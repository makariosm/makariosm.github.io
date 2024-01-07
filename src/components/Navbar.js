import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            MAK MANSOUR
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/background'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Background
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hobbies'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hobbies/Interests
              </Link>
            </li>

            <li>
              <Link
                to='/projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;