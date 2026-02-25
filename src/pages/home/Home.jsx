import { Link } from "react-router-dom";

import useScrollReveal from "../../hooks/useScrollReveal";
import { featuredProperties } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./Home.module.css";

import image from "../../assets/ctaimage.jpg";

export default function Home() {
  const sectionRef = useScrollReveal()
  const cardsRef = useScrollReveal()

  return (
    <main className={styles.home}>
      {/* HERO */}
      <Hero />

      {/* ── FEATURED PROPERTIES ────────────────── */}
      <section
        ref={sectionRef}
        className={`${styles.section} ${styles.featured} reveal`}
      >
        <div ref={cardsRef} className={`${styles.container} reveal`}>
          <div className={`${styles.sectionHead} reveal-delay-1`}>
            <div className={`${styles.sectionHeadLeft} reveal-delay-2`}>
              <span className={styles.tag}>Popular</span>
              <h2 className={styles.sectionTitle}>Our Popular Homes</h2>
            </div>
            <Link to="/properties" className={styles.exploreLink}>
              Explore All
            </Link>
          </div>

          <div className={styles.propertyGrid}>
            {featuredProperties.map((p) => (
              <div key={p.id} className={styles.propertyCard}>
                <div className={styles.propertyCardImg}>
                  <div className={styles.propertyCardImgInner} />
                  {p.tag && (
                    <span className={styles.propertyCardTagBadge}>{p.tag}</span>
                  )}
                </div>
                <div className={styles.propertyCardBody}>
                  <h3 className={styles.propertyCardName}>{p.name}</h3>
                  <p className={styles.propertyCardLocation}>{p.location}</p>
                  <div className={styles.propertyCardMeta}>
                    <span>{p.beds} Bed</span>
                    <span className={styles.dot} />
                    <span>{p.sqft}</span>
                    <span className={styles.dot} />
                    <span>1600 m</span>
                  </div>
                  <div className={styles.propertyCardFooter}>
                    <Link to="/properties" className={styles.propertyCardCta}>
                      Book Now
                    </Link>
                    <span className={styles.propertyCardPrice}>{p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteInner}>
          <div className={styles.quotePerson}>
            <span className={styles.quotePersonName}>Dr. Segun Olu Ibukun</span>
            <span className={styles.quotePersonRole}>Founder, Penthouse</span>
          </div>
          <div className={styles.quoteContent}>
            <span className={styles.quoteMark}>"</span>
            <p>
              We don't just sell properties — we place individuals into their
              truest expression of life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaBoxContent}>
              <span className={styles.tag}>Ready to Begin?</span>
              <h2 className={styles.ctaBoxTitle}>
                Find Your
                <br />
                <em>Perfect Residence</em>
              </h2>
              <p className={styles.ctaBoxText}>
                Explore services plots and completed homes ready for purchase.
              </p>
              <Link to="/contact" className={styles.btnPrimary}>
                Schedule a Consultation
              </Link>
            </div>
            <div className={styles.ctaBoxVisual}>
              <img src={image} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
