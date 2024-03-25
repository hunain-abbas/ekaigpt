window.addEventListener('DOMContentLoaded', event => {

  window.addEventListener('load', videoScroll);
  window.addEventListener('scroll', videoScroll);

  function videoScroll() {

    if ( document.querySelectorAll('video[autoplay]').length > 0) {
      var windowHeight = window.innerHeight,
          videoEl = document.querySelectorAll('video[autoplay]');

      for (var i = 0; i < videoEl.length; i++) {

        var thisVideoEl = videoEl[i],
            videoHeight = thisVideoEl.clientHeight,
            videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if ( videoClientRect <= ( (windowHeight) - (videoHeight*.8) ) && videoClientRect >= ( 0 - ( videoHeight*.8 ) ) ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }

      }
    }
  }

  // window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag(js, new Date());
  // gtag(config, G-K59Z9TWS6F);

});