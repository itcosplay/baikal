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



// styles for ecological and scientific tours pages
// import './sass/tours.sass';
// styles for events page
// import './sass/events.sass';
// styles for contacts page
// import './sass/contacts.sass';
// styles for description tour's page
// import './sass/descr-tour.sass';
// styles for under development's page
// import './sass/dev.sass';
// other styles
// import './sass/mp_2--main.sass';
// import './sass/mp_2--features.sass';
// styles for modal form for each pages
import './sass/modal.sass';
// slick slider imports
// import 'slick-carousel';
// import './scss/slick.scss';

(function(){
    window.onload = () => {
        setImg();
        setBg();
        setClassRotate(document.querySelector('.main'), 'main-rotate');
        openMobileMenuOnMainPage();
        showAndCloseModal();
        // setHeightOnResize();
        // startPageSlider();
        // setSlideBg();
        // showHideText();
        // activeModalSlider();
        // openMobileMenuOnMainPageNEW();
        // deleteBlureModal();
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

    function setClassRotate(elem, className) {
        if (!elem) {
            return;
        }

        let screenHeight = document.documentElement.clientHeight;
        let screenWidth = document.documentElement.clientWidth;

        if (screenHeight < 500) {
            elem.classList.add(className);
        }

        window.onresize = () => {
            let screenHeight = document.documentElement.clientHeight;
            let mobileMenu = document.querySelector('.main_header--mobile_menu');
    
            if (screenHeight < 500) {
                elem.classList.add(className);
                if (mobileMenu.classList.contains('active_mobile_menu')) {
                    mobileMenu.style.height = `380px`;
                }

            } else if (screenHeight > 500 && screenWidth > 1023) {
                if (mobileMenu.classList.contains('active_mobile_menu')) {
                    mobileMenu.style.height = `0px`;
                    mobileMenu.classList.remove('active_mobile_menu');
                }
            } else {
                elem.classList.remove(className);
                if (mobileMenu.classList.contains('active_mobile_menu')) {
                    let header = document.querySelector('.main_header--wrp_logo_desktop');
                    let headerHeigth = window.getComputedStyle(header).height;

                    headerHeigth = Number(headerHeigth.substring(0, headerHeigth.length - 2));
                    mobileMenu.style.height = `${screenHeight - headerHeigth -40}px`;
                }
            }
            
        }
    }

    function openMobileMenuOnMainPage() {
        let humburger = document.querySelector('.main_header--humburger');
        let mobileMenu = document.querySelector('.main_header--mobile_menu');
        let content = document.querySelector('.main--wrp_content');

        if (humburger !== null && mobileMenu !== null) {
            humburger.onclick = () => {
                setHeightMobileMenu();
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
                let header = document.querySelector('.main_header--wrp_logo_desktop');
                let headerHeigth = window.getComputedStyle(header).height;
                let section = document.querySelector('.main');
                let sectionHeigth = window.getComputedStyle(section).height;
                
                headerHeigth = Number(headerHeigth.substring(0, headerHeigth.length - 2));
                sectionHeigth = Number(sectionHeigth.substring(0, sectionHeigth.length - 2));

                mobileMenu.style.height = `${sectionHeigth - headerHeigth - 40}px`;
                mobileMenu.classList.add('active_mobile_menu');
                content.classList.add('main--wrp_content-hidden');                
            }
        }
    }

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
}());

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

// Inputmask({ mask: '+7 (999) 999-9999'}).mask(document.querySelectorAll('#modal-form__mask-phone'));

// function activeModalSlider() {
//     let images = document.querySelectorAll('.show_modal_slider');
//     let slider = document.querySelector('.modal_slider');
//     let overlay = document.querySelector('.overlay_for_slider_modal');
//     let close = document.querySelector('.modal_slider--close_cross');
//     let nextBtn = document.querySelector('.modal_slider--next_btn');
//     let prevBtn = document.querySelector('.modal_slider--prev_btn');
//     const sections = document.querySelectorAll('section');

//     if (images != null && slider != null) {
//         for (const image of images) {
//             image.onclick = () => {
//                 if (slider.classList.contains('modal_slider-active')) {
//                     slider.classList.toggle('modal_slider-hidden');
//                     overlay.classList.toggle('overlay_for_slider_modal-hidden');

//                     for (const section of sections) {
//                         section.classList.add('have-blur');
//                     }
//                 } else {
//                     slider.classList.toggle('modal_slider-hidden');
//                     overlay.classList.toggle('overlay_for_slider_modal-hidden');
//                     slider.classList.add('modal_slider-active');

//                     $('.modal_slider--slider').slick({
//                         arrows: false,
//                         dots: false,
//                         infinite: true,
//                     });

//                     for (const section of sections) {
//                         section.classList.add('have-blur');
//                     }
//                 } 
//             }
//         }

//         if (close != null) close.onclick = () => {
//             slider.classList.toggle('modal_slider-hidden');
//             overlay.classList.toggle('overlay_for_slider_modal-hidden');

//             for (const section of sections) {
//                 section.classList.remove('have-blur');
//             }
//         }

//         if (nextBtn != null && prevBtn != null) {
//             nextBtn.onclick = () => $('.modal_slider--slider').slick('slickNext');
//             prevBtn.onclick = () => $('.modal_slider--slider').slick('slickPrev');
//         }   
//     }  
// }

// function startPageSlider() {
//     let nextBtn = document.querySelector('.page_slider--next_btn');
//     let prevBtn = document.querySelector('.page_slider--prev_btn');

//     if (document.querySelector('.page_slider')) {
//         $('.page_slider').slick({
//             arrows: false,
//             dots: false,
//         });
//     }

//     if (nextBtn != null && prevBtn != null) {
//         nextBtn.onclick = () => $('.page_slider').slick('slickNext');
//         prevBtn.onclick = () => $('.page_slider').slick('slickPrev');
//     } 
// }

// function showHideText() {
//     let links = document.querySelectorAll('.text_info--open_close');
//     let fullText = document.querySelector('.text_info--text-full');

//     for (const link of links) {
//         link.onclick = () => {
//             fullText.classList.toggle('text_info--text-small');
            
//             for (const link of links) {
//                 link.classList.toggle('text_info--hide_span');
//             }
//         }
//     }
// }

// function heightSectionToEndScreen(section, menu) {
//     if (section !== null && menu !== null) {
//         let clientHeight = document.documentElement.clientHeight;
//         let menuHeight = window.getComputedStyle(menu).height;

//         menuHeight = Number(menuHeight.substring(0, menuHeight.length - 2));
//         section.style.height = `${clientHeight - menuHeight}px`;
//     }
// }





// function setSlideBg(bgDefer) {
//     var bgDefer = document.getElementsByClassName('set-slide-bg');

//     for (var i = 0; i < bgDefer.length; i++) {
//         if(bgDefer[i].getAttribute('data-bg')) {
//             bgDefer[i].setAttribute('style', bgDefer[i].getAttribute('data-bg'));
//         } 
//     }
// }

// function openMobileMenuOnMainPage() {
//     let humburger = document.querySelector('.bst-menu__humburger');
//     let mobMenu = document.querySelector('.bst-menu__mobile');
//     let mainContent = document.querySelector('.main-content');

//     if (humburger !== null && mobMenu !== null && mainContent !== null) {
//         humburger.onclick = () => {
//             mobMenu.classList.toggle('show-mobile-menu');
//             mainContent.classList.toggle('hide-item');
//         }
//     }
// }



// function openMobileMenu() {
//     let humburger = document.querySelector('.white-header__humburger');
//     let wrpMobileMenu = document.querySelector('.white-header__wrp-mobile-menu');

//     if (humburger !== null && wrpMobileMenu !== null) {
//         humburger.onclick = () => {
//             if (wrpMobileMenu.classList.contains('active-mobile-menu')) {
//                 wrpMobileMenu.style.height = '0px';
//                 wrpMobileMenu.classList.remove('active-mobile-menu');
//             } else {
//                 let header = document.querySelector('.white-header__wrp-logo-menu');
//                 let headerHeith = window.getComputedStyle(header).height;
//                 let clientHeight = document.documentElement.clientHeight;

//                 headerHeith = Number(headerHeith.substring(0, headerHeith.length - 2));
//                 wrpMobileMenu.style.height = `${clientHeight - headerHeith}px`;
//                 wrpMobileMenu.classList.add('active-mobile-menu');
//             }
//         }
//     }
// }



// function deleteBlureModal() {
//     // let button = document.querySelector('.modal_form--btn');
    
//     // button.onclick = () => {
//         const sections = document.querySelectorAll('section');

//         for (const section of sections) {
//             section.classList.remove('have-blur');
//         }
//     // }
// }

// function setHeightOnResize() {
//     window.onresize = () => {
//         heightSectionToEndScreen(document.querySelector('.wrap-main-content'), document.querySelector('.wrap-logo-menu'));
//         heightSectionToEndScreen(document.querySelector('.contacts'), document.querySelector('.white-header'));      
//     }
// }

