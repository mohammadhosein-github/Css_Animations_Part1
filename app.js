var preloading = document.querySelector('.preloading');
var body = document.querySelector('body');

window.addEventListener('load', () => {
    preloading.className += " hidden-preloading";
    setTimeout(() => {
        body.style.overflow = 'auto';
    }, 550);

    ScrollReveal().reveal('.title h1', {
        origin: 'left',
        distance: '100px',
        duration: 600,
        easing: 'linear'
    })

    ScrollReveal().reveal('.title .github', {
        origin: 'bottom',
        distance: '50px',
        duration: 1500
    })

    ScrollReveal().reveal('.description', {
        origin: 'top',
        distance: '30px',
        duration: 1000,
        delay: 50
    })

    ScrollReveal().reveal('.r1-1', {
        origin: 'left',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
        delay: 200
    })

    ScrollReveal().reveal('.r1-2', {
        origin: 'bottom',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
        delay: 300
    })

    ScrollReveal().reveal('.r2-1', {
        origin: 'left',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
        delay: 500
    })

    ScrollReveal().reveal('.r2-2', {
        origin: 'left',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
        delay: 500
    })

    ScrollReveal().reveal('.r3-1', {
        origin: 'left',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r3-2', {
        origin: 'left',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r3-3', {
        origin: 'right',
        distance: '70px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r4-1', {
        origin: 'top',
        distance: '90px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r4-2', {
        origin: 'top',
        distance: '90px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r5-1', {
        origin: 'left',
        distance: '100px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r5-2', {
        origin: 'right',
        distance: '100px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r5-3', {
        origin: 'right',
        distance: '100px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r6-1', {
        origin: 'bottom',
        distance: '100px',
        duration: 1500,
        scale: 0.5,
    })

    ScrollReveal().reveal('.r6-2', {
        origin: 'top',
        distance: '100px',
        duration: 1500,
        scale: 0.5,
    })
})

var typed = new Typed(".auto-type-letter", {
    strings: ['hello world', 'CSS animation', 'typed script'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});