import { SOCIAL_LINKS } from "@/data/portfolio";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Nav() {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        AR
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-socials">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
          X
        </a>
      </div>
    </nav>
  );
}
