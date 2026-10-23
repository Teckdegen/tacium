import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div>
            <Logo />
            <p>Your secrets, kept silent.</p>
          </div>
          <a
            className="footer-x"
            href="https://x.com/taciumcloud"
            target="_blank"
            rel="noreferrer"
            aria-label="Tacium on X"
          >
            X <span>x.com/taciumcloud</span>
          </a>
          <a
            className="footer-x"
            href="https://t.me/taciumcloud"
            target="_blank"
            rel="noreferrer"
            aria-label="Tacium on Telegram"
          >
            Telegram <span>t.me/taciumcloud</span>
          </a>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Tacium · Live on Robinhood Chain</small>
        </div>
      </div>
    </footer>
  );
}
