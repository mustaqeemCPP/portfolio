// let sections = document.querySelectorAll('.section');

// let divs = document.querySelectorAll('.box');

// window.onscroll = scrollWindow;

// function scrollWindow() {
//     sections.forEach(sec => {
//         let scrollDistance = window.scrollY;
//         let secDistance = sec.offsetTop;

//         if(scrollDistance >= secDistance - 450) {
//             sec.classList.add('show-animate');
//         }
//         else if (scrollDistance <= secDistance + 450) {
//             sec.classList.remove('show-animate');
//         }
//     })
// }


// function test () {
//     if (scrollDist < '5px') {
//         document.body.style.backgroundColor = 'yellow'
//     } else if (scrollDist > '5px') {
//         document.body.style.backgroundColor = '#0a0a0a'
//     }
// }

// window.onscroll = test;


//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {
  // Use Intersection Observer to determine if objects are within the viewport

  const Objoptions = {
    root: null,
    threshold: 0.1,
    // rootMargin: "-50px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("in-view"); //it gets removed only on page reload
      } 
      
    //   else {
    //     entry.target.classList.remove("in-view");
    //   }
      
     //stops the animation to repeat everytime user scrolls the page
    });
  }, Objoptions);

  // Get all the elements with the .animate class applied
  const allAnimatedElements = document.querySelectorAll(".animate");

  // Add the observer to each of those elements

  allAnimatedElements.forEach((element) => observer.observe(element));

   // Check if the page is scrolled to the top
  //  window.addEventListener('scroll', () => {
  //   if (window.scrollY === 0) {
  //     allAnimatedElements.forEach((element) => element.classList.remove("in-view"));
  //   }
  // });
});

// Mobile view Hamburger Menu

const mobileButton = document.querySelector('.mb-btn-trigger');
const navLinks = document.querySelector('.f-screen-wrapper');
const navLink = document.querySelectorAll('.mobile-navi-link')

function mobileMenu () {
    // event.currentTarget.classList.toggle('rotate');
    mobileButton.classList.toggle('rotate');
    // console.log('it was clicked')
  }



mobileButton.addEventListener('click', mobileMenu);
mobileButton.addEventListener('click', navContent);
// navLink.addEventListener('click', test);


navLink.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    mobileButton.classList.toggle('rotate');
    if (mobileButton.classList.contains('rotate')) {
      navLinks.style.display = 'block'
    }
    else {
      navLinks.style.display = 'none'
    }
  })
})

// function  () {
//   mobileButton.classList.toggle('rotate');
//   if (mobileButton.classList.contains('rotate')) {
//     navLinks.style.display = 'block'
//   }
//   else {
//     navLinks.style.display = 'none'
//   }
// }


function navContent () {
  if (mobileButton.classList.contains('rotate')) {
    navLinks.style.display = 'block'
  }
  else {
    navLinks.style.display = 'none'
  }
}


