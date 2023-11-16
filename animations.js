var tl = gsap.timeline();

// gsap.to(".ui-div-bottom", { y: 10 })

// tl.fromTo(".ui-section", { y: 10 })

tl.fromTo(
  ".ui-section",
  { y: -20, opacity: 0 },
  { duration: 0.5, delay: 0.5, y: 0, opacity: 1 }
);


tl.fromTo(
  ".yellow-container",
  { y: 0, opacity: 0 },
  { duration: 0.3, delay: 0.1, opacity: 1 }
);

tl.to(".yellow-container, .ui-div-bottom", {
  keyframes: {
    opacity: [0.5, 1, 0.3, 1],
    background: ["#FFFFFF", "#000002", "#faff54", "#000002"],
    // y: [0, 0, 100, 100, 0],
    // ease: "power1.inOut"
  },
  duration: 0.2
});



tl.to(".ui-top-lvl2, .ui-top-lvl1, .ui-top-lvl3", {
  keyframes: {
    opacity: [0.5, 1, 0.9, 1],
    // y: [0, 0, 100, 100, 0],
    // ease: "power1.inOut"
  },
  duration: 0.1
});

