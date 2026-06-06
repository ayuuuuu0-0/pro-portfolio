const STATS = [
  { value: "10+", label: "Projects" },
  { value: "4", label: "Companies" },
  { value: "4+", label: "Years coding" },
  { value: "Go", label: "Primary language" },
] as const;

export default function Stats() {
  return (
    <div className="stats-row">
      {STATS.map((stat) => (
        <div key={stat.label} className="stat">
          <div className="stat-num">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
