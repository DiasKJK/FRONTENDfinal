

document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
});

// For header 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

// for window scroll 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}


window.onload = () =>{
  if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
  }else{
      document.querySelector('.header').classList.remove('active');
  }
}

// for home pages 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  });

//   for feature section 

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  //   for trainers section 

var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

    //   for blogs section 

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 20,
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: '300px',
    duration: 2000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 600,
    reset: true, 
  });

  sr.reveal('.reveal', {
    origin: 'left',
    scale: 1,
  });
  sr.reveal('.downreveal', {
    origin: 'bottom',
    scale: 1.2,
  });
  sr.reveal('.topreveal', {
    origin: 'top',
    scale: 1,
  });

  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
});
