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

// passive event listener
document.addEventListener('touchstart', onTouchStart, {passive: true});




// Mobile menu toggle

searchBox({
  container: document.querySelector('#searchbox'),
});



// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closed")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
