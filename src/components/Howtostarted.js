// components/ContactForm.js
import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

// function Howtostarted() {
  const Howtostarted = () => {

  // useEffect(() => {
  // const section = document.getElementById('howtostarted');
  // const tabs = document.querySelectorAll('#pills-tab .nav-link');
  // const lastTabIndex = tabs.length - 1;
  // let currentTab = 0;
  // let lastScrollTop = 0;

  // function changeTab(direction) {
  //     if (direction === 'up' && currentTab > 0) {
  //         currentTab--;
  //     } else if (direction === 'down' && currentTab < lastTabIndex) {
  //         currentTab++;
  //     }
  //     tabs[currentTab].click();
  // }

  // function debounce(func, delay) {
  //     let timer;
  //     return function () {
  //         const context = this;
  //         const args = arguments;
  //         clearTimeout(timer);
  //         timer = setTimeout(() => {
  //             func.apply(context, args);
  //         }, delay);
  //     };
  // }

  // function handleScroll() {
  //     const st = window.pageYOffset || document.documentElement.scrollTop;
  //     const direction = st > lastScrollTop ? 'down' : 'up';
  //     lastScrollTop = st;

  //     const rect = section.getBoundingClientRect();
  //     const visibleHeight = window.innerHeight - (window.innerHeight * 0.65); // Adjust visibility threshold as needed
  //     const isVisible = rect.top <= visibleHeight && rect.bottom >= 0;

  //     if (isVisible && direction === 'down' && currentTab === lastTabIndex) {
  //         // Smooth scroll to the next section
  //         const nextSection = section.nextElementSibling;
  //         if (nextSection) {
  //             nextSection.scrollIntoView({ behavior: 'smooth' });
  //         }
  //     } else if (isVisible && direction === 'up' && currentTab === 0) {
  //         // Smooth scroll to the previous section
  //         const prevSection = section.previousElementSibling;
  //         if (prevSection) {
  //             prevSection.scrollIntoView({ behavior: 'smooth' });
  //         }
  //     } else if (isVisible && direction === 'down' && currentTab < lastTabIndex) {
  //         changeTab('down');
  //     } else if (isVisible && direction === 'up' && currentTab > 0) {
  //         changeTab('up');
  //     }

  //     if (currentTab === lastTabIndex) {
  //         // section.classList.remove('sticky-top');
  //         // Replace 'sticky' with your CSS class for sticking the section
  //     } else {
  //         section.classList.add('sticky-top');
  //     }
  // }

  // const debouncedScroll = debounce(handleScroll, 200); // Adjust the debounce time as needed
  // window.addEventListener('scroll', debouncedScroll);
  //   }, []);
  return (
    
    <section id='howtostarted' className='py-lg-section' >
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
        <h2 className='w-100 text-center mx-auto mb-large'>Here’s how to get started</h2>
        </div>
          <div className='col-md-7 order-md-1'>
            <div className='tab-content w-100' id='pills-tabContent'>
              <div className='tab-pane fade show active' id='howtostarted1' role='tabpanel' aria-labelledby='pills-home-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted1.mp4' />
                </video>
              </div>
              <div className='tab-pane fade' id='howtostarted2' role='tabpanel' aria-labelledby='pills-profile-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted2.mp4' />
                </video>
              </div>
              <div className='tab-pane fade' id='howtostarted3' role='tabpanel' aria-labelledby='pills-contact-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted3.mp4' />
                </video>
              </div>
              <div className='tab-pane fade' id='howtostarted4' role='tabpanel' aria-labelledby='pills-home-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted4.mp4' />
                </video>
              </div>
              <div className='tab-pane fade' id='howtostarted5' role='tabpanel' aria-labelledby='pills-profile-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted5.mp4' />
                </video>
              </div>
              <div className='tab-pane fade' id='howtostarted6' role='tabpanel' aria-labelledby='pills-contact-tab'>
                <video preload='auto' autoPlay muted loop>
                  <source src='/assets/howstarted6.mp4' />
                </video>
              </div>
            </div>
          </div>
          <div className='col-md-5 order-md-0'>
            <ul className='nav nav-pills flex-column nav-pills -100' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold active position-relative' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#howtostarted1' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>Integrate Database</button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold position-relative' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#howtostarted2' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>Model Your Data</button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold position-relative' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='#howtostarted3' type='button' role='tab' aria-controls='pills-contact' aria-selected='false'>Create Projects</button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold position-relative' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#howtostarted4' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>Add Team Members</button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold position-relative' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#howtostarted5' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>Chat with your Data</button>
              </li>
              <li className='nav-item' role='presentation'>
                <button className='nav-link text-primary fw-semibold position-relative' id='pills-contact-tab' data-bs-toggle='pill' data-bs-target='#howtostarted6' type='button' role='tab' aria-controls='pills-contact' aria-selected='false'>Visualize & Share Insights</button>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </section>
    );
}

export default Howtostarted;
