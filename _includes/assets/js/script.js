const toggleButton = document.querySelector('.toggle-nav');
  const offcanvasNav = document.querySelector('.offcanvas');
  const closeNavButton = document.querySelector('.close-nav');
  
  toggleButton.addEventListener('click', function() {
    offcanvasNav.classList.toggle('open');
    toggleButton.classList.toggle('active');
  });
  
  function closeOffcanvasNav() {
    offcanvasNav.classList.remove('open');
    toggleButton.classList.remove('active');
  }
  
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
    if (
      !offcanvasNav.contains(targetElement) &&
      targetElement !== toggleButton &&
      !toggleButton.contains(targetElement) &&
      targetElement !== closeNavButton
    ) {
      closeOffcanvasNav();
    }
  });
  
  closeNavButton.addEventListener('click', function() {
    closeOffcanvasNav();
  });
  

const header = document.querySelector('.topbar');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
header.classList.toggle('scrolled', !entries[0].isIntersecting)

  }, {rootMargin: "200px 0px 0px 0px"});
navObserver.observe(scrollWatcher)


// Add event listeners to the parent menu item and the fly-out menu
var menuItem = document.querySelector('.main-menu > li');
var flyOutMenu = document.querySelector('.fly-out-menu');

menuItem.addEventListener('mouseenter', function() {
  flyOutMenu.style.display = 'block';
});

menuItem.addEventListener('mouseleave', function() {
  flyOutMenu.style.display = 'none';
});

flyOutMenu.addEventListener('mouseenter', function() {
  flyOutMenu.style.display = 'block';
});

flyOutMenu.addEventListener('mouseleave', function() {
  flyOutMenu.style.display = 'none';
});



