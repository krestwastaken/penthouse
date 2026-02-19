import React, { useState, useEffect } from 'react';
import { data, Link, NavLink, useLocation } from 'react-router-dom';

import { navLinks } from './data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <span className="header__logo-mark">P</span>
          <span className="header__logo-text">ENTHOUSE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link to="/contact" className="header__cta btn-primary">
          Enquire
        </Link>

        {/* Hamburger */}
        <button
          className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          {navLinks.map(({ label, path }, i) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
              }
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <p>© 2025 Penthouse Real Estate</p>
        </div>
      </div>
    </header>
  );
}
