//gsap.registerPlugin(ScrollTrigger);
//
//let imageCont = document.querySelector('.container'),
//    images = gsap.utils.toArray('section'),
//    centerSpans = images.map(img => {
//      let span = document.createElement('span'); 
//      imageCont.appendChild(span);
//      return span;
//    }),
//    snapPositions = [];
//
//gsap.to(imageCont, {
//  x: () => - (imageCont.scrollWidth - document.documentElement.clientWidth) + "px",
//  ease: "none",
//  scrollTrigger: {
//    trigger: imageCont,
//    start: 0,
//    pin: true,
//    scrub: 1.5,
//    markers: true,
//    onRefresh: self => {
//      let viewportWidth = document.documentElement.clientWidth;
//      images.forEach((image, i)=> {
//        let centerX = image.offsetLeft + image.offsetWidth / 2;
//        centerSpans[i].style.left = centerX + "px";
//        snapPositions[i] = (centerX - viewportWidth / 2) / (imageCont.scrollWidth - viewportWidth);
//      });
//    },
//    snap: value => gsap.utils.snap(snapPositions, value),
//    // base vertical scrolling on how wide the container is so it feels more natural.
//    end: self => `+=${imageCont.scrollWidth - document.documentElement.clientWidth}`,
//    invalidateOnRefresh: true,
//  }
//});


/*------------------------------
SupahScroll
------------------------------*/
class SupahScroll {
  constructor(options) {
    this.opt = options || {};
    this.el = this.opt.el ? this.opt.el : '.supah-scroll';
    this.speed = this.opt.speed ? this.opt.speed : 0.1;
    this.init();
  }

  init() {
    this.scrollY = 0;
    this.supahScroll = document.querySelectorAll(this.el)[0];
    this.supahScroll.classList.add('supah-scroll');
    this.events();
    this.update();
    this.animate();
  }

  update() {
    if (this.supahScroll === null) return;
    document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`;
  }

  pause() {
    document.body.style.overflow = 'hidden';
    cancelAnimationFrame(this.raf);
  }

  play() {
    document.body.style.overflow = 'inherit';
    this.raf = requestAnimationFrame(this.animate.bind(this));
  }

  destroy() {
    this.supahScroll.classList.remove('supah-scroll');
    this.supahScroll.style.transform = 'none';
    document.body.style.overflow = 'inherit';
    window.removeEventListener('resize', this.update);
    cancelAnimationFrame(this.raf);
    delete this.supahScroll;
  }

  animate() {
    this.scrollY += (window.scrollY - this.scrollY) * this.speed;
    this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`;
    this.raf = requestAnimationFrame(this.animate.bind(this));
  }

  scrollTo(y) {
    window.scrollTo(0, y);
  }

  staticScrollTo(y) {
    cancelAnimationFrame(this.raf);
    this.scrollY = y;
    window.scrollTo(0, y);
    this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`;
    this.play();
  }

  events() {
    window.addEventListener('load', this.update.bind(this));
    window.addEventListener('resize', this.update.bind(this));
  }}



/*------------------------------
     Initialize
     ------------------------------*/
const supahscroll = new SupahScroll({
  el: 'main',
  speed: 0.1 });