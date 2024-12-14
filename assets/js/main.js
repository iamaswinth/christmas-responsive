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


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
