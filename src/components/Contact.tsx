import { EMAIL, SOCIAL_LINKS } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact">
      <span className="section-tag">// contact</span>
      <h2 className="section-title" style={{ marginBottom: "1rem" }}>
        Got a project in mind?
      </h2>
      <p className="contact-subtitle">
        Open to full-time roles and interesting contracts.
      </p>
      <a href={`mailto:${EMAIL}`} className="contact-email">
        {EMAIL}
      </a>
      <div className="footer-line">
        <span>Built by Ayush Ranjan &mdash; 2026</span>
        <div className="footer-socials">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
            X / Twitter
          </a>
          <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </div>
      </div>
    </section>
  );
}
