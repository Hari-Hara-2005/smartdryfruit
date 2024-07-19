import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
    // Create a matchMedia instance
    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        // Animations for desktop
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
            .to("#cashew", { width: "15%", top: "125%", right: "10%" }, 'orange')
            .to("#leaf", { top: "110%", rotate: "65deg", left: "70%" }, 'orange')
            .to("#leaf2", { top: "120%", rotate: "200deg", left: "0%" }, 'orange');
    });

    mm.add("(max-width: 768px)", () => {
        // Animations for tablets and below
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 100%",
                end: "70% 50%",
                scrub: true,
                // markers: true,
            }
        });

        tl.to("#pack", { top: "0%", left: "50%" }, 'orange')
            .to("#cashew", { width: "30%", top: "130%", right: "5%" }, 'orange')
            .to("#leaf", { top: "115%", rotate: "45deg", left: "60%" }, 'orange')
            .to("#leaf2", { top: "110%", rotate: "180deg", left: "5%" }, 'orange');
    });

    mm.add("(max-width: 480px)", () => {
        // Animations for mobile devices
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 100%",
                end: "70% 50%",
                scrub: true,
                // markers: true,
            }
        });

        tl.to("#pack", { top: "110%", left: "28%" }, 'orange')
            .to("#cashew", { width: "25%", top: "140%", right: "0%" }, 'orange')
            .to("#leaf", { top: "120%", rotate: "30deg", left: "70%" }, 'orange')
            .to("#leaf2", { top: "120%", rotate: "150deg", left: "8%" }, 'orange');
    });

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
