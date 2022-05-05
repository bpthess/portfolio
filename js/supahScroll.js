class SupahScroll {
    constructor(options) {
    this.opt = options || {}
    this.el = this.opt.el ? this.opt.el : '.supah-scroll'
    this.speed = this.opt.speed ? this.opt.speed : 0.1
    this.init()
}

init() {
    this.scrollY = 0
    this.supahScroll = document.querySelectorAll(this.el)[0]
    this.supahScroll.classList.add('supah-scroll')
    
    // section1
    this.bannerTitle = document.querySelector('.banner h1');
    this.bannerCenter = document.querySelector('.banner__center__box__img__box');
    this.bannerCenterText1 = document.querySelector('.banner__center__box__text');
    this.bannerCenterText2 = document.querySelector('.banner__center__box__text.text2');
    this.bannerDesc = document.querySelector('.banner__desc');

    // section2
    this.aboutKdongH2 = document.querySelector('.about__kdong h2');
    this.aboutKdongDesc2 = document.querySelector('.about__desc2');

    // section3
    this.aboutKdongImg = document.querySelector('.about__me__box__img .kdongImg');

    // section5
    this.section5 = document.querySelector('#section5');
    
    // web standard
    this.siteDesc1 = document.querySelector('.site__title__cont.cont1 .site__title.desc1');
    this.siteDesc2 = document.querySelector('.site__title__cont.cont1 .site__title.desc2');
    this.siteDesc3 = document.querySelector('.site__title__cont.cont1 .site__title.desc3');
    
    // responsive
    this.siteDesc4 = document.querySelector('.site__title__cont.cont2 .site__title.desc1');
    this.siteDesc5 = document.querySelector('.site__title__cont.cont2 .site__title.desc2');
    this.siteDesc6 = document.querySelector('.site__title__cont.cont2 .site__title.desc3');
    
    // MEGABOX
    this.siteDesc7 = document.querySelector('.site__title__cont.cont3 .site__title.desc1');
    this.siteDesc8 = document.querySelector('.site__title__cont.cont3 .site__title.desc2');
    this.siteDesc9 = document.querySelector('.site__title__cont.cont3 .site__title.desc3');
    
    // TEAM PROJECT
    this.siteDesc10 = document.querySelector('.site__title__cont.cont4 .site__title.desc1');
    this.siteDesc11 = document.querySelector('.site__title__cont.cont4 .site__title.desc2');
    this.siteDesc12 = document.querySelector('.site__title__cont.cont4 .site__title.desc3');
    
    // PHP
    this.siteDesc13 = document.querySelector('.site__title__cont.cont5 .site__title.desc1');
    this.siteDesc14 = document.querySelector('.site__title__cont.cont5 .site__title.desc2');
    this.siteDesc15 = document.querySelector('.site__title__cont.cont5 .site__title.desc3');
    
    // REACT
    this.siteDesc16 = document.querySelector('.site__title__cont.cont6 .site__title.desc1');
    this.siteDesc17 = document.querySelector('.site__title__cont.cont6 .site__title.desc2');
    this.siteDesc18 = document.querySelector('.site__title__cont.cont6 .site__title.desc3');
    
    // VUE
    this.siteDesc19 = document.querySelector('.site__title__cont.cont7 .site__title.desc1');
    this.siteDesc20 = document.querySelector('.site__title__cont.cont7 .site__title.desc2');
    this.siteDesc21 = document.querySelector('.site__title__cont.cont7 .site__title.desc3');

    this.siteMockup1 = document.querySelector('.sites__info.info1 .container.site.mockup1');
    this.siteMockup2 = document.querySelector('.sites__info.info2 .container.site.mockup2');
    this.siteMockup3 = document.querySelector('.sites__info.info3 .container.site.mockup3');
    this.siteMockup4 = document.querySelector('.sites__info.info4 .container.site.mockup4');
    this.siteMockup5 = document.querySelector('.sites__info.info5 .container.site.mockup5');
    this.siteMockup6 = document.querySelector('.sites__info.info6 .container.site.mockup6');
    this.siteMockup7 = document.querySelector('.sites__info.info7 .container.site.mockup7');

    // section7
    this.section7 = document.querySelector('#section7');

    // MOUSE
    this.scriptDesc1 = document.querySelector('.script__title__cont.cont1 .script__title.desc1');
    this.scriptDesc2 = document.querySelector('.script__title__cont.cont1 .script__title.desc2');
    this.scriptDesc3 = document.querySelector('.script__title__cont.cont1 .script__title.desc3');
    
    // SLIDER
    this.scriptDesc4 = document.querySelector('.script__title__cont.cont2 .script__title.desc1');
    this.scriptDesc5 = document.querySelector('.script__title__cont.cont2 .script__title.desc2');
    this.scriptDesc6 = document.querySelector('.script__title__cont.cont2 .script__title.desc3');
    
    // PARALLAX
    this.scriptDesc7 = document.querySelector('.script__title__cont.cont3 .script__title.desc1');
    this.scriptDesc8 = document.querySelector('.script__title__cont.cont3 .script__title.desc2');
    this.scriptDesc9 = document.querySelector('.script__title__cont.cont3 .script__title.desc3');
    
    // GAME
    this.scriptDesc10 = document.querySelector('.script__title__cont.cont4 .script__title.desc1');
    this.scriptDesc11 = document.querySelector('.script__title__cont.cont4 .script__title.desc2');
    this.scriptDesc12 = document.querySelector('.script__title__cont.cont4 .script__title.desc3');

    this.header = document.querySelectorAll('.nav ul li a');
    this.aboutTop = document.querySelector('#section3').offsetTop;
    this.siteTop = document.querySelector('#section5').offsetTop;
    this.scriptTop = document.querySelector('#section7').offsetTop;
    this.contactTop = document.querySelector('#footer').offsetTop;

    this.events()
    this.update()
    this.animate()
}

update() {
    if (this.supahScroll === null) return
    document.body.style.height = `${this.supahScroll.getBoundingClientRect().height}px`
}

pause() {
    document.body.style.overflow = 'hidden'
    cancelAnimationFrame(this.raf)
}

play() {
    document.body.style.overflow = 'inherit'
    this.raf = requestAnimationFrame(this.animate.bind(this))
}

destroy() {
    this.supahScroll.classList.remove('supah-scroll')
    this.supahScroll.style.transform = 'none'
    document.body.style.overflow = 'inherit'
    window.removeEventListener('resize', this.update)
    cancelAnimationFrame(this.raf)
    delete this.supahScroll
}

animate() {
    this.scrollY += (window.scrollY - this.scrollY) * this.speed
    this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`

    // section1
    this.bannerTitle.style.transform = `translate3d(${-this.scrollY}px,0,0)`
    this.bannerCenter.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
    this.bannerCenterText1.style.transform = `translate3d(-50%, ${-this.scrollY / 10}px,0)`
    this.bannerCenterText2.style.transform = `translate3d(-50%, ${-this.scrollY / 10}px,0)`
    this.bannerDesc.style.transform = `translate3d(-50%, ${-this.scrollY / 10}px,0)`

    // section2
    this.aboutKdongH2.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
    this.aboutKdongDesc2.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`

    // section3
    this.aboutKdongImg.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`


    // section5
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    // document.querySelector(".scroll").innerHTML = scrollTop;

    let currentScroll = scrollTop/8;
    const innerW = window.innerWidth;
    const section5Top = this.section5.offsetTop - currentScroll;
    const section5Width = innerW;
    const section5TopM = this.section5.offsetTop/1000;

    // this.header = document.querySelectorAll('.nav ul li a');
    // this.aboutTop = document.querySelector('#section3').offsetTop;
    // this.siteTop = document.querySelector('#section5').offsetTop;
    // this.scriptTop = document.querySelector('#section7').offsetTop;
    // this.contactTop = document.querySelector('#footer').offsetTop;

    // this.header.forEach((el) => {
    //     el.addEventListener("click", (e) => {
    //         e.preventDefault();
    //         document.querySelector(el.getAttribute("href")).scrollIntoView({
    //             behavior: "smooth"
    //         })
    //     })
    // });
    

    if(scrollTop >= section5Top){
        // web standard
        this.siteDesc1.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc2.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc3.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // responsive
        this.siteDesc4.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc5.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc6.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // megabox
        this.siteDesc7.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc8.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc9.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // team project
        this.siteDesc10.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc11.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc12.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // php
        this.siteDesc13.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc14.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc15.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // react
        this.siteDesc16.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc17.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc18.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // vue
        this.siteDesc19.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.siteDesc20.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
        this.siteDesc21.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        this.siteMockup1.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup2.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup3.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup4.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup5.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup6.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        this.siteMockup7.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
    } else if(innerW <= section5Width){
        if(scrollTop >= section5TopM){
            // web standard
            this.siteDesc1.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc2.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc3.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // responsive
            this.siteDesc4.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc5.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc6.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // megabox
            this.siteDesc7.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc8.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc9.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // team project
            this.siteDesc10.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc11.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc12.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // php
            this.siteDesc13.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc14.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc15.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // react
            this.siteDesc16.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc17.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc18.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // vue
            this.siteDesc19.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.siteDesc20.style.transform = `translate3d(${this.scrollY / 10}px,0,0)`
            this.siteDesc21.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            this.siteMockup1.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup2.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup3.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup4.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup5.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup6.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
            this.siteMockup7.style.transform = `translate3d(0, ${-this.scrollY / 10}px,0)`
        };
    };

    // section7
    const section7Top = this.section7.offsetTop - currentScroll;
    const section7TopM = this.section7.offsetTop/1000;
    const section7Width = innerW;

    if(scrollTop >= section7Top){
        // MOUSE
        this.scriptDesc1.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.scriptDesc2.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
        this.scriptDesc3.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // slider
        this.scriptDesc4.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.scriptDesc5.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
        this.scriptDesc6.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // parallax
        this.scriptDesc7.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.scriptDesc8.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
        this.scriptDesc9.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        
        // game
        this.scriptDesc10.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        this.scriptDesc11.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
        this.scriptDesc12.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
    } else if(innerW <= section7Width){
        if(scrollTop >= section7TopM){
            // MOUSE
            this.scriptDesc1.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.scriptDesc2.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
            this.scriptDesc3.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // slider
            this.scriptDesc4.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.scriptDesc5.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
            this.scriptDesc6.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // parallax
            this.scriptDesc7.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.scriptDesc8.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
            this.scriptDesc9.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            
            // game
            this.scriptDesc10.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
            this.scriptDesc11.style.transform = `translate3d(${this.scrollY / 20}px,0,0)`
            this.scriptDesc12.style.transform = `translate3d(${-this.scrollY / 10}px,0,0)`
        };
    };

    this.raf = requestAnimationFrame(this.animate.bind(this))
}

scrollTo(y) {
    window.scrollTo(0, y)
}

staticScrollTo(y) {
    cancelAnimationFrame(this.raf)
    this.scrollY = y
    window.scrollTo(0, y)
    this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`
    this.play()
}

events() {
    window.addEventListener('load', this.update.bind(this))
    window.addEventListener('resize', this.update.bind(this))
    }
}

// const scrollProgress = function(){
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

//     this.siteDesc1 = document.querySelector('.site__title .site__cont.desc1');
//     this.siteDesc2 = document.querySelector('.site__title .site__cont.desc2');
//     this.siteDesc3 = document.querySelector('.site__title .site__cont.desc3');

//     document.querySelectorAll(".site__title").forEach(el => {
//         if(scrollTop >= el.offsetTop){
//             this.siteDesc1.style.transform = `translate3d(${-this.scrollY}px,0,0)`
//             this.siteDesc2.style.transform = `translate3d(${this.scrollY}px,0,0)`
//             this.siteDesc3.style.transform = `translate3d(${-this.scrollY}px,0,0)`
//         }
//     });
// }

// window.addEventListener("scroll", scrollProgress);

const supahscroll = new SupahScroll({
    el: '#main',
    speed: 0.03
})