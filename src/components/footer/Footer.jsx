import { Link } from "react-router-dom";
import { navLinks } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">P</span>
            <span className="footer__logo-text">ENTHOUSE</span>
          </div>
          <p className="footer__tagline">
            Curating exceptional properties
            <br />
            for discerning individuals.
          </p>
          <div className="footer__socials">
            {["Instagram", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" className="footer__social">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation columns */}
        <div className="footer__nav-group">
          <h4 className="footer__nav-heading">Explore</h4>
          <ul className="footer__nav-list">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className="footer__nav-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-group">
          <h4 className="footer__nav-heading">Property Types</h4>
          <ul className="footer__nav-list">
            {[
              "Penthouses",
              "Luxury Villas",
              "Sky Residences",
              "Private Estates",
              "Waterfront Homes",
            ].map((t) => (
              <li key={t}>
                <a href="#" className="footer__nav-link">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__nav-group">
          <h4 className="footer__nav-heading">Contact</h4>
          <ul className="footer__nav-list footer__nav-list--contact">
            <li>
              <span className="footer__contact-label">Phone</span>
              <a href="tel:+1800PENTHOUSE" className="footer__nav-link">
                +1 800 PENTHOUSE
              </a>
            </li>
            <li>
              <span className="footer__contact-label">Email</span>
              <a href="mailto:hello@penthouse.com" className="footer__nav-link">
                hello@penthouse.com
              </a>
            </li>
            <li>
              <span className="footer__contact-label">Head Office</span>
              <span className="footer__nav-link">
                One Luxury Tower, New York, NY 10001
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          © {new Date().getFullYear()} Penthouse Real Estate. All rights
          reserved.
        </p>
        <div className="footer__legal">
          <a href="#" className="footer__legal-link">
            Privacy Policy
          </a>
          <a href="#" className="footer__legal-link">
            Terms of Use
          </a>
          <a href="#" className="footer__legal-link">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
