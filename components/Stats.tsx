const stats = [
  ["3 of 5", "shards to unlock"],
  ["5", "independent clouds"],
  ["0", "full keys on any node"],
  ["100%", "of access logged onchain"],
];

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="stats">
        {stats.map(([n, l]) => (
          <div key={l}>
            <b data-count>{n}</b>
            <span>{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
