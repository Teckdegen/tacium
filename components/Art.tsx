// Original illustrations for the Tacium page. All drawn in SVG/CSS so they
// stay sharp and need no image files.

// A dotted sphere with five glowing node points and the key at the centre.
export function ShardSphere() {
  const dots: { x: number; y: number; o: number }[] = [];
  const N = 520;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    const x = Math.cos(t) * r;
    const z = Math.sin(t) * r;
    if (z < -0.15) continue;
    dots.push({ x: 300 + x * 150, y: 175 + y * 150, o: 0.25 + z * 0.6 });
  }
  const nodes = [
    [190, 110], [410, 95], [445, 240], [300, 300], [170, 235],
  ];
  return (
    <svg viewBox="0 0 600 330" className="art" aria-hidden="true">
      <defs>
        <radialGradient id="sph" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d9d3ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beam" x1="0" x2="1">
          <stop offset="0%" stopColor="#5b4bff" />
          <stop offset="100%" stopColor="#ff6aa2" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="175" r="160" fill="url(#sph)" />
      <g className="spin">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r="1.4" fill="#6b5bff" opacity={d.o.toFixed(2)} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <path d={`M300 175 Q ${(300 + x) / 2} ${Math.min(y, 175) - 40} ${x} ${y}`} fill="none" stroke="url(#beam)" strokeWidth="1.4" strokeDasharray="3 4" className="flow" />
          <circle cx={x} cy={y} r="11" fill="#ff6aa2" opacity="0.18" className="pulse" style={{ animationDelay: `${i * 0.4}s` }} />
          <circle cx={x} cy={y} r="4.5" fill="#ff4f8b" />
        </g>
      ))}
      <rect x="276" y="151" width="48" height="48" rx="14" fill="none" stroke="#5b4bff" strokeWidth="1.5" className="key-ring" />
      <rect x="282" y="157" width="36" height="36" rx="10" fill="#0b0b12" />
      <g transform="translate(300 175)" fill="none" stroke="#fff" strokeWidth="2">
        <circle cx="-4" cy="0" r="5" />
        <path d="M1 0h10M8 0v4" />
      </g>
    </svg>
  );
}

// Availability card: one node offline, secrets still served.
export function Outage() {
  const pts = [8, 9, 8, 10, 9, 9, 10, 9, 10, 9, 9, 10];
  const line = pts.map((p, i) => `${10 + i * 18},${40 - p}`).join(" ");
  return (
    <div className="mini-card">
      <div className="mini-head"><span>Availability</span><b>100.00%</b></div>
      <svg viewBox="0 0 220 50" className="art">
        <defs>
          <linearGradient id="av" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6aa2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ff6aa2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`10,48 ${line} 208,48`} fill="url(#av)" className="fade-area" />
        <polyline points={line} fill="none" stroke="#ff4f8b" strokeWidth="2" className="draw" pathLength={1} />
      </svg>
      <div className="pills">
        <span className="pill ok">fly</span>
        <span className="pill ok">hetzner</span>
        <span className="pill ok">do</span>
        <span className="pill ok">aws</span>
        <span className="pill bad">railway · down</span>
      </div>
    </div>
  );
}

// Isometric stack: OIDC token → node check → shard released.
export function IsoStack({ active = -1 }: { active?: number }) {
  const layers = [
    { y: 150, a: "#e7e5f2", b: "#cfcbe3", label: "Shard released" },
    { y: 112, a: "#ffb1cc", b: "#ff6aa2", label: "Node verifies" },
    { y: 74, a: "#a99bff", b: "#5b4bff", label: "OIDC token" },
  ];
  const dia = (cy: number) => `150,${cy - 46} 240,${cy} 150,${cy + 46} 60,${cy}`;
  return (
    <svg viewBox="0 0 300 230" className="art" aria-hidden="true">
      <defs>
        {layers.map((l, i) => (
          <linearGradient key={i} id={`iso${i}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={l.a} />
            <stop offset="100%" stopColor={l.b} />
          </linearGradient>
        ))}
        <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke="#cfcbe8" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="300" height="230" fill="url(#grid)" opacity="0.6" />
      {layers.map((l, i) => (
        <g key={i} className={`iso-layer ${active === -1 || active === 2 - i ? "" : "dim"}`}>
          <polygon points={dia(l.y + 8)} fill="#0b0b12" opacity="0.06" />
          <polygon
            points={dia(l.y)}
            fill={`url(#iso${i})`}
            stroke="#fff"
            strokeWidth="1"
            className="iso-float"
            style={{ animationDelay: `${i * -0.8}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

// Audit log window for the big card.
export function AuditLog() {
  const rows = [
    ["11:42:08", "api_prod", "fly_iad", "0x8f3a…c21e"],
    ["11:42:08", "api_prod", "aws_use1", "0x1b09…77fa"],
    ["11:40:51", "worker", "hz_fsn1", "0xc4d2…0a13"],
    ["11:37:12", "ci_deploy", "do_ams3", "0x5e7b…92cd"],
    ["11:31:44", "unknown", "none", "denied"],
  ];
  return (
    <div className="log-window">
      <div className="log-head">
        <span>Audit log</span>
          <small>Solana · live</small>
      </div>
      <table>
        <thead>
          <tr><th>Time</th><th>App</th><th>Node</th><th>Tx</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.join()} className={r[3] === "denied" ? "denied" : ""}>
              {r.map((c, i) => <td key={i}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Revoke() {
  const apps = [
    ["api_prod", true],
    ["worker", true],
    ["old_staging", false],
  ] as const;
  return (
    <div className="mini-card">
      {apps.map(([name, on]) => (
        <div key={name} className="toggle-row">
          <span>{name}</span>
          <span className={`toggle ${on ? "on" : "cycle"}`}><i /></span>
        </div>
      ))}
      <p className="mini-foot">old_staging revoked on all nodes · 0.4s</p>
    </div>
  );
}

export function MiniTerminal() {
  return (
    <div className="mini-term">
      <span className="t-dim">$</span> npx tacium run node app.js
      <br />
      <span className="t-ok">✓</span> 3/5 shards · 31ms
      <span className="cursor" />
    </div>
  );
}

export function Rotation() {
  const bars = [30, 34, 38, 42, 40, 48, 52, 58, 62, 66, 72, 80];
  return (
    <div className="mini-card">
      <div className="mini-head"><span>Shards rotated</span><b>2m ago</b></div>
      <div className="rot-bars">
        {bars.map((h, i) => <i key={i} style={{ height: `${h}%`, "--i": i } as React.CSSProperties} />)}
      </div>
    </div>
  );
}

// Env file with masked values, used on the use-case cards.
export function EnvSnippet({ lines }: { lines: string[] }) {
  return (
    <div className="env">
      <div className="env-bar">.env</div>
      {lines.map((l) => (
        <div key={l} className="env-line">
          <span>{l}</span>=<span className="mask">••••••••••</span>
        </div>
      ))}
    </div>
  );
}
