import { SOCIAL_LINKS } from "@/data/portfolio";

export default function Nav() {
  return (
    <nav style={{ padding: 0 }}>
      <div className="nav-container" style={{ padding: "8px" }}>
        <div className="nav-window">
          <div className="nav-header-bar">
            <div className="nav-header-left">
              <div className="nav-window-dots">
                <div className="nav-window-dot red" />
                <div className="nav-window-dot yellow" />
                <div className="nav-window-dot green" />
              </div>
              <span className="nav-window-title" style={{ marginLeft: "8px" }}>
                ayush@portfolio: ~
              </span>
            </div>
            <span>v2.0.6</span>
          </div>
          <div className="nav-body-bar">
            <div className="nav-breadcrumbs">
              <span className="nav-prompt-symbol">[ayush@portfolio</span>
              <span className="nav-path" style={{ margin: "0 4px" }}>
                ~
              </span>
              <span className="nav-prompt-symbol">]$</span>
            </div>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <a href="#about">/about</a>
              </li>
              <li className="nav-link-item">
                <a href="#experience">/experience</a>
              </li>
              <li className="nav-link-item">
                <a href="#projects">/projects</a>
              </li>
              <li className="nav-link-item">
                <a href="#contact">/contact</a>
              </li>
            </ul>
            <div className="nav-status">
              <div className="nav-status-indicator" />
              <span style={{ fontSize: "11px", letterSpacing: "0.05em" }}>
                STATUS: ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
