const faqs = [
  ["What if nodes get hacked?", "Nothing leaks unless a majority are hacked at the same time."],
  ["Are my secrets on the blockchain?", "Never. Only the access logs and node registry are onchain."],
  ["What if nodes go offline?", "You only need 3 of 5. The network keeps serving your app."],
  ["Is it slow?", "No. Secrets are fetched once, when your app boots."],
  ["Can Tacium see my secrets?", "No. We only run some of the nodes, never enough to unlock anything."],
];

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <h2 className="title center">
        Questions, <span className="muted">answered.</span>
      </h2>
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
