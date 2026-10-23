import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="/" className="brand" aria-label="Tacium home">
          <Logo />
        </a>
      </div>
    </header>
  );
}
