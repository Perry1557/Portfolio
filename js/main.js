'use strict'
















// ============================ hero write animation =================

const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0 );
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 4000 );
    setTimeout(() => {
        text.textContent = "Coming Soon";
    }, 8000 );
    
    setTimeout(() => {
        text.textContent = " Freelancer";
    }, 12000 );
}

textLoad();
setInterval(textLoad, 16000);



//=================== portfolio swiper =====================

// let swiperCards = new Swiper(".card__content", {
//   loop: true,
//   spaceBetween: 32,
//   grabCursor: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints:{
//     600: {
//       slidesPerView: 2,
//     },
//     968: {
//       slidesPerView: 3,
//     },
//   },
// });



