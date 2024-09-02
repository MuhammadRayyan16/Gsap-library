
// gsap.to(".box", {
//     x: 850,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     repeat: 1,
//     yoyo: true
// })



// gsap.from("h1", {
//     y: 50,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     stagger: 0.3,
// })



// gsap.to(".box", {
//     x: 850,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     repeat: 1,
//     yoyo: true
// })





let tl = gsap.timeline()

tl.from("h1", {
    y: -30,
    opacity: 0,
    duration: 2,
    delay: 0.5,
})

tl.from("h4", {
    y: -30,
    opacity: 0,
    duration: 2,
    // delay: 1,
    stagger: 0.3
})



tl.from("h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    scale: 0.2
})

