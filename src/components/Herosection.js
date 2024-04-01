// components/ContactForm.js
import React, { useEffect, useRef, useState } from 'react';

function Herosection() {
  const videoRef = useRef(null);
  const backgroundRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  

  useEffect(() => {
    // const background = backgroundRef.current;
    
    // // Background movement logic
    // document.addEventListener('pointermove', function(e) {
    //   const offsetX = e.clientX / window.innerWidth * 24; // Adjusted for 24px movement
    //   const offsetY = e.clientY / window.innerHeight * 24; // Adjusted for 24px movement
      
    //   background.style.backgroundPositionX = `calc(50% + ${offsetX}px)`; // Adjusted for 24px movement
    //   background.style.backgroundPositionY = `calc(50% + ${offsetY}px)`; // Adjusted for 24px movement
    // });

    // const options = {
    //   root: null, // use the viewport as the root
    //   rootMargin: '0px', // no margin
    //   threshold: 0.5, // trigger when 50% of the video is visible
    // };

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       // If video is visible, play the video
    //       videoRef.current.play();
    //     } else {
    //       // If video is not visible, pause the video
    //       videoRef.current.pause();
    //     }
    //   });
    // }, options);

    // // Observe the video element
    // observer.observe(videoRef.current);

    // // Cleanup
    // return () => {
    //   observer.unobserve(videoRef.current);
    // };
    const background = backgroundRef.current;
    
    // Background movement logic
    document.addEventListener('pointermove', function(e) {
      const offsetX = e.clientX / window.innerWidth * 24; // Adjusted for 24px movement
      const offsetY = e.clientY / window.innerHeight * 24; // Adjusted for 24px movement
      
      background.style.backgroundPositionX = `calc(50% + ${offsetX}px)`; // Adjusted for 24px movement
      background.style.backgroundPositionY = `calc(50% + ${offsetY}px)`; // Adjusted for 24px movement
    });

    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px', // no margin
      threshold: 0.5, // trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If video is visible, play the video
          videoRef.current.play();
        } else {
          // If video is not visible, pause the video
          videoRef.current.pause();
        }
      });
    }, options);

    // Observe the video element
    observer.observe(videoRef.current);

    // Cleanup
    return () => {
      observer.unobserve(videoRef.current);
    };

  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  return (
  <section id='herosection' className='py-lg-section herosec'>
    <div ref={backgroundRef} className='background'></div>
    <div className='container'>
      <div className='row'>
        <div className='text-center col-md-12 col-lg-10 mx-auto'>
          <h1 className='mb-3 mb-lg-4 text-center mw-80'><span className='tx-grad'>Instant insights</span>Smarter decisions</h1>
          <p>Make faster business decisions with effortless<br></br>AI-powered data analysis</p>
          <a href='#footer' className='btnsolid'>Get Started Now</a>
        </div>
        <div className='video-container'>
          <div className='muteicon'>
            <button className="muteicon" onClick={toggleMute}>
              {isMuted ? (
                <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.7106 0.766036C24.2006 0.513036 23.5916 0.569036 23.1386 0.912036L9.49456 11.206H3.22156C1.88156 11.206 0.790558 12.297 0.790558 13.638V24.808C0.790558 26.148 1.88156 27.238 3.22156 27.238H9.49456L23.1386 37.533C23.4036 37.733 23.7216 37.836 24.0416 37.836C24.2706 37.836 24.4986 37.784 24.7106 37.679C25.2196 37.425 25.5416 36.906 25.5416 36.336V2.10904C25.5416 1.53904 25.2196 1.02004 24.7106 0.766036ZM22.5416 33.325L10.9006 24.541C10.6406 24.345 10.3236 24.238 9.99756 24.238H3.79056V14.206H9.99756C10.3236 14.206 10.6416 14.1 10.9006 13.903L22.5416 5.11903V33.325ZM45.0446 26.005L38.2616 19.222L45.0436 12.439C45.6296 11.853 45.6296 10.904 45.0436 10.318C44.4576 9.73204 43.5086 9.73204 42.9226 10.318L36.1406 17.101L29.3586 10.318C28.7726 9.73204 27.8236 9.73204 27.2376 10.318C26.6516 10.904 26.6516 11.853 27.2376 12.439L34.0196 19.222L27.2376 26.005C26.6516 26.591 26.6516 27.54 27.2376 28.126C27.5306 28.419 27.9146 28.565 28.2986 28.565C28.6826 28.565 29.0666 28.419 29.3596 28.126L36.1416 21.343L42.9246 28.126C43.2176 28.419 43.6016 28.565 43.9856 28.565C44.3696 28.565 44.7536 28.419 45.0466 28.126C45.6306 27.54 45.6306 26.591 45.0446 26.005Z" fill="#FDB918"/>
                </svg>
              ) : (
                <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.92 0.156905C23.41 -0.0960949 22.801 -0.040095 22.348 0.302905L8.704 10.5969H2.431C1.091 10.5969 0 11.6879 0 13.0289V24.1989C0 25.5389 1.091 26.6289 2.431 26.6289H8.704L22.348 36.9239C22.613 37.1239 22.931 37.2269 23.251 37.2269C23.48 37.2269 23.708 37.1749 23.92 37.0699C24.429 36.8159 24.751 36.2969 24.751 35.7269V1.49991C24.751 0.929906 24.429 0.410905 23.92 0.156905ZM21.751 32.7159L10.11 23.9319C9.85 23.7359 9.533 23.6289 9.207 23.6289H3V13.5969H9.207C9.533 13.5969 9.851 13.4909 10.11 13.2939L21.751 4.5099V32.7159Z" fill="#FDB918"/>
                  <path d="M37.5009 31.3909C37.2555 31.3912 37.0138 31.3296 36.7969 31.2114C36.5801 31.0932 36.3948 30.9221 36.2573 30.713C36.1469 30.5451 36.0697 30.3565 36.0303 30.158C35.9909 29.9595 35.9899 29.7549 36.0275 29.5559C36.0651 29.357 36.1404 29.1677 36.2493 28.9987C36.3582 28.8298 36.4984 28.6846 36.6619 28.5715C38.1921 27.5282 39.4687 26.1373 40.3934 24.5063C41.318 22.8753 41.8659 21.0477 41.9947 19.1645C42.1236 17.2812 41.83 15.3927 41.1366 13.6447C40.4432 11.8966 39.3685 10.3357 37.9954 9.08232C37.6994 8.80855 37.5212 8.42507 37.5001 8.01624C37.479 7.60741 37.6168 7.20672 37.883 6.9023C38.1493 6.59789 38.5222 6.4147 38.9198 6.39303C39.3175 6.37137 39.7071 6.51299 40.0032 6.78676C41.7076 8.35359 43.0407 10.3007 43.9004 12.479C44.76 14.6572 45.1235 17.0089 44.963 19.3539C44.8025 21.6989 44.1222 23.975 42.9742 26.008C41.8263 28.0409 40.2411 29.7768 38.34 31.0827C38.0972 31.2706 37.8046 31.378 37.5009 31.3909Z" fill="#FDB918"/>
                  <path d="M34.5011 26.3908C34.2898 26.3925 34.0805 26.3477 33.887 26.2593C33.6936 26.171 33.5203 26.0412 33.3787 25.8783C33.1153 25.5713 32.98 25.1683 33.0024 24.7578C33.0248 24.3474 33.2032 23.9629 33.4984 23.6887C34.2847 22.9603 34.9139 22.0678 35.3447 21.0696C35.7754 20.0714 35.9981 18.99 35.9981 17.8962C35.9981 16.8025 35.7754 15.7211 35.3447 14.7229C34.9139 13.7247 34.2847 12.8322 33.4984 12.1038C33.352 11.9672 33.233 11.8019 33.1481 11.6176C33.0632 11.4332 33.0142 11.2333 33.0037 11.0292C32.9933 10.8252 33.0217 10.621 33.0874 10.4283C33.153 10.2357 33.2545 10.0583 33.3862 9.90638C33.5179 9.75445 33.6771 9.63092 33.8548 9.54284C34.0325 9.45477 34.2251 9.40387 34.4218 9.39305C34.6184 9.38223 34.8152 9.41172 35.0008 9.47981C35.1865 9.5479 35.3574 9.65328 35.5038 9.78991C36.6037 10.8096 37.4836 12.0588 38.0861 13.4557C38.6886 14.8526 39 16.3658 39 17.8962C39 19.4267 38.6886 20.9399 38.0861 22.3368C37.4836 23.7337 36.6037 24.9829 35.5038 26.0026C35.2271 26.2558 34.8701 26.3941 34.5011 26.3908Z" fill="#FDB918"/>
                  <path d="M29.6567 23.3906C29.4222 23.3903 29.1904 23.3435 28.9768 23.2533C28.7633 23.163 28.5727 23.0314 28.418 22.8673C28.1272 22.5629 27.9779 22.1635 28.0027 21.7567C28.0274 21.3499 28.2243 20.9688 28.5501 20.6971C28.9016 20.4082 29.1831 20.0529 29.3759 19.6549C29.5687 19.2568 29.6685 18.8251 29.6685 18.3884C29.6685 17.9516 29.5687 17.5199 29.3759 17.1219C29.1831 16.7238 28.9016 16.3685 28.5501 16.0797C28.2238 15.8062 28.0274 15.4231 28.0041 15.0146C27.9809 14.6062 28.1327 14.2059 28.4262 13.9018C28.7197 13.5977 29.1308 13.4147 29.5691 13.393C30.0074 13.3714 30.4369 13.5129 30.7633 13.7864C31.4663 14.3641 32.0293 15.0746 32.4149 15.8707C32.8006 16.6668 33 17.5303 33 18.4038C33 19.2772 32.8006 20.1407 32.4149 20.9368C32.0293 21.7329 31.4663 22.4434 30.7633 23.0212C30.4555 23.2666 30.0617 23.3981 29.6567 23.3906Z" fill="#FDB918"/>
                </svg>
              )}
            </button>
          </div>
          <video ref={videoRef} poster='/assets/images/placeholder.png' preload='auto' muted={isMuted}>
            <source src='/assets/ekaigpt.mp4' />
          </video>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Herosection;
