'use strict';


        // navbar responsiveness
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledscroll");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledscroll");
}

        // sticky navbar

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
    




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






