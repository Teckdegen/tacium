import { Mark } from "./Logo";
import Command from "./Command";

const fetches = [14, 18, 12, 20, 16, 22, 19, 25, 21, 24, 28, 23, 30, 27, 33, 29, 36, 31, 38, 35, 44, 40, 62, 70, 48];

const nodes = [
  { name: "fly_iad", cloud: "Fly.io", ok: true },
  { name: "hz_fsn1", cloud: "Hetzner", ok: true },
  { name: "do_ams3", cloud: "DigitalOcean", ok: true },
  { name: "aws_use1", cloud: "AWS", ok: true },
  { name: "rw_usw", cloud: "Railway", ok: false },
];

const termLines: [string, string, string, string?][] = [
  ["$", "t-dim", "npx tacium run node server.js"],
  ["✓", "t-ok", "identity verified", "github oidc"],
  ["✓", "t-ok", "shard 1/3", "fly_iad"],
  ["✓", "t-ok", "shard 2/3", "hz_fsn1"],
  ["✗", "t-bad", "rw_usw offline", "skipped"],
  ["✓", "t-ok", "shard 3/3", "aws_use1"],
  ["✓", "t-ok", "48 secrets loaded into memory"],
  ["✓", "t-ok", "access logged onchain", "robinhood"],
  ["▸", "t-acc", "listening on :3000"],
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          Your secrets shouldn&apos;t live <span className="muted">in one place.</span>
        </h1>
        <p className="lede">
          Tacium splits your <code>.env</code> across independent nodes, coordinated on Robinhood
          Chain. One gets hacked, nothing leaks. One goes down, you stay online.
        </p>
        <Command />
        <p className="fine">
          Live on Robinhood Chain. Every node is registered and every access is logged onchain.
        </p>
      </div>

      <div className="hero-art">
        <div className="window">
          <div className="window-bar">
            <span className="dots"><i /><i /><i /></span>
            <span className="url">🔒 dashboard.tacium.cloud</span>
          </div>
          <div className="dash">
            <aside className="dash-side">
              <div className="dash-org"><Mark size={14} /> acme_api <span className="caret">▾</span></div>
              <ul>
                <li className="on">Secrets</li>
                <li>Nodes</li>
                <li>Access policies</li>
                <li>Audit log</li>
                <li>Settings</li>
              </ul>
            </aside>
            <div className="dash-main">
              <h3>Secrets</h3>
              <div className="dash-stats">
                <div className="stat-card">
                  <span>Secrets stored</span>
                  <b>48 <em>↑ 6</em></b>
                </div>
                <div className="stat-card">
                  <span>Nodes online</span>
                  <b>4 / 5 <em className="ok">healthy</em></b>
                </div>
              </div>
              <div className="dash-row">
                <div className="panel">
                  <span className="panel-title">Secret fetches</span>
                  <div className="bars">
                    {fetches.map((h, i) => (
                      <i
                        key={i}
                        style={{ height: `${h}%`, "--i": i } as React.CSSProperties}
                        className={i >= 22 ? "hi" : ""}
                      />
                    ))}
                  </div>
                  <div className="axis"><span>Oct 1</span><span>Oct 8</span><span>Oct 15</span><span>Oct 22</span></div>
                </div>
                <div className="panel">
                  <span className="panel-title">Shard holders</span>
                  <ul className="node-list">
                    {nodes.map((n) => (
                      <li key={n.name}>
                        <i className={n.ok ? "dot-ok" : "dot-bad"} />
                        <span>{n.name}</span>
                        <small>{n.cloud}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-bar"><span className="dots"><i /><i /><i /></span> zsh</div>
          <div className="term-body">
            {termLines.map(([mark, cls, text, dim], i) => (
              <div key={i} className="t-line" style={{ animationDelay: `${0.9 + i * 0.38}s` }}>
                <span className={cls}>{mark}</span> {text} {dim && <span className="t-dim">{dim}</span>}
                {i === termLines.length - 1 && <span className="cursor" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
