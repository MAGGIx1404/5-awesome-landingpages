TweenMax.from(".logo", 1, {
  delay: 1.5,
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});

TweenMax.to(".first", 2, {
  delay: 0.3,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 2, {
  delay: 0.5,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 2, {
  delay: 0.7,
  left: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  ".nav-btns li",
  1,
  {
    delay: 1.6,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut,
  },
  0.08
);

TweenMax.staggerFrom(
  ".icons li",
  1,
  {
    delay: 1.8,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut,
  },
  0.09
);

TweenMax.to(".bottom-border", 1.4, {
  delay: 2,
  width: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".title", 1, {
  delay: 2.2,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.from(".subtitle", 1.2, {
  delay: 2.5,
  opacity: 0,
  x: -100,
  ease: Expo.easeInOut,
});

TweenMax.from(".para", 1.2, {
  delay: 2.7,
  opacity: 0,
  x: -100,
  ease: Expo.easeInOut,
});

TweenMax.from(".watch", 1, {
  delay: 2.9,
  opacity: 0,
  x: -100,
  ease: Expo.easeInOut,
});

TweenMax.to(".img-1", 1, {
  delay: 3.1,
  width: "40rem",
  ease: Expo.easeInOut,
});

TweenMax.to(".img-2", 1, {
  delay: 3.3,
  width: "30rem",
  ease: Expo.easeInOut,
});

TweenMax.from(".slider-no", 1.2, {
  delay: 3.5,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut,
});

TweenMax.from(".prev", 1.2, {
  delay: 3.7,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
});

TweenMax.from(".next", 1.2, {
  delay: 3.8,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
});
