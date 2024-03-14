import React from 'react';
import '../..//App.css';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className = "title">About Me:</h2>
      <p className='description'>
        I'm a second-year honors Computer Science student at Northeastern University with a passion for embedded systems. 
        Beyond the world of coding, you'll find me deeply engrossed in the beautiful game of soccer, a sport I've been dedicated to my entire life.
        When not immersed in lines of code, I'm on the soccer field, finding joy in every play and the camaraderie of the game. </p>
      <p className='description2'>
        Outside of school and sports, I'm driven by a commitment to community service. 
        Volunteering holds a special place in my heart, and I've had the privilege of contributing numerous hours through my church to support and uplift my community.
        Whether it's coding or kicking a ball, my goal is to make a positive impact. 
        I'm excited about the endless possibilities that technology brings and I'm always ready for the next coding adventure. 
        Let's connect and collaborate on open-source projects or discuss the latest trends in tech. Feel free to reach out using any of my links below!</p>
    </div>
  );
}

export default AboutMe;
