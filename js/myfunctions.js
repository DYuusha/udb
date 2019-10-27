
$(document).ready(function () {
    var home_flag = cover_flag = ilustracion_flag = digital_flag = branding_flag = uxui_flag = editorial_flag = false;

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

    home.onloadeddata = () => {
        // alert('Termino de cargar')
        home_flag = true
    }

    home_cover.onloadeddata = () => {
        // alert('Termino de cargar')
        cover_flag = true
    }
    editorial.onloadeddata = () => {
        // alert('Termino de cargar')
        editorial_flag = true
    }
    ilustracion.onloadeddata = () => {
        // alert('Termino de cargar')
        ilustracion_flag = true
    }
    uxui.onloadeddata = () => {
        // alert('Termino de cargar')
        uxui_flag = true
    }
    branding.onloadeddata = () => {
        // alert('Termino de cargar')
        branding_flag = true
    }
    digital.onloadeddata = () => {
        // alert('Termino de cargar')
        digital_flag = true
    }


    // $(window).load(function () {
    //     document.getElementById('site-container').style.display = 'block'
    //     document.getElementById('loading-container').style.display = 'none'
    //     // if (digital_flag && home_flag && cover_flag && editorial_flag && branding_flag && uxui_flag && ilustracion_flag) {
    //     // }
    //     // else{
    //     //     alert('not yet')
    //     // }
    // });



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


displayContent = () => {
    document.getElementById('site-container').style.display = 'block'
    document.getElementById('loading-container').style.display = 'none'
}

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

