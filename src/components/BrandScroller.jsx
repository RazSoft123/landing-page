import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BrandScroller({ children, speed = 50 }) {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    // Duplicate content for seamless looping
    const content = scroller.querySelector(".scroller-content");
    const clone = content.cloneNode(true);
    scroller.appendChild(clone);

    const totalWidth = content.offsetWidth;

    // GSAP infinite scroll
    gsap.to(scroller, {
      x: -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(scroller);
      scroller.innerHTML = ""; // cleanup
      scroller.appendChild(content);
    };
  }, [speed]);

  return (
    <div className="overflow-hidden w-full border p-4">
      <div
        ref={scrollerRef}
        className="flex whitespace-nowrap scroller"
        style={{ display: "flex" }}
      >
        <div className="scroller-content flex items-center gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}
