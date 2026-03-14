import { Link } from "react-router-dom";

import useScrollReveal from "../../hooks/useScrollReveal";
import { team, cards } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./About.module.css";
import missionImg from "../../assets/facilityimgs/facilityImg1.jpg";

// ─── Sub-components ───────────────────────────

function PhilosophySection() {
  const ref = useScrollReveal();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div ref={ref} className={`${styles.mission} reveal`}>
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
              Penthouse Properties Limited is a leading estate development,
              agency, and facility management firm with over 20 years of
              experience across Nigeria's major cities, including Abuja, Lagos,
              Port Harcourt, and Akure. We are a team of seasoned, highly
              experienced professionals dedicated to delivering first-class
              efficient service through transparency, professionalism, and
              excellence.
            </p>
            <p>
              Founded in 1992, Penthouse has built a reputation for structured
              estate development, reliable property management, and trusted
              consultancy. Our head office is located in Abuja.
            </p>
            <Link to="/contact" className={styles.btnPrimary}>
              Work With Us
            </Link>
          </div>

          <div className={styles.missionVisual}>
            <div className={styles.visualMain}>
              <img src={missionImg} alt="Our mission" />
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
  );
}

function ValuesSection() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();
  return (
    <section className={`${styles.section} ${styles.valuesSection}`}>
      <div className={styles.container}>
        <div ref={headRef} className={`${styles.sectionCenterHead} reveal`}>
          <span className={styles.tag}>Core Values</span>
          <h2>
            What Drives <em>Everything We Do</em>
          </h2>
        </div>
        <div ref={gridRef} className={`${styles.valuesGrid} reveal`}>
          {cards.map(({ icon, title, text }, i) => (
            <div
              key={title}
              className={`${styles.valueCard} reveal-delay-${i + 1}`}
            >
              <span className={styles.valueCardIcon}>{icon}</span>
              <h3 className={styles.valueCardTitle}>{title}</h3>
              <p className={styles.valueCardText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();
  return (
    <section className={`${styles.section} ${styles.teamSection}`}>
      <div className={styles.container}>
        <div ref={headRef} className={`${styles.teamSectionCenterHead} reveal`}>
          <span className={styles.tag}>The Team</span>
          <h2>
            Leadership That <em>Inspires Trust</em>
          </h2>
        </div>
        <div ref={gridRef} className={`${styles.teamGrid} reveal`}>
          {team.map(({ name, role, years, image }, i) => (
            <div
              key={name}
              className={`${styles.teamCard} reveal-delay-${i + 1}`}
            >
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
  );
}

// ─── Page ─────────────────────────────────────

export default function About() {
  return (
    <main className={styles.about}>
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
      <PhilosophySection />
      <ValuesSection />
      <TeamSection />
    </main>
  );
}
