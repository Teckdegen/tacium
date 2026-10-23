"use client";

import { useEffect, useState } from "react";

type Row = { label: string; value: string; note: string; tone?: "ok" | "bad" };

const items: {
  title: string;
  desc: string;
  link: string;
  card: { name: string; status: string; rows: Row[]; pill: Row; button: string };
}[] = [
  {
    title: "Threshold crypto",
    desc: "No node ever sees your full secret. An attacker needs a majority of nodes at the same time.",
    link: "How shards work",
    card: {
      name: "Threshold",
      status: "3 of 5",
      rows: [
        { label: "Shards collected", value: "3", note: "Unlocked", tone: "ok" },
        { label: "One stolen shard", value: "1", note: "Useless", tone: "bad" },
      ],
      pill: { label: "Full key on any node", value: "", note: "Never" },
      button: "Unlocked in memory",
    },
  },
  {
    title: "No API keys",
    desc: "Your app proves who it is with a short lived OIDC token. There's no long-lived key to steal.",
    link: "Identity check",
    card: {
      name: "Identity",
      status: "OIDC",
      rows: [
        { label: "Token", value: "github", note: "Verified", tone: "ok" },
        { label: "Expires in", value: "15m", note: "Auto renew" },
      ],
      pill: { label: "Stored API key", value: "", note: "None" },
      button: "Shard released",
    },
  },
  {
    title: "Always online",
    desc: "Nodes can fail and you keep running. Any 3 of 5 are enough to boot your app.",
    link: "Node health",
    card: {
      name: "Availability",
      status: "Online",
      rows: [
        { label: "Nodes up", value: "4/5", note: "Railway down", tone: "bad" },
        { label: "Needed to boot", value: "3", note: "Met", tone: "ok" },
      ],
      pill: { label: "Your app", value: "", note: "Running" },
      button: "Serving secrets",
    },
  },
  {
    title: "Onchain audit",
    desc: "Every access is logged on Solana, so nobody can quietly read your secrets.",
    link: "View the log",
    card: {
      name: "Audit",
      status: "Live",
      rows: [
        { label: "Last access", value: "11:42", note: "api_prod", tone: "ok" },
        { label: "Tx", value: "0x8f3a", note: "Confirmed", tone: "ok" },
      ],
      pill: { label: "Unknown app", value: "", note: "Denied" },
      button: "Logged onchain",
    },
  },
];

const CYCLE_MS = 6000;

export default function Safety() {
  const [open, setOpen] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setOpen((o) => (o + 1) % items.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [open, paused]);

  const { card } = items[open];

  return (
    <section
      className="section safety"
      id="security"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 className="title">
        <span className="muted">Built so no one holds the keys.</span> Not even us.
      </h2>
      <div className="feat">
        <ul className="feat-list">
          {items.map((it, i) => (
            <li key={it.title} className={open === i ? "open" : ""}>
              <button onClick={() => setOpen(i)} aria-expanded={open === i}>
                {it.title}
              </button>
              {open === i && (
                <div className="feat-body">
                  <p>{it.desc}</p>
                  <a href="#">{it.link} ›</a>
                </div>
              )}
              {open === i && (
                <span
                  key={`${open}-${paused}`}
                  className={`feat-progress ${paused ? "paused" : ""}`}
                  style={{ animationDuration: `${CYCLE_MS}ms` }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="feat-stage">
          <div className="fc" key={open}>
            <div className="fc-head">
              <span>{card.name}</span>
              <span className="fc-status"><i /> {card.status}</span>
            </div>
            {card.rows.map((r, i) => (
              <div key={r.label} className="fc-row" style={{ animationDelay: `${120 + i * 110}ms` }}>
                <small>{r.label}</small>
                <div className="fc-row-main">
                  <b>{r.value}</b>
                  <span className={r.tone ?? ""}>{r.note}</span>
                </div>
              </div>
            ))}
            <div className="fc-pill" style={{ animationDelay: "360ms" }}>
              <span>{card.pill.label}</span>
              <span>{card.pill.note}</span>
            </div>
            <div className="fc-btn" style={{ animationDelay: "460ms" }}>{card.button}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
