const playVideos = () => {
    let videos = document.querySelectorAll('video');

    videos.forEach((v) => {
        v.play();
    });
}

const homescreenFunction = () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#scrollingDiv",
            start: "top top",
            end: "80% bottom",
            scrub: .5
        }
    });

    gsap.to('#projectsContainer', {
        x: '10vw',
        scrollTrigger: {
            trigger: "#scrollingDiv",
            start: "top top",
            end: "bottom bottom",
            scrub: .5
        }
    })

    tl.set('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgba(255,255,255,1)'
        })
        .to('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgb(240, 223, 223)'
        })
        .to('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgb(238, 234, 200)'
        })
        .to('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgb(200, 238, 227)'
        })
        .to('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgb(221, 210, 237)'
        })
        .to('#homeContain, #navLinksContainer', {
            backgroundColor: 'rgb(210, 237, 213)'
        })
}

barba.init({
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        afterLeave(data) {
            return gsap.to('#navLinksContainer', {
                backgroundColor: 'rgb(255,255,255)'
            })
        },
        beforeEnter(data) {
            data.current.container.remove();
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.scrollTo(0, 0);
            gsap.from(data.next.container, {
                opacity: 0
            });
        },
    }],
    views: [{
        namespace: 'home',
        afterEnter() {
            playVideos();
            homescreenFunction();
        }
    }, {
        namespace: 'project',
        afterEnter() {
            playVideos();
        }
    }, {
        namespace: 'about',
        afterEnter() {
            playVideos();
        }
    }]
});