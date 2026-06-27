export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-tag">// profiling</span>
        <h2 className="section-title">system_info.md</h2>
        <div className="about-grid">
          {/* Left panel: cat about.md */}
          <div className="terminal-panel">
            <div className="terminal-panel-header">
              <span>about.md</span>
              <span>UTF-8</span>
            </div>
            <div className="terminal-panel-body">
              <div className="about-field">
                <span className="about-highlight">$ cat about.md</span>
              </div>
              <div className="about-field" style={{ marginTop: "1rem" }}>
                <span className="about-key">NAME:</span>
                <span className="about-val">Ayush Ranjan</span>
              </div>
              <div className="about-field">
                <span className="about-key">ROLE:</span>
                <span className="about-val">Software Engineer (Backend & Full-Stack)</span>
              </div>
              <div className="about-field">
                <span className="about-key">LOC:</span>
                <span className="about-val">Gurugram, Haryana, India</span>
              </div>
              <div className="about-field">
                <span className="about-key">STATUS:</span>
                <span className="about-valabout-highlight" style={{ color: "var(--accent)" }}>
                  SDE Intern @ Omniful (Building at Scale)
                </span>
              </div>
              
              <div className="about-field" style={{ marginTop: "1.5rem" }}>
                <span className="about-key">STACK:</span>
                <span className="about-val">
                  Go · JavaScript · TypeScript · Python · NodeJS · ReactJS · NextJS · Flutter
                </span>
              </div>
              <div className="about-field">
                <span className="about-key">INFRA:</span>
                <span className="about-val">
                  Kafka · Kubernetes · Docker · AWS · Redis · PostgreSQL · MongoDB
                </span>
              </div>

              <div className="about-field" style={{ marginTop: "1.5rem" }}>
                <span className="about-key">CURRENT FOCUS:</span>
              </div>
              <div style={{ paddingLeft: "15px", color: "var(--text)", opacity: 0.9 }}>
                <div>→ 5-agent LangGraph system (confidence dynamic routing &amp; auto-retry)</div>
                <div>→ Cost-aware agent routing (Gemini Flash vs Pro), cutting cost by ~60%</div>
                <div>→ Episodic memory via pgvector to embed &amp; retrieve task trajectories</div>
                <div>→ Decoupled trajectory streams to Kafka &amp; sub-10ms Redis context reads</div>
                <div style={{ marginTop: "4px", color: "var(--muted)" }}>→ WMS/OMS volumetric weight contracts &amp; white-label tracking pipelines</div>
              </div>

              <div className="about-field" style={{ marginTop: "1.5rem" }}>
                <span className="about-key">INTERESTS:</span>
              </div>
              <div style={{ paddingLeft: "15px", color: "var(--text)", opacity: 0.9 }}>
                <div>→ High-performance system profiling</div>
                <div>→ Resilient distributed networking</div>
                <div>→ Developer ergonomics and toolchains</div>
              </div>
            </div>
          </div>

          {/* Right panel: System Info stats */}
          <div className="stats-card">
            <h3 className="stats-card-title">┌─ SYSTEM METRICS ──────────────────┐</h3>
            <table className="stats-table" style={{ margin: "1rem 0" }}>
              <tbody>
                <tr>
                  <td className="stats-label-col">│  UPTIME</td>
                  <td className="stats-value-col">4+ years active │</td>
                </tr>
                <tr>
                  <td className="stats-label-col">│  COMPANIES</td>
                  <td className="stats-value-col">4 shipped for │</td>
                </tr>
                <tr>
                  <td className="stats-label-col">│  COMMITS</td>
                  <td className="stats-value-col">~1,500+ pushed │</td>
                </tr>
                <tr>
                  <td className="stats-label-col">│  COFFEE_IN</td>
                  <td className="stats-value-col">2^10 cups │</td>
                </tr>
                <tr>
                  <td className="stats-label-col">│  PROJECTS</td>
                  <td className="stats-value-col">10+ shipped │</td>
                </tr>
                <tr>
                  <td className="stats-label-col">│  MAIN_LANG</td>
                  <td className="stats-value-col">Go (golang) │</td>
                </tr>
              </tbody>
            </table>
            <h3 className="stats-card-title" style={{ marginBottom: 0 }}>└───────────────────────────────────┘</h3>
            <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1.5rem", lineHeight: "1.4" }}>
              <div>* Commit counts extracted from active white-label & WMS microservice logs. Uptime represents continuous production code deployments since June 2022.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
