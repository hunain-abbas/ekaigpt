import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import { Waypoint } from 'react-waypoint';

SwiperCore.use([Scrollbar]);
import ContactForm from '../components/ContactForm';
import Howtostarted from '../components/Howtostarted';
import Herosection from '../components/Herosection';
import Testimonial from '../components/Testimonial';

// import React, { useState, useEffect } from 'react'

SwiperCore.use([Scrollbar]);
// const scroll = new LocomotiveScroll();

export default function Home() {
//   useEffect(() => {
//     function scrollToAnchor(anchorId) {
//       const element = document.getElementById(anchorId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }
  
//     // Add event listeners to anchor links to call scrollToAnchor function
//     document.querySelectorAll('a').forEach(link => {
//       link.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent default anchor behavior
//         const anchorId = this.getAttribute('href').substring(1); // Remove leading '#'
//         scrollToAnchor(anchorId);
//       });
//     });
// }, []);
useEffect(() => {
  function scrollToAnchor(anchorId) {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Add event listeners to anchor links to call scrollToAnchor function
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault(); // Prevent default anchor behavior
        const anchorId = href.substring(1); // Remove leading '#'
        scrollToAnchor(anchorId);
      }
    });
  });
}, []);

  return (
    <>
      <Head>
        <title>ekai works for everyone</title>
        <meta charset='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta name='description' content=''/>
        <meta name='author' content='Ekai'/>
        <meta name='generator' content='Hugo 0.84.0' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-K59Z9TWS6F'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K59Z9TWS6F');
            `,
          }}
        />
       <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMDDD6CN');
            `,
          }}
        /> */}
      </Head>
      <body className=''>
      <main>
        <header className='mb-auto'>
          <div className='container'>
            <div className='brand-logo text-center py-5'>
            <svg width='94' height='44' viewBox='0 0 94 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M78.0811 38.1962C76.648 39.8119 74.9918 41.0993 73.1096 42.0598C71.2289 43.0204 69.2359 43.5007 67.1306 43.5007C64.8023 43.5007 62.6191 43.0858 60.5809 42.2574C58.5427 41.4291 56.7399 40.2511 55.1727 38.7221C53.6038 37.2387 52.3843 35.4816 51.511 33.451C50.6377 31.4219 50.2011 29.294 50.2011 27.0674C50.2011 24.8407 50.6377 22.7128 51.511 20.6837C52.3843 18.6546 53.6038 16.8763 55.1727 15.3473C56.7399 13.8198 58.5411 12.6418 60.5809 11.8119C62.6175 10.9836 64.8023 10.5687 67.1306 10.5687C69.2811 10.5687 71.3068 11.0049 73.2109 11.8773C75.1135 12.7513 76.7369 13.9733 78.0811 15.5449V10.5611H84.1272V43.4232H78.0811V38.1962ZM62.8655 17.0739C61.4994 17.6196 60.3236 18.3734 59.3395 19.3325C58.354 20.2931 57.582 21.4391 57.0222 22.7706C56.4623 24.102 56.1832 25.4882 56.1832 26.9275C56.1832 28.3669 56.4623 29.7424 57.0222 31.0526C57.582 32.3628 58.354 33.4981 59.3395 34.4572C60.3236 35.4178 61.4994 36.1702 62.8655 36.7158C64.2316 37.2615 65.6538 37.5335 67.1306 37.5335C68.6074 37.5335 70.0187 37.2615 71.363 36.7158C72.7072 36.1702 73.8706 35.4178 74.8562 34.4572C75.8402 33.4981 76.6137 32.3612 77.1735 31.0526C77.7334 29.7424 78.0125 28.3684 78.0125 26.9275C78.0125 25.4867 77.7318 24.102 77.1735 22.7706C76.6137 21.4391 75.8402 20.2931 74.8562 19.3325C73.8706 18.3734 72.7057 17.6196 71.363 17.0739C70.0187 16.5283 68.609 16.2562 67.1306 16.2562C65.6522 16.2562 64.23 16.5298 62.8655 17.0739Z' fill='#FDB918'/>
              <path d='M56.2549 43.4202H47.7543L33.5398 29.5692V23.7297L47.0416 10.5672H55.5422L39.0416 26.6464L56.2549 43.4202Z' fill='#FDB918'/>
              <path d='M86.7298 10.5596H92.8881V43.3625H86.7298V10.5596Z' fill='#FDB918'/>
              <path d='M85.6819 4.45865C85.6819 2.22437 87.5158 0.499268 89.7443 0.499268C91.9727 0.499268 93.8035 2.22437 93.8035 4.45865C93.8035 6.69293 91.9712 8.41804 89.7443 8.41804C87.5173 8.41804 85.6819 6.63062 85.6819 4.45865Z' fill='#FDB918'/>
              <path d='M0.803589 27.1115C0.803589 17.3415 7.15839 10.5733 16.4621 10.5733C25.7659 10.5733 31.5296 16.7031 31.5296 25.9624V28.1967L6.76385 28.2606C7.22233 34.8372 10.7607 38.4774 16.8536 38.4774C21.6349 38.4774 24.7819 36.5623 25.8283 32.986H31.5936C30.0201 39.6903 24.6477 43.4582 16.7226 43.4582C7.28939 43.4582 0.803589 36.8162 0.803589 27.1115ZM6.8964 24.2373H25.3713C25.3713 19.065 21.8984 15.6164 16.4621 15.6164C11.0259 15.6164 7.68081 18.7459 6.8964 24.2373Z' fill='#FDB918'/>
            </svg>                      
            </div>
          </div>
        </header>
        <Herosection />
        <section id='features' className='py-lg-section'>
          <div className='container'>
            <div className='row'>
            <h2 className='w-100 text-center mb-3 mb-md-5 mx-auto'>Automating business analytics for enterprise data</h2>
              <ul className='tagCloud mb-5'>
                <li>
                  Instant Analytics
                </li>
                <li>
                  Faster Value Creation
                </li>
                <li>
                  Easy Visualization
                </li>
                <li>
                  Data Privacy
                </li>
                <li>
                  Accessible Insights
                </li>
              </ul>
              <div className='col-md-4'>
                <div className='iconbox text-center'>
                    <div className='wrimagecard-topimage_header'>
                        <svg width='86' height='58' viewBox='0 0 86 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M23.6306 43.6941V47.7011C23.6009 48.5233 23.8762 49.3276 24.4036 49.9591C29.2516 55.6431 35.7736 57.0501 42.8736 57.0501C49.9736 57.0501 56.4956 55.6431 61.3436 49.9591C61.871 49.3276 62.1463 48.5233 62.1166 47.7011V43.6941C62.1675 39.8688 60.8859 36.1449 58.4916 33.1611C57.4835 31.868 56.2009 30.8148 54.7363 30.0776C53.2717 29.3404 51.6618 28.9375 50.0226 28.8981H35.7226C34.0833 28.9369 32.4731 29.3396 31.0085 30.0768C29.5438 30.8141 28.2613 31.8675 27.2536 33.1611C24.8592 36.1449 23.5776 39.8688 23.6286 43.6941H23.6306ZM50.6306 3.58809C49.0971 2.05463 47.1433 1.01034 45.0163 0.587266C42.8893 0.164196 40.6846 0.381351 38.6811 1.21127C36.6775 2.04119 34.965 3.4466 33.7602 5.24979C32.5553 7.05297 31.9122 9.17293 31.9122 11.3416C31.9122 13.5103 32.5553 15.6302 33.7602 17.4334C34.965 19.2366 36.6775 20.642 38.6811 21.4719C40.6846 22.3018 42.8893 22.519 45.0163 22.0959C47.1433 21.6729 49.0971 20.6286 50.6306 19.0951C51.6489 18.077 52.4567 16.8682 53.0079 15.5378C53.559 14.2075 53.8427 12.7816 53.8427 11.3416C53.8427 9.9016 53.559 8.4757 53.0079 7.14534C52.4567 5.81498 51.6489 4.60622 50.6306 3.58809ZM64.3106 49.2771C65.7256 49.441 67.1491 49.5198 68.5736 49.5131C74.7656 49.5131 80.4646 48.2951 84.6946 43.3361C85.1359 42.8076 85.365 42.134 85.3376 41.4461V37.9181C85.3376 30.8511 80.6196 25.0651 74.8576 25.0651H62.2906C61.0644 25.0846 59.8541 25.3462 58.7294 25.835C57.6046 26.3238 56.5875 27.03 55.7366 27.9131C61.2856 30.7601 64.4996 37.1791 64.4996 43.6951V47.7021C64.5022 48.2335 64.4373 48.763 64.3066 49.2781L64.3106 49.2771ZM74.5926 5.99109C73.4019 4.80044 71.8848 3.98962 70.2333 3.66115C68.5817 3.33267 66.8699 3.50131 65.3142 4.14573C63.7585 4.79015 62.4288 5.88142 61.4933 7.28152C60.5578 8.68163 60.0585 10.3277 60.0585 12.0116C60.0585 13.6955 60.5578 15.3416 61.4933 16.7417C62.4288 18.1418 63.7585 19.233 65.3142 19.8775C66.8699 20.5219 68.5817 20.6905 70.2333 20.362C71.8848 20.0336 73.4019 19.2227 74.5926 18.0321C76.1874 16.4344 77.0832 14.2691 77.0832 12.0116C77.0832 9.75409 76.1874 7.58883 74.5926 5.99109ZM23.1926 5.99109C22.0019 4.80078 20.485 3.99025 18.8338 3.66198C17.1825 3.33371 15.4709 3.50245 13.9155 4.14685C12.3601 4.79125 11.0307 5.88239 10.0954 7.28229C9.1601 8.68219 8.66089 10.328 8.66089 12.0116C8.66089 13.6952 9.1601 15.341 10.0954 16.7409C11.0307 18.1408 12.3601 19.2319 13.9155 19.8763C15.4709 20.5207 17.1825 20.6895 18.8338 20.3612C20.485 20.0329 22.0019 19.2224 23.1926 18.0321C24.7889 16.4351 25.6856 14.2696 25.6856 12.0116C25.6856 9.75361 24.7889 7.58805 23.1926 5.99109ZM21.2446 47.7011V43.6941C21.2446 37.1781 24.4636 30.7591 30.0086 27.9121C29.1583 27.0293 28.1419 26.3234 27.0178 25.8348C25.8937 25.3462 24.6841 25.0846 23.4586 25.0651H10.8936C9.47427 25.1001 8.08039 25.4495 6.81237 26.0881C5.54434 26.7267 4.43374 27.6386 3.56059 28.7581C1.48232 31.3548 0.369993 34.5924 0.413587 37.9181V41.4421C0.386131 42.13 0.615296 42.8036 1.05659 43.3321C5.28659 48.2911 10.9806 49.5131 17.1736 49.5131C18.5996 49.5211 20.0248 49.4437 21.4416 49.2811C21.308 48.7664 21.2408 48.2368 21.2416 47.7051L21.2446 47.7011Z' fill='#FDB918'/>
                        </svg>
                    </div>
                    <div className='wrimagecard-topimage_title' >
                      <h4>Empowers teams</h4>
                      <p>ekai enables everyone on your team to analyze data and make informed decisions.</p>
                    </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='iconbox text-center'>
                  <div className='wrimagecard-topimage_header'>
                    <svg width='51' height='59' viewBox='0 0 51 59' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M49.9526 17.4526C47.992 13.1582 44.6777 9.61489 40.5326 7.11028L44.2583 3.38457C44.9447 2.6982 44.9447 1.58628 44.2583 0.89991C43.5719 0.213539 42.46 0.213539 41.7737 0.89991L37.2503 5.42331C33.6704 3.87662 29.6549 3.0208 25.4449 3.0208C14.5599 3.0208 4.93954 8.68593 0.937142 17.4526C0.2808 18.8897 0.2808 20.537 0.937142 21.9741C2.8978 26.2685 6.21212 29.8118 10.3572 32.3164L6.63145 36.0421C5.94508 36.7285 5.94508 37.8404 6.63145 38.5268C6.97464 38.87 7.42421 39.0416 7.87378 39.0416C8.32335 39.0416 8.77293 38.87 9.11611 38.5268L13.6395 34.0034C17.2194 35.5501 21.2349 36.4059 25.4449 36.4059C36.3299 36.4059 45.9502 30.7408 49.9526 21.9741C50.609 20.537 50.609 18.8897 49.9526 17.4526ZM16.6593 19.7133C16.6593 14.8693 20.6008 10.9278 25.4449 10.9278C27.2325 10.9278 28.893 11.4708 30.2821 12.3915L27.7034 14.9702C27.0161 14.6414 26.2562 14.442 25.4449 14.442C22.5381 14.442 20.1736 16.8066 20.1736 19.7133C20.1736 20.5247 20.3729 21.2846 20.7017 21.9718L18.123 24.5505C17.2023 23.1615 16.6593 21.5009 16.6593 19.7133ZM25.4449 28.4989C23.6573 28.4989 21.9967 27.9559 20.6077 27.0352L23.1864 24.4565C23.8736 24.7853 24.6336 24.9847 25.4449 24.9847C28.3517 24.9847 30.7162 22.6201 30.7162 19.7133C30.7162 18.902 30.5168 18.1421 30.188 17.4549L32.7668 14.8761C33.6875 16.2652 34.2304 17.9258 34.2304 19.7133C34.2304 24.5574 30.2889 28.4989 25.4449 28.4989Z' fill='#FDB918'/>
                    </svg>
                  </div>
                  <div className='wrimagecard-topimage_title'>
                    <h4>Hides data complexity</h4>
                    <p>Translates complex data into actionable insights accessible to team members at every level.</p>
                  </div>
                </div>
                        </div>
              <div className='col-md-4'>
                <div className='iconbox text-center'>
                  <div className='wrimagecard-topimage_header'>
                    <svg width='51' height='59' viewBox='0 0 51 59' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M27.7261 29.083C27.7261 27.868 26.754 26.8959 25.539 26.8959C24.3239 26.8959 23.3518 27.868 23.3518 29.083C23.3518 29.9336 23.8379 30.6626 24.5669 31.0271L24.0201 33.275C23.8986 33.7003 24.2024 34.0648 24.6277 34.0648H26.511C26.9363 34.0648 27.2401 33.7003 27.1185 33.275L26.5718 31.0271C27.2401 30.6626 27.7261 29.9336 27.7261 29.083Z' fill='#FDB918'/>
                      <path d='M25.539 16.021C23.5949 16.021 21.9545 17.6006 21.9545 19.6055V23.1292H29.1234V19.6055C29.1234 17.6614 27.4831 16.021 25.539 16.021Z' fill='#FDB918'/>
                      <path d='M49.5365 6.11825L25.8427 0.893465C25.6605 0.832712 25.4782 0.832712 25.2959 0.893465L1.60214 6.11825C0.99461 6.23976 0.569336 6.78654 0.569336 7.39407V20.5168C0.569336 33.0927 6.52316 44.8789 16.669 52.2908L24.8099 58.3054C25.2959 58.6699 25.9035 58.6699 26.3895 58.3054L34.5305 52.2908C44.6155 44.8789 50.5693 33.032 50.5693 20.5168V7.39407C50.5693 6.78654 50.1441 6.23976 49.5365 6.11825ZM35.7455 36.5557C35.7455 37.224 35.1987 37.8315 34.4697 37.8315H16.6082C15.9399 37.8315 15.3324 37.2847 15.3324 36.5557V24.405C15.3324 23.7367 15.8792 23.1292 16.6082 23.1292H18.4308V19.6055C18.4308 15.6565 21.6507 12.4366 25.5997 12.4366C29.5487 12.4366 32.7079 15.7173 32.7079 19.6055V23.1292H34.5305C35.1987 23.1292 35.8063 23.676 35.8063 24.405V36.5557H35.7455Z' fill='#FDB918'/>
                    </svg>
                  </div>
                  <div className='wrimagecard-topimage_title'>
                    <h4>Ensures data security</h4>
                    <p>ekai integrates into your setup, and does not share or export your data to third parties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="quickinsight" class="py-lg-section">
          <div class="container">
            <div class="bg-yellow text-center">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="w-100 text-center text-white mb-3 mb-md-5 mx-auto">Gain quick insights within minutes</h3>                
                </div>
                <div className='col-md-4'>
                  <div class='processbox'>
                    <h4>1</h4>
                    <h5>Integrate seamlessly</h5>
                    <p>ekai fits into your existing setup and understands your unique data model to ensure relevant insights</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div class='processbox center'>
                    <h4>2</h4>
                    <h5>Chat with ease</h5>
                    <p>It’s like chatting with a colleague! ekai understands natural language, making analytics a breeze.</p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div class='processbox'>
                    <h4>3</h4>
                    <h5>Always improving</h5>
                    <p>ekai learns from your feedback and customises its responses to align with your business needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonial />
        <Howtostarted />
        <section id='integrateekai' className='py-lg-section'>
          <div className='container'>
            <div className='row'>
              <div className='bg-yellow text-center'>
              <div className='col-md-12'>
              <h2 className='w-100 text-center text-white mb-3 mb-md-5 mx-auto'>Integrate ekai<br></br>with your data stack</h2>
                <Image src='/assets/images/integrate.png' alt='image' />
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id='faqs' className='py-lg-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
              <h2 className='w-100 text-center mb-3 mb-md-5 mx-auto'>FAQs</h2>
                <div className='accordion' id='accordionExample'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingOne'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                      What does ekai do?
                      </button>
                    </h2>
                    <div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      ekai brings you insights from your enterprise data in minutes. It is an AI-native analytics tool that allows users to chat with their data, enabling them to make informed decisions effortlessly. ekai excels at drawing insights from data to support strategic business decisions, while prioritizing data privacy and security.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingTwo'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                      Who is ekai for?
                      </button>
                    </h2>
                    <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      ekai is tailored for data teams and non-technical team members in enterprises, equipping everyone to leverage quick and easy data analytics for informed decision making.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingThree'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                      How can ekai help me or my team?
                      </button>
                    </h2>
                    <div id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      It&apos;s pretty simple, ask questions in your own words and get AI-driven insights in natural language. ekai simplifies hidden complexities and allows you to chat with your data, giving you a clear picture through responses and visualizations.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingFour'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='true' aria-controls='collapseFour'>
                      How can you help make ekai&apos;s responses better?
                      </button>
                    </h2>
                    <div id='collapseFour' className='accordion-collapse collapse' aria-labelledby='headingFour' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      ekai uses Large Language Models (LLM) – a type of model trained on huge amounts of data, enabling ekai to understand and generate responses in natural language. Since the LLM has learned from so many different sources, it might sometimes make mistakes or give varying responses.
                      <br></br>
                      ekai can improve its responses with your feedback. While chatting with ekai, make sure to use the Thumbs Up and Thumbs Down buttons under each response based on how satisfied you are with the response.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingFive'>
                      <button className='accordion-button collapsed collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFive' aria-expanded='false' aria-controls='collapseFive'>
                      Do I need data or engineering knowledge to use ekai? 
                      </button>
                    </h2>
                    <div id='collapseFive' className='accordion-collapse collapse' aria-labelledby='headingFive' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      This is the best part, you don’t need to have any data or engineering knowledge to use ekai. Users can chat with ekai using plain, natural language. ekai offers seamless data integration which you can set up yourself. Our team of experts are also available to assist with data integrations if needed.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingSix'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSix' aria-expanded='false' aria-controls='collapseSix'>
                      Will my enterprise data remain safe with ekai? 
                      </button>
                    </h2>
                    <div id='collapseSix' className='accordion-collapse collapse' aria-labelledby='headingSix' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      ekai prioritizes keeping your data secure and in your control. Your data never leaves your environment since we don’t share it with third parties, as a result, no copies of your data are ever retained.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingSeven'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSeven' aria-expanded='true' aria-controls='collapseSeven'>
                      What data sources does ekai support? 
                      </button>
                    </h2>
                    <div id='collapseSeven' className='accordion-collapse collapse' aria-labelledby='headingSeven' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      ekai currently supports data sources such as MySQL, ClickHouse, and Athena. However, we are continuously updating our list to include more options, and we also offer custom integrations based on your specific needs. You can always reach out to our team to discuss options tailored to your enterprise’s needs.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingEight'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseEight' aria-expanded='false' aria-controls='collapseEight'>
                      How long does it take to implement ekai? 
                      </button>
                    </h2>
                    <div id='collapseEight' className='accordion-collapse collapse' aria-labelledby='headingEight' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      The implementation time for ekai depends on the data maturity and documentation quality of your enterprise. It can be as short as less than a month for setups where data modelling and deployment is accurate. For custom integrations or handling unstructured data, the process may take longer, in which case our team will be happy to provide additional support to get you started as quickly as possible.
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingNine'>
                      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseNine' aria-expanded='false' aria-controls='collapseNine'>
                      How do I link a data source?
                      </button>
                    </h2>
                    <div id='collapseNine' className='accordion-collapse collapse' aria-labelledby='headingNine' data-bs-parent='#accordionExample'>
                      <div className='accordion-body'>
                      For publicly available databases, you can link a data source directly through ekai&apos;s user interface. For other cases, our team is here to assist you with the integration process, ensuring a smooth setup tailored to your specific needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id='footer' className='mt-auto text-white text-center py-lg-section bg-yellow'>
          <div className='container'>
            <div className='row'>
              <div className='bg-yellow text-center'>
              <div className='offset-md-2 col-md-8'>
              <h2 className='w-100 text-center text-white mx-auto'>Chat your way to better business decisions</h2>
              <p className='text-white'>Learn more about how your business can benefit from ekai’s features.</p>
                {/* <a href='#' className='btnsolid whiteco' data-bs-toggle='modal' data-bs-target='#reachout'>Get Started Now</a> */}
                {/* <Image className='d-block mx-auto mt-2 mt-md-4' src='/assets/images/business-decision.png' alt='image' /> */}
                <ContactForm />
              </div>
              </div>
            </div>
          </div>
          <div className='container'>
              <div className='row py-lg-section footer-inner'>
                <div className='col-md-3'>
                  <div className='text-left'>
                  <svg width="187" height="93" viewBox="0 0 187 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M113.268 56.7925C111.177 59.2199 108.762 61.154 106.016 62.5972C103.273 64.0403 100.366 64.7619 97.2947 64.7619C93.8986 64.7619 90.714 64.1385 87.7409 62.894C84.7679 61.6495 82.1383 59.8798 79.8522 57.5826C77.5638 55.3539 75.785 52.7142 74.5112 49.6634C73.2373 46.6149 72.6004 43.418 72.6004 40.0727C72.6004 36.7274 73.2373 33.5305 74.5112 30.482C75.785 27.4335 77.5638 24.7618 79.8522 22.4646C82.1383 20.1697 84.7656 18.4 87.7409 17.1532C90.7117 15.9087 93.8986 15.2853 97.2947 15.2853C100.432 15.2853 103.386 15.9407 106.164 17.2514C108.939 18.5644 111.307 20.4004 113.268 22.7615V15.2739H122.087V64.6455H113.268V56.7925ZM91.0734 25.0587C89.0807 25.8785 87.3656 27.0111 85.9302 28.452C84.4926 29.8951 83.3666 31.6169 82.55 33.6173C81.7334 35.6176 81.3262 37.7002 81.3262 39.8626C81.3262 42.0251 81.7334 44.0917 82.55 46.0601C83.3666 48.0284 84.4926 49.7342 85.9302 51.1751C87.3656 52.6183 89.0807 53.7486 91.0734 54.5684C93.066 55.3882 95.1406 55.7969 97.2947 55.7969C99.4489 55.7969 101.508 55.3882 103.468 54.5684C105.429 53.7486 107.126 52.6183 108.564 51.1751C109.999 49.7342 111.127 48.0261 111.944 46.0601C112.761 44.0917 113.168 42.0274 113.168 39.8626C113.168 37.6979 112.758 35.6176 111.944 33.6173C111.127 31.6169 109.999 29.8951 108.564 28.452C107.126 27.0111 105.427 25.8785 103.468 25.0587C101.508 24.2389 99.4512 23.8302 97.2947 23.8302C95.1383 23.8302 93.0638 24.2412 91.0734 25.0587Z" fill="#FDB918"/>
                    <path d="M81.4308 64.641H69.0313L48.2973 43.8314V35.0582L67.9918 15.2831H80.3913L56.3225 39.4403L81.4308 64.641Z" fill="#FDB918"/>
                    <path d="M125.883 15.2717H134.866V64.5542H125.883V15.2717Z" fill="#FDB918"/>
                    <path d="M124.355 6.10575C124.355 2.749 127.03 0.157227 130.28 0.157227C133.531 0.157227 136.201 2.749 136.201 6.10575C136.201 9.46249 133.529 12.0543 130.28 12.0543C127.032 12.0543 124.355 9.36887 124.355 6.10575Z" fill="#FDB918"/>
                    <path d="M0.546387 40.139C0.546387 25.4607 9.81586 15.2922 23.3868 15.2922C36.9578 15.2922 45.3652 24.5016 45.3652 38.4127V41.7694L9.24036 41.8653C9.90913 51.746 15.0705 57.215 23.9578 57.215C30.9321 57.215 35.5224 54.3378 37.0488 48.9647H45.4584C43.1632 59.0373 35.3268 64.6981 23.7667 64.6981C10.0069 64.6981 0.546387 54.7192 0.546387 40.139ZM9.43371 35.8209H36.3823C36.3823 28.0502 31.3165 22.8689 23.3868 22.8689C15.4572 22.8689 10.5779 27.5706 9.43371 35.8209Z" fill="#FDB918"/>
                    <path d="M4.2713 84.1164C4.2713 83.5318 4.41389 82.9988 4.69907 82.5176C4.98425 82.0364 5.36745 81.6532 5.84869 81.368C6.32993 81.0828 6.86285 80.9402 7.44747 80.9402C7.95366 80.9402 8.42064 81.0489 8.8484 81.2664C9.27973 81.4838 9.63621 81.7815 9.91782 82.1594C10.1994 82.5337 10.3741 82.9579 10.4418 83.432H9.14784C9.07655 83.0648 8.8787 82.7654 8.55431 82.5337C8.22992 82.2984 7.86098 82.1807 7.44747 82.1807C7.091 82.1807 6.76661 82.2681 6.4743 82.4428C6.18199 82.6174 5.9485 82.8509 5.77383 83.1432C5.59916 83.4355 5.51183 83.7599 5.51183 84.1164C5.51183 84.4729 5.59916 84.7972 5.77383 85.0896C5.9485 85.3819 6.18199 85.6154 6.4743 85.79C6.76661 85.9647 7.091 86.052 7.44747 86.052C7.86098 86.052 8.21032 85.9362 8.4955 85.7045C8.78424 85.4692 8.96604 85.168 9.0409 84.8008H10.3349C10.2672 85.2749 10.1014 85.7009 9.83761 86.0788C9.57382 86.4531 9.23518 86.7489 8.82167 86.9664C8.41172 87.1838 7.95366 87.2926 7.44747 87.2926C6.86285 87.2926 6.32993 87.15 5.84869 86.8648C5.36745 86.5796 4.98425 86.1964 4.69907 85.7152C4.41389 85.2339 4.2713 84.701 4.2713 84.1164ZM7.394 89.7629C6.61689 89.7629 5.88612 89.6167 5.20169 89.3244C4.52083 89.0321 3.92018 88.6275 3.39973 88.1107C2.88284 87.5902 2.47647 86.9896 2.18059 86.3087C1.88829 85.6278 1.74392 84.8971 1.74748 84.1164C1.75105 83.3357 1.89898 82.6049 2.19129 81.9241C2.48716 81.2432 2.89354 80.6443 3.41042 80.1275C3.92731 79.607 4.52618 79.2006 5.20704 78.9083C5.8879 78.616 6.61689 78.4699 7.394 78.4699C8.17467 78.4699 8.90544 78.616 9.5863 78.9083C10.2707 79.2006 10.8696 79.607 11.3829 80.1275C11.8998 80.6443 12.3044 81.2432 12.5967 81.9241C12.889 82.6049 13.0369 83.3357 13.0405 84.1164C13.0441 84.8971 12.8997 85.6278 12.6074 86.3087C12.3151 86.9896 11.9105 87.5902 11.3936 88.1107C10.8767 88.6275 10.2761 89.0321 9.59165 89.3244C8.90722 89.6167 8.17467 89.7629 7.394 89.7629ZM7.394 88.5224C8.00356 88.5224 8.5757 88.4083 9.11041 88.1802C9.64512 87.952 10.1139 87.6365 10.5167 87.2337C10.9195 86.8309 11.235 86.3639 11.4631 85.8328C11.6913 85.2981 11.8036 84.7277 11.8 84.1217C11.7964 83.5122 11.6806 82.94 11.4524 82.4053C11.2243 81.8706 10.9088 81.4019 10.506 80.999C10.1032 80.5962 9.63621 80.2807 9.10506 80.0526C8.57392 79.8245 8.00356 79.7104 7.394 79.7104C6.788 79.7104 6.21942 79.8245 5.68828 80.0526C5.15714 80.2807 4.69016 80.598 4.28734 81.0044C3.88453 81.4072 3.56727 81.876 3.33556 82.4107C3.10742 82.9418 2.99157 83.5122 2.988 84.1217C2.98444 84.7242 3.09673 85.2927 3.32487 85.8275C3.55301 86.3586 3.86849 86.8256 4.2713 87.2284C4.67768 87.6312 5.14644 87.9485 5.67758 88.1802C6.21229 88.4083 6.78443 88.5224 7.394 88.5224ZM19.6535 89.5918V88.6293L23.2681 84.6725C23.6923 84.2091 24.0417 83.8063 24.3162 83.464C24.5907 83.1183 24.7938 82.7939 24.9257 82.4909C25.0612 82.1843 25.1289 81.8635 25.1289 81.5284C25.1289 81.1434 25.0362 80.8101 24.8509 80.5285C24.6691 80.2469 24.4195 80.0294 24.1023 79.8762C23.785 79.7229 23.4286 79.6462 23.0329 79.6462C22.6122 79.6462 22.2451 79.7336 21.9314 79.9082C21.6212 80.0793 21.3806 80.32 21.2095 80.6301C21.042 80.9402 20.9582 81.3038 20.9582 81.7209H19.6963C19.6963 81.0792 19.8442 80.516 20.1401 80.0312C20.436 79.5464 20.8388 79.1686 21.3485 78.8976C21.8619 78.6267 22.4376 78.4913 23.0756 78.4913C23.7173 78.4913 24.2859 78.6267 24.7814 78.8976C25.2769 79.1686 25.6654 79.5339 25.947 79.9938C26.2286 80.4536 26.3694 80.9652 26.3694 81.5284C26.3694 81.9312 26.2964 82.3251 26.1502 82.7101C26.0076 83.0915 25.7581 83.5175 25.4016 83.9881C25.0487 84.455 24.5586 85.0254 23.9312 85.6991L21.4715 88.3299V88.4154H26.5619V89.5918H19.6535ZM32.3421 89.7415C31.5365 89.7415 30.8503 89.5223 30.2835 89.0838C29.7167 88.6418 29.2836 88.0019 28.9842 87.1642C28.6847 86.3229 28.535 85.307 28.535 84.1164C28.535 82.9329 28.6847 81.9223 28.9842 81.0846C29.2872 80.2433 29.7221 79.6017 30.2889 79.1596C30.8592 78.7141 31.5436 78.4913 32.3421 78.4913C33.1406 78.4913 33.8233 78.7141 34.3901 79.1596C34.9604 79.6017 35.3953 80.2433 35.6948 81.0846C35.9978 81.9223 36.1493 82.9329 36.1493 84.1164C36.1493 85.307 35.9995 86.3229 35.7001 87.1642C35.4007 88.0019 34.9676 88.6418 34.4008 89.0838C33.834 89.5223 33.1478 89.7415 32.3421 89.7415ZM32.3421 88.5652C33.1406 88.5652 33.7609 88.1802 34.2029 87.4102C34.6449 86.6402 34.866 85.5423 34.866 84.1164C34.866 83.1682 34.7644 82.3608 34.5612 81.6942C34.3616 81.0276 34.0728 80.5196 33.6949 80.1702C33.3207 79.8209 32.8697 79.6462 32.3421 79.6462C31.5508 79.6462 30.9323 80.0366 30.4867 80.8172C30.0411 81.5943 29.8183 82.6941 29.8183 84.1164C29.8183 85.0646 29.9181 85.8702 30.1178 86.5333C30.3174 87.1963 30.6043 87.7007 30.9786 88.0465C31.3565 88.3923 31.811 88.5652 32.3421 88.5652ZM38.1811 89.5918V88.6293L41.7958 84.6725C42.22 84.2091 42.5693 83.8063 42.8438 83.464C43.1183 83.1183 43.3215 82.7939 43.4534 82.4909C43.5888 82.1843 43.6566 81.8635 43.6566 81.5284C43.6566 81.1434 43.5639 80.8101 43.3785 80.5285C43.1967 80.2469 42.9472 80.0294 42.6299 79.8762C42.3127 79.7229 41.9562 79.6462 41.5605 79.6462C41.1399 79.6462 40.7727 79.7336 40.459 79.9082C40.1489 80.0793 39.9083 80.32 39.7371 80.6301C39.5696 80.9402 39.4858 81.3038 39.4858 81.7209H38.2239C38.2239 81.0792 38.3719 80.516 38.6677 80.0312C38.9636 79.5464 39.3664 79.1686 39.8762 78.8976C40.3895 78.6267 40.9652 78.4913 41.6033 78.4913C42.2449 78.4913 42.8135 78.6267 43.309 78.8976C43.8045 79.1686 44.193 79.5339 44.4747 79.9938C44.7563 80.4536 44.8971 80.9652 44.8971 81.5284C44.8971 81.9312 44.824 82.3251 44.6778 82.7101C44.5353 83.0915 44.2857 83.5175 43.9293 83.9881C43.5764 84.455 43.0862 85.0254 42.4588 85.6991L39.9992 88.3299V88.4154H45.0896V89.5918H38.1811ZM46.806 87.346V86.2552L51.6184 78.641H52.4097V80.3307H51.875L48.239 86.0841V86.1697H54.7197V87.346H46.806ZM51.9606 89.5918V87.0145V86.5065V78.641H53.2225V89.5918H51.9606ZM61.1509 89.5918V78.641H67.7599V79.8173H62.4769V83.5175H67.4176V84.6939H62.4769V88.4154H67.8454V89.5918H61.1509ZM71.1553 86.5974L71.1339 85.0361H71.3905L74.9838 81.3787H76.5451L72.7166 85.25H72.6097L71.1553 86.5974ZM69.9789 89.5918V78.641H71.2408V89.5918H69.9789ZM75.1976 89.5918L71.9894 85.528L72.8877 84.6511L76.8018 89.5918H75.1976ZM80.5862 89.7843C80.0657 89.7843 79.5934 89.6863 79.1692 89.4902C78.745 89.2906 78.4081 89.0036 78.1586 88.6293C77.9091 88.2515 77.7843 87.7952 77.7843 87.2605C77.7843 86.7899 77.877 86.4085 78.0623 86.1162C78.2477 85.8203 78.4955 85.5886 78.8056 85.4211C79.1157 85.2535 79.4579 85.1288 79.8322 85.0468C80.2101 84.9612 80.5897 84.8935 80.9712 84.8436C81.4702 84.7794 81.8748 84.7313 82.1849 84.6992C82.4986 84.6636 82.7268 84.6048 82.8694 84.5228C83.0155 84.4408 83.0886 84.2982 83.0886 84.095V84.0522C83.0886 83.5246 82.9442 83.1147 82.6555 82.8224C82.3703 82.5301 81.9372 82.3839 81.3561 82.3839C80.7537 82.3839 80.2814 82.5158 79.9392 82.7796C79.597 83.0434 79.3563 83.325 79.2173 83.6245L78.0196 83.1967C78.2335 82.6976 78.5186 82.3091 78.8751 82.031C79.2351 81.7494 79.6273 81.5534 80.0515 81.4428C80.4792 81.3288 80.8999 81.2717 81.3134 81.2717C81.5772 81.2717 81.8802 81.3038 82.2224 81.368C82.5682 81.4286 82.9015 81.5551 83.2223 81.7476C83.5467 81.9401 83.8158 82.2306 84.0297 82.6192C84.2436 83.0078 84.3505 83.5282 84.3505 84.1806V89.5918H83.0886V88.4796H83.0244C82.9389 88.6578 82.7963 88.8486 82.5967 89.0517C82.397 89.2549 82.1315 89.4278 81.8 89.5704C81.4684 89.713 81.0638 89.7843 80.5862 89.7843ZM80.7787 88.6507C81.2777 88.6507 81.6984 88.5527 82.0406 88.3566C82.3864 88.1606 82.6466 87.9075 82.8212 87.5973C82.9995 87.2872 83.0886 86.961 83.0886 86.6188V85.4639C83.0351 85.528 82.9175 85.5868 82.7357 85.6403C82.5575 85.6902 82.3507 85.7348 82.1154 85.774C81.8837 85.8096 81.6574 85.8417 81.4364 85.8702C81.2189 85.8952 81.0425 85.9166 80.907 85.9344C80.579 85.9772 80.2725 86.0467 79.9873 86.1429C79.7057 86.2356 79.4775 86.3764 79.3029 86.5653C79.1318 86.7507 79.0462 87.0038 79.0462 87.3246C79.0462 87.7631 79.2084 88.0946 79.5328 88.3192C79.8607 88.5402 80.276 88.6507 80.7787 88.6507ZM86.6538 89.5918V81.3787H87.9157V89.5918H86.6538ZM87.2954 80.0098C87.0494 80.0098 86.8373 79.9261 86.6591 79.7585C86.4844 79.591 86.3971 79.3896 86.3971 79.1543C86.3971 78.919 86.4844 78.7176 86.6591 78.5501C86.8373 78.3825 87.0494 78.2988 87.2954 78.2988C87.5414 78.2988 87.7517 78.3825 87.9264 78.5501C88.1046 78.7176 88.1937 78.919 88.1937 79.1543C88.1937 79.3896 88.1046 79.591 87.9264 79.7585C87.7517 79.9261 87.5414 80.0098 87.2954 80.0098ZM94.0341 79.8173V78.641H102.247V79.8173H98.8037V89.5918H97.4776V79.8173H94.0341ZM106.375 89.7629C105.584 89.7629 104.901 89.5882 104.327 89.2389C103.757 88.886 103.317 88.3941 103.006 87.7631C102.7 87.1286 102.547 86.3907 102.547 85.5494C102.547 84.7081 102.7 83.9667 103.006 83.325C103.317 82.6798 103.748 82.1772 104.3 81.8171C104.857 81.4535 105.505 81.2717 106.247 81.2717C106.675 81.2717 107.097 81.343 107.514 81.4856C107.931 81.6282 108.311 81.8599 108.653 82.1807C108.995 82.498 109.268 82.9186 109.471 83.4427C109.674 83.9667 109.776 84.6119 109.776 85.3783V85.913H103.445V84.8222H108.493C108.493 84.3588 108.4 83.9453 108.215 83.5817C108.033 83.2181 107.773 82.9311 107.434 82.7208C107.099 82.5105 106.703 82.4053 106.247 82.4053C105.744 82.4053 105.309 82.5301 104.942 82.7796C104.579 83.0256 104.299 83.3464 104.103 83.7421C103.907 84.1378 103.809 84.562 103.809 85.0147V85.7419C103.809 86.3622 103.915 86.888 104.129 87.3193C104.347 87.7471 104.648 88.0732 105.033 88.2978C105.418 88.5188 105.865 88.6293 106.375 88.6293C106.707 88.6293 107.006 88.583 107.273 88.4903C107.544 88.3941 107.778 88.2515 107.974 88.0625C108.17 87.87 108.321 87.6312 108.428 87.346L109.648 87.6882C109.519 88.1017 109.304 88.4653 109.001 88.779C108.698 89.0892 108.323 89.3316 107.878 89.5062C107.432 89.6774 106.931 89.7629 106.375 89.7629ZM115.032 89.7629C114.262 89.7629 113.599 89.5811 113.043 89.2175C112.487 88.8539 112.059 88.3531 111.76 87.715C111.46 87.0769 111.31 86.3479 111.31 85.528C111.31 84.6939 111.464 83.9578 111.77 83.3197C112.08 82.678 112.512 82.1772 113.064 81.8171C113.62 81.4535 114.269 81.2717 115.011 81.2717C115.588 81.2717 116.109 81.3787 116.572 81.5926C117.035 81.8064 117.415 82.1059 117.711 82.4909C118.007 82.8759 118.19 83.325 118.262 83.8383H117C116.904 83.464 116.69 83.1325 116.358 82.8438C116.03 82.5515 115.588 82.4053 115.032 82.4053C114.54 82.4053 114.109 82.5337 113.738 82.7903C113.371 83.0434 113.084 83.4017 112.877 83.8651C112.674 84.3249 112.572 84.865 112.572 85.4852C112.572 86.1198 112.672 86.6723 112.872 87.1428C113.075 87.6134 113.36 87.9788 113.727 88.239C114.098 88.4992 114.533 88.6293 115.032 88.6293C115.36 88.6293 115.658 88.5723 115.925 88.4582C116.192 88.3441 116.419 88.1802 116.604 87.9663C116.789 87.7524 116.921 87.4957 117 87.1963H118.262C118.19 87.6811 118.014 88.1178 117.732 88.5063C117.454 88.8913 117.085 89.1979 116.625 89.426C116.169 89.6506 115.638 89.7629 115.032 89.7629ZM121.368 84.6511V89.5918H120.106V78.641H121.368V82.662H121.475C121.668 82.2378 121.957 81.9009 122.342 81.6514C122.73 81.3983 123.247 81.2717 123.892 81.2717C124.452 81.2717 124.942 81.384 125.363 81.6086C125.783 81.8296 126.109 82.17 126.341 82.6299C126.576 83.0862 126.694 83.6672 126.694 84.373V89.5918H125.432V84.4586C125.432 83.8063 125.263 83.3018 124.924 82.9454C124.589 82.5853 124.124 82.4053 123.529 82.4053C123.115 82.4053 122.744 82.4927 122.416 82.6673C122.092 82.842 121.835 83.0969 121.646 83.432C121.461 83.767 121.368 84.1734 121.368 84.6511ZM130.265 84.6511V89.5918H129.003V81.3787H130.222V82.662H130.329C130.521 82.2449 130.814 81.9098 131.206 81.6567C131.598 81.4001 132.104 81.2717 132.724 81.2717C133.28 81.2717 133.767 81.3858 134.184 81.614C134.601 81.8385 134.925 82.1807 135.157 82.6406C135.389 83.0969 135.505 83.6744 135.505 84.373V89.5918H134.243V84.4586C134.243 83.8134 134.075 83.3108 133.74 82.9507C133.405 82.5871 132.945 82.4053 132.361 82.4053C131.958 82.4053 131.598 82.4927 131.28 82.6673C130.967 82.842 130.719 83.0969 130.537 83.432C130.355 83.767 130.265 84.1734 130.265 84.6511ZM141.147 89.7629C140.406 89.7629 139.755 89.5864 139.196 89.2335C138.639 88.8806 138.205 88.3869 137.891 87.7524C137.581 87.1179 137.426 86.3764 137.426 85.528C137.426 84.6725 137.581 83.9257 137.891 83.2876C138.205 82.6495 138.639 82.154 139.196 81.8011C139.755 81.4482 140.406 81.2717 141.147 81.2717C141.889 81.2717 142.537 81.4482 143.094 81.8011C143.653 82.154 144.088 82.6495 144.398 83.2876C144.712 83.9257 144.869 84.6725 144.869 85.528C144.869 86.3764 144.712 87.1179 144.398 87.7524C144.088 88.3869 143.653 88.8806 143.094 89.2335C142.537 89.5864 141.889 89.7629 141.147 89.7629ZM141.147 88.6293C141.71 88.6293 142.174 88.485 142.537 88.1962C142.901 87.9075 143.17 87.5278 143.345 87.0573C143.52 86.5867 143.607 86.077 143.607 85.528C143.607 84.979 143.52 84.4675 143.345 83.9934C143.17 83.5193 142.901 83.1361 142.537 82.8438C142.174 82.5515 141.71 82.4053 141.147 82.4053C140.584 82.4053 140.121 82.5515 139.757 82.8438C139.393 83.1361 139.124 83.5193 138.95 83.9934C138.775 84.4675 138.688 84.979 138.688 85.528C138.688 86.077 138.775 86.5867 138.95 87.0573C139.124 87.5278 139.393 87.9075 139.757 88.1962C140.121 88.485 140.584 88.6293 141.147 88.6293ZM148.057 78.641V89.5918H146.795V78.641H148.057ZM153.705 89.7629C152.963 89.7629 152.313 89.5864 151.753 89.2335C151.197 88.8806 150.762 88.3869 150.448 87.7524C150.138 87.1179 149.983 86.3764 149.983 85.528C149.983 84.6725 150.138 83.9257 150.448 83.2876C150.762 82.6495 151.197 82.154 151.753 81.8011C152.313 81.4482 152.963 81.2717 153.705 81.2717C154.446 81.2717 155.095 81.4482 155.651 81.8011C156.211 82.154 156.646 82.6495 156.956 83.2876C157.27 83.9257 157.426 84.6725 157.426 85.528C157.426 86.3764 157.27 87.1179 156.956 87.7524C156.646 88.3869 156.211 88.8806 155.651 89.2335C155.095 89.5864 154.446 89.7629 153.705 89.7629ZM153.705 88.6293C154.268 88.6293 154.731 88.485 155.095 88.1962C155.459 87.9075 155.728 87.5278 155.902 87.0573C156.077 86.5867 156.164 86.077 156.164 85.528C156.164 84.979 156.077 84.4675 155.902 83.9934C155.728 83.5193 155.459 83.1361 155.095 82.8438C154.731 82.5515 154.268 82.4053 153.705 82.4053C153.142 82.4053 152.678 82.5515 152.315 82.8438C151.951 83.1361 151.682 83.5193 151.507 83.9934C151.332 84.4675 151.245 84.979 151.245 85.528C151.245 86.077 151.332 86.5867 151.507 87.0573C151.682 87.5278 151.951 87.9075 152.315 88.1962C152.678 88.485 153.142 88.6293 153.705 88.6293ZM162.668 92.8428C162.058 92.8428 161.534 92.7644 161.096 92.6076C160.657 92.4543 160.292 92.2511 160 91.998C159.711 91.7485 159.481 91.4811 159.31 91.1959L160.315 90.4901C160.429 90.6398 160.574 90.8109 160.748 91.0034C160.923 91.1995 161.162 91.3688 161.465 91.5114C161.771 91.6576 162.172 91.7306 162.668 91.7306C163.331 91.7306 163.878 91.5702 164.309 91.2494C164.741 90.9286 164.956 90.4259 164.956 89.7415V88.0732H164.849C164.757 88.2229 164.625 88.4083 164.454 88.6293C164.286 88.8468 164.044 89.041 163.727 89.2122C163.413 89.3797 162.989 89.4635 162.454 89.4635C161.791 89.4635 161.196 89.3066 160.668 88.9929C160.144 88.6792 159.729 88.2229 159.422 87.6241C159.119 87.0252 158.968 86.298 158.968 85.4425C158.968 84.6012 159.116 83.8686 159.411 83.2448C159.707 82.6174 160.119 82.1326 160.647 81.7904C161.174 81.4446 161.784 81.2717 162.475 81.2717C163.01 81.2717 163.434 81.3609 163.748 81.5391C164.065 81.7138 164.308 81.9134 164.475 82.138C164.646 82.359 164.778 82.5408 164.871 82.6834H164.999V81.3787H166.218V89.8271C166.218 90.5329 166.058 91.1068 165.737 91.5488C165.42 91.9944 164.992 92.3206 164.454 92.5273C163.919 92.7377 163.324 92.8428 162.668 92.8428ZM162.625 88.3299C163.131 88.3299 163.559 88.214 163.908 87.9823C164.258 87.7506 164.523 87.4173 164.705 86.9824C164.887 86.5475 164.978 86.0271 164.978 85.4211C164.978 84.8293 164.889 84.3071 164.71 83.8544C164.532 83.4017 164.268 83.047 163.919 82.7903C163.57 82.5337 163.138 82.4053 162.625 82.4053C162.09 82.4053 161.645 82.5408 161.288 82.8117C160.935 83.0826 160.67 83.4462 160.492 83.9025C160.317 84.3588 160.23 84.865 160.23 85.4211C160.23 85.9914 160.319 86.4958 160.497 86.9343C160.679 87.3692 160.946 87.7114 161.299 87.9609C161.655 88.2069 162.097 88.3299 162.625 88.3299ZM168.528 89.5918V81.3787H169.79V89.5918H168.528ZM169.17 80.0098C168.924 80.0098 168.712 79.9261 168.534 79.7585C168.359 79.591 168.272 79.3896 168.272 79.1543C168.272 78.919 168.359 78.7176 168.534 78.5501C168.712 78.3825 168.924 78.2988 169.17 78.2988C169.416 78.2988 169.626 78.3825 169.801 78.5501C169.979 78.7176 170.068 78.919 170.068 79.1543C170.068 79.3896 169.979 79.591 169.801 79.7585C169.626 79.9261 169.416 80.0098 169.17 80.0098ZM175.545 89.7629C174.754 89.7629 174.071 89.5882 173.497 89.2389C172.927 88.886 172.486 88.3941 172.176 87.7631C171.87 87.1286 171.716 86.3907 171.716 85.5494C171.716 84.7081 171.87 83.9667 172.176 83.325C172.486 82.6798 172.918 82.1772 173.47 81.8171C174.026 81.4535 174.675 81.2717 175.417 81.2717C175.844 81.2717 176.267 81.343 176.684 81.4856C177.101 81.6282 177.481 81.8599 177.823 82.1807C178.165 82.498 178.438 82.9186 178.641 83.4427C178.844 83.9667 178.946 84.6119 178.946 85.3783V85.913H172.615V84.8222H177.662C177.662 84.3588 177.57 83.9453 177.384 83.5817C177.203 83.2181 176.942 82.9311 176.604 82.7208C176.269 82.5105 175.873 82.4053 175.417 82.4053C174.914 82.4053 174.479 82.5301 174.112 82.7796C173.748 83.0256 173.469 83.3464 173.272 83.7421C173.076 84.1378 172.978 84.562 172.978 85.0147V85.7419C172.978 86.3622 173.085 86.888 173.299 87.3193C173.517 87.7471 173.818 88.0732 174.203 88.2978C174.588 88.5188 175.035 88.6293 175.545 88.6293C175.876 88.6293 176.176 88.583 176.443 88.4903C176.714 88.3941 176.948 88.2515 177.144 88.0625C177.34 87.87 177.491 87.6312 177.598 87.346L178.817 87.6882C178.689 88.1017 178.473 88.4653 178.17 88.779C177.867 89.0892 177.493 89.3316 177.047 89.5062C176.602 89.6774 176.101 89.7629 175.545 89.7629ZM186.683 83.2181L185.549 83.5389C185.478 83.35 185.373 83.1664 185.234 82.9882C185.098 82.8064 184.913 82.6566 184.678 82.539C184.443 82.4214 184.141 82.3625 183.774 82.3625C183.271 82.3625 182.853 82.4784 182.518 82.7101C182.186 82.9382 182.02 83.2288 182.02 83.5817C182.02 83.8954 182.134 84.1431 182.362 84.3249C182.591 84.5067 182.947 84.6582 183.432 84.7794L184.651 85.0789C185.385 85.2571 185.933 85.5298 186.293 85.897C186.653 86.2606 186.833 86.7293 186.833 87.3032C186.833 87.7738 186.697 88.1944 186.426 88.5652C186.159 88.9359 185.785 89.2282 185.303 89.4421C184.822 89.656 184.262 89.7629 183.624 89.7629C182.787 89.7629 182.093 89.5811 181.544 89.2175C180.995 88.8539 180.648 88.3228 180.502 87.6241L181.699 87.3246C181.814 87.7667 182.029 88.0982 182.346 88.3192C182.667 88.5402 183.086 88.6507 183.603 88.6507C184.191 88.6507 184.658 88.5259 185.004 88.2764C185.353 88.0233 185.528 87.7203 185.528 87.3674C185.528 87.0822 185.428 86.8434 185.229 86.6509C185.029 86.4548 184.722 86.3087 184.309 86.2124L182.94 85.8916C182.188 85.7134 181.635 85.4371 181.282 85.0628C180.933 84.685 180.758 84.2126 180.758 83.6458C180.758 83.1824 180.888 82.7725 181.149 82.416C181.412 82.0595 181.771 81.7797 182.223 81.5765C182.68 81.3733 183.197 81.2717 183.774 81.2717C184.587 81.2717 185.225 81.45 185.688 81.8064C186.155 82.1629 186.487 82.6335 186.683 83.2181Z" fill="#FDB918"/>
                  </svg>
                  </div>
                </div>
                <div className='col-md-7'>
                  <nav className='nav'>
                    <a className='nav-link active' aria-current='page' href='#herosection'>Overview</a>
                    <a className='nav-link' href='#herosection'>How Ekai Works</a>
                    <a className='nav-link' href='/terms-and-conditions'>Terms & Conditions</a>
                    <a className='nav-link' href='#features'>Features</a>
                    <a className='nav-link' href='#integrateekai'>Integrations</a>
                    <a className='nav-link' href='#testimonial'>Use Cases</a>
                    <a className='nav-link' href='#faqs'>FAQs</a>
                  </nav> 
                </div>
              </div>
          </div>
        </footer>
        {/* <CustomScript /> */}
      </main>
</body>
    </>
  )
}