function LocomotiveScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

LocomotiveScrollTrigger()


function ElementSizeStartAmin() {
    let page1 = document.querySelector("#page1");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 1280 || elemWidth >= 1024) {
        function startAnim() {
            let tl = gsap.timeline();
            tl.to("#cont" , {
                y:"100vh",
                scale: 0.4,
                duration : 0
            })
            tl.to("#cont", {
                y:"-60vh",
                duration: 1.2,
                delay: 1
            })
            tl.to("#cont", {
                delay: 0.3,
                y:"0vh",
                rotate : -720,
                scale: 1,
                duration: 0.8,
            })
        }
        startAnim()
    }
}


function cardAnim() {
    let one = document.querySelector("#page8 .one");
    let two = document.querySelector("#page8 .two ");
    let three = document.querySelector("#page8 .three ");
    let four = document.querySelector("#page8 .four");
    
    let page1 = document.querySelector("#page1");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 480) {
        one.addEventListener("mouseenter", ()=> {
            gsap.to(one , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-26%",
                duration:0.9
            })
            gsap.to(three , {
                left: "-13%",
                duration:0.7
            })
            gsap.to(two , {
                left: "-1%",
                duration:0.5
            })
        })
        one.addEventListener("mouseleave", ()=> {
            gsap.to(one , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(two , {
                left: "-14%",
                duration:0.9
            })
            gsap.to(three , {
                left: "-28%",
                duration:0.7
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
    
        two.addEventListener("mouseenter", ()=> {
            gsap.to(two , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-29%",
                duration:0.7
            })
            gsap.to(three , {
                left: "-15%",
                duration:0.5
            })
        })
        two.addEventListener("mouseleave", ()=> {
            gsap.to(two , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(three , {
                left: "-28%",
                duration:0.7
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
    
        three.addEventListener("mouseenter", ()=> {
            gsap.to(three , {
                backgroundColor : "#b0a698"
            })
            gsap.to(four , {
                left: "-29%",
                duration:0.5
            })
        })
        three.addEventListener("mouseleave", ()=> {
            gsap.to(three , {
                backgroundColor: "#C4BCB3"
            })
            gsap.to(four , {
                left: "-42%",
                duration:0.5
            })
        })
        four.addEventListener("mouseenter", ()=> {
            gsap.to(four , {
                backgroundColor : "#b0a698"
            })
        })
        four.addEventListener("mouseleave", ()=> {
            gsap.to(four , {
                backgroundColor: "#C4BCB3"
            })
        })
    }
    
}


function workLoad() {
    let page1 = document.querySelector(".aboutanime");
    let head = document.querySelector("#pageB #section1");
    let second = document.querySelector("#pageB #section2");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 1280 || elemWidth >= 1024) {
        function startAnim() {
            let tl = gsap.timeline();
            tl.from(head , {
                opacity : 0 ,
                duration : 1.7 ,
                delay : 0.3
            },"a");
            tl.from(second , {
                opacity : 0 ,
                duration : 1.7 ,
                delay : 0.3
            },"a");
        }
        startAnim()
    }
}


function aboutLoad() {
    let page1 = document.querySelector(".aboutanime");
    let nav = document.querySelector(".aboutanime #nav");
    let head = document.querySelector(".aboutanime #about-headding");
    const elemWidth = page1.clientWidth;
    if (elemWidth >= 1280 || elemWidth >= 1024) {
        function startAnim() {
            let tl = gsap.timeline();
            tl.from(nav , {
                opacity : 0 ,
                duration : 1.7 ,
                delay : 0.3
            },"a");
            tl.from(head , {
                opacity : 0 ,
                duration : 1.7 ,
                delay : 0.3
            },"a");
        }
        startAnim()
    }
}


function workContent() {
    let pageB = document.querySelector("#pageB");
    const elemWidth = pageB.clientWidth;
    if (elemWidth >= 1280 || elemWidth >= 1024) {
        function content() {
            gsap.to("#pageB", {
                transform : "translateX(-65%)",
                scrollTrigger:{
                    trigger:"#pageB",
                    scroller:"#main",
                    start:"top 0%",
                    end:"top -200%",
                    scrub:3,
                    pin:true
                }
            })
        }
        content()
    }
}


function updateSecondLinkHref() {
    const links = document.querySelectorAll('#menu-content a');

    if (links.length > 1 && window.innerWidth < 479) {
        links[1].setAttribute('href', './workres.html'); // Set the href for the 2nd <a> tag
    } else if (links.length > 1) {
        links[1].setAttribute('href', './work.html'); // Optionally reset to the original href
    }
}


window.addEventListener("load", workContent); 

window.addEventListener("load", aboutLoad);

window.addEventListener("load", workLoad);

window.addEventListener("load", cardAnim);

window.addEventListener("load", ElementSizeStartAmin);    

updateSecondLinkHref();
window.addEventListener('load', updateSecondLinkHref);


function menuAnim() {
    let bar1 = document.querySelector("#bar1");
    let bar2 = document.querySelector("#bar2");
    let menu = document.querySelector("#menu");
    let menupg = document.querySelector("#menu-page");
    let isOpen = false; 

    const orangeBar = document.querySelector('#orangeBar');
    const as = document.querySelectorAll('#contentCont a');

    menu.addEventListener("click", () => {
        let tl = gsap.timeline();
        
        if (!isOpen) {
            orangeBar.style.width = "0%";
            tl.to(bar1, {
                y: 3,
                rotate: "45deg",
                duration: 0.7,
                backgroundColor: "#CDC6BE" ,
            }, "a");
            tl.to(bar2, {
                y: -3,
                rotate: "-45deg",
                duration: 0.7,
                backgroundColor: "#CDC6BE"
            }, "a");
            tl.to(menupg , {
                y : "100vh", 
                duration : 1
            }, "a");
            as.forEach(a => {
                a.style.top = "0%";
                let tl = gsap.timeline();
                tl.from(a , {
                    top : "25vh" ,
                    duration : 0.7 , 
                    delay : 0.8 ,
                    ease: "power2.inOut"
                });
                tl.to(orangeBar , {
                    width : "95%",
                    duration: 0.7,
                    ease: "power2.inOut"
                })
            });
        } else {
            orangeBar.style.width = "95%";
            as.forEach(a => {
                a.style.top = "0%";
                tl.to(orangeBar , {
                    width : "0%",
                    duration: 0.7,
                    ease: "power2.inOut"
                });
                tl.to(a , {
                    top : "25vh" ,
                    duration : 0.7 , 
                    ease: "power2.inOut"
                },"b");
            });
            tl.to(bar1, {
                y: 0,
                rotate: "0deg",
                duration: 0.7 ,
                backgroundColor: "#1C1C19",
            }, "b");
            tl.to(bar2, {
                y: 0,
                rotate: "0deg",
                duration: 0.7 ,
                backgroundColor: "#1C1C19"
            }, "b");
            tl.to(menupg , {
                y : "0vh", 
                duration : 1 ,
                delay : 0.6
            }, "b");
        }
        isOpen = !isOpen;
    });
    bar1.style.zIndex = "999";
    bar2.style.zIndex = "999";
}

menuAnim();


function menuNav() {
    let links = document.querySelectorAll("#menu-page a");
    links.forEach((a) => {
        a.addEventListener("mouseenter", () => {
            gsap.to(a, {
                letterSpacing: -4,
                duration: 0.2,
                color: "#aa9d8e",
            });
        });
        a.addEventListener("mouseleave", () => {
            gsap.to(a, {
                letterSpacing: -8,
                duration: 0.2,
                color: "#CDC6BE",
            });
        });
    });
}

menuNav();


function updateAccordionWidth() {
    const accordion = document.querySelector('.accordion');
    const tabs = document.querySelectorAll('.tabs');
    let totalWidth = 0;

    tabs.forEach(tab => {
        if (tab.classList.contains('expanded')) {
            totalWidth += tab.offsetWidth; 
        } else {
            totalWidth += 10 * window.innerWidth / 100;
        }
    });

    accordion.style.width = totalWidth + 'px';
}


document.querySelectorAll('.tabs').forEach(tab => {
    tab.addEventListener('click', function() {
      if (this.classList.contains('expanded')) {
        this.classList.remove('expanded');
        window.addEventListener("load", updateAccordionWidth);  
      } else {
        document.querySelectorAll('.tabs').forEach(t => t.classList.remove('expanded'));
        this.classList.add('expanded');
        window.addEventListener("load", updateAccordionWidth);  
      }
    });
});

window.addEventListener("load", updateAccordionWidth);    
