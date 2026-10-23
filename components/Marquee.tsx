import {
  siDigitalocean, siDocker, siFlydotio, siGithubactions, siGooglecloud, siHetzner,
  siKubernetes, siNetlify, siRailway, siRender, siVercel,
} from "simple-icons";

// Brand marks come from Simple Icons (CC0). AWS isn't in that set, so it
// gets a generic cloud glyph instead of a hand-drawn copy of their logo.
const CLOUD = "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Z";

const targets: { name: string; path: string; hex: string }[] = [
  { name: "Railway", path: siRailway.path, hex: siRailway.hex },
  { name: "Vercel", path: siVercel.path, hex: siVercel.hex },
  { name: "Fly.io", path: siFlydotio.path, hex: "7B3BE2" },
  { name: "AWS", path: CLOUD, hex: "FF9900" },
  { name: "Google Cloud", path: siGooglecloud.path, hex: siGooglecloud.hex },
  { name: "Render", path: siRender.path, hex: siRender.hex },
  { name: "GitHub Actions", path: siGithubactions.path, hex: siGithubactions.hex },
  { name: "Docker", path: siDocker.path, hex: siDocker.hex },
  { name: "Kubernetes", path: siKubernetes.path, hex: siKubernetes.hex },
  { name: "Hetzner", path: siHetzner.path, hex: siHetzner.hex },
  { name: "DigitalOcean", path: siDigitalocean.path, hex: siDigitalocean.hex },
  { name: "Netlify", path: siNetlify.path, hex: siNetlify.hex },
];

export default function Marquee() {
  const row = [...targets, ...targets];
  return (
    <section className="marquee" aria-label="Works where you deploy">
      <p className="marquee-label">Works wherever you deploy</p>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="marquee-item"
            style={{ "--brand": `#${t.hex}` } as React.CSSProperties}
            aria-hidden={i >= targets.length}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
              <path d={t.path} fill="currentColor" />
            </svg>
            {t.name}
          </span>
        ))}
      </div>
    </section>
  );
}
