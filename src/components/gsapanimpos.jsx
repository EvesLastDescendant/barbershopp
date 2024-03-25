import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { fontsizes } from "../utils/fontsize";

function AnimPos(props) {
    const xTo = useRef(null);
    const yTo = useRef(null);
    const app = useRef(null);

    const { contextSafe } =  useGSAP(() => {
    xTo.current = gsap.quickTo(".flair", "x", {duration: 0.8, ease: "power3"}),
    yTo.current = gsap.quickTo(".flair", "y", {duration: 0.8, ease: "power3"});
    },{ scope: app } );

    const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
    });

    const style = {
        fontSize: `clamp(${fontsizes.lg} * 3.5, 8vw, ${fontsizes["3xl"]} * 2)`, 
        fontWeight: 600, 
        color: '#fff', 
        textAlign: 'center', 
        fontFamily: "'Cormorant', serif"
    }

    return (
    <div className="app" ref={app} onMouseMove={(e) => moveShape(e)} >
        <div className="flair"/>
        <h1 style={style}>{props.text}</h1>
    </div>
    );
}

export default AnimPos