import {SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
// slide.changeSlide(4);
// slide.activePrevSlide();
slide.addArow('.prev', '.next');
console.log(slide);
