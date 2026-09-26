import { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo" aria-label="Go to homepage">
          AD
        </a>

        <nav
          id="main-navigation"
          className={`header-nav ${menuOpen ? "header-nav-open" : ""}`}
          aria-label="Main navigation"
        >

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="header-button" onClick={closeMenu}>
          Let's Talk
        </a>

        {/* <ThemeToggle /> */}

        <button
          type="button"
          className={`hamburger ${menuOpen ? "hamburger-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;