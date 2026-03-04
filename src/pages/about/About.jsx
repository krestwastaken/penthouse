import { Link } from "react-router-dom";
import { team, cards } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      {/* ── HERO ───────────────────────────────── */}
      <Hero
        tag="Our Story"
        
        title={
          <>
            Defining Luxury,
            <br />
            <em>One Address at a Time</em>
          </>
        }
        subtitle="Two decades of curating extraordinary properties."
      />

      {/* ── MISSION ────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.mission}>
            <div className={styles.missionText}>
              <div className={styles.missionEyebrow}>
                <span className={styles.goldLine} />
                <span className={styles.tag}>Our Philosophy</span>
              </div>
              <h2 className={styles.missionTitle}>
                We believe that a home
                <br />
                is the ultimate <em>statement</em>.
              </h2>
              <p>
                Founded in 1999, Penthouse Real Estate has spent over two
                decades curating the world's most extraordinary residential
                properties. What began as a boutique agency has grown into a
                global presence with 18 offices across 4 continents.
              </p>
              <p>
                We serve a discerning clientele who understand that true luxury
                is not merely about price — it is about provenance,
                craftsmanship, position, and the story a property tells.
              </p>
              <Link to="/contact" className={styles.btnPrimary}>
                Work With Us
              </Link>
            </div>

            <div className={styles.missionVisual}>
              <div className={styles.visualMain}>
                {/* swap div for img when you have a photo:
                    <img src={missionImg} alt="Our mission" /> */}
              </div>
              <div className={styles.visualAccent} />
              <div className={styles.statBadge}>
                <span className={styles.statNum}>25+</span>
                <span className={styles.statLabel}>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ─────────────────────────────── */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionCenterHead}>
            <span className={styles.tag}>Core Values</span>
            <h2>
              What Drives <em>Everything We Do</em>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {cards.map(({ icon, title, text }) => (
              <div key={title} className={styles.valueCard}>
                <span className={styles.valueCardIcon}>{icon}</span>
                <h3 className={styles.valueCardTitle}>{title}</h3>
                <p className={styles.valueCardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────── */}
      <section className={`${styles.section} ${styles.teamSection}`}>
        <div className={styles.container}>
          <div className={styles.teamSectionCenterHead}>
            <span className={styles.tag}>The Team</span>
            <h2>
              Leadership That <em>Inspires Trust</em>
            </h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map(({ name, role, years, image }) => (
              <div key={name} className={styles.teamCard}>
                <div className={styles.teamCardImg}>
                  {image ? <img src={image} alt={name} /> : null}
                </div>
                <div className={styles.teamCardInfo}>
                  <h3 className={styles.teamCardName}>{name}</h3>
                  <p className={styles.teamCardRole}>{role}</p>
                  <span className={styles.teamCardYears}>{years}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
