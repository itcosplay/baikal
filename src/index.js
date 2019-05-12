import './sass/reset.sass';
import './sass/fonts.sass';
// import './scss/slick.scss'
import './sass/main-section.sass';
// import './css/humburger.css';
// import 'slick-carousel';



window.onload = () => {
    var imgDefer = document.getElementsByTagName('img');
    var bgDefer = document.getElementsByClassName('set-background');

    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        } 
    }

    for (var i=0; i<bgDefer.length; i++) {
        if(bgDefer[i].getAttribute('data-bg')) {
            bgDefer[i].setAttribute('style', bgDefer[i].getAttribute('data-bg'));
        } 
    } 
};
