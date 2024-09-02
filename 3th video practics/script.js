let path = `M 10 100 Q 100 100 890 100`

let final = `M 10 100 Q 100 100 890 100`


let string = document.querySelector(".string")

string.addEventListener("mousemove", function (dets) {
    let path = `M 10 100 Q 500 ${dets.y} 890 100`

    gsap.to("svg path", {
        attr: { d: path },
        duration: 2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function () {

    gsap.to("svg path", {
        attr: { d: final },
        duration: 3,
        ease: "elastic.out(1,0.2)"
    })
})

