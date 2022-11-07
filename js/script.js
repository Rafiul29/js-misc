import Lenis from '@studio-freight/lenis'



const intro = document.querySelector(".intro");
const introLogo = document.querySelectorAll(".intro-logo");

window.addEventListener("DOMContentLoaded", function () {
  //logo appearing
  setTimeout(() => {
    introLogo.forEach((logo, i) => {
      setTimeout(() => {
        logo.classList.add("active");
      }, 500 * (i + 1));
    });
    // logo disapearing
    setTimeout(() => {
      introLogo.forEach((logo, i) => {
        setTimeout(() => {
          logo.classList.remove("active");
          logo.classList.add("fade");
        }, 50 * (i + 1));
      });
    }, 2000);

    // screen disappearing

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2500);


  });
});


// smooth scrolling


const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    smooth: true,
   
  })
  
 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


  //cutom cursor

  const inneCursor=document.querySelector(".inner-cursor")
  const outerCursor=document.querySelector(".outer-cursor")

const links = document.querySelectorAll('a')


  document.addEventListener('mousemove',function(e){
    const x = e.clientX
    const y = e.clientY

    inneCursor.style.left=`${x}px`
    inneCursor.style.top=`${y}px`    

    outerCursor.style.left=`${x}px`
    outerCursor.style.top=`${y}px`  
  })

  links.forEach((link)=>{
    console.log(link);
    link.addEventListener("mouseover",function(){
        inneCursor.classList.add('grow')
    })

    link.addEventListener("mouseleave",function(){
        inneCursor.classList.remove('grow')
    })
  })