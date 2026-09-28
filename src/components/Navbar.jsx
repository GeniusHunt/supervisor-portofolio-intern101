import { useState } from "react";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
   <header className="fixed left-0 top-0 z-50 w-full mix-blend-difference">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-bold uppercase tracking-[0.2em]"
        >
          IF.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-xs font-medium uppercase tracking-widest text-secondary transition-colors duration-300 hover:text-primary"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#projects"
          className="hidden rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-background md:block"
        >
          View Projects
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-primary transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-primary transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-primary transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-0 h-screen w-full bg-background px-6 pt-28 transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-border pb-4 text-3xl font-semibold"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;