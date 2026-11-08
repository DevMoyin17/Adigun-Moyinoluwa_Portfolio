const blurSteps = [0.5, 1, 2, 4, 8, 16, 32, 50];

export default function BottomBlur() {
  return (
    <div className="bottom-blur" aria-hidden="true">
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
