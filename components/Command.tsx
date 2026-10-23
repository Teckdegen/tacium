"use client";

import { useState } from "react";

const CMD = "npx tacium run node server.js";

export default function Command() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); nothing else to do.
    }
  };

  return (
    <div className="cmd">
      <span className="cmd-prompt">$</span>
      <code className="cmd-text">
        <span className="typed">{CMD}</span>
        <span className="cursor" />
      </code>
      <button className={`cmd-copy ${copied ? "done" : ""}`} onClick={copy}>
        {copied ? "Copied ✓" : "Copy"}
      </button>
    </div>
  );
}
