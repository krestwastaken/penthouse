import { Link } from "react-router-dom";
import { navLinks } from "../data";
import logoImg from "../../assets/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="Penthouse" className={styles.logoImage} />
          </Link>
          <p className={styles.tagline}>
            Secure Land. Structured Estates.
            <br />
            Lasting Value.
          </p>

          {/* socials */}
          <div className={styles.socials}>
            {["Instagram", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" className={styles.social}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div className={styles.navGroup}>
          <h4 className={styles.navHeading}>Explore</h4>
          <ul className={styles.navList}>
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link to={path} className={styles.navLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.navGroup}>
          <h4 className={styles.navHeading}>Contact</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+234 803 311 2640" className={styles.navLink}>
                +234 803 311 2640
              </a>
              <a href="tel:+234 802 669 4177" className={styles.navLink}>
                +234 802 669 4177
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a
                href="mailto:penthouseproperties@gmail.com"
                className={styles.navLink}
              >
                penthouseproperties@gmail.com
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>Head Office</span>
              <span className={styles.navLink}>
                Poly Plaza, Plot 102, Ademola Adetokunbo Crescent, Wuse 2,
                Abuja. FCT Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── DIVIDER ──────────────────────────── */}
      <hr className={styles.divider} />

      {/* ── BOTTOM ───────────────────────────── */}
      <div className={styles.footerBottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Penthouse Real Estate. All rights
          reserved.
        </p>
        <div className={styles.legal}>
          <a href="#" className={styles.legalLink}>
            Privacy Policy
          </a>
          {/* <a href="#" className={styles.legalLink}>
            Terms of Use
          </a>
          <a href="#" className={styles.legalLink}>
            Cookie Settings
          </a> */}
        </div>
      </div>
    </footer>
  );
}
