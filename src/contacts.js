// defaults styles
import './sass/reset.sass';
import './sass/fonts.sass';
import './sass/default.sass';
// styles of page
import './css/humburger.css';
import './sass/pages_header.sass';
import './sass/contacts.sass';
import './sass/footer.sass';
import { send } from 'q';


(function(){
    window.onload = () => {
        heightSectionToEndScreen(document.querySelector('.contacts'), document.querySelector('.pages_header'));
        setImg();
        setBg();
        openMobileMenuOnPages();
        formHandler(document.querySelector('#modalForm'));
    }

    function setImg() {
        let images = document.getElementsByTagName('img');

        if (images.length == 0) return;       
        for (const img of images) {
            if (img.getAttribute('data-src')) {
                img.setAttribute('src', img.getAttribute('data-src'));
            }
        }
    }

    function setBg() {
        let elemets = document.querySelectorAll('.set_background');
        
        if (elemets.length == 0) return;
        for (const elem of elemets) {
            if (elem.getAttribute('data-bg')) {
                elem.setAttribute('style', elem.getAttribute('data-bg'));
            }
        }   
    }

    function openMobileMenuOnPages() {
        let humburger = document.querySelector('.pages_header--humburger');
        let mobileMenu = document.querySelector('.pages_header--mobile_menu');

        humburger.onclick = () => {
            if (mobileMenu.classList.contains('active_mobile_menu')) {
                mobileMenu.style.height = '0px';
                mobileMenu.classList.remove('active_mobile_menu');
            } else {
                let clientHeight = document.documentElement.clientHeight;

                if (clientHeight < 450) {
                    mobileMenu.style.height = '300px';
                } else {
                    mobileMenu.style.height = `${clientHeight - 80}px`;
                }

                mobileMenu.classList.add('active_mobile_menu');
            }
        }

        window.onresize = () => {
            let ham = document.querySelector('.ham8');

            if (mobileMenu.classList.contains('active_mobile_menu')) {
                mobileMenu.style.height = '0px';
                mobileMenu.classList.remove('active_mobile_menu');
                ham.classList.remove('active');
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

    function formHandler(form) {
        const sendBtn = form.querySelector('input[type="button"]');

        sendBtn.onclick = () => {
            
        }
    }
}());