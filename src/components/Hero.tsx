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
      { text: "> initializing portfolio.exe...", wait: 400 },
      { text: "> loading profile...............[OK]", wait: 500 },
      { text: "> mounting systems..............[OK]", wait: 400 },
      { text: "> connecting to server.........", wait: 200, hasProgress: true },
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
                  updated[updated.length - 1] = "> connecting to server.........[OK]";
                  return updated;
                });
                currentLineIndex++;
                setTimeout(runSequence, 300);
              }, 450);
            } else {
              setProgressPercent(pct);
            }
          }, 100);
        } else {
          addLine(step.text);
          currentLineIndex++;
          setTimeout(runSequence, step.wait);
        }
      } else {
        addLine("");
        addLine("AYUSH RANJAN — SYSTEM ARCHITECT");
        addLine("Build things that don't break. Ship things that matter.");
        addLine("");
        addLine("[ process exited with code 0 ]");
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

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="container" style={{ width: "100%" }}>
        <div className="hero-grid" style={{ gridTemplateColumns: isBooted ? "1.2fr 0.8fr" : "1fr" }}>
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

            {isBooted && (
              <div style={{ marginTop: "2rem", animation: "fadeIn 0.8s ease forwards" }}>
                <h1 className="hero-main-title">Ayush Ranjan</h1>
                <p className="hero-subtitle">
                  // SDE Intern @ Omniful &middot; Distributed Systems &middot; Go
                </p>
                <p className="hero-desc-text">
                  Designing resilient, multi-tenant backend architecture. Shipping white-label tracking systems, event-sourced messaging with Kafka, and highly optimized bulk data platforms.
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

          {isBooted && (
            <div className="hero-terminal-aside" style={{ animation: "fadeIn 1.2s ease forwards" }}>
              <div className="terminal-panel">
                <div className="terminal-panel-header">
                  <span>system_status.log</span>
                  <span>uptime: 4y</span>
                </div>
                <div className="terminal-panel-body" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text)" }}>
                  <div>$ systemctl status developer</div>
                  <div style={{ color: "var(--accent)" }}>● developer.service - Ayush Ranjan Core</div>
                  <div style={{ paddingLeft: "10px" }}>Loaded: loaded (/etc/systemd/system/developer.service)</div>
                  <div style={{ paddingLeft: "10px" }}>Active: <span style={{ color: "var(--accent)" }}>active (running)</span> since Mon 2022-06-01</div>
                  <div style={{ paddingLeft: "10px" }}>Main PID: 1337 (go-runner)</div>
                  <div style={{ paddingLeft: "10px" }}>Tasks: 42 (limit: 4915)</div>
                  <div style={{ paddingLeft: "10px" }}>Memory: 1.2G (shared)</div>
                  <div>&nbsp;</div>
                  <div>$ tail -n 4 /var/log/syslog</div>
                  <div style={{ color: "var(--muted)" }}>Jun 28 00:45:12 langgraph-router: routing query to [PlannerAgent]</div>
                  <div style={{ color: "var(--muted)" }}>Jun 28 00:45:13 planner-agent: low confidence (0.42) -&gt; re-routing to Gemini Pro</div>
                  <div style={{ color: "var(--muted)" }}>Jun 28 00:45:16 pgvector-memory: retrieving episodic trajectories [similarity=0.88]</div>
                  <div style={{ color: "var(--muted)" }}>Jun 28 00:45:17 kafka-producer: decoupling logs to trajectory-broker [100% OK]</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
