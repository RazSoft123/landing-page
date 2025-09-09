import ShapeAnimation from "./ShapeAnimation";

export default function HeroSection() {
  return (
    <section className="w-full md:h-dvh border-2 border-red-500 flex items-center justify-center">
      <div>
        <div className="grid grid-cols-2 grid-rows-1 border-2">
          <div>
            <ShapeAnimation />
          </div>
          <div>
            <div>
              <div className="flex flex-col border-2">
                <span className="text-8xl font-bold">Design</span>
                <span className="text-8xl font-bold">Transform</span>
                <span className="text-8xl font-bold">Accelerate</span>
                <p className="text-2xl">
                  Redefining user experiences through Behavioural Science & AI
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p>Your trusted UI UX design agency.</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
