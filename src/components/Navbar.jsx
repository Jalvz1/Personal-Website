import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

// Nav links point to page-section anchors.
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Controls whether the mobile dropdown menu is open.
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent-900 bg-accent-800">
      {/* Full-width bar */}
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-[22px] font-bold tracking-tight text-white">
          Javier Alvarez
        </a>

        {/* Desktop / tablet links — hidden on phones, shown from md (768px) up */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg font-medium text-slate-200 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Jalvz1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-lg font-medium text-slate-200 transition-colors hover:text-white"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-4 py-2 text-base font-medium text-accent-800 transition-colors hover:bg-accent-100"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Hamburger button — only shown on phones (below md) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="text-white md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown rendered only when open, and only on mobile */}
      {open && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-accent-900 bg-accent-800 px-4 py-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-slate-100 hover:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Jalvz1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-slate-100 hover:bg-white/10"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-white px-3 py-2 text-center text-base font-medium text-accent-800 hover:bg-accent-100"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

// Inline icons to not import an icon library.
function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
