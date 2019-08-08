// defaults styles
import './sass/reset.sass';
import './sass/fonts.sass';
import './sass/default.sass';
// styles of page
import './css/humburger.css';
import './sass/pages_header.sass';
import './sass/events.sass';
import './sass/footer.sass';
import './sass/modal.sass';


(function(){
    window.onload = () => {
        setImg();
        setBg();
        openMobileMenuOnPages();
        showAndCloseModal();
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

    function showAndCloseModal() {
        const btn      = document.querySelectorAll('.show_modal');
        const closeBtn = document.querySelector('.modal_form--close-btn');
        const overlay  = document.querySelector('.overlay');
        const body     = document.querySelector('body');
        // const sendBtn  = document.querySelector('.modal_form--btn');
        const form     = document.modalForm;
        console.log(form);

        for (const button of btn) {
            button.onclick = () => {
                overlay.classList.add('show_block');
                body.classList.add('overflowHidden');
            }
        }

        // btn.onclick = () => {
        //     overlay.classList.add('show_block');
        //     body.classList.add('overflowHidden');
        // }

        closeBtn.onclick = () => {
            overlay.classList.remove('show_block');
            body.classList.remove('overflowHidden');
        }

        form.onsubmit = () => {
            console.log('was submit event');
        }

        // sendBtn.submit = () => {
        //     event.preventDefault();
        //     console.log('hello');
        //     if (document.modalForm.phone.value == '' ) {
        //         console.log('1');
        //         alert('Введите номер телефона');
        //         return false;
        //     }

        //     // overlay.classList.remove('show_block');
        //     // body.classList.remove('overflowHidden');
        // }
        // const closeModal = document.querySelector('.modal_form--close-btn');
        // const sections   = document.querySelectorAll('section');
        // const overlay    = document.querySelector('.overlay');
        // const modalForm  = document.querySelector('.modal_form');
    
        // if (btn !== null) {
        //     for (const button of btn) {
        //         button.onclick = () => {
        //             for (const section of sections) {
        //                 section.classList.add('have_blur');
        //             }
            
        //             overlay.classList.add('show_block');
        //             modalForm.classList.add('show_block');
        //         }
        //     }
        // }
    
        // if (closeModal !== null) {
        //     closeModal.onclick = () => {
        //         for (const section of sections) {
        //             section.classList.remove('have_blur');
        //         }
        
        //         overlay.classList.remove('show_block');
        //         modalForm.classList.remove('show_block');
        //     }
        // }
    }
}());