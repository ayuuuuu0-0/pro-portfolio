"use client";

interface SkillItem {
  name: string;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export default function Skills() {
  const categorySkills: SkillCategory[] = [
    {
      category: "frontend",
      skills: [
        { name: "React", color: "#00D8FF" },
        { name: "Next.js", color: "#E2E8F0" },
        { name: "Flutter", color: "#02569B" },
        { name: "Vue", color: "#42B883" },
        { name: "Three.js", color: "#A0AEC0" },
        { name: "Tailwind", color: "#38B2AC" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Redux", color: "#764ABC" },
      ],
    },
    {
      category: "backend",
      skills: [
        { name: "Go", color: "#00ADD8" },
        { name: "Node.js", color: "#339933" },
        { name: "Express", color: "#A0AEC0" },
        { name: "Redis", color: "#DC382D" },
        { name: "GraphQL", color: "#E10098" },
        { name: "Kafka", color: "#E05A47" },
        { name: "Firebase", color: "#FFCA28" },
        { name: "REST", color: "#3182CE" },
        { name: "WebSockets", color: "#D80027" },
      ],
    },
    {
      category: "cloud/db",
      skills: [
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "MongoDB", color: "#47A248" },
        { name: "EC2", color: "#FF9900" },
        { name: "CloudWatch", color: "#DD6B20" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
        { name: "New Relic", color: "#008C99" },
      ],
    },
    {
      category: "languages",
      skills: [
        { name: "Go", color: "#00ADD8" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Dart", color: "#00B4AB" },
        { name: "C++", color: "#00599C" },
        { name: "Python", color: "#3776AB" },
        { name: "Java", color: "#ED8936" },
        { name: "Solidity", color: "#718096" },
        { name: "Rust", color: "#ED8936" },
      ],
    },
    {
      category: "tooling",
      skills: [
        { name: "Git", color: "#F05032" },
        { name: "Figma", color: "#F24E1E" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Notion", color: "#E2E8F0" },
        { name: "AWS CLI", color: "#FF9900" },
        { name: "kubectl", color: "#326CE5" },
        { name: "Vercel", color: "#9F7AEA" },
        { name: "Netlify", color: "#00AD9F" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <span className="section-tag">// cataloged capabilities</span>
        <h2 className="section-title">skills_matrix.conf</h2>

        {/* Console Container simulating user's attached mockup layout */}
        <div
          className="terminal-panel"
          style={{
            background: "#080c10",
            border: "1px solid #1a222d",
            borderRadius: "8px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
          }}
        >
          {/* Mockup Title bar */}
          <div
            style={{
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              background: "#0f151d",
              borderBottom: "1px solid #1a222d",
              borderRadius: "8px 8px 0 0",
            }}
          >
            <div className="nav-window-dots">
              <div className="nav-window-dot red" style={{ width: "12px", height: "12px", background: "#FF5F56" }} />
              <div className="nav-window-dot yellow" style={{ width: "12px", height: "12px", background: "#FFBD2E" }} />
              <div className="nav-window-dot green" style={{ width: "12px", height: "12px", background: "#27C93F" }} />
            </div>
            <span
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.05em",
              }}
            >
              ayush@capabilities: ~/skills
            </span>
          </div>

          {/* Console Body */}
          <div
            style={{
              padding: "2rem 2.5rem",
              fontFamily: "var(--font-mono)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {categorySkills.map((cat) => (
              <div
                key={cat.category}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1.2rem",
                }}
              >
                {/* Category label column */}
                <div
                  style={{
                    width: "110px",
                    color: "var(--muted)",
                    fontSize: "13px",
                    textAlign: "left",
                    flexShrink: 0,
                  }}
                >
                  {cat.category}
                </div>

                {/* Arrow */}
                <div style={{ color: "var(--muted)", marginRight: "0.5rem", flexShrink: 0 }}>
                  →
                </div>

                {/* Pills container */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        fontSize: "12px",
                        padding: "4px 12px",
                        border: `1px solid ${skill.color}`,
                        borderRadius: "8px",
                        color: skill.color,
                        background: `${skill.color}14`, // adds 8% opacity background matching color
                        transition: "all 0.2s ease-out",
                        display: "inline-block",
                        userSelect: "none",
                        boxShadow: `0 0 6px ${skill.color}15`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 12px ${skill.color}45`;
                        e.currentTarget.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 6px ${skill.color}15`;
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
