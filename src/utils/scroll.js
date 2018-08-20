import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', { // eslint-disable-line
  speed: 1000,
  easing: 'easeInOutQuint',
  updateURL: false,
}); // this is picked up by smooth-scroll package
