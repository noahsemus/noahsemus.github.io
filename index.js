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

const homeLeave = (data) => {
    return new Promise(resolve => {
        let tl = gsap.timeline({
            defaults: {
                duration: .4,
                opacity: 0,
                ease: "power1.in"
            }
        });

        tl.to('#coolButton', {
                x: 100,
            })
            .to('#shouldScroll', {
                x: -100,
            }, '<')
            .to('#githubButton', {
                x: 100,
            }, '<.2')
            .to('#heroText', {
                x: 200,
                duration: .6,
            }, '<.2')
            .to('#homeContain', {
                opacity: 1,
                backgroundColor: 'rgb(255,255,255)'
            }, '<')
            .to('#projectsContainer', {
                left: -300,
                duration: .6,
                onComplete: resolve
            }, '<.2');
    })
}

const homeEnter = (data) => {
    return new Promise(resolve => {
        let tl = gsap.timeline({
            defaults: {
                duration: .4,
                opacity: 0,
                ease: "power1.out"
            }
        });

        tl.from('#rightInfo', {
                x: 100,
                duration: .6
            })
            .from('#shouldScroll', {
                x: -100,
            }, '<')
            .from('#homeContain', {
                opacity: 1,
                backgroundColor: 'rgb(255,255,255)'
            }, '<')
            .from('#projectsContainer', {
                left: -300,
                duration: .6,
                onComplete: resolve
            }, '<.2');
    })
}

const projectEnter = (data) => {
    return new Promise(resolve => {
        let tl = gsap.timeline({
            defaults: {
                duration: .4,
                opacity: 0,
                ease: "power1.out"
            }
        });

        tl.from('.heroProjectTitleContainer', {
                x: 100
            })
            .from('.listText', {
                x: -100
            }, '<.2')
            .from('.heroProjectImage', {
                y: 100,
                onComplete: resolve
            }, '<.2')
    })
}

const projectLeave = (data) => {
    return new Promise(resolve => {
        let tl = gsap.timeline({
            defaults: {
                duration: .6,
                opacity: 0,
                ease: "power1.in"
            }
        });

        tl.to('.projectContain', {
            y: 50,
            onComplete: resolve
        })
    })
}

barba.init({
    transitions: [{
        name: 'home-to-project',
        from: {
            namespace: 'home'
        },
        to: {
            namespace: 'project'
        },
        leave: ({
            data
        }) => homeLeave(),
        afterLeave(data) {
            return gsap.to('#navLinksContainer', {
                backgroundColor: 'rgb(255,255,255)'
            })
        },
        beforeEnter(data) {
            data.current.container.remove();
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.scrollTo(0, 0);
        },
        enter: ({
            data
        }) => projectEnter()
    }, {
        name: 'project-to-home',
        from: {
            namespace: 'project'
        },
        to: {
            namespace: 'home'
        },
        leave: ({
            data
        }) => projectLeave(data),
        afterLeave(data) {
            return gsap.to('#navLinksContainer', {
                backgroundColor: 'rgb(255,255,255)'
            })
        },
        beforeEnter(data) {
            data.current.container.remove();
            ScrollTrigger.getAll().forEach(t => t.kill());
            window.scrollTo(0, 0);
        },
        enter: ({
            data
        }) => homeEnter()
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