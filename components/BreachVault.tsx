"use client";

import { useEffect, useState } from "react";

// Placeholder values only; short enough that secret scanners won't flag them.
const secrets = [
  ["DATABASE_URL", "postgres://admin:hunter2@db"],
  ["STRIPE_SECRET", "sk_live_4eC3…"],
  ["JWT_SECRET", "eyJhbGciOiJIUz…"],
  ["AWS_S3_KEY", "AKIA…7Q2X"],
  ["RPC_URL", "https://rpc.node/key…"],
  ["SMTP_PASS", "mail8812pass"],
];

// Timeline in ticks: idle, then one row unlocked per tick, then the alert.
const TICK_MS = 650;
const FIRST_ROW = 2;
const ALERT_AT = FIRST_ROW + secrets.length;
const LOOP = ALERT_AT + 5;

const Lock = ({ open }: { open: boolean }) => (
  <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
    <rect x="3" y="7" width="10" height="7" rx="2" fill="currentColor" />
    <path
      d={open ? "M5.5 7V5a2.5 2.5 0 0 1 4.9-.7" : "M5.5 7V5a2.5 2.5 0 0 1 5 0v2"}
      fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
    />
  </svg>
);

export default function BreachVault() {
  const [tick, setTick] = useState(ALERT_AT + 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTick(0);
    const id = setInterval(() => setTick((t) => (t + 1) % LOOP), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const exposed = Math.max(0, Math.min(secrets.length, tick - FIRST_ROW + 1));
  const cursorRow = Math.min(exposed, secrets.length) - 1;
  const alert = tick >= ALERT_AT;

  return (
    <div className="vault">
      <div className="vault-top">
        <span className="vault-dots"><i /><i /><i /></span>
        <span className="vault-url">provider.cloud / production</span>
      </div>
      <div className="vault-title">
        <b>Environment variables</b>
        <small>{secrets.length} secrets</small>
      </div>
      <div className="vault-rows">
        {secrets.map(([k, v], i) => {
          const open = i < exposed;
          return (
            <div key={k} className={`vault-row ${open ? "open" : ""}`}>
              <span className="vault-lock"><Lock open={open} /></span>
              <span className="vault-key">{k}</span>
              <span className="vault-val">{open ? v : "••••••••••"}</span>
            </div>
          );
        })}
        {cursorRow >= 0 && !alert && (
          <span className="attacker" style={{ top: `${cursorRow * 44 + 22}px` }}>
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
              <path d="M2 1.5 13 7.2 8 8.6 5.8 13.6Z" fill="#0b0b12" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            <em>attacker</em>
          </span>
        )}
      </div>
      <div className={`vault-alert ${alert ? "show" : ""}`}>
        <i /> Breach · {exposed} of {secrets.length} secrets exposed
      </div>
    </div>
  );
}
