"use client";

import { useState } from "react";
import { PROJECTS, type ProjectBadge } from "@/data/portfolio";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (name: string) => {
    setExpandedProject(expandedProject === name ? null : name);
  };

  const getUnixMeta = (name: string, badge: ProjectBadge) => {
    switch (badge) {
      case "featured":
        return { perm: "drwxr-xr-x", size: "4.0KB", ext: "/" };
      case "backend":
        return { perm: "-rwxr-xr-x", size: "18.5KB", ext: ".go" };
      case "flutter":
        return { perm: "drwxr-xr-x", size: "8.2MB", ext: "/" };
      default:
        return { perm: "-rw-r--r--", size: "3.2KB", ext: ".ts" };
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <span className="section-tag">// file system index</span>
        <h2 className="section-title">ls -la --projects</h2>
        <div className="projects-table-container">
          <table className="projects-table">
            <thead>
              <tr>
                <th style={{ width: "120px" }}>Permissions</th>
                <th style={{ width: "70px", textAlign: "right" }}>Size</th>
                <th style={{ width: "140px" }}>Last Modified</th>
                <th>Name</th>
                <th>Tech Stack</th>
                <th style={{ width: "130px", textTransform: "uppercase" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {PROJECTS.map((project) => {
                const isExpanded = expandedProject === project.name;
                const { perm, size, ext } = getUnixMeta(project.name, project.badge);
                const isDir = perm.startsWith("d");
                
                return (
                  <tr key={project.name} className="project-row" onClick={() => toggleProject(project.name)}>
                    <td className="project-col" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                      {perm}
                    </td>
                    <td className="project-col" style={{ fontFamily: "var(--font-mono)", color: "var(--text)", textAlign: "right", opacity: 0.8 }}>
                      {size}
                    </td>
                    <td className="project-col" style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                      Jun 27 18:24
                    </td>
                    <td className="project-col project-name-col">
                      <span style={{ color: isDir ? "var(--accent-2)" : "var(--accent)" }}>
                        {isDir ? "📁 " : "📄 "}
                        {project.name.toLowerCase().replace(/\s+/g, "-")}
                        {ext}
                      </span>
                    </td>
                    <td className="project-col" style={{ color: "var(--text)", opacity: 0.9 }}>
                      [{project.stack.slice(0, 3).join(", ")}{project.stack.length > 3 ? "..." : ""}]
                    </td>
                    <td className="project-col">
                      <span className={`project-badge-cell ${project.badge}`}>
                        {project.badge === "featured" ? "★ featured" : project.badgeLabel.toLowerCase()}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Detail Panel */}
        {expandedProject && (
          <div style={{ marginTop: "1rem", animation: "slideDown 0.3s ease forwards" }}>
            {PROJECTS.filter((p) => p.name === expandedProject).map((project) => (
              <div key={project.name} className="terminal-panel">
                <div className="terminal-panel-header">
                  <span>project_details --name={project.name.toLowerCase().replace(/\s+/g, "-")}</span>
                  <button 
                    onClick={() => setExpandedProject(null)} 
                    style={{ background: "none", border: "none", color: "var(--muted)", cursor: "none" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--warn)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--muted)"}
                  >
                    [X] CLOSE
                  </button>
                </div>
                <div className="project-detail-content">
                  <h3 style={{ color: "var(--accent)", fontSize: "16px", marginBottom: "0.5rem" }}>
                    ▼ {project.name.toUpperCase()} /
                  </h3>
                  <p className="project-detail-desc">{project.description}</p>
                  
                  <div className="project-detail-meta">
                    <div className="project-detail-meta-item">
                      <span className="project-detail-label">TECH:</span>
                      <span className="project-detail-value" style={{ color: "var(--accent-2)" }}>
                        {project.stack.join(" · ")}
                      </span>
                    </div>
                    <div className="project-detail-meta-item">
                      <span className="project-detail-label">STATUS:</span>
                      <span className="project-detail-value" style={{ textTransform: "capitalize" }}>
                        Shipped &middot; production verified
                      </span>
                    </div>
                  </div>

                  <div className="project-detail-links">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-detail-link"
                    >
                      [[ View Source ]]
                    </a>
                    {"live" in project.links && project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-detail-link"
                      >
                        [[ Launch App ↗ ]]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
