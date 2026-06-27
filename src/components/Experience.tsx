"use client";

import { useState } from "react";
import { EXPERIENCE } from "@/data/portfolio";

export default function Experience() {
  const [expandedCommit, setExpandedCommit] = useState<number | null>(0); // Default expand current role

  const toggleCommit = (index: number) => {
    setExpandedCommit(expandedCommit === index ? null : index);
  };

  const gitHashes = [
    "a3f9c1e2b53c7c251bb31d2e0a2569b938f8f8b8",
    "7bd2e0a7f29c0b1a2e3d4c5d6e7f8a9b0c1d2e3f",
    "c12f4b8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e",
    "8ab120f0e1d2c3b4a5f6e7d8c9b0a1c2d3e4f5a6",
  ];

  return (
    <section id="experience">
      <div className="container">
        <span className="section-tag">// career history logs</span>
        <h2 className="section-title">git log --graph --all</h2>

        <div className="terminal-panel" style={{ background: "#060a0f", borderColor: "#152838" }}>
          <div className="terminal-panel-header" style={{ background: "#0b1520" }}>
            <span>git_terminal - career_commits</span>
            <span>zsh</span>
          </div>
          <div className="terminal-panel-body" style={{ padding: "1.5rem 1rem", position: "relative" }}>
            <div style={{ color: "var(--accent)", marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              $ git log --oneline --graph --decorate --all
            </div>

            {/* Timeline wrapper with visual graph line */}
            <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
              {/* Vertical connector line */}
              <div
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "10px",
                  bottom: "35px",
                  width: "2px",
                  background: "dashed #1A3A4A",
                  backgroundImage: "linear-gradient(to bottom, var(--accent) 50%, rgba(0, 255, 178, 0.1) 0%)",
                  backgroundPosition: "right",
                  backgroundSize: "2px 8px",
                  backgroundRepeat: "repeat-y",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {EXPERIENCE.map((item, index) => {
                  const isExpanded = expandedCommit === index;
                  const fullHash = gitHashes[index] || "8ab120f0e1d";
                  const shortHash = fullHash.substring(0, 7);

                  return (
                    <div key={item.company} style={{ position: "relative" }}>
                      {/* Node branch visual indicator */}
                      <div
                        onClick={() => toggleCommit(index)}
                        style={{
                          position: "absolute",
                          left: "-33px",
                          top: "5px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          border: `2px solid ${isExpanded ? "var(--accent)" : "var(--border)"}`,
                          background: isExpanded ? "var(--accent)" : "var(--bg)",
                          boxShadow: isExpanded ? "0 0 10px var(--accent)" : "none",
                          cursor: "none",
                          zIndex: 2,
                          transition: "all 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.boxShadow = "0 0 8px var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isExpanded) {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.boxShadow = "none";
                          }
                        }}
                      />

                      {/* Header bar row click trigger */}
                      <div
                        onClick={() => toggleCommit(index)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "10px 16px",
                          background: isExpanded ? "var(--surface-2)" : "var(--surface)",
                          border: `1px solid ${isExpanded ? "var(--accent)" : "var(--border)"}`,
                          borderRadius: "4px",
                          cursor: "none",
                          transition: "all 0.2s ease-out",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent-2)";
                          e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 148, 255, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isExpanded) {
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.boxShadow = "none";
                          } else {
                            e.currentTarget.style.borderColor = "var(--accent)";
                          }
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                          <span style={{ color: "var(--accent-2)", fontWeight: "bold" }}>
                            * {shortHash}
                          </span>
                          
                          {item.active && (
                            <span
                              style={{
                                color: "var(--accent)",
                                border: "1px solid rgba(0, 255, 178, 0.2)",
                                background: "rgba(0, 255, 178, 0.05)",
                                padding: "1px 6px",
                                borderRadius: "2px",
                                fontSize: "11px",
                                fontWeight: "bold",
                              }}
                            >
                              HEAD -{">"} main
                            </span>
                          )}

                          <span style={{ color: "var(--text)", fontWeight: 500 }}>
                            commit: &quot;{item.company} &middot; {item.role}&quot;
                          </span>
                        </div>
                        <span style={{ color: "var(--muted)", fontSize: "12px" }}>
                          {item.period.split(" · ")[0]}
                        </span>
                      </div>

                      {/* Expanded panel details simulating 'git show' */}
                      {isExpanded && (
                        <div
                          style={{
                            border: "1px solid var(--accent)",
                            borderTop: "none",
                            borderRadius: "0 0 4px 4px",
                            background: "rgba(5, 10, 14, 0.7)",
                            padding: "1.5rem",
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                            lineHeight: "1.8",
                            animation: "slideDown 0.3s ease-out forwards",
                          }}
                        >
                          <div style={{ color: "var(--muted)", borderBottom: "1px dashed var(--border)", paddingBottom: "0.8rem", marginBottom: "1rem" }}>
                            <div>commit {fullHash}</div>
                            <div>Author: Ayush Ranjan &lt;ranaayush0725@gmail.com&gt;</div>
                            <div>Date:   {item.period}</div>
                            <div>Link:   <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-2)", textDecoration: "underline" }}>{item.company} ↗</a></div>
                          </div>
                          
                          <div style={{ color: "var(--text)", opacity: 0.95, marginBottom: "1.2rem" }}>
                            <div style={{ color: "var(--accent)", fontWeight: "bold", marginBottom: "0.5rem" }}>
                              commit description:
                            </div>
                            <div style={{ paddingLeft: "10px" }}>
                              {item.description.split(". ").map((sentence, idx) => (
                                sentence.trim() && (
                                  <div key={idx} style={{ marginBottom: "6px" }}>
                                    &middot; {sentence.trim()}
                                  </div>
                                )
                              ))}
                            </div>
                          </div>

                          <div style={{ marginTop: "1rem" }}>
                            <div style={{ color: "var(--muted)", fontSize: "11px", marginBottom: "0.5rem" }}>
                              file modifications:
                            </div>
                            <div className="timeline-tags">
                              {item.tags.map((tag) => (
                                <span key={tag} className="timeline-tag" style={{ borderColor: "var(--border)" }}>
                                  + {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
