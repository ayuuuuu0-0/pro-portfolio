"use client";

import { useEffect, useState } from "react";
import { RESUME_URL } from "@/data/portfolio";

export default function Hero() {
  const [lines, setLines] = useState<string[]>([]);
  const [isBooted, setIsBooted] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    let currentLineIndex = 0;
    const bootSequence = [
      { text: "> booting portfolio....................[OK]", wait: 380 },
      { text: "> loading ayush.json...................[OK]", wait: 420 },
      { text: "> syncing work & projects..............[OK]", wait: 350 },
      { text: "> establishing connection..............", wait: 200, hasProgress: true },
    ];

    const addLine = (text: string) => {
      setLines((prev) => [...prev, text]);
    };

    const runSequence = () => {
      if (currentLineIndex < bootSequence.length) {
        const step = bootSequence[currentLineIndex];
        if (step.hasProgress) {
          addLine(step.text);
          setShowProgress(true);
          let pct = 0;
          const interval = setInterval(() => {
            pct += 10;
            if (pct >= 100) {
              clearInterval(interval);
              setProgressPercent(100);
              setTimeout(() => {
                setShowProgress(false);
                setLines((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = "> establishing connection..............[OK]";
                  return updated;
                });
                currentLineIndex++;
                setTimeout(runSequence, 300);
              }, 400);
            } else {
              setProgressPercent(pct);
            }
          }, 80);
        } else {
          addLine(step.text);
          currentLineIndex++;
          setTimeout(runSequence, step.wait);
        }
      } else {
        addLine("");
        addLine("// all systems ready.");
        addLine("");
        setIsBooted(true);
      }
    };

    runSequence();
  }, []);

  const getProgressBar = () => {
    const totalBlocks = 10;
    const filledBlocks = Math.round(progressPercent / 10);
    const emptyBlocks = totalBlocks - filledBlocks;
    const bar = "■".repeat(filledBlocks) + "░".repeat(emptyBlocks);
    return ` [ ${bar} ${progressPercent}% ]`;
  };

  const navSections = [
    { id: "about", label: "about", hint: "// who I am" },
    { id: "experience", label: "experience", hint: "// where I've worked" },
    { id: "projects", label: "projects", hint: "// what I've built" },
    { id: "contact", label: "contact", hint: "// let's talk" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="container" style={{ width: "100%" }}>
        <div className={`hero-grid ${isBooted ? "booted" : ""}`}>
          {/* LEFT: boot terminal runs, name always visible below it */}
          <div className="hero-content">
            <span className="section-tag">// initialization sequence</span>

            <div className="boot-terminal">
              {lines.map((line, idx) => {
                if (line === "") return <div key={idx}>&nbsp;</div>;
                return (
                  <div key={idx} className="boot-terminal-line">
                    {line}
                  </div>
                );
              })}
              {showProgress && (
                <div className="boot-terminal-line">
                  <span className="boot-progress-container">{getProgressBar()}</span>
                </div>
              )}
              {!isBooted && <span className="blink" />}
            </div>

            {/* Identity — always visible immediately */}
            <div style={{ marginTop: "2rem" }}>
              <h1 className="hero-main-title">Ayush Ranjan</h1>
            </div>

            {/* Description + CTA buttons — fade in after boot completes */}
            {isBooted && (
              <div style={{ marginTop: "1.2rem", animation: "fadeIn 0.6s ease forwards" }}>
                <p className="hero-desc-text">
                  fullstack engineer who designs distributed backend systems. Building production
                  infrastructure, developer tools, and cool stuff.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="btn-terminal">
                    [[ Explore Work ]]
                  </a>
                  <a href="#contact" className="btn-terminal btn-terminal-secondary">
                    [[ Connect ]]
                  </a>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-terminal btn-terminal-secondary"
                  >
                    [[ Resume ]]
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: terminal navigation panel */}
          <div className="hero-terminal-aside" style={{ animation: "fadeIn 0.5s ease forwards" }}>
            <div className="terminal-panel">
              <div className="terminal-panel-header">
                <span>terminal — navigate</span>
                <span>zsh</span>
              </div>
              <div
                className="terminal-panel-body"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--text)",
                  lineHeight: "1.85",
                }}
              >
                <div style={{ color: "var(--accent)" }}>$ whoami</div>
                <div style={{ paddingLeft: "10px", marginBottom: "1.4rem" }}>
                  ayush ranjan{" "}
                  <span style={{ color: "var(--muted)" }}>// sde &amp; system architect</span>
                </div>

                <div style={{ color: "var(--accent)" }}>$ ls --sections</div>
                <div style={{ paddingLeft: "10px", marginTop: "6px" }}>
                  {navSections.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "6px 0",
                        cursor: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        const label = e.currentTarget.querySelector(
                          ".terminal-nav-label"
                        ) as HTMLElement;
                        if (label) label.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        const label = e.currentTarget.querySelector(
                          ".terminal-nav-label"
                        ) as HTMLElement;
                        if (label) label.style.color = "var(--accent-2)";
                      }}
                    >
                      <span style={{ color: "var(--muted)" }}>→</span>
                      <span
                        className="terminal-nav-label"
                        style={{
                          color: "var(--accent-2)",
                          fontWeight: 600,
                          minWidth: "90px",
                          transition: "color 0.15s ease",
                        }}
                      >
                        {s.label}
                      </span>
                      <span style={{ color: "var(--muted)", fontSize: "11px" }}>{s.hint}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
