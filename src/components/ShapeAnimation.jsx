import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export default function ShapeAnimation() {
  const shapeRef = useRef(null);
  const rectRef = useRef(null);
  const circleRef = useRef(null);

  // path strings (consistent coordinates within viewBox)
  const squareD = "M75 75 H225 V225 H75 Z";
  const rectD = "M50 90 H250 V210 H50 Z";
  const circleD = "M150,75 a75,75 0 1,0 0,150 a75,75 0 1,0 0,-150";

  useEffect(() => {
    const el = shapeRef.current;

    // set the initial 'd' explicitly (helps on resets)
    el.setAttribute("d", squareD);

    // total length of the starting square path
    const totalLen = Math.ceil(el.getTotalLength()); // integer length

    // initial visual: a single rounded dot at the path start
    gsap.set(el, {
      stroke: "#000",
      strokeWidth: 3,
      strokeLinecap: "round",
      fill: "transparent",
      attr: { d: squareD },
      // make a tiny visible dash (1px) followed by a long gap so only a dot shows initially
      strokeDasharray: `1 ${totalLen}`,
      strokeDashoffset: 0,
    });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power2.inOut" },
    });

    // 1) Grow the tiny dot into the full square outline
    tl.to(el, {
      strokeDasharray: `${totalLen} 0`, // visible dash becomes the whole path
      duration: 1.6,
      ease: "power1.inOut",
    });

    // small pause so user sees full outline
    tl.to({}, { duration: 0.35 });

    // 2) Morph into a rectangle
    tl.to(el, {
      morphSVG: rectRef.current, // using hidden rect path
      duration: 1.1,
    });

    // fill it black and remove stroke (gives the filled rectangle look)
    tl.to(el, { fill: "#000", strokeWidth: 0, duration: 0.5, delay: 0.15 });

    // 3) Morph rectangle -> circle
    tl.to(el, {
      morphSVG: circleRef.current,
      duration: 1.1,
    });

    // 4) Move circle out of screen and fade
    tl.to(el, {
      x: 350,
      opacity: 0,
      duration: 1.1,
      ease: "power1.in",
    });

    // reset to starting state for the next loop:
    tl.set(el, {
      attr: { d: squareD }, // reset path shape
    });

    tl.set(el, {
      y: 0,
      opacity: 1,
      fill: "transparent",
      strokeWidth: 6,
      stroke: "#000",
      strokeLinecap: "round",
      strokeDasharray: `1 ${totalLen}`, // back to the tiny-dot start
      strokeDashoffset: 0,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      <svg
        style={{ width: "50%", height: "auto" }}
        viewBox="0 0 300 300"
        aria-hidden="true"
      >
        {/* visible shape we animate */}
        <path ref={shapeRef} d={squareD} />

        {/* helper paths for morph targets (kept in DOM, but not visible) */}
        <path ref={rectRef} d={rectD} style={{ visibility: "hidden" }} />
        <path ref={circleRef} d={circleD} style={{ visibility: "hidden" }} />
      </svg>
    </div>
  );
}
