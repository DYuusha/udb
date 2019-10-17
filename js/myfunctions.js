showIlustration = () => {
    let il = document.getElementById('carousel-ilustracion')
    il.style.visibility = 'visible';
    let vid = document.getElementById('ilustracion-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morph19').style.visibility = 'hidden';

}

hideIlustration = () => {

    let il = document.getElementById('carousel-ilustracion')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('ilustracion-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morph19').style.visibility = 'visible';

}


showDigital = () => {
    let il = document.getElementById('carousel-digital')
    il.style.visibility = 'visible';
    let vid = document.getElementById('digital-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morph19').style.visibility = 'hidden';

}

hideDigital = () => {

    let il = document.getElementById('carousel-digital')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('digital-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morph19').style.visibility = 'visible';

}
showUXUI = () => {
    let il = document.getElementById('carousel-uxui')
    il.style.visibility = 'visible';
    let vid = document.getElementById('uxui-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morph19').style.visibility = 'hidden';

}

hideUXUI = () => {

    let il = document.getElementById('carousel-uxui')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('uxui-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morph19').style.visibility = 'visible';

}
showEditorial = () => {
    let il = document.getElementById('carousel-editorial')
    il.style.visibility = 'visible';
    let vid = document.getElementById('editorial-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morph19').style.visibility = 'hidden';

}

hideEditorial = () => {

    let il = document.getElementById('carousel-editorial')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('editorial-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morph19').style.visibility = 'visible';

}
showBranding = () => {
    let il = document.getElementById('carousel-branding')
    il.style.visibility = 'visible';
    let vid = document.getElementById('branding-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morph19').style.visibility = 'hidden';

}


hideBranding = () => {

    let il = document.getElementById('carousel-branding')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('branding-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morph19').style.visibility = 'visible';

}

showCover = () => {
    let first = document.getElementById('home_background')
    let second = document.getElementById('home_cover')
    let crea = document.getElementById('creatividad')
    first.style.display = 'none';
    second.style.display = 'block';
    crea.style.visibility = 'hidden'

}
hideCover = () => {
    let first = document.getElementById('home_background')
    let second = document.getElementById('home_cover')
    let crea = document.getElementById('creatividad')
    first.style.display = 'block';
    second.style.display = 'none';
    crea.style.visibility = 'visible'

}


$(document).ready(function () {
    $(window).scroll(function () {
        // alert(($(window).scrollTop() / 10000))
        if ($(window).scrollTop() / 10000 < 0.17) {
            $('.subsection-4').css("opacity", 1 - (($(window).scrollTop() / 10000) + 0.5))
        }
        else if ($(window).scrollTop() / 10000 < 0.16) {
            $('.subsection-4').css("opacity", 1 - (($(window).scrollTop() / 10000) + 0.1))

        }
        else if ($(window).scrollTop() / 10000 < 0.15) {
            $('.subsection-4').css("opacity", 1 - (($(window).scrollTop() / 10000) + 0.7))

        }
        else if ($(window).scrollTop() / 10000 < 0.14) {
            $('.subsection-4').css("opacity", 1 - (($(window).scrollTop() / 10000) + 0.7))

        }
        else if ($(window).scrollTop() / 10000 < 0.18) {
            $('.subsection-4').css("opacity", 1 - (($(window).scrollTop() / 10000) + 0.3))

        }
        else {
            $('.subsection-4').css("opacity", 1)

        }
    })
})


