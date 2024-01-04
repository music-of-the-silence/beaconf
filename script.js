
// let menuToggle = document.querySelector('.toggle');
// menuToggle.onclick = function(){
//   menuToggle.classList.toggle('active')
// }




var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#Home'),
    smooth: true
});




function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from(".header", {
      y: "-10",
      opacity: 0,
      duration: 1,
      ease: Expo.easeInOut,
    })
      .to(".boundingelem", {
        y: "0",
        ease: Expo.easeInOut,
        duration: .2,
        stagger: 0.5,

      })
      .to(".boundingelems", {
        y: "0",
        ease: Expo.easeInOut,
        duration: 1,
      })
      .from(".btn", {
        y: "10",
        opacity: 0,
        ease: Expo.easeInOut,
        duration: 0.5,
        stagger:0.1
      })
  }
  firstPageAnim();




  function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          ".minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 50);
    });
  }
  circleChaptaKaro();

  


  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        ".minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  circleMouseFollower();




  var loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    loader.style.display = "none";
  });




const menuToggle = document.querySelector('.toggle');
const menuList = document.querySelector('#menu-list');
menuToggle.addEventListener('click', function(){
  menuList.classList.toggle('active');
})