import { siDigitalocean, siFlydotio, siHetzner, siRailway } from "simple-icons";
import { MARK_PATHS } from "./Logo";

const CLOUD = "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Z";

// Drawn as one SVG so it scales as a unit and nothing can spill out of the stage.
const C = { x: 280, y: 200 };
const R = 150;
const CHIP_W = 136;
const CHIP_H = 48;

const clouds = [
  { name: "Fly.io", path: siFlydotio.path },
  { name: "AWS", path: CLOUD, hacked: true },
  { name: "Hetzner", path: siHetzner.path },
  { name: "DigitalOcean", path: siDigitalocean.path },
  { name: "Railway", path: siRailway.path },
].map((n, i) => {
  const a = ((-90 + i * 72) * Math.PI) / 180;
  return { ...n, x: C.x + Math.cos(a) * R, y: C.y + Math.sin(a) * R };
});

export default function NodeOrbit() {
  return (
    <svg viewBox="0 0 560 430" className="orbit" role="img" aria-label="Five nodes each hold one shard; one is hacked and the app keeps running">
      <defs>
        <filter id="chip-shadow" x="-30%" y="-40%" width="160%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#281a78" floodOpacity="0.1" />
        </filter>
        <radialGradient id="core-glow">
          <stop offset="0%" stopColor="#8f80ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8f80ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={C.x} cy={C.y} r={R} className="orbit-ring" />
      <circle cx={C.x} cy={C.y} r={R * 0.6} className="orbit-ring faint" />
      <circle cx={C.x} cy={C.y} r="120" fill="url(#core-glow)" />

      {clouds.map((n) =>
        n.hacked ? (
          <line key={n.name} x1={n.x} y1={n.y} x2={n.x + (C.x - n.x) * 0.45} y2={n.y + (C.y - n.y) * 0.45} className="orbit-cut" />
        ) : (
          <line key={n.name} x1={n.x} y1={n.y} x2={C.x} y2={C.y} className="orbit-line" />
        ),
      )}

      {clouds.map((n, i) =>
        n.hacked ? null : (
          <circle key={n.name} r="4" className="packet">
            <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${-i * 0.45}s`} path={`M${n.x} ${n.y} L${C.x} ${C.y}`} />
          </circle>
        ),
      )}

      <circle cx={C.x} cy={C.y} r="52" className="core-pulse" />
      <circle cx={C.x} cy={C.y} r="52" className="core-pulse late" />
      <g filter="url(#chip-shadow)">
        <rect x={C.x - 80} y={C.y - 31} width="160" height="62" rx="20" fill="#0b0b12" />
      </g>
      <g transform={`translate(${C.x - 48} ${C.y}) scale(0.85)`} fill="#fff">
        {MARK_PATHS.map((d, i) => <path key={i} d={d} />)}
      </g>
      <text x={C.x - 26} y={C.y - 3} className="core-name">api_prod</text>
      <circle cx={C.x - 21} cy={C.y + 13} r="3.5" fill="#4ade80" className="core-dot" />
      <text x={C.x - 13} y={C.y + 17} className="core-status">Running</text>

      {clouds.map((n, i) => {
        const x = n.x - CHIP_W / 2;
        const y = n.y - CHIP_H / 2;
        return (
          <g key={n.name} className={`chip ${n.hacked ? "hacked" : ""}`} style={{ animationDelay: `${i * -0.9}s` }}>
            <rect x={x} y={y} width={CHIP_W} height={CHIP_H} rx="15" className="chip-bg" filter="url(#chip-shadow)" />
            <g transform={`translate(${x + 13} ${n.y - 9}) scale(0.75)`}>
              <path d={n.path} className="chip-icon" />
            </g>
            <text x={x + 40} y={n.y - 2} className="chip-name">{n.name}</text>
            <text x={x + 40} y={n.y + 13} className="chip-sub">{n.hacked ? "Hacked · useless" : `Shard ${i + 1} · safe`}</text>
            {n.hacked && (
              <g transform={`translate(${x + CHIP_W - 2} ${y + 2})`}>
                <circle r="10" fill="#ef4444" />
                <path d="M-3.5 -3.5 3.5 3.5M3.5 -3.5 -3.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </g>
            )}
          </g>
        );
      })}

      <g transform={`translate(${C.x} 398)`}>
        <rect x="-150" y="-17" width="300" height="34" rx="17" className="orbit-pill" />
        <circle cx="-128" cy="0" r="3.5" fill="#18b26b" className="core-dot" />
        <text x="6" y="4.5" textAnchor="middle" className="orbit-pill-text">4 of 5 online · 3 needed · secrets intact</text>
      </g>
    </svg>
  );
}
