
$(document).ready(function () {
    console.log("ready!");
    var home = document.getElementById('home_background');
    home.load();
    var home_cover = document.getElementById('home_cover');
    home_cover.load();

    var ilustracion = document.getElementById('ilustracion-vid');
    ilustracion.load();
    var editorial = document.getElementById('editorial-vid');
    editorial.load();
    var digital = document.getElementById('digital-vid');
    digital.load();
    var uxui = document.getElementById('uxui-vid');
    uxui.load();
    var branding = document.getElementById('branding-vid');
    branding.load();
    // branding.onloadeddata = () => { alert('termino branding') }



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




showIlustration = () => {
    let il = document.getElementById('carousel-ilustracion')
    il.style.visibility = 'visible';
    let vid = document.getElementById('ilustracion-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morphDate').style.visibility = 'hidden';

}

hideIlustration = () => {

    let il = document.getElementById('carousel-ilustracion')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('ilustracion-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morphDate').style.visibility = 'visible';

}


showDigital = () => {
    let il = document.getElementById('carousel-digital')
    il.style.visibility = 'visible';
    let vid = document.getElementById('digital-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morphDate').style.visibility = 'hidden';

}

hideDigital = () => {

    let il = document.getElementById('carousel-digital')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('digital-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morphDate').style.visibility = 'visible';

}
showUXUI = () => {
    let il = document.getElementById('carousel-uxui')
    il.style.visibility = 'visible';
    let vid = document.getElementById('uxui-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morphDate').style.visibility = 'hidden';

}

hideUXUI = () => {

    let il = document.getElementById('carousel-uxui')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('uxui-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morphDate').style.visibility = 'visible';

}
showEditorial = () => {
    let il = document.getElementById('carousel-editorial')
    il.style.visibility = 'visible';
    let vid = document.getElementById('editorial-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morphDate').style.visibility = 'hidden';

}

hideEditorial = () => {

    let il = document.getElementById('carousel-editorial')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('editorial-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morphDate').style.visibility = 'visible';

}
showBranding = () => {
    let il = document.getElementById('carousel-branding')
    il.style.visibility = 'visible';
    let vid = document.getElementById('branding-vid')
    vid.style.visibility = 'visible';
    vid.style.opacity = 1;
    vid.play();
    document.getElementById('morphDate').style.visibility = 'hidden';

}


hideBranding = () => {

    let il = document.getElementById('carousel-branding')
    il.style.visibility = 'hidden';
    let vid = document.getElementById('branding-vid')
    vid.style.visibility = 'hidden';
    vid.style.opacity = 0;
    vid.pause();
    vid.currentTime = 0;
    document.getElementById('morphDate').style.visibility = 'visible';

}

showCover = () => {
    let crea = document.getElementById('creatividad')
    crea.style.opacity = 0
    let first = document.getElementById('home_background')
    first.style.display = 'none';
    let second = document.getElementById('home_cover')
    first.pause()
    second.play()
    second.style.display = 'block';
}
hideCover = () => {
    let crea = document.getElementById('creatividad')
    crea.style.opacity = 1
    let first = document.getElementById('home_background')
    let second = document.getElementById('home_cover')
    second.pause()
    first.play()
    second.style.display = 'none';
    first.style.display = 'block';
}


function playVideo() {
    var first = document.getElementById('home_background')
    first.play()

}

