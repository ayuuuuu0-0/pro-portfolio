import { RESUME_URL } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <span className="hero-tag">Shipping at scale</span>
        <h1 className="hero-name">
          Ayush
          <br />
          <span>Ranjan</span>
        </h1>
        <p className="hero-role">
          // Full-Stack Engineer &middot; Distributed Systems &middot; Backend
        </p>
        <p className="hero-desc">
          I design and build systems that run in production. Currently at{" "}
          <strong>Omniful</strong>, working on distributed OMS/WMS infrastructure.
          Primary stack is <strong>Go</strong>, with TypeScript and Python when the
          problem calls for it.
        </p>
        <div className="hero-cta">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
          <a href="#projects" className="btn btn-ghost">
            See work
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="terminal">
          <div className="terminal-bar">
            <div className="dot r" />
            <div className="dot y" />
            <div className="dot g" />
            <span className="terminal-title">ayush@dev:~</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="t-muted">~</span> <span className="t-green">whoami</span>
            </div>
            <div>
              <span className="t-blue">Ayush Ranjan</span>{" "}
              <span className="t-muted">// SDE Intern @Omniful</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="t-muted">~</span>{" "}
              <span className="t-green">cat skills.json</span>
            </div>
            <div>
              <span className="t-yellow">&quot;primary&quot;</span>
              <span className="t-muted">:</span>{" "}
              <span className="t-pink">[&quot;Go&quot;, &quot;TS&quot;, &quot;Python&quot;]</span>
            </div>
            <div>
              <span className="t-yellow">&quot;infra&quot;</span>
              <span className="t-muted">:</span>{" "}
              <span className="t-pink">[&quot;Kafka&quot;, &quot;K8s&quot;, &quot;Docker&quot;]</span>
            </div>
            <div>
              <span className="t-yellow">&quot;db&quot;</span>
              <span className="t-muted">:</span>{" "}
              <span className="t-pink">
                [&quot;PostgreSQL&quot;, &quot;MongoDB&quot;, &quot;Redis&quot;]
              </span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="t-muted">~</span>{" "}
              <span className="t-green">git log --oneline -3</span>
            </div>
            <div>
              <span className="t-blue">a3f9c1e</span>{" "}
              <span className="t-muted">feat: multi-tenant tracking pipeline</span>
            </div>
            <div>
              <span className="t-blue">7bd2e0a</span>{" "}
              <span className="t-muted">perf: bulk APIs ~80% faster</span>
            </div>
            <div>
              <span className="t-blue">c12f4b8</span>{" "}
              <span className="t-muted">feat: kafka consumer at-least-once</span>
            </div>
            <div>&nbsp;</div>
            <div>
              <span className="t-muted">~</span> <span className="t-green">_</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
