import { EnvSnippet } from "./Art";

const cases = [
  {
    tag: "Startups",
    color: "lime",
    text: "Stop putting your whole company in one dashboard. Database URLs and payment keys live split across clouds.",
    lines: ["DATABASE_URL", "STRIPE_SECRET", "JWT_SECRET"],
  },
  {
    tag: "Web3 teams",
    color: "lilac",
    text: "Protect RPC keys, deployer keys and signer configs with the same threshold crypto you trust onchain.",
    lines: ["DEPLOYER_KEY", "RPC_URL", "SIGNER_SEED"],
  },
  {
    tag: "AI apps",
    color: "mint",
    text: "Keep model provider and vector database keys out of any single host, so one leak doesn't drain your credits.",
    lines: ["ANTHROPIC_API_KEY", "PINECONE_KEY", "OPENAI_API_KEY"],
  },
  {
    tag: "CI/CD",
    color: "pink",
    text: "Pipelines prove who they are with OIDC and get secrets at run time. Nothing is stored in the pipeline.",
    lines: ["NPM_TOKEN", "DOCKER_PASS", "CLOUD_DEPLOY"],
  },
];

export default function UseCases() {
  return (
    <section className="section" id="use-cases">
      <div className="row-head">
        <h2 className="title">
          <span className="muted">See what you can protect</span> with Tacium
        </h2>
        <a href="#" className="link-small">All use cases →</a>
      </div>
      <div className="cases">
        {cases.map((c) => (
          <article key={c.tag} className={`case ${c.color}`}>
            <h5>{c.tag}</h5>
            <p>{c.text}</p>
            <EnvSnippet lines={c.lines} />
          </article>
        ))}
      </div>
    </section>
  );
}
