import { useId, useState } from "react";

// Keep the original product image. Only fill its empty chart plotting areas.
// eslint-disable-next-line react/prop-types
export default function DashboardPreview({ kind, theme }) {
  const id = useId().replace(/:/g, "");
  const [replay, setReplay] = useState(0);
  const school = kind === "schools";
  const income = [
    [265, 633],
    [338, 609],
    [411, 624],
    [484, 573],
    [557, 593],
    [630, 546],
    [703, 526],
  ];
  const expenses = [
    [265, 653],
    [338, 642],
    [411, 650],
    [484, 622],
    [557, 631],
    [630, 607],
    [703, 620],
  ];
  const completion = [
    [795, 517],
    [867, 490],
    [939, 468],
    [1011, 440],
    [1083, 416],
    [1155, 398],
    [1225, 379],
  ];
  const path = (points) =>
    points.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  return (
    <div
      className="dashboard-chart-preview"
      onMouseEnter={() => setReplay((value) => value + 1)}
    >
      <div className="dashboard-preview">
        <img
          src={`/images/${kind}-${theme}.webp`}
          alt={`${school ? "Virtuo for Schools" : "Virtuo Facility"} dashboard from De-Virtuosphere, with illustrative charts added in the existing chart panels`}
          width="1280"
          height="699"
          loading="lazy"
          decoding="async"
        />
        <svg
          key={replay}
          className="dashboard-chart-overlay"
          viewBox="0 0 1280 699"
          role="img"
          aria-label={
            school
              ? "Illustrative income, expenses and attendance charts"
              : "Illustrative work order and completion rate charts"
          }
        >
          <defs>
            <linearGradient id={`chart-fill-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={school ? "#4f9c7d" : "#8c72c9"}
                stopOpacity=".2"
              />
              <stop
                offset="100%"
                stopColor={school ? "#4f9c7d" : "#8c72c9"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          {school ? (
            <>
              <path
                d={`${path(income)} L703,680 L265,680 Z`}
                fill={`url(#chart-fill-${id})`}
                className="overlay-chart-area"
              />
              <path
                d={path(income)}
                stroke="#4f9c7d"
                className="overlay-chart-line"
                pathLength="1"
              />
              <path
                d={path(expenses)}
                stroke="#d6a13e"
                className="overlay-chart-line chart-delay"
                pathLength="1"
              />
              {income.map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#4f9c7d"
                  className="overlay-chart-dot"
                >
                  <title>Income · sample day {i + 1}</title>
                </circle>
              ))}
              {[0.76, 0.88, 0.82, 0.94, 0.86, 0.91, 0.96].map((value, i) => (
                <g
                  key={i}
                  className="overlay-chart-bar"
                  style={{ "--bar-order": i }}
                >
                  <rect
                    x={782 + i * 63}
                    y={680 - value * 150}
                    width="18"
                    height={value * 150}
                    rx="3"
                    fill="#4f9c7d"
                  >
                    <title>Present · sample day {i + 1}</title>
                  </rect>
                  <rect
                    x={803 + i * 63}
                    y={680 - (1 - value) * 250}
                    width="12"
                    height={(1 - value) * 250}
                    rx="2"
                    fill="#d6a13e"
                  />
                </g>
              ))}
            </>
          ) : (
            <>
              {[1.8, 2.6, 2.1, 3.4, 2.8, 3.6, 3.9].map((value, i) => (
                <g
                  key={i}
                  className="overlay-chart-bar"
                  style={{ "--bar-order": i }}
                >
                  <rect
                    x={283 + i * 66}
                    y={541 - value * 43}
                    width="18"
                    height={value * 43}
                    rx="3"
                    fill="#248ca6"
                  >
                    <title>Completed · sample day {i + 1}</title>
                  </rect>
                  <rect
                    x={305 + i * 66}
                    y={541 - (value + 0.15) * 43}
                    width="13"
                    height={(value + 0.15) * 43}
                    rx="2"
                    fill="#c5a438"
                  />
                </g>
              ))}
              <path
                d={`${path(completion)} L1225,541 L795,541 Z`}
                fill={`url(#chart-fill-${id})`}
                className="overlay-chart-area"
              />
              <path
                d={path(completion)}
                stroke="#9d83d3"
                className="overlay-chart-line"
                pathLength="1"
              />
              {completion.map(([x, y], i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#9d83d3"
                  className="overlay-chart-dot"
                >
                  <title>Completion rate · sample day {i + 1}</title>
                </circle>
              ))}
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
