'use strict';



//================= header navigation==================
 //effect on scroll
window.addEventListener("scroll", function(){
    let header = this.document.querySelector(".head");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//responsive side navbar

let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});





// ============================ hero write animation =================

const text = document.querySelector('.sec-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer";
    }, 0 );
    setTimeout(() => {
        text.textContent = "Coming Soon";
    }, 4000 );

    setTimeout(() => {
        text.textContent = "Wordpress Developer";
    }, 8000 );
    
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 12000 );
}

textLoad();
setInterval(textLoad, 17000);






