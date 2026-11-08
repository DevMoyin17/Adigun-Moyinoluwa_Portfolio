import { useEffect, useState } from "react";

const blurSteps = [0.5, 1, 2, 4, 8, 16, 32, 50];

export default function BottomBlur() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const page = document.scrollingElement || document.documentElement;
      setAtBottom(page.scrollHeight - page.clientHeight - page.scrollTop <= 2);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pageshow", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    observer.observe(document.documentElement);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pageshow", schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`bottom-blur${atBottom ? " is-at-bottom" : ""}`}
      aria-hidden="true"
    >
      {blurSteps.map((blur, index) => {
        const start = index * 12.5;
        const mask =
          index === blurSteps.length - 1
            ? `linear-gradient(to bottom, transparent ${start}%, black 100%)`
            : `linear-gradient(to bottom, transparent ${start}%, black ${start + 12.5}%, black ${start + 25}%, transparent ${Math.min(start + 37.5, 100)}%)`;
        return (
          <div
            key={blur}
            className="bottom-blur-layer"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
