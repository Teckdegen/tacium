import { Logo } from "./Logo";

const cols: [string, string[]][] = [
  ["Product", ["Secrets vault", "CLI", "JS SDK", "Python SDK", "Dashboard", "Onchain audit log", "TEE mode"]],
  ["Use cases", ["Startups", "Web3 teams", "AI apps", "CI/CD", "Agencies"]],
  ["Developers", ["Docs", "Quickstart", "Run a node", "Security", "Bug bounty"]],
  ["Company", ["About", "Blog", "Contact", "Privacy policy", "Terms"]],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {cols.map(([h, links]) => (
          <div key={h} className="footer-col">
            <h6>{h}</h6>
            {links.map((l) => <a key={l} href="#">{l}</a>)}
          </div>
        ))}
        <div className="footer-brand">
          <Logo />
          <p>Your secrets, kept silent.</p>
          <div className="socials">
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Docs">Docs</a>
          </div>
          <small>© 2026 Tacium · Live on Robinhood Chain</small>
        </div>
      </div>
    </footer>
  );
}
