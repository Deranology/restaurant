let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbars');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 
}
// this section of js  is to make the active class move when the user moves
// Get all the navbar links
const navLinks = document.querySelectorAll('.navbars a');

// Function to add or remove the active class
function updateNavbar() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each section on the page
  document.querySelectorAll('section').forEach((section) => {
    // Get the ID of the section
    const sectionId = section.id;

    // Get the corresponding navbar link
    const navLink = document.querySelector(`.navbars a[href="#${sectionId}"]`);

    // Get the position and height of the section
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Add or remove the active class based on scroll position
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}

// Listen for scroll events and update the navbar
window.addEventListener('scroll', updateNavbar);
// and it ends here

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider ", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
   
  loop: true,
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    640: {
      slidessPerView:2,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


