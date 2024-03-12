import React from 'react';
import './WelcomeComponent.css';

function Welcome() {
  return (
    <div className='welcome'>
      <div className='welcome__container'>
        <div className='welcome__wrapper'>
          <div className='welcome__content'>
            <img
              className='welcome__image'
              src="profile-image.jpg"
              alt="Profile"
            />
            <h1 className='welcome__heading'>Welcome!</h1>
            <p className='welcome__text'>
              I'm Will. Developer, student, and a guy with a website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;