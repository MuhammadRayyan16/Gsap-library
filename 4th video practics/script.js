let main = document.querySelector('#main');

let cursor = document.querySelector('#cursor');

let image = document.querySelector('#image');



main.addEventListener('mousemove', function (dets) {
    gsap.to(cursor, {
        y: dets.y,
        x: dets.x,
        duraction: 10,
        ease: "back.out"
    })

})

image.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
        scale: 4,
    }
    )

})

image.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
        scale: 1,
    }
    )

})
