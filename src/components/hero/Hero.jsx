import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 10;
      el.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroBgWrap}>
        <div className={styles.heroBg} ref={heroRef} />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className={styles.goldLine} />
          <span className={styles.tag}>Luxury Real Estate</span>
        </div>
        <h1 className={styles.heroTitle}>
          Find A Home
          <br />
          That Suits <em>You</em>
        </h1>
        <p className={styles.heroSub}>
          Curating the world's most extraordinary residences
          <br className={styles.hideMobile} />
          for those who demand the exceptional.
        </p>
        <div className={styles.heroActions}>
          <Link to="/properties" className={styles.btnPrimary}>
            View Properties
          </Link>
          <Link to="/about" className={styles.heroLink}>
            Our Story <span>→</span>
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.heroStats}>
        {[
          { num: "300+", label: "Properties Sold" },
          { num: "$4.2B", label: "In Total Sales" },
          { num: "18", label: "Global Offices" },
          { num: "25+", label: "Years of Excellence" },
        ].map(({ num, label }) => (
          <div key={label} className={styles.heroStat}>
            <span className={styles.heroStatNum}>{num}</span>
            <span className={styles.heroStatLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
