import './sass/reset.sass';
import './sass/fonts.sass';
import './sass/default.sass';
import './sass/mp--header.sass';
import './sass/mp--main.sass';
import './sass/mp--features.sass';
import './sass/mp--choose_format.sass';
import './sass/mp--travel_with_us.sass';
import './sass/mp--about_us.sass';
import './sass/footer.sass';
import './css/humburger.css';
import './sass/modal.sass';

(function(){
    window.onload = () => {
        setImg();
        setBg();
        openMobileMenuOnMainPage();
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

    function openMobileMenuOnMainPage() {
        let humburger    = document.querySelector('.main_header--humburger');
        let mobileMenu   = document.querySelector('.main_header--mobile_menu');
        let content      = document.querySelector('.main--wrp_content');

        humburger.onclick = () => {
            if (mobileMenu.classList.contains('active_mobile_menu')) {
                closeMobileMenu();
                setTimeout(() => {
                    content.classList.remove('main--wrp_content-hidden');
                }, 400);
            } else openMobileMenu();
        }

        window.onresize = () => {
            if (mobileMenu.classList.contains('active_mobile_menu')) {
                if (document.documentElement.clientWidth > 1023) {
                    closeMobileMenu();
                    return;
                }
                setTimeout(() => {
                    openMobileMenu();
                }, 500);
            } else {
                return;
            }
        }

        function closeMobileMenu() {
            let hum = document.querySelector('.ham');

            mobileMenu.style.height = '0px';
            mobileMenu.classList.remove('active_mobile_menu');
            hum.classList.remove('active');
        }

        function openMobileMenu() {
                let header        = document.querySelector('.main_header--wrp_logo_desktop');
                let headerHeigth  = window.getComputedStyle(header).height;

                headerHeigth = Number(headerHeigth.substring(0, headerHeigth.length - 2));

                let mainSection   = document.querySelector('.main');
                let sectionHeigth = window.getComputedStyle(mainSection).height;
                sectionHeigth     = Number(sectionHeigth.substring(0, sectionHeigth.length - 2));

                mobileMenu.style.height = `${sectionHeigth - headerHeigth}px`;

                if (mobileMenu.classList.contains('active_mobile_menu')) {
                    return;
                } else {
                    mobileMenu.classList.add('active_mobile_menu');
                    content.classList.add('main--wrp_content-hidden'); 
                }           
        }
    }

    // $('#modalForm').submit(function() {
    //     if (document.modalForm.phone.value == '' ) {
    //         return false;
    //     }
    
    //     if (document.modalForm.name.value.length > 30) {
    //         return false;
    //     }
    
    //     if (document.modalForm.email) {
    //         if (document.modalForm.email.value.length > 30) {
    //             return false;
    //         }
    //     }
    
    //     $.ajax({
    //         type: "POST",
    //         url: "mailModal.php",
    //         data: $(this).serialize()
    //     }).done(function() {
            
    //         $('#modalForm').trigger('reset');
    
    //         // const sections = document.querySelectorAll('section');
            
    //         // for (const section of sections) {
    //         //     section.classList.remove('have-blur');
    //         // }
    
    //         $('.thank_window').fadeIn();
    //         setTimeout(() => {
    //             $('.thank_window').fadeOut();
    //             deleteBlureModal();
    //             const overlay = document.querySelector('.overlay');
    //             const modalForm = document.querySelector('.modal_form');
    //             overlay.classList.remove('show-block');
    //             modalForm.classList.remove('show-block');
    //         }, 3000);
            
    //         console.log('message sended'); 
    //     });
        
    //     return false;
    // });

    function showAndCloseModal() {
        const btn      = document.querySelector('.show_modal');
        const closeBtn = document.querySelector('.modal_form--close-btn');
        const overlay  = document.querySelector('.overlay');

        btn.onclick = () => {
            overlay.classList.add('show_block');
        }

        closeBtn.onclick = () => {
            overlay.classList.remove('show_block');
        }
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