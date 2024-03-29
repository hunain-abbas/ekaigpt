// components/ContactForm.js
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

SwiperCore.use([Scrollbar]);

function Testimonial() {

  const swiperRef = useRef(null);

  // Function to handle scroll event
  const handleScroll = (event) => {
    // Check if swiperRef is initialized and event.deltaY is defined
    if (swiperRef.current && typeof event.deltaY === 'number') {
      // Check scroll direction
      if (event.deltaY > 0) {
        // Scroll down, go to next slide
        swiperRef.current.swiper.slideNext();
      } else {
        // Scroll up, go to previous slide
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  // Add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <section id='testimonial' className='py-lg-section overflow-hidden'>
    <div className=''>
      <div className='row'>
        <div className='col-md-12'>
        <h2 className='w-100 text-center mb-3 mb-md-5 mx-auto'>ekai works for everyone</h2>
        </div>
    <div>
    <Swiper
      slidesPerView={4.1}
      spaceBetween={50}
      initialSlide={1}
      allowTouchMove= {true}
      direction={'horizontal'}
      // centeredSlides={true}
      // loop={true}
      mousewheel= {{releaseOnEdges: true}}
      scrollbar={{ draggable: true, dragSize: 120 }}
      breakpoints={{
        0: {
          slidesPerView: 1.6,
        },
        400:{
          slidesPerView:1.6,
        },
        639: {
          slidesPerView: 1.6,
        },
        865:{
          slidesPerView: 4.1
        }
        }
      }
      ref={swiperRef} 
     >
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona1.png' alt='image' />
                <p>Marketing Specialist</p>
              </div>
              <div className='bottombox'>
                <p>Design better campaigns by leveraging real-time insights to understand your customers better</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona2.png' alt='image' />
                <p>Supply Chain Manager</p>
              </div>
              <div className='bottombox'>
                <p>Optimize your supply chain from inventory management to logistics for maximum efficiency</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona3.png' alt='image' />
                <p>Financial Analyst</p>
              </div>
              <div className='bottombox'>
                <p>Unlock insights into budgeting, forecasting, and investment strategies by analysing historical trends</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona4.png' alt='image' />
                <p>HR Manager</p>
              </div>
              <div className='bottombox'>
                <p>Optimize your HR strategy with key metrics on talent acquisition and retention</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona5.png' alt='image' />
                <p>Data Analyst</p>
              </div>
              <div className='bottombox'>
                <p>Streamline your data analyses processes and free up time for deeper exploration</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona6.png' alt='image' />
                <p>Customer support specialist</p>
              </div>
              <div className='bottombox'>
                <p>Gain access to customer details and history that can inform your approach to provide more personalized support</p>
              </div>                  
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className='testimonialbox text-center p-3 p-lg-4'>
              <div className='topbox mb-2 mb-lg-2'>
                <img src='/assets/images/persona7.png' alt='image' />
                <p>Digital Product Manager</p>
              </div>
              <div className='bottombox'>
                <p>Understand how users are interacting with your digital products and optimise strategies to drive product success</p>
              </div>                  
            </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </div>
  </div>
  </section>
    );
}

export default Testimonial;