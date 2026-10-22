const HERO_LINKS = [
  [120, 120, 340, 220],
  [340, 220, 560, 140],
  [560, 140, 780, 240],
  [780, 240, 1020, 150],
  [340, 220, 420, 420],
  [420, 420, 620, 480],
  [620, 480, 860, 420],
  [860, 420, 1040, 500],
  [560, 140, 620, 480],
  [780, 240, 860, 420],
  [120, 120, 180, 380],
  [180, 380, 420, 420],
];

const HERO_NODES = [
  [120, 120],
  [340, 220],
  [560, 140],
  [780, 240],
  [1020, 150],
  [420, 420],
  [620, 480],
  [860, 420],
  [1040, 500],
  [180, 380],
];

const CTA_LINKS = [
  [80, 80, 300, 180],
  [300, 180, 560, 90],
  [560, 90, 820, 200],
  [820, 200, 1080, 110],
];

const CTA_NODES = [
  [80, 80],
  [300, 180],
  [560, 90],
  [820, 200],
  [1080, 110],
];

const PULSE_CLASSES = ["pulse", "pulse2", "pulse3"];

export function DataNetwork({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "cta";
  className?: string;
}) {
  const links = variant === "hero" ? HERO_LINKS : CTA_LINKS;
  const nodes = variant === "hero" ? HERO_NODES : CTA_NODES;
  const viewBox = variant === "hero" ? "0 0 1200 700" : "0 0 1200 500";

  return (
    <div className={`data-net ${className}`} aria-hidden="true">
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
        <g className="link">
          {links.map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
        {nodes.map(([cx, cy], i) => (
          <circle
            key={i}
            className={`node ${PULSE_CLASSES[i % PULSE_CLASSES.length]}`}
            cx={cx}
            cy={cy}
            r="4"
          />
        ))}
      </svg>
    </div>
  );
}
