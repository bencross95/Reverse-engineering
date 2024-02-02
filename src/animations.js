gsap.fromTo("body",
 { opacity: 0 },
 { opacity: 1, duration: 1, delay: 0.4 });


var tl = gsap.timeline();

function init() {
  tl.to("summary", {
    keyframes: {
      opacity: [0, 1],
      autoAlpha: [0, 1]
    },
    delay: 0.4,
    duration: 0.1,
    ease: "power4.in",
    stagger: 0.07, // 0.1 seconds between when each ".box" element starts animating
  });
}

window.addEventListener("load", function (event) {
  init();
});
