/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener("click", ()=> {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Close nav menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickToggle = navToggle.contains(event.target);

    // If click is outside both navMenu and navToggle, close menu
    if (!isClickInsideMenu && !isClickToggle) {
        navMenu.classList.remove('show-menu');
    }
});

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }

}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function  (modalClick) {
     modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i)=>{
    modalBtns.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses)=>{
    modalCloses.addEventListener('click', ()=>{
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

// Close services modal when clicking outside the modal content

document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.services__modal');
    
    modals.forEach(modal => {
        const isClickInsideModal = modal.querySelector('.services__modal-content').contains(event.target);
        const isActive = modal.classList.contains('active-modal');

        if (!isClickInsideModal && isActive && !event.target.classList.contains('services__button')) {
            modal.classList.remove('active-modal');
        }
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/

// var swiper = new Swiper(".portfolio__container", {
//     cssMode: true,
//     loop: true,

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
    
//   });

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun'; // Default icon for dark theme

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon';  // Corrected icon check

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If validation is fulfilled, we set the theme and icon based on the saved values
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Toggle dark theme and icon
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Add rotation effect to the icon
  themeButton.classList.toggle('rotate'); // Add/remove the 'rotate' class

  // Save the user's theme and icon choice
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// Nav logo

const themebutton = document.getElementById('theme-button');
const logoImg = document.getElementById('nav-logo-img');
themebutton.addEventListener('click', () => {
  if(document.body.classList.contains('dark-theme')) {
    logoImg.src = '/assets/img/nav-logo-dark.svg';
  } else {
    logoImg.src = '/assets/img/nav-logo-light.svg';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const logoImg = document.getElementById('nav-logo-img');
  if (!logoImg) return;
  const savedTheme = localStorage.getItem('selected-theme');
  const appliedTheme = savedTheme
    ? savedTheme
    : (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  logoImg.src = appliedTheme === 'dark'
    ? '/assets/img/nav-logo-dark.svg'
    : '/assets/img/nav-logo-light.svg';
});


// CONTAINER ANIMATION

document.addEventListener('DOMContentLoaded', function() {
        // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // When element leaves the viewport, remove the active class
                entry.target.classList.remove('active');
            }
        });
    }, {
        // Configure the observer:
        // - root: null (use the viewport)
        // - threshold: 0.15 (trigger when 15% of the element is visible)
        // - rootMargin: "0px" (no margin around the viewport)
        threshold: 0.50
    });

    // Get all elements with the pop-on-scroll class and observe them
    const animatedElements = document.querySelectorAll('.drop-on-scroll');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// FORM

const submitLink = document.getElementById('submitForm');
const hiddenSubmit = document.getElementById('hiddenSubmit');
const form = document.getElementById('contactForm');

submitLink.addEventListener('click', function (event) {
    event.preventDefault();
    hiddenSubmit.click();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            submitLink.innerHTML = 'Message Sent <i class="uil uil-check-circle button__icon"></i>';
            submitLink.style.pointerEvents = 'none';
            submitLink.style.opacity = '0.6';
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        alert('Something went wrong. Please try again.');
    });
});

// Animations - not currently used

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // Reverse effect
        }
    });
}, { threshold: 0.2 }); // Adjust sensitivity if needed

reveals.forEach(reveal => observer.observe(reveal));






// LOADING SCREEN

const MIN_DISPLAY_TIME = 1000; // total loader time (e.g., 4 sec)
const SCROLLBAR_APPEAR_BEFORE = 500; // show scrollbar 2 sec before loader hides

const startTime = Date.now();
const loader = document.getElementById('loading-screen');
document.body.classList.add('no-scroll');

window.addEventListener('load', function () {
  const timeElapsed = Date.now() - startTime;
  const remainingTime = Math.max(0, MIN_DISPLAY_TIME - timeElapsed);

  // 1. Remove 'no-scroll' to show scrollbar BEFORE loader fades out:
  setTimeout(() => {
    document.body.classList.remove('no-scroll'); // Scrollbar appears here

    // 2. After another interval, fade out the loader:
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); // match CSS transition
    }, SCROLLBAR_APPEAR_BEFORE);

  }, remainingTime - SCROLLBAR_APPEAR_BEFORE);
});


// SCROLL SNAP
