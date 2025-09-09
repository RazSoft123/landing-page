// import { useEffect } from "react";
import BrandScroller from "./BrandScroller";
import ShapeAnimation from "./ShapeAnimation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

export default function HeroSection() {
  return (
    <section className="relative w-full px-4 pt-[148px] md:pt-0 md:px-0 pb-[256px] md:pb-0 min-h-[600px] xl:min-h-[700px] md:h-dvh flex items-center justify-center">
      <div className="">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4">
          <div className="sm:max-w-[600px] md:max-w-[450px] xl:max-w-[500px]">
            <ShapeAnimation />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <div className="flex flex-col sm:max-w-[600px] md:max-w-[450px] xl:max-w-[500px]">
                <Design />
                <Transform />
                <Accelerate />
                <p className="md:text-xl lg:text-2xl mt-8">
                  Redefining user experiences through Behavioural Science & AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-[50%] flex flex-col gap-4 md:gap-0 md:flex-row w-[90%] translate-x-[-50%] overflow-hidden">
        <div className="flex items-center">
          <p className="min-w-[320px] font-medium text-lg">
            Your trusted UI UX design agency.
          </p>
        </div>
        <div>
          <BrandScroller speed={20}>
            <img src="/img/logos/logo-l-1.svg" className="h-8" />
            <img src="/img/logos/logo-l-2.svg" className="h-8" />
            <img src="/img/logos/logo-l-3.svg" className="h-8" />
            <img src="/img/logos/logo-l-4.svg" className="h-8" />
            <img src="/img/logos/logo-l-5.svg" className="h-8" />
            <img src="/img/logos/logo-l-6.svg" className="h-8" />
            <img src="/img/logos/logo-l-9.svg" className="h-8" />
            <img src="/img/logos/logo-l-11.svg" className="h-8" />
            <img src="/img/logos/logo-l-12.svg" className="h-8" />
            <img src="/img/logos/logo-l-14.svg" className="h-8" />
          </BrandScroller>
        </div>
      </div>
    </section>
  );
}

function Design() {
  useGSAP(() => {
    const splits = SplitText.create("#design", {
      type: "chars",
    });

    gsap.from(splits.chars, {
      duration: 1,
      y: (i) => (i % 2 ? -50 : 50),
      autoAlpha: 0,
      stagger: 0.05,
    });

    return () => {
      splits.revert();
    };
  }, []);

  return (
    <span
      id="design"
      className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
    >
      Design
    </span>
  );
}

function Transform() {
  useGSAP(() => {
    const splitChars = SplitText.create("#transform", {
      type: "chars",
    });

    gsap.from(splitChars.chars, {
      x: 200,
      autoAlpha: 0,
      stagger: 0.05,
      duration: 1,
      delay: 1.5,
    });

    return () => {
      splitChars.revert();
    };
  }, []);

  return (
    <span
      id="transform"
      className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
    >
      Transform
    </span>
  );
}

function Accelerate() {
  useGSAP(() => {
    gsap.fromTo(
      "#accelerate",
      { autoAlpha: 0, x: 400 }, // start state
      { autoAlpha: 1, x: 0, duration: 1, delay: 2.5, ease: "elastic.inOut" }
    );
  }, []);

  return (
    <span
      id="accelerate"
      className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
    >
      Accelerate
    </span>
  );
}
