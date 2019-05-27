import './sass/reset.sass';
import './sass/fonts.sass';
import './scss/slick.scss'
import './sass/bst-grid.sass';
import './sass/white-header.sass';
// import './sass/variable.sass';
// import './scss/slick.scss'
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


import 'slick-carousel';


window.onload = () => {
    // startSlider();
    heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
    heightSectionToEndScreen(document.querySelector('.contacts'), document.querySelector('.white-header'));
    setImg();
    setBg();
    openMobileMenuOnMainPage();
    openMobileMenu();
    showAndCloseModal();
    setHeightOnResize();
    // startSlider();
    setSlideBg();
    showHideText();
    console.log('finish');
};

let slider = document.querySelector('.modal-slider');
let images = document.querySelector('.img-for-slider');
const overlay = document.querySelector('.overlay');
// let bgDefer = document.getElementsByClassName('set-slide-bg');

images.onclick = () => {
    // slider.classList.toggle('hide-tours-slider');
    // setSlideBg(bgDefer);
    overlay.classList.toggle('show-block');
    if (!slider.classList.contains('active-slider')) {
        $('.modal-slider').slick({
            arrows: false
            // dots: false,
            // infinite: true,
            // speed: 300,
            // slidesToShow: 1,
            // adaptiveHeight: true
        });

        slider.classList.add('active-slider');
    }
    
    // setSlideBg(bgDefer);
}

overlay.onclick = () => {
    overlay.classList.toggle('show-block');
}

$('.tours-slider').slick({
    arrows: false
    // dots: false,
    // infinite: true,
    // speed: 300,
    // slidesToShow: 1,
    // adaptiveHeight: true
});



// function startSlider() {
//     // let slider = document.querySelector('.modal-slider');

//     if (document.querySelector('.tours-slider')) {
//         $('.tours-slider').slick({
//             arrows: false
//             // dots: false,
//             // infinite: true,
//             // speed: 300,
//             // slidesToShow: 1,
//             // adaptiveHeight: true
//         });
//     }

//     // if (document.querySelector('.modal-slider')) {
//     //     $('.modal-slider').slick({
//     //         arrows: false
//     //         // dots: false,
//     //         // infinite: true,
//     //         // speed: 300,
//     //         // slidesToShow: 1,
//     //         // adaptiveHeight: true
//     //     });
//     // }

//     // let images = document.querySelector('.img-for-slider');
//     // images.onclick = () => {
//     //     console.log(1);
//     //     setSlideBg();
//     //     showToursSlider();
//     // }

//     // function showToursSlider() {
//     //     let slider = document.querySelector('.tours-slider');
//     //     slider.classList.toggle('hide-tours-slider');
//     //     slider.classList.toggle('show-tours-slider');
//     // }
// }

function showHideText() {
    let showHide = document.querySelectorAll('.show-hide-text');
    let showHideFull = document.querySelector('.show-hide-text');
    let text = document.querySelector('.text-info__text');

    for (let i = 0; i < showHide.length; i++) {
        showHide[i].onclick = () => {
            text.classList.toggle('text-info__text_full');
            showHideFull.classList.toggle('hide-span');
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
    const btn = document.querySelector('.show-modal');
    const closeModal = document.querySelector('.modal-form__close-btn');
    const sections = document.querySelectorAll('section');
    const overlay = document.querySelector('.overlay');
    const modalForm = document.querySelector('.modal-form');

    if (btn !== null) {
        btn.onclick = () => {
        
            for (const section of sections) {
                section.classList.add('have-blur');
            }
    
            overlay.classList.add('show-block');
            modalForm.classList.add('show-block');
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

