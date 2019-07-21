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
        let humburger  = document.querySelector('.main_header--humburger');
        let hum        = document.querySelector('.ham');
        let mobileMenu = document.querySelector('.main_header--mobile_menu');
        let content    = document.querySelector('.main--wrp_content');

        if (humburger !== null && mobileMenu !== null) {
            humburger.onclick = () => {
                setHeightMobileMenu();
            }

            window.onresize = () => {
                hum.classList.remove('active');
                resizeMobileMenu();
            }
        }

        function setHeightMobileMenu() {
            if (mobileMenu.classList.contains('active_mobile_menu')) {
                mobileMenu.style.height = '0px';
                mobileMenu.classList.remove('active_mobile_menu');

                setTimeout(() => {
                    content.classList.remove('main--wrp_content-hidden');
                }, 400);
            } else {
                let header        = document.querySelector('.main_header--wrp_logo_desktop');
                let headerHeigth  = window.getComputedStyle(header).height;

                let section       = document.querySelector('.main');
                let sectionHeigth = window.getComputedStyle(section).height;
                
                headerHeigth = Number(headerHeigth.substring(0, headerHeigth.length - 2));
                sectionHeigth = Number(sectionHeigth.substring(0, sectionHeigth.length - 2));

                mobileMenu.style.height = `${sectionHeigth - headerHeigth - 40}px`;
                mobileMenu.classList.add('active_mobile_menu');
                content.classList.add('main--wrp_content-hidden');                
            }
        }

        function resizeMobileMenu() {
            if (mobileMenu.classList.contains('active_mobile_menu')) {
                mobileMenu.style.height = '0px';
                mobileMenu.classList.remove('active_mobile_menu');

                setTimeout(() => {
                    content.classList.remove('main--wrp_content-hidden');
                }, 400);
            }
        }
    }

    $('#modalForm').submit(function() {
        if (document.modalForm.phone.value == '' ) {
            return false;
        }
    
        if (document.modalForm.name.value.length > 30) {
            return false;
        }
    
        if (document.modalForm.email) {
            if (document.modalForm.email.value.length > 30) {
                return false;
            }
        }
    
        $.ajax({
            type: "POST",
            url: "mailModal.php",
            data: $(this).serialize()
        }).done(function() {
            
            $('#modalForm').trigger('reset');
    
            // const sections = document.querySelectorAll('section');
            
            // for (const section of sections) {
            //     section.classList.remove('have-blur');
            // }
    
            $('.thank_window').fadeIn();
            setTimeout(() => {
                $('.thank_window').fadeOut();
                deleteBlureModal();
                const overlay = document.querySelector('.overlay');
                const modalForm = document.querySelector('.modal_form');
                overlay.classList.remove('show-block');
                modalForm.classList.remove('show-block');
            }, 3000);
            
            console.log('message sended'); 
        });
        
        return false;
    });

    function showAndCloseModal() {
        const btn = document.querySelectorAll('.show_modal');
        const closeModal = document.querySelector('.modal_form--close-btn');
        const sections = document.querySelectorAll('section');
        const overlay = document.querySelector('.overlay');
        const modalForm = document.querySelector('.modal_form');
    
        if (btn !== null) {
            for (const button of btn) {
                button.onclick = () => {
                    for (const section of sections) {
                        section.classList.add('have_blur');
                    }
            
                    overlay.classList.add('show_block');
                    modalForm.classList.add('show_block');
                }
            }
        }
    
        if (closeModal !== null) {
            closeModal.onclick = () => {
                for (const section of sections) {
                    section.classList.remove('have_blur');
                }
        
                overlay.classList.remove('show_block');
                modalForm.classList.remove('show_block');
            }
        }
    }


        // function setClassRotate(elem, className) {
    //     if (!elem) {
    //         return;
    //     }

    //     let screenHeight = document.documentElement.clientHeight;
    //     let screenWidth = document.documentElement.clientWidth;

    //     if (screenHeight < 500) {
    //         elem.classList.add(className);
    //     }

    //     window.onresize = () => {
    //         let screenHeight = document.documentElement.clientHeight;
    //         let mobileMenu = document.querySelector('.main_header--mobile_menu');
    
    //         if (screenHeight < 500) {
    //             elem.classList.add(className);
    //             if (mobileMenu.classList.contains('active_mobile_menu')) {
    //                 mobileMenu.style.height = `380px`;
    //             }

    //         } else if (screenHeight > 500 && screenWidth > 1023) {
    //             if (mobileMenu.classList.contains('active_mobile_menu')) {
    //                 mobileMenu.style.height = `0px`;
    //                 mobileMenu.classList.remove('active_mobile_menu');
    //             }
    //         } else {
    //             elem.classList.remove(className);
    //             if (mobileMenu.classList.contains('active_mobile_menu')) {
    //                 let header = document.querySelector('.main_header--wrp_logo_desktop');
    //                 let headerHeigth = window.getComputedStyle(header).height;

    //                 headerHeigth = Number(headerHeigth.substring(0, headerHeigth.length - 2));
    //                 mobileMenu.style.height = `${screenHeight - headerHeigth -40}px`;
    //             }
    //         }
            
    //     }
    // }
}());