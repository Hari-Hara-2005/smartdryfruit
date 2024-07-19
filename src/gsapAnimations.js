import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
    // First timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".two",
            start: "0% 100%",
            end: "70% 50%",
            scrub: true,
            // markers: true,
        }
    });

    tl.to("#pack", { top: "115%", left: "10%" }, 'orange')
        // .to("#orange-cut", { top: "160%", left: "23%" }, 'orange')
        .to("#cashew", { width: "15%", top: "125%", right: "10%" }, 'orange')
        .to("#leaf", { top: "110%", rotate: "65deg", left: "70%" }, 'orange')
        .to("#leaf2", { top: "120%", rotate: "200deg", left: "0%" }, 'orange');

    // Second timeline
    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".three",
    //         start: "0% 95%",
    //         end: "20% 50%",
    //         scrub: true,
    //     }
    // });

    // tl2.from(".lemon1", { rotate: "-90deg", left: "-100%", top: "110%" }, 'ca')
    //     .from("#cocacola", { rotate: "-90deg", top: "110%", left: "-100%" }, 'ca')
    //     .from(".lemon2", { rotate: "90deg", left: "100%", top: "110%" }, 'ca')
    //     .from("#pepsi", { rotate: "90deg", top: "110%", left: "100%" }, 'ca')
    //     .to("#orange-cut", { width: "18%", left: "42%", top: "204%" }, 'ca')
    //     .to("#fanta", { width: "35%", top: "210%", left: "33%" }, 'ca');

};

animateHero();
