new Swiper(".swiper",{
    autoplay: {
        delay: 2000, 
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "coverflow",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
    }
});


function openNav() {
    let hamburger = document.querySelector("#hamburger");
    let body = document.querySelector("#body");
    let navElements = document.querySelector("#navElements");
    hamburger.onclick = function() {
        hamburger.classList.toggle("hamburger_active"); 
        navElements.classList.toggle("nav__elements_active");
        body.classList.toggle("scroll-none");
    }
    let navLinks = document.querySelectorAll("#navElements a");
    navLinks.forEach(function(navLink){
        navLink.onclick = function() {
            hamburger.classList.remove("hamburger_active");
            navElements.classList.remove("nav__elements_active");
            body.classList.remove("scroll-none");
        }
    })
}
openNav();