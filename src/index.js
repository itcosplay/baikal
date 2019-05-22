import './sass/reset.sass';
import './sass/fonts.sass';
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
import './sass/pages-menu.sass';
import './sass/tours.sass';
import './sass/dev.sass';
// import 'slick-carousel';


window.onload = () => {
    heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
    heightSectionToEndScreen(document.querySelector('.tours'), document.querySelector('.pages-menu'));
    setImg();
    setBg();
    openMobileMenuOnMainPage();
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




function main() {
    
    const pagesHumburger = document.getElementById('pages-humburger');

    if (pagesHumburger !== null) {
        pagesHumburger.onclick = () => {
            const mobMenu = document.querySelector('.pages-menu__mobile-menu');
            // const mainContent = document.querySelector('.main-content');
        
            mobMenu.classList.toggle('hide-item');
            // mainContent.classList.toggle('hide-item');
        }
    }

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

    const mainContentBtn = document.querySelector('.main-content__button');
    const modalCloseBtn = document.querySelector('.modal-form__close-btn');

    const sections = document.querySelectorAll('section');
    const overlay = document.querySelector('.overlay');
    const modalForm = document.querySelector('.modal-form');

    if (mainContentBtn !== null) {
        mainContentBtn.onclick = () => {
        
            for (const section of sections) {
                section.classList.add('have-blur');
            }
    
            overlay.classList.add('show-block');
            modalForm.classList.add('show-block');
        }
    }

    if (modalCloseBtn !== null) {
        modalCloseBtn.onclick = () => {
            for (const section of sections) {
                section.classList.remove('have-blur');
            }
    
            overlay.classList.remove('show-block');
            modalForm.classList.remove('show-block');
        }
    }
}

main();