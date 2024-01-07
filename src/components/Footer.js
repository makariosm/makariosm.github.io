import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
            <div className='social-icons'>
            <Link className='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'>
                <i className="fab fa-facebook"> </i>
                </Link>
                <Link className='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'>
                <i className="fab fa-linkedin"> </i>
                </Link>
                <Link className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'>
                <i className="fab fa-instagram"> </i>
                </Link>
                <Link className='social-icon-link github'
                to='/'
                target='_blank'
                aria-label='GitHub'>
                <i className="fab fa-github"> </i>
                </Link>
            </div>
        </div>
  )
}

export default Footer
