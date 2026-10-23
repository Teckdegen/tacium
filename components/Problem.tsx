import BreachVault from "./BreachVault";
import NodeOrbit from "./NodeOrbit";

export default function Problem() {
  return (
    <section className="section problem">
      <div className="sec-head">
        <span className="eyebrow">The problem</span>
        <h2 className="title">
          One breach. <span className="muted">Every secret.</span>
        </h2>
        <p className="sub">
          Your API keys, database URLs and tokens sit with one provider. When that provider gets
          hit, so do you.
        </p>
      </div>

      <div className="compare">
        <article className="cmp">
          <div className="cmp-stage">
            <BreachVault />
          </div>
          <div className="cmp-copy">
            <span className="tag bad">Today</span>
            <h3>One provider holds everything.</h3>
            <p>One bad day exposes it all, for you and every team on the platform.</p>
          </div>
        </article>

        <article className="cmp">
          <div className="cmp-stage tint">
            <NodeOrbit />
          </div>
          <div className="cmp-copy">
            <span className="tag good">With Tacium</span>
            <h3>A hacked node holds a useless fragment.</h3>
            <p>Your app keeps running on the other four. Nothing leaks.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
