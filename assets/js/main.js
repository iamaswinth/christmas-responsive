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


/*=============== SCROLL REVEAL ANIMATION ===============*/
