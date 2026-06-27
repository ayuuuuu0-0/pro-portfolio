export default function Footer() {
  return (
    <footer style={{ padding: "40px 0", textAlign: "center" }}>
      <div className="container">
        <div className="footer-code" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent-2)", marginBottom: "4px" }}>
          [ process exited with code 0 ]
        </div>
        <div style={{ fontSize: "11px", color: "var(--muted)" }}>
          built by ayush — © 2026 — no rights reserved, just vibes
        </div>
      </div>
    </footer>
  );
}
