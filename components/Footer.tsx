import { siTelegram, siX } from "simple-icons";
import { Logo } from "./Logo";

function SocialLink({
  href,
  label,
  handle,
  path,
  network,
}: {
  href: string;
  label: string;
  handle: string;
  path: string;
  network: "x" | "telegram";
}) {
  return (
    <a className={`footer-social ${network}`} href={href} target="_blank" rel="noreferrer">
      <span className="footer-social-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <path d={path} />
        </svg>
      </span>
      <span className="footer-social-copy">
        <b>{label}</b>
        <small>{handle}</small>
      </span>
      <span className="footer-social-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-identity">
            <Logo tone="light" />
            <p>Your secrets, kept silent.</p>
          </div>
          <div className="footer-socials">
            <SocialLink
              href="https://x.com/taciumcloud"
              label="Follow on X"
              handle="@taciumcloud"
              path={siX.path}
              network="x"
            />
            <SocialLink
              href="https://t.me/taciumcloud"
              label="Join Telegram"
              handle="t.me/taciumcloud"
              path={siTelegram.path}
              network="telegram"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Tacium · Live on Robinhood Chain</small>
          <span>Secrets belong nowhere singular.</span>
        </div>
      </div>
    </footer>
  );
}
