// defaults styles
import './sass/reset.sass';
import './sass/fonts.sass';
import './sass/default.sass';

import './sass/modals.sass';
import './css/humburger.css';
import './sass/pages_header.sass';
import './sass/descr-tour.sass';
import './sass/footer.sass';

(function(){
    window.onload = () => {
        setImg();
        setBg();
        openMobileMenuOnPages();
        showHideText();
        showAndCloseModal();
        Inputmask({ mask: '+7 (999) 999-9999'}).mask(document.querySelectorAll('#modal-form__mask-phone'));
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

    function showAndCloseModal() {
        const btn = document.querySelectorAll('.show-modal');
        const closeModal = document.querySelector('.modal_form--close-btn');
        const sections = document.querySelectorAll('section');
        const overlay = document.querySelector('.overlay');
        const modalForm = document.querySelector('.modal_form');
        deleteBlureModal();
    
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

    function deleteBlureModal() {
        // let button = document.querySelector('.modal_form--btn');
        
        // button.onclick = () => {
            const sections = document.querySelectorAll('section');
    
            for (const section of sections) {
                section.classList.remove('have-blur');
            }
        // }
    }
}());




