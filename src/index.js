import 'slick-carousel';

import './sass/reset.sass';
import './sass/fonts.sass';
import './scss/slick.scss';
import './sass/bst-grid.sass';
import './sass/white-header.sass';
import './css/humburger.css';
import './sass/modals.sass';
import './sass/main-section.sass';
import './sass/specificity.sass';
import './sass/specificity_mobile.sass';
import './sass/travel-format.sass';
import './sass/with-us.sass';
import './sass/about-us.sass';
import './sass/footer.sass';
import './sass/tours.sass';
import './sass/events.sass';
import './sass/contacts.sass';
import './sass/dev.sass';
import './sass/event-item.sass';
import './sass/descr-tour.sass';

window.onload = () => {
    heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
    heightSectionToEndScreen(document.querySelector('.contacts'), document.querySelector('.white-header'));
    setImg();
    setBg();
    openMobileMenuOnMainPage();
    openMobileMenu();
    showAndCloseModal();
    setHeightOnResize();
    startPageSlider();
    setSlideBg();
    showHideText();
    activeModalSlider();
    console.log('finish');
};

function activeModalSlider() {
    let images = document.querySelectorAll('.modal-slider-img');
    let wrpSlider = document.querySelector('.wrp-modal-slider');
    let close = document.querySelector('.modal-slider__close-cross');
    let nextBtn = document.querySelector('.modal-slider__right-arrow');
    let prevBtn = document.querySelector('.modal-slider__left-arrow');

    if (images != null && wrpSlider != null) {
        for (const image of images) {
            image.onclick = () => {
                if (wrpSlider.classList.contains('active-modal-slider')) {
                    wrpSlider.classList.toggle('hide-modal-slider');
                } else {
                    wrpSlider.classList.toggle('hide-modal-slider');
                    wrpSlider.classList.toggle('active-modal-slider');

                    $('.modal-slider').slick({
                        arrows: false,
                        dots: false,
                        infinite: true,
                    });
                } 
            }
        }

        if (close != null) close.onclick = () => {
            wrpSlider.classList.toggle('hide-modal-slider');
        }

        if (nextBtn != null && prevBtn != null) {
            nextBtn.onclick = () => $('.modal-slider').slick('slickNext');
            prevBtn.onclick = () => $('.modal-slider').slick('slickPrev');
        }   
    }  
}

function startPageSlider() {
    let nextBtn = document.querySelector('.page_slider--next_btn');
    let prevBtn = document.querySelector('.page_slider--prev_btn');

    if (document.querySelector('.page_slider')) {
        $('.page_slider').slick({
            arrows: false,
            dots: false,
        });
    }

    if (nextBtn != null && prevBtn != null) {
        nextBtn.onclick = () => $('.page_slider').slick('slickNext');
        prevBtn.onclick = () => $('.page_slider').slick('slickPrev');
    } 
}

function showHideText() {
    let links = document.querySelectorAll('.text_info--open_close');
    let fullText = document.querySelector('.text_info--text-full');

    for (const link of links) {
        link.onclick = () => {
            fullText.classList.toggle('text_info--text-small');
            
            for (const link of links) {
                link.classList.toggle('text_info--hide_span');
            }
        }
    }
}

function heightSectionToEndScreen(section, menu) {
    if (section !== null && menu !== null) {
        let clientHeight = document.documentElement.clientHeight;
        let menuHeight = window.getComputedStyle(menu).height;

        menuHeight = Number(menuHeight.substring(0, menuHeight.length - 2));
        section.style.height = `${clientHeight - menuHeight}px`;
    }
}

function setImg() {
    var imgDefer = document.getElementsByTagName('img');

    for (var i = 0; i < imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        } 
    }
}

function setBg() {
    var bgDefer = document.getElementsByClassName('set-background');

    for (var i = 0; i<bgDefer.length; i++) {
        if(bgDefer[i].getAttribute('data-bg')) {
            bgDefer[i].setAttribute('style', bgDefer[i].getAttribute('data-bg'));
        } 
    }
}

function setSlideBg(bgDefer) {
    var bgDefer = document.getElementsByClassName('set-slide-bg');

    for (var i = 0; i < bgDefer.length; i++) {
        if(bgDefer[i].getAttribute('data-bg')) {
            bgDefer[i].setAttribute('style', bgDefer[i].getAttribute('data-bg'));
        } 
    }
}

function openMobileMenuOnMainPage() {
    let humburger = document.querySelector('.bst-menu__humburger');
    let mobMenu = document.querySelector('.bst-menu__mobile');
    let mainContent = document.querySelector('.main-content');

    if (humburger !== null && mobMenu !== null && mainContent !== null) {
        humburger.onclick = () => {
            mobMenu.classList.toggle('show-mobile-menu');
            mainContent.classList.toggle('hide-item');
        }
    }
}

function openMobileMenu() {
    let humburger = document.querySelector('.white-header__humburger');
    let wrpMobileMenu = document.querySelector('.white-header__wrp-mobile-menu');

    if (humburger !== null && wrpMobileMenu !== null) {
        humburger.onclick = () => {
            if (wrpMobileMenu.classList.contains('active-mobile-menu')) {
                wrpMobileMenu.style.height = '0px';
                wrpMobileMenu.classList.remove('active-mobile-menu');
            } else {
                let header = document.querySelector('.white-header__wrp-logo-menu');
                let headerHeith = window.getComputedStyle(header).height;
                let clientHeight = document.documentElement.clientHeight;

                headerHeith = Number(headerHeith.substring(0, headerHeith.length - 2));
                wrpMobileMenu.style.height = `${clientHeight - headerHeith}px`;
                wrpMobileMenu.classList.add('active-mobile-menu');
            }
        }
    }
}

function showAndCloseModal() {
    const btn = document.querySelectorAll('.show-modal');
    const closeModal = document.querySelector('.modal-form__close-btn');
    const sections = document.querySelectorAll('section');
    const overlay = document.querySelector('.overlay');
    const modalForm = document.querySelector('.modal-form');

    if (btn !== null) {
        for (const button of btn) {
            button.onclick = () => {
                for (const section of sections) {
                    section.classList.add('have-blur');
                }
        
                overlay.classList.add('show-block');
                modalForm.classList.add('show-block');
            }
        }
    }

    if (closeModal !== null) {
        closeModal.onclick = () => {
            for (const section of sections) {
                section.classList.remove('have-blur');
            }
    
            overlay.classList.remove('show-block');
            modalForm.classList.remove('show-block');
        }
    }
}

function setHeightOnResize() {
    window.onresize = () => {
        heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
        heightSectionToEndScreen(document.querySelector('.contacts'), document.querySelector('.white-header'));      
    }
}

