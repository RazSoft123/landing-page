import "./BrandScroller.css";

export default function BrandScroller({ children, speed = 30 }) {
  // speed = animation duration in seconds
  return (
    <div className="brand-scroller overflow-hidden w-full border-l-1 p-4">
      <div
        className="brand-track flex gap-8"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex items-center gap-12">{children}</div>
        <div className="flex items-center gap-12">{children}</div>
      </div>
    </div>
  );
}
