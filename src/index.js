import './sass/reset.sass';
import './sass/fonts.sass';
// import './scss/slick.scss'
import './css/humburger.css';
import './sass/main-section.sass';

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

function main() {
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenu.onclick = () => {
        console.log('click mob menu');
    }
}

main();
