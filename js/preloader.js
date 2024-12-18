import { gsap } from "gsap";


function hideLoader() {
    // Trigger click to hide loader
    document.querySelector("#load-trigger").click();
}

const loader = () => {
    // Set initial display for #load-trigger to block
    const trigger = document.querySelector("#load-trigger");
    // Preloader animation
    let tl = gsap.timeline();
    tl.to(trigger, {
        opacity: 0,
        duration: 0.6,
        ease: "power2In",
        onComplete: hideLoader
    });
}



export default loader;
