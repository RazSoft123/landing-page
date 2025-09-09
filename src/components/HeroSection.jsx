import BrandScroller from "./BrandScroller";
import ShapeAnimation from "./ShapeAnimation";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:h-dvh flex items-center justify-center">
      <div className="">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div>
            <ShapeAnimation />
          </div>
          <div>
            <div>
              <div className="flex flex-col max-w-[500px]">
                <span className="text-8xl font-bold">Design</span>
                <span className="text-8xl font-bold">Transform</span>
                <span className="text-8xl font-bold">Accelerate</span>
                <p className="text-2xl mt-8">
                  Redefining user experiences through Behavioural Science & AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-[50%] flex w-[90%] translate-x-[-50%] overflow-hidden">
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
