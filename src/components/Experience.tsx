import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <span className="section-tag">// experience</span>
      <h2 className="section-title">Where I&apos;ve worked</h2>
      <div className="timeline">
        {EXPERIENCE.map((item) => (
          <div key={item.company} className="tl-item">
            <div className={`tl-dot${item.active ? " active" : ""}`} />
            <p className="tl-meta">{item.period}</p>
            <p className="tl-company">
              {item.role} &mdash;{" "}
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.company}
              </a>
            </p>
            <p className="tl-desc">{item.description}</p>
            <div className="tl-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="tl-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
