import { PROJECTS, type ProjectBadge } from "@/data/portfolio";

const BADGE_CLASS: Record<ProjectBadge, string> = {
  featured: "badge-featured",
  backend: "badge-backend",
  fullstack: "badge-fullstack",
  flutter: "badge-flutter",
  hackathon: "badge-hackathon",
};

export default function Projects() {
  return (
    <section id="projects">
      <span className="section-tag">// projects</span>
      <h2 className="section-title">Things I&apos;ve built</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-top">
              <span className={`project-badge ${BADGE_CLASS[project.badge]}`}>
                {project.badgeLabel}
              </span>
              <div className="project-links">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub
                </a>
                {"live" in project.links && project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className="project-name">{project.name}</p>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
