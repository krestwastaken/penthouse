import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import heroImg from '../../assets/properties/3-BDD.jpg'
import compactHeroImg from '../../assets/properties/3-BSD.jpg'
export default function Hero({
  tag = "Luxury Real Estate",
  title = (
    <>
      Find A Home
      <br />
      That Suits <em>You</em>
    </>
  ),
  subtitle = "Secure Land. Structured Estates. Lasting Value.",
  showActions = false,
  ctaLabel = "View Properties",
  ctaPath = "/properties",
  secondaryLabel = "Our Story",
  secondaryPath = "/about",
  showStats = false,
  stats = [],
  size = "compact",
  heroImage = heroImg,
  compactImage = compactHeroImg,
}) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (size !== "full") return;
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
  }, [size]);

  return (
    <section
      className={`${styles.hero} ${size === "full" ? styles.heroFull : styles.heroCompact}`}
    >
      <div className={styles.heroBgWrap}>
        <div className={styles.heroBg} ref={heroRef} />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <span className={styles.goldLine} />
          <span className={styles.tag}>{tag}</span>
        </div>

        <h1 className={styles.heroTitle}>{title}</h1>

        {subtitle && <p className={styles.heroSub}>{subtitle}</p>}

        {showActions && (
          <div className={styles.heroActions}>
            <Link to={ctaPath} className={styles.btnPrimary}>
              {ctaLabel}
            </Link>
            <Link to={secondaryPath} className={styles.heroLink}>
              {secondaryLabel} <span>→</span>
            </Link>
          </div>
        )}
      </div>

      {showStats && stats.length > 0 && (
        <div className={styles.heroStats}>
          {stats.map(({ num, label }) => (
            <div key={label} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{num}</span>
              <span className={styles.heroStatLabel}>{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Property image — right side, full hero only */}
      {heroImage && size === "full" && (
        <div className={styles.heroImageWrap}>
          <img
            src={heroImage}
            alt="Featured property"
            className={styles.heroImage}
          />
        </div>
      )}

      {/* Compact hero image */}
      {compactImage && size === "compact" && (
        <div className={styles.heroImageWrapCompact}>
          <img src={compactImage} alt="" className={styles.heroImageCompact} />
        </div>
      )}
    </section>
  );
}
