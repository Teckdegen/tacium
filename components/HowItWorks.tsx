import { siDigitalocean, siDocker, siFlydotio, siHetzner, siRailway, siVercel } from "simple-icons";
import { MARK_PATHS } from "./Logo";
import Command from "./Command";

const SHARD_COLORS = ["#5b4bff", "#7b6dff", "#a99bff", "#ff6aa2", "#ff4f8b"];
const CLOUD = "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Z";

// The Tacium mark's five shards, pushed apart ("split") or pulled
// together ("join") on a loop.
function Shards({ mode }: { mode: "split" | "join" }) {
  return (
    <svg viewBox="-24 -24 48 48" className={`shards ${mode}`} aria-hidden="true">
      <circle r="17" className="shards-glow" />
      {MARK_PATHS.map((d, i) => {
        const a = ((-90 + i * 72 + 36) * Math.PI) / 180;
        return (
          <path
            key={i}
            d={d}
            fill={SHARD_COLORS[i]}
            style={{ "--dx": `${(Math.cos(a) * 7).toFixed(2)}px`, "--dy": `${(Math.sin(a) * 7).toFixed(2)}px` } as React.CSSProperties}
          />
        );
      })}
    </svg>
  );
}

function SplitArt() {
  return (
    <div className="art-split">
      <div className="mini-env">
        <div className="mini-env-bar">.env</div>
        {["DATABASE_URL", "STRIPE_SECRET", "JWT_SECRET", "RPC_URL"].map((k) => (
          <div key={k} className="mini-env-line">
            <span>{k}</span>
            <i />
          </div>
        ))}
      </div>
      <span className="art-arrow" />
      <Shards mode="split" />
    </div>
  );
}

const clouds = [
  { name: "Fly.io", path: siFlydotio.path },
  { name: "AWS", path: CLOUD },
  { name: "Hetzner", path: siHetzner.path },
  { name: "DigitalOcean", path: siDigitalocean.path },
  { name: "Railway", path: siRailway.path },
];

function SpreadArt() {
  return (
    <ul className="art-spread">
      {clouds.map((c, i) => (
        <li key={c.name} style={{ "--i": i } as React.CSSProperties}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d={c.path} fill="currentColor" />
          </svg>
          <span>{c.name}</span>
          <span className="spread-chip" style={{ background: SHARD_COLORS[i] }}>shard {i + 1}</span>
        </li>
      ))}
    </ul>
  );
}

function JoinArt() {
  return (
    <div className="art-join">
      <Shards mode="join" />
      <div className="join-term">
        <span className="t-ok">✓</span> 3 of 5 shards · 31ms
        <br />
        <span className="t-ok">✓</span> 48 secrets in memory
      </div>
    </div>
  );
}

const steps = [
  { n: "01", title: "Split", desc: "Your secrets are encrypted on your machine and broken into shards.", Art: SplitArt },
  { n: "02", title: "Spread", desc: "Each shard goes to an independent node on a different cloud, registered on Solana.", Art: SpreadArt },
  { n: "03", title: "Reassemble", desc: "Only your verified app can rebuild them, at runtime, and every rebuild is logged onchain.", Art: JoinArt },
];

const worksWith = [
  { name: "Railway", path: siRailway.path },
  { name: "Vercel", path: siVercel.path },
  { name: "Fly.io", path: siFlydotio.path },
  { name: "AWS", path: CLOUD },
  { name: "Docker", path: siDocker.path },
];

export default function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="sec-head center">
        <span className="eyebrow">How it works</span>
        <h2 className="title">
          Split. Spread. <span className="muted">Reassemble.</span>
        </h2>
      </div>

      <div className="flow">
        {steps.map(({ n, title, desc, Art }) => (
          <article key={n} className="flow-card">
            <div className="flow-art"><Art /></div>
            <div className="flow-copy">
              <span className="step-n">{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>

      <Command />

      <div className="works-with">
        <span>Works with</span>
        {worksWith.map((w) => (
          <span key={w.name} className="ww-item">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d={w.path} fill="currentColor" />
            </svg>
            {w.name}
          </span>
        ))}
        <span className="ww-more">and anywhere you deploy</span>
      </div>
    </section>
  );
}
