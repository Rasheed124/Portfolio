
const navHarburger = document.querySelector(".nav_harmbuger ")
const navMenu =  document.querySelector(".menu");

// Toggle Nav

navHarburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");

        //  Burger Show
        navHarburger.classList.toggle('toggle');
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
      document.querySelector(".header .headerlogo").style = "color: rgb(160, 160, 172)";
    } else {
      header.classList.remove("scrolled");
      document.querySelector(".header .headerlogo").style = "color: white";
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


const workNavigator = document.querySelector(".work-navigator");
const cardFlow = document.querySelectorAll(".card-flow");

workNavigator.addEventListener("click", function(e){
  if(e.target.tagName = "li"){
     const showNavigor = document.querySelector(e.target.dataset.pop);
     cardFlow.forEach(card =>{
       if(card =  showNavigor ){
          card.classList.add('display')
       }
       else{
        card.classList.remove('display')
       }
     })
  }



})
