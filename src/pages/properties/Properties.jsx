import { useState } from "react";
import { Link } from "react-router-dom";

import { properties, types, statuses } from "../data";
import Hero from "../../components/hero/Hero";
import styles from "./Properties.module.css";

// ─── Sub-components ───────────────────────────

function FilterBar({
  activeType,
  setActiveType,
  activeStatus,
  setActiveStatus,
  count,
}) {
  return (
    <div className={styles.filters}>
      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Type</span>
        <div className={styles.filterPills}>
          {types.map((t) => (
            <button
              key={t}
              className={`${styles.filterPill} ${activeType === t ? styles.filterPillActive : ""}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <span className={styles.filterLabel}>Status</span>
        <div className={styles.filterPills}>
          {statuses.map((s) => (
            <button
              key={s}
              className={`${styles.filterPill} ${activeStatus === s ? styles.filterPillActive : ""}`}
              onClick={() => setActiveStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <span className={styles.propCount}>
        {count} {count === 1 ? "Property" : "Properties"}
      </span>
    </div>
  );
}

function PropertyCard({ p }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        {p.image ? (
          <img src={p.image} alt={p.name} className={styles.cardImgInner} />
        ) : (
          <div className={styles.cardImgInner} />
        )}
        {p.tag && <span className={styles.cardBadge}>{p.tag}</span>}
        <span className={styles.cardStatus}>{p.status}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardType}>{p.type}</div>
        <h3 className={styles.cardName}>{p.name}</h3>
        <p className={styles.cardLocation}>📍 {p.location}</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>{p.price}</span>
          <Link to={`/property-detail/${p.id}`} className={styles.cardCta}>
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────

export default function Properties() {
  const [activeType, setActiveType] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filtered = properties.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType;
    const statusMatch = activeStatus === "All" || p.status === activeStatus;
    return typeMatch && statusMatch;
  });

  return (
    <main className={styles.properties}>
      <Hero
        tag="Portfolio"
        title={
          <>
            Our <em>Properties</em>
          </>
        }
        subtitle="Explore our curated selection of premium residential estates."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <FilterBar
            activeType={activeType}
            setActiveType={setActiveType}
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            count={filtered.length}
          />

          <div className={styles.grid}>
            {filtered.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
            {filtered.length === 0 && (
              <div className={styles.emptyState}>
                <p>No properties match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
