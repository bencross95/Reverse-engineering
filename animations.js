var tl = gsap.timeline();

// gsap.to(".ui-div-bottom", { y: 10 })

// tl.fromTo(".ui-section", { y: 10 })

tl.fromTo(
  ".ui-section",
  { y: -20, opacity: 0 },
  { duration: 0.5, delay: 0.5, y: 0, opacity: 1 }
);
