import Command from "./Command";

export default function Cta() {
  return (
    <section className="cta" id="start">
      <h2>
        Stop trusting one company with everything.
        <span className="muted"> Start in one command.</span>
      </h2>
      <p>Split your .env across independent nodes, with every access recorded on Solana.</p>
      <Command />
    </section>
  );
}
