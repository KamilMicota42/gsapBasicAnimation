// gsap.from('.header', { 
//     duration: 1, 
//     y: '-100%', 
//     ease: 'bounce' 
// })

// gsap.from('.links', {
//     duration: 1,
//     opacity: 0,
//     delay: 1,
//     stagger: 0.5
// })

// gsap.from('.right', {
//     duration: 2,
//     x: '-100vw',
//     delay: 1,
//     ease: 'circ'
// })

// gsap.from('.left', {
//     duration: 2,
//     x: '100vw', //had to overflow: hidden;
//     delay: 1,
//     ease: 'circ'
// }) 

// gsap.to('.footer',{
//     duration: 1,
//     y: 0,
//     ease: 'elastic',
//     delay: 3,
// })

// gsap.fromTo('.button', {
//     duration: 1,
//     delay: 4,
//     opacity: 0,
//     scale: 0,
//     rotation: 720
// },{
//     duration: 1,
//     delay: 4,
//     opacity: 1,
//     scale: 1,
//     rotation: 0
// })

const timeline = gsap.timeline({defaults: { duration: 1}})
timeline
    .from('.header', {y: '-100%', ease: 'bounce'})
    .from('.links', { opacity: 0, stagger: 0.5})
    .from('.right', { x: '-100vw', ease: 'circ'})
    .from('.left', { x: '100vw', ease: 'circ'}, '<0.5') //had to overflow: hidden;  and '<0.5' is relative delay from last animation (animation on the left)
    .to('.footer',{ y: 0, ease: 'elastic', })
    .fromTo('.button', 
    { opacity: 0, scale: 0, rotation: 720},
    { opacity: 1, scale: 1, rotation: 0}
    )

// reversing timeline

const button = document.querySelector('.button')

button.addEventListener('click', () => {
    timeline.timeScale(3)
    timeline.reverse()
})