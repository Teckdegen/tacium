import { AuditLog, IsoStack, MiniTerminal, Outage, Revoke, Rotation, ShardSphere } from "./Art";

export default function Bento() {
  return (
    <section className="section" id="product">
      <h2 className="title">
        Keep every secret safe <span className="muted">with split key storage</span>
      </h2>
      <div className="bento">
        <article className="card wide tint">
          <h4>Split every secret</h4>
          <p>Your .env is encrypted and broken into shards. No node ever holds the whole thing.</p>
          <ShardSphere />
        </article>
        <article className="card">
          <h4>Survive outages</h4>
          <p>Any 3 of 5 nodes can serve your app. Lose two and nothing breaks.</p>
          <Outage />
        </article>
        <article className="card">
          <h4>No API keys to leak</h4>
          <p>Your app proves who it is with short lived OIDC tokens.</p>
          <IsoStack />
        </article>
        <article className="card wide purple">
          <h4>See every access</h4>
          <p>Every fetch is written to an onchain audit log. Tampering is visible to everyone.</p>
          <AuditLog />
        </article>
        <article className="card">
          <h4>Revoke instantly</h4>
          <p>Cut an app off on every node with one click.</p>
          <Revoke />
        </article>
        <article className="card">
          <h4>One line to start</h4>
          <p>Wrap your start command. Works on Railway, Vercel, Fly, AWS and more.</p>
          <MiniTerminal />
        </article>
        <article className="card">
          <h4>Shards that expire</h4>
          <p>Nodes refresh their shards constantly, so a stolen piece goes stale.</p>
          <Rotation />
        </article>
      </div>
    </section>
  );
}
