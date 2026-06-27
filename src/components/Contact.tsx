"use client";

import React, { useState, useRef, useEffect } from "react";
import { EMAIL, SOCIAL_LINKS } from "@/data/portfolio";

interface HistoryItem {
  type: "input" | "output";
  text: React.ReactNode;
}

// Retro Car Jump Mini-Game (Larger, Slower, and Floatier)
function MiniGame() {
  const [status, setStatus] = useState<"idle" | "playing" | "gameover">("idle");
  const [playerY, setPlayerY] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [obsX, setObsX] = useState(420);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [obsType, setObsType] = useState("▲");

  const playerYRef = useRef(0);

  useEffect(() => {
    playerYRef.current = playerY;
  }, [playerY]);

  useEffect(() => {
    if (status !== "playing") return;

    let obstacleSpeed = 2.6; // starts much slower
    let currentX = 420;
    let currentScore = 0;

    const gameLoop = () => {
      // Obstacle movement
      currentX -= obstacleSpeed;
      if (currentX < -30) {
        currentX = 430;
        currentScore += 1;
        setScore(currentScore);
        obstacleSpeed = Math.min(6.5, obstacleSpeed + 0.15); // slow acceleration
        
        // Randomly select next obstacle style
        const obstacles = ["▲", "🚧", "⚡", "🧱", "💥", "🛑"];
        const nextObs = obstacles[Math.floor(Math.random() * obstacles.length)];
        setObsType(nextObs);
      }
      setObsX(currentX);

      // Collision detection using playerYRef to prevent loop reset
      const colliding = currentX > 25 && currentX < 75 && playerYRef.current < 26;

      if (colliding) {
        setStatus("gameover");
      } else {
        requestAnimationFrame(gameLoop);
      }
    };

    const animFrame = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animFrame);
  }, [status]);

  // Jump physics loop (parabolic animation - slower and floatier)
  useEffect(() => {
    if (!isJumping) return;
    let frame = 0;
    const duration = 28; // total animation frames (floatier, up from 20)
    const interval = setInterval(() => {
      frame++;
      const tMid = duration / 2;
      const maxH = 95; // higher jump
      const height = maxH - (maxH / (tMid * tMid)) * (frame - tMid) * (frame - tMid);
      setPlayerY(Math.max(0, height));

      if (frame >= duration) {
        setIsJumping(false);
        setPlayerY(0);
        clearInterval(interval);
      }
    }, 20); // standard smooth interval
    return () => clearInterval(interval);
  }, [isJumping]);

  const triggerJump = () => {
    if (status === "idle" || status === "gameover") {
      setStatus("playing");
      setScore(0);
      setObsX(420);
      setPlayerY(0);
      setIsJumping(false);
      setObsType("▲");
    } else if (!isJumping) {
      setIsJumping(true);
    }
  };

  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        triggerJump();
      }
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [status, isJumping]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        background: "#030609",
        padding: "10px",
        borderRadius: "4px",
        position: "relative",
        height: "185px", // Enlarge height (up from 135)
        width: "100%",
        maxWidth: "460px", // Enlarge width (up from 300)
        overflow: "hidden",
        margin: "12px 0",
        userSelect: "none",
      }}
    >
      {/* Score details */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "12px",
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          color: "var(--muted)",
          zIndex: 5,
        }}
      >
        SCORE: {score} | BEST: {highScore}
      </div>

      {/* Ground track line */}
      <div
        style={{
          position: "absolute",
          bottom: "30px", // adjust ground line height
          left: 0,
          right: 0,
          height: "1px",
          background: "dashed var(--border)",
          backgroundImage: "linear-gradient(to right, var(--border) 50%, rgba(0,0,0,0) 0%)",
          backgroundSize: "6px 1px",
          backgroundRepeat: "repeat-x",
        }}
      />

      {/* Player character 🚗 (Larger, facing right) */}
      <div
        style={{
          position: "absolute",
          left: "45px",
          bottom: `${30 + playerY}px`,
          fontSize: "24px", // Enlarge character
          zIndex: 4,
          transform: "scaleX(-1)", // Flip car logo
          display: "inline-block",
        }}
      >
        🚗
      </div>

      {/* Obstacle Spike ▲ (Larger, randomized) */}
      <div
        style={{
          position: "absolute",
          left: `${obsX}px`,
          bottom: "30px",
          color: "var(--warn)",
          fontSize: "22px", // Enlarge character
          fontWeight: "bold",
          zIndex: 3,
        }}
      >
        {obsType}
      </div>

      {/* HUD Message Overlays */}
      {status === "idle" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3,6,9,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: "var(--accent)",
            zIndex: 10,
          }}
        >
          <div style={{ fontWeight: "bold", letterSpacing: "0.05em" }}>🚗 RETRO CAR DODGE (SLOWER) 🚗</div>
          <div style={{ color: "var(--text)", marginTop: "6px" }}>Press SPACE or click Jump to Start</div>
        </div>
      )}

      {status === "gameover" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(3,6,9,0.9)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: "var(--warn)",
            zIndex: 10,
          }}
        >
          <div style={{ fontWeight: "bold" }}>⚡ COLLISION DETECTED ⚡</div>
          <div style={{ color: "var(--text)", marginTop: "4px" }}>
            Score: {score} &middot; Best: {highScore}
          </div>
          <div style={{ color: "var(--accent)", marginTop: "10px" }}>
            Press SPACE or click Jump to retry
          </div>
        </div>
      )}

      {/* Click button trigger */}
      <button
        onClick={triggerJump}
        style={{
          position: "absolute",
          bottom: "6px",
          right: "6px",
          fontSize: "11px",
          padding: "3px 8px",
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "var(--accent)",
          borderRadius: "2px",
          cursor: "none",
          zIndex: 11,
        }}
      >
        [ JUMP ]
      </button>
    </div>
  );
}

export default function Contact() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      text: "visitor@ayush:~$ connection established. sandbox shell v2.0.6 loaded. type 'help' for options.",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ["help", "whoami", "contact", "status", "clear"];

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const cmd = cmdStr.trim();
    if (!cmd) return;

    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") {
      setHistory([]);
      return;
    }

    let result: React.ReactNode = "";

    switch (lowerCmd) {
      case "help":
        result = (
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            Available commands:
            <br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>whoami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- profile summary and background
            <br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- access email and social platform endpoints
            <br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>status</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- current role &amp; contract availability
            <br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>chill</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- spawn a retro car jump mini-game 🕹️
            <br />
            &nbsp;&nbsp;<span style={{ color: "var(--accent)" }}>clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- clear console output history
          </div>
        );
        break;
      case "whoami":
        result = "→ Visitor / System Reviewer. You are exploring Ayush's developer portfolio sandbox environment.";
        break;
      case "contact":
        result = (
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            <div style={{ color: "var(--accent-2)", marginBottom: "4px" }}>
              → Connection channels loaded successfully:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingLeft: "8px" }}>
              <div>
                <span style={{ color: "var(--muted)" }}>email:</span>{" "}
                <a href={`mailto:${EMAIL}`} style={{ color: "var(--accent)", textDecoration: "underline" }}>
                  {EMAIL}
                </a>
              </div>
              <div>
                <span style={{ color: "var(--muted)" }}>linkedin:</span>{" "}
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  linkedin.com/in/ayush-ranjan019
                </a>
              </div>
              <div>
                <span style={{ color: "var(--muted)" }}>github:</span>{" "}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  github.com/ayuuuuu0-0
                </a>
              </div>
              <div>
                <span style={{ color: "var(--muted)" }}>twitter:</span>{" "}
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  twitter.com/Ayuuuu_25
                </a>
              </div>
            </div>
          </div>
        );
        break;
      case "status":
        result = "→ Active. Currently open to full-time Backend Engineer positions and specialized Golang/Infrastructure contracts.";
        break;
      case "chill":
        result = <MiniGame />;
        break;
      default:
        result = `sh: command not found: '${cmd}'. Type 'help' to see all commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "input", text: `visitor@ayush:~$ ${cmd}` },
      { type: "output", text: result },
    ]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal("");
  };

  const handleTerminalContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section id="contact" style={{ padding: "80px 0 40px 0" }}>
      <div className="container">
        <span className="section-tag">// communication line</span>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          hello_visitor.sh
        </h2>

        {/* Quick action buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="btn-terminal btn-terminal-secondary"
              style={{
                fontSize: "11px",
                padding: "4px 10px",
                fontFamily: "var(--font-mono)",
                cursor: "none",
              }}
            >
              [[ {cmd} ]]
            </button>
          ))}
        </div>

        <div
          className="contact-terminal"
          onClick={handleTerminalContainerClick}
          style={{ cursor: "none" }}
        >
          <div className="terminal-panel-header">
            <span>hello_visitor.sh</span>
            <span>visitor@ayush: ~</span>
          </div>
          <div
            className="contact-terminal-body"
            style={{
              maxHeight: "350px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} className="contact-cmd-row" style={{ marginBottom: "8px" }}>
                {item.type === "input" ? (
                  <div className="contact-prompt">
                    <span className="t-muted" style={{ marginRight: "4px" }}>
                      visitor@ayush:~$
                    </span>
                    <span className="contact-cmd" style={{ color: "var(--accent-2)" }}>
                      {item.text}
                    </span>
                  </div>
                ) : (
                  <div className="contact-response" style={{ paddingLeft: "8px", whiteSpace: "pre-wrap" }}>
                    {item.text}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />

            {/* Input Line */}
            <form onSubmit={handleFormSubmit} style={{ display: "flex", alignItems: "center", marginTop: "8px" }}>
              <span className="t-muted" style={{ marginRight: "6px", flexShrink: 0 }}>
                visitor@ayush:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{
                  flexGrow: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  padding: 0,
                  caretColor: "var(--accent)",
                }}
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
