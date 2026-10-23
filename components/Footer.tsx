import { siTelegram, siX } from "simple-icons";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo />
        <nav className="footer-socials" aria-label="Social links">
          <a
            className="footer-social-icon"
            href="https://t.me/taciumcloud"
            target="_blank"
            rel="noreferrer"
            aria-label="Tacium on Telegram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siTelegram.path} /></svg>
          </a>
          <a
            className="footer-social-icon"
            href="https://x.com/taciumcloud"
            target="_blank"
            rel="noreferrer"
            aria-label="Tacium on X"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={siX.path} /></svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
