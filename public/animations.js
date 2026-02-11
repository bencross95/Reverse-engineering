function runAnimations() {
  gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 0.4 });

  var tl = gsap.timeline();

  tl.to("summary", {
    keyframes: {
      opacity: [0, 1],
      autoAlpha: [0, 1],
    },
    duration: 0.1,
    ease: "power4.in",
    stagger: 0.07,
  });
}

// If splash screen exists, wait for it to finish; otherwise run immediately
if (document.getElementById('splash-screen')) {
  window.addEventListener('splashDone', runAnimations);
} else {
  runAnimations();
}
