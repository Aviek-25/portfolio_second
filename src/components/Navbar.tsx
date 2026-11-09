
"use client";

import { Code2, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "about", href: "#about" },
  { name: "work", href: "#projects" },
  { name: "stack", href: "#skills" },
  { name: "journey", href: "#journey" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="editor-bar">
        <span className="editor-dot" />
        <span>portfolio / aviek_final_v1.fig</span>
        <span className="editor-branch">git:(main) ✓</span>
        <span className="editor-right">LOCAL BUILD · 2026</span>
      </div>

      <nav className="navbar container">
        <a href="#" className="nav-logo">
          a<span>.</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-socials">
          <a href="https://github.com/Aviek-25" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={17} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <UserRound size={17} />
          </a>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-links">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
