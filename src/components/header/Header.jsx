import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import logoImg from '../../assets/logo.png'
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerInner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
        <img src={logoImg} alt="Penthouse" className={styles.logoImage} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/properties" className={styles.cta}>
          Find a home
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
              <nav className={styles.mobileNav}>
                {navLinks.map(({ label, path }, i) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                    }
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <span className={styles.mobileNavNum}>0{i + 1}</span>
                    {label}
                  </NavLink>
                ))}
              </nav>
              <div className={styles.mobileMenuFooter}>
                <p>© 2025 Penthouse Real Estate</p>
              </div>
            </div>
    </header>
  );
}
