import { SKILLS } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about">
      <div>
        <span className="section-tag">// about me</span>
        <h2 className="section-title">
          Full-stack engineer.
          <br />
          I design distributed backend systems.
        </h2>
        <p className="about-text">
          Backend-first full-stack engineer. I&apos;ve been shipping production systems
          since 2022 — from mobile and web apps early on, to Go microservices and
          distributed infrastructure today.
        </p>
        <p className="about-text">
          Right now I&apos;m at <strong>Omniful</strong>, building cross-service volumetric
          weight calculations and multi-tenant tracking pipelines. Before that I worked at
          Miracuves (mobile), PeriData (React), and NowAcquire (Flutter + stock trading).
        </p>
        <p className="about-text">
          I&apos;m comfortable across the stack, but what I care about is correctness,
          performance, and systems that don&apos;t fall over at 3am.
        </p>
      </div>
      <div className="skills-section">
        <span className="section-tag">// skills</span>
        <div className="skill-category">
          <p className="skill-cat-label">Primary</p>
          <div className="skill-chips">
            {SKILLS.primary.map((skill) => (
              <span key={skill} className="chip primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <p className="skill-cat-label">Infrastructure</p>
          <div className="skill-chips">
            {SKILLS.infrastructure.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <p className="skill-cat-label">Databases</p>
          <div className="skill-chips">
            {SKILLS.databases.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
