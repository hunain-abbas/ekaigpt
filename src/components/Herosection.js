// components/ContactForm.js
import React, { useEffect, useRef } from 'react';

function Herosection() {
  useEffect(() => {
      const background = document.querySelector('.background');
      
      document.addEventListener('pointermove', function(e) {
        const offsetX = e.clientX / window.innerWidth * 24; // Adjusted for 24px movement
        const offsetY = e.clientY / window.innerHeight * 24; // Adjusted for 24px movement
        
        background.style.backgroundPositionX = `calc(50% + ${offsetX}px)`; // Adjusted for 24px movement
        background.style.backgroundPositionY = `calc(50% + ${offsetY}px)`; // Adjusted for 24px movement
      });
  }, []);

  return (
  <section id='herosection' className='py-lg-section herosec'>
    <div className='background'></div>
    <div className='container'>
      <div className='row'>
        <div className='text-center col-md-12 col-lg-10 mx-auto'>
          <h1 className='mb-3 mb-lg-4 text-center mw-80'><span className='tx-grad'>Instant insights</span>Smarter decisions</h1>
          <p>Make faster business decisions with effortless<br></br>AI-powered data analysis</p>
          <a href='#footer' className='btnsolid'>Get Started Now</a>
        </div>
        <div className='video-container'>
          <video poster='/assets/images/placeholder.png' preload='auto' autoPlay muted>
            <source src='/assets/ekaigpt.mp4' />
          </video>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Herosection;
