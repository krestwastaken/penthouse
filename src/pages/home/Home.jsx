import { Link } from "react-router-dom";

import useScrollReveal from "../../hooks/useScrollReveal";
import { featuredProperties, penthouseStats } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./Home.module.css";
import image from "../../assets/ctaimage.jpg";

// ─── Sub-components ───────────────────────────

function PropertyCard({ p }) {
  return (
    <div className={styles.propertyCard}>
      <div className={styles.propertyCardImg}>
        <img
          src={p.image}
          alt={p.name}
          className={styles.propertyCardImgInner}
        />
        {p.tag && <span className={styles.propertyCardTagBadge}>{p.tag}</span>}
      </div>
      <div className={styles.propertyCardBody}>
        <h3 className={styles.propertyCardName}>{p.name}</h3>
        <p className={styles.propertyCardLocation}>{p.location}</p>
        <div className={styles.propertyCardFooter}>
          <Link to={`/property-detail/${p.id}`} className={styles.propertyCardCta}>
            Book Now
          </Link>
          <span className={styles.propertyCardPrice}>{p.price}</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeStrip() {
  const text =
    "With decades of expertise in real estate, we develop premium residential estates and provide end-to-end property management for property owners and investors.";
  return (
    <div className={styles.marqueeStrip}>
      <div className={styles.marqueeTrack}>
        {[0, 1].map((i) => (
          <span key={i} className={styles.marqueeContent}>
            {text}
            <span className={styles.marqueeDot}>◆</span>
            {text}
            <span className={styles.marqueeDot}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedSection({ sectionRef, cardsRef }) {
  return (
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
            Explore All →
          </Link>
        </div>
        <div className={styles.propertyGrid}>
          {featuredProperties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteInner}>
        <div className={styles.quotePerson}>
          <span className={styles.quotePersonName}>Dr. Segun Olu Ibukun</span>
          <span className={styles.quotePersonRole}>CEO, Penthouse</span>
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
  );
}

function CtaSection() {
  return (
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
              Explore serviced plots and completed homes ready for purchase.
            </p>
            <Link to="/contact" className={styles.btnPrimary}>
              Schedule a Consultation
            </Link>
          </div>
          <div className={styles.ctaBoxVisual}>
            <img src={image} alt="Penthouse properties" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────

export default function Home() {
  const sectionRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <main className={styles.home}>
      <Hero
        size="full"
        showStats={true}
        showActions={true}
        stats={penthouseStats}
        tag="Luxury Real Estate"
        title={
          <>
            Find A Home
            <br />
            That Suits <em>You</em>
          </>
        }
        subtitle="Secure Land. Structured Estates. Lasting Value."
        ctaLabel="View Properties"
        ctaPath="/properties"
        secondaryLabel="Our Story"
        secondaryPath="/about"
      />
      <MarqueeStrip />
      <FeaturedSection sectionRef={sectionRef} cardsRef={cardsRef} />
      <QuoteSection />
      <CtaSection />
    </main>
  );
}
