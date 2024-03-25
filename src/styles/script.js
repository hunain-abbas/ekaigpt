document.addEventListener('DOMContentLoaded', function() {
  const section = document.getElementById('howtostarted');
  const tabs = document.querySelectorAll('#pills-tab .nav-link');
  const lastTabIndex = tabs.length - 1;
  let currentTab = 0;
  let lastScrollTop = 0;
  let isSticky = true;

  function changeTab(direction) {
      if (direction === 'up' && currentTab > 0) {
          currentTab--;
      } else if (direction === 'down' && currentTab < lastTabIndex) {
          currentTab++;
      }
      tabs[currentTab].click();
  }

  function debounce(func, delay) {
      let timer;
      return function() {
          const context = this;
          const args = arguments;
          clearTimeout(timer);
          timer = setTimeout(() => {
              func.apply(context, args);
          }, delay);
      };
  }

  function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const direction = st > lastScrollTop ? 'down' : 'up';
      lastScrollTop = st;

      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible && direction === 'down' && currentTab < lastTabIndex && isSticky) {
          changeTab('down');
      } else if (isVisible && direction === 'up' && currentTab > 0 && isSticky) {
          changeTab('up');
      }

      if (currentTab === lastTabIndex) {
          isSticky = false;
          section.classList.remove('sticky'); // Replace 'sticky' with your CSS class for sticking the section
      } else {
          isSticky = true;
          section.classList.add('sticky');
      }
  }

  const debouncedScroll = debounce(handleScroll, 200); // Adjust the debounce time as needed
  window.addEventListener('scroll', debouncedScroll);
});