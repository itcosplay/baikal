import './sass/reset.sass';
import './sass/fonts.sass';
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
import './sass/dev.sass';
import './sass/event-item.sass';
// import 'slick-carousel';


window.onload = () => {
    heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
    setImg();
    setBg();
    openMobileMenuOnMainPage();
    openMobileMenu();
    showAndCloseModal();
    setHeightOnResize();
};

function heightSectionToEndScreen(section, menu) {
    if (section !== null && menu !== null) {
        let clientHeight = document.documentElement.clientHeight;
        let menuHeight = window.getComputedStyle(menu).height;

        menuHeight = Number(menuHeight.substring(0, menuHeight.length - 2));
        section.style.height = `${clientHeight - menuHeight - 40}px`;
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
        const mainContentWrap = document.querySelector('.wrap-main-content');

        if (mainContentWrap !== null) {
            let clientHeight = document.documentElement.clientHeight;
            let wrapLogoMenu = document.querySelector('.wrap-logo-menu');
            let wrapLogoMenuHeight = window.getComputedStyle(wrapLogoMenu).height;

            wrapLogoMenuHeight = Number(wrapLogoMenuHeight.substring(0, wrapLogoMenuHeight.length - 2));
            mainContentWrap.style.height = `${clientHeight - wrapLogoMenuHeight - 40}px`;
        }        
    }
}

