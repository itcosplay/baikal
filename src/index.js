import './sass/reset.sass';
import './sass/fonts.sass';
// import './sass/variable.sass';
// import './scss/slick.scss'
import './css/humburger.css';
import './sass/modals.sass';
import './sass/main-section.sass';

// import 'slick-carousel';


window.onload = () => {
    //setting property 'height' of .wrap-main-content
    const mainContentWrap = document.querySelector('.wrap-main-content');
    let clientHeight = document.documentElement.clientHeight;
    let wrapLogoMenu = document.querySelector('.wrap-logo-menu');
    let wrapLogoMenuHeight = window.getComputedStyle(wrapLogoMenu).height;
    wrapLogoMenuHeight = Number(wrapLogoMenuHeight.substring(0, wrapLogoMenuHeight.length - 2));
    
    mainContentWrap.style.height = `${clientHeight - wrapLogoMenuHeight - 40}px`;
    ////

    //load images and background images after DOM
    var imgDefer = document.getElementsByTagName('img');
    var bgDefer = document.getElementsByClassName('set-background');

    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        } 
    }

    for (var i=0; i<bgDefer.length; i++) {
        if(bgDefer[i].getAttribute('data-bg')) {
            bgDefer[i].setAttribute('style', bgDefer[i].getAttribute('data-bg'));
        } 
    }
    ////
};

function main() {
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.onclick = () => {
        const mobMenu = document.querySelector('.bst-menu__mobile');
        const mainContent = document.querySelector('.main-content');
        
        mobMenu.classList.toggle('hide-item');
        mainContent.classList.toggle('hide-item');
    }

    
    window.onresize = () => {
        const mainContentWrap = document.querySelector('.wrap-main-content');
        let clientHeight = document.documentElement.clientHeight;
        let wrapLogoMenu = document.querySelector('.wrap-logo-menu');
        let wrapLogoMenuHeight = window.getComputedStyle(wrapLogoMenu).height;
        wrapLogoMenuHeight = Number(wrapLogoMenuHeight.substring(0, wrapLogoMenuHeight.length - 2));
        
        mainContentWrap.style.height = `${clientHeight - wrapLogoMenuHeight - 40}px`;
    }

}

main();