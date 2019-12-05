// Menu Functionality
const sideMenu = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideMenu, {edge: 'right', inDuration: 500, outDuration: 500});

const pllax = document.querySelectorAll('.parallax');
M.Parallax.init(pllax, {responsiveTheshold: 0});

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const images = document.querySelectorAll('.slide-in');
  function checkSlide(e) {
    images.forEach(image => {
      // Slide in at half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
      const imageBottom = image.offsetTop + image.height;
      const isHalfShown = slideInAt > image.offsetTop;
      const notScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && notScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', debounce(checkSlide));