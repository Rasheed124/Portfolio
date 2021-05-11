
const headerLogo = document.querySelector('.header-logo i');
const headerOpen = document.querySelector('.header-logo .open');
const headerClose = document.querySelector('.header-logo .close');
const navLinks = document.querySelector('.menu');


headerLogo.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    // headerClose.classList.toggle("show");

    // headerOpen.style.display = "none"

  });

// Intro Section Text Animation

var typed = new Typed('.typed-text', {
    strings: ['Rasheed Tolulope', 'A web Developer' ,' A Graphics Designer'],
    typeSpeed:60,
    backSpeed: 60,
    loop: true,
  });
   

// Header On scroll events
const header = document.querySelector(".header-nav");
const sectionOne = document.querySelector(".intro-container");
const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Page back to top button
const scrollBtn = document.querySelector('.scroll-btn') ;
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.transform = 'translateX(0px)' ;
    }
    else {
        scrollBtn.style.transform = 'translateX(100px)' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})



//    Client Section Auto Image Slider

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
   var slides = document.getElementsByClassName("fade");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 5000); // Change image every 2 seconds
}