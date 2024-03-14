import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='social-icons'>
            <Link className='social-icon-link instagram'
              to='https://www.instagram.com/mac.mansour/'
              target='_blank'
              aria-label='Instagram'>
              <i className="fab fa-instagram"> </i>
            </Link>
            <Link className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/MakariosMansour/'
              target='_blank'
              aria-label='LinkedIn'>
              <i className="fab fa-linkedin"> </i>
            </Link>
            <Link className='social-icon-link github'
              to='https://github.com/makariosm'
              target='_blank'
              aria-label='GitHub'>
              <i className="fab fa-github"> </i>
            </Link>
            <Link className='social-icon-link linkedin'
              to='https://www.facebook.com/profile.php?id=100008639413703'
              target='_blank'
              aria-label='LinkedIn'>
              <i className="fab fa-facebook"> </i>
            </Link>
         </div>
    </div>
  )
}

export default Footer
