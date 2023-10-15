import anime from 'animejs';

const SOFT_IN_OUT = '(0.33, 0.00, 0.67, 1.00)';
const SHARP_OUT = '(0.66, 0.00, 0.00, 1.00)';
// const HESI_OUT = '(0.84, 0.00, 0.04, 1.00)';
const HARD_IN = '(0.17, 0.00, 0.83, 1.00)';

const INTRO_CONTENT_END_STATE_Y = -20;
const DURATION_BASE = 1000;
export const DURATION_BOUNCE_ANIMATION = 1200;

export const enterSectionTitle = (el, done) => {
  anime({
    targets: el,
    translateY: [293, 0],
    duration: DURATION_BASE,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [0, 1],
    duration: 233,
    delay: 367,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};

export const leaveSectionTitle = (el, done) => {
  anime({
    targets: el,
    translateY: [0, -278],
    duration: DURATION_BASE,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [1, 0],
    duration: 267,
    delay: 100,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};

export const enterIntroContent = (el, done) => {
  anime({
    targets: el,
    translateY: [INTRO_CONTENT_END_STATE_Y, 0],
    duration: DURATION_BASE,
    delay: 20,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [0, 1],
    duration: 233,
    delay: DURATION_BASE - 633,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};
export const leaveIntroContent = (el, done) => {
  anime({
    targets: el,
    translateY: [0, INTRO_CONTENT_END_STATE_Y],
    duration: DURATION_BASE,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [1, 0],
    duration: 233,
    delay: DURATION_BASE - 633,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};

export const enterSectionFooter = (el, done) => {
  anime({
    targets: el,
    opacity: [0, 1],
    duration: 233,
    delay: 267,
    easing: `cubicBezier${HARD_IN}`,
    complete: done,
  });
};

export const fadeOutSectionFooter = (el, done) => {
  anime({
    targets: el,
    opacity: [1, 0],
    duration: 267,
    delay: 100,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });
};

export const fadeInSectionFooter = (el, done) => {
  anime({
    targets: el,
    translateX: [293, 0],
    duration: DURATION_BASE,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [0, 1],
    duration: 233,
    delay: 367,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};

export const leaveSectionFooter = (el, done) => {
  anime({
    targets: el,
    translateX: [0, -278],
    duration: DURATION_BASE,
    easing: `cubicBezier${SHARP_OUT}`,
    complete: done,
  });

  anime({
    targets: el,
    opacity: [1, 0],
    duration: 267,
    delay: 100,
    easing: `cubicBezier${SOFT_IN_OUT}`,
    complete: done,
  });
};

export const bounceAnimationY = (el, index) => {
  anime({
    targets: el,
    opacity: [0, 1],
    translateY: [-20, 0],
    elasticity: 500,
    duration: DURATION_BOUNCE_ANIMATION,
    delay: index * 75,
  });
};
