var tl = gsap.timeline();

tl.to('.background-image', {
    width: '100%',
    ease: 'expo.inOut',
    duration: 3,
})
.to('.logo-animation', {
    scale: 1,
    duration: 1,
    ease: 'back.out(1.7)'
})
.to('.logo-animation', {
    scale: 0,
    duration: 1,
    ease: 'back.in(1.7)'
})
.to('.background-image', {
    width: '50%',
    ease: 'expo.inOut',
    duration: 2,
})
.to('.login-form', {
    x: 0,
    ease: 'expo.inOut',
    duration: 2,
}, '-=2')
.to('.login-form > *', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power2.out'
});