// Tacium mark: one ring split into five shards, each pushed slightly
// outward so the gaps between them stay an even width.
const R_OUT = 12;
const R_IN = 4.4;
const PUSH = 1.05;

function shard(i: number) {
  const a0 = ((-90 + i * 72) * Math.PI) / 180;
  const a1 = ((-90 + (i + 1) * 72) * Math.PI) / 180;
  const mid = (a0 + a1) / 2;
  const dx = Math.cos(mid) * PUSH;
  const dy = Math.sin(mid) * PUSH;
  const p = (r: number, a: number) =>
    `${(Math.cos(a) * r + dx).toFixed(3)} ${(Math.sin(a) * r + dy).toFixed(3)}`;
  return `M${p(R_OUT, a0)} A${R_OUT} ${R_OUT} 0 0 1 ${p(R_OUT, a1)} L${p(R_IN, a1)} A${R_IN} ${R_IN} 0 0 0 ${p(R_IN, a0)} Z`;
}

export const MARK_PATHS = [0, 1, 2, 3, 4].map(shard);

export function Mark({ size = 28, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="-14 -14 28 28" aria-hidden="true">
      {MARK_PATHS.map((d, i) => (
        <path key={i} d={d} fill={color} />
      ))}
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "#0b0b12" : "#ffffff";
  return (
    <span className="logo" style={{ color }}>
      <Mark size={30} color={color} />
      <span className="logo-word">tacium</span>
    </span>
  );
}
