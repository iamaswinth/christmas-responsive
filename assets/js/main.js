const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*=============== SHOW MENU ===============*/
if (navToggle) {
    navToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent this click from triggering the outside click listener
        navMenu.classList.add('show-menu');
    });
}

/*=============== HIDE MENU WITH CLOSE BUTTON ===============*/
if (navClose) {
    navClose.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent triggering the outside click listener
        navMenu.classList.remove('show-menu');
    });
}

/*=============== CLOSE MENU ON OUTSIDE CLICK ===============*/
document.addEventListener('click', (event) => {
    if (
        navMenu.classList.contains('show-menu') && // Check if the menu is open
        !navMenu.contains(event.target) && // Ensure the click is outside the menu
        event.target !== navToggle // Ensure the click is not on the toggle button
    ) {
        navMenu.classList.remove('show-menu');
    }
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => 
    n.addEventListener('click', linkAction)
)

/*=============== HOVER EFFECT IMAGE ===============*/
const images = document.querySelectorAll('#giving-img')

images.forEach(image => {
    image.addEventListener('click', () => {
        event.stopPropagation();
        image.classList.toggle('image-moved');
    })
});

document.addEventListener('click', () => {
    images.forEach(image => {
        image.classList.remove('image-moved');
    })
});


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');

    if(window.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== HEART COLOR CHANGE ===============*/
const heartIcons = document.querySelectorAll('.gift__icon')

heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        if(heartIcon.classList.contains('bx-heart')){
            heartIcon.classList.remove('bx-heart');
            heartIcon.classList.add('bxs-heart');
        }else{
            heartIcon.classList.add('bx-heart');
            heartIcon.classList.remove('bxs-heart');
        }
    })
})



/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        },
      }
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50, 
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(window.scrollY >= 350) scrollUp.classList.add('show-scrollup');
    else scrollUp.classList.remove('show-scrollup')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true !!animation repeat
})

sr.reveal('.home__img, .new__container, .footer__container')
sr.reveal('.home__data', {delay: 500})
sr.reveal('.giving__content, .gift__card', {interval: 100})
sr.reveal('.celebrate__data, .message__form, .footer__img1', {origin: 'left'})
sr.reveal('.celebrate__img, .message__img, .footer__img2', {origin: 'right'})