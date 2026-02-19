import React, { useState } from "react";

const properties = [
  {
    id: 1,
    name: "Sky Penthouse",
    location: "Manhattan, New York",
    price: "$12.4M",
    beds: 4,
    baths: 4,
    sqft: "5,200",
    type: "Penthouse",
    status: "For Sale",
    tag: "Exclusive",
  },
  {
    id: 2,
    name: "Glass Villa",
    location: "Beverly Hills, CA",
    price: "$8.9M",
    beds: 5,
    baths: 6,
    sqft: "7,800",
    type: "Villa",
    status: "For Sale",
    tag: "New",
  },
  {
    id: 3,
    name: "The Terrace",
    location: "Miami Beach, FL",
    price: "$5.6M",
    beds: 3,
    baths: 3,
    sqft: "3,400",
    type: "Penthouse",
    status: "For Sale",
    tag: "Featured",
  },
  {
    id: 4,
    name: "Harbour Crest",
    location: "Sydney, Australia",
    price: "$7.2M",
    beds: 4,
    baths: 4,
    sqft: "4,900",
    type: "Residence",
    status: "For Lease",
    tag: null,
  },
  {
    id: 5,
    name: "Maison Lumière",
    location: "Paris, France",
    price: "$15.1M",
    beds: 6,
    baths: 7,
    sqft: "9,200",
    type: "Villa",
    status: "For Sale",
    tag: "Exclusive",
  },
  {
    id: 6,
    name: "The Apex",
    location: "Dubai, UAE",
    price: "$22.0M",
    beds: 5,
    baths: 6,
    sqft: "8,400",
    type: "Penthouse",
    status: "For Sale",
    tag: "New",
  },
];

const types = ["All", "Penthouse", "Villa", "Residence"];
const statuses = ["All", "For Sale", "For Lease"];

export default function Properties() {
  const [activeType, setActiveType] = useState("All");
  const [activeStatus, setActiveStatus] = useState("All");

  const filtered = properties.filter((p) => {
    const typeMatch = activeType === "All" || p.type === activeType;
    const statusMatch = activeStatus === "All" || p.status === activeStatus;
    return typeMatch && statusMatch;
  });

  return (
    <main className="properties page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Portfolio</span>
          <h1 className="page-hero__title">
            Our <em>Properties</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="prop-filters">
            <div className="filter-group">
              <span className="filter-label">Type</span>
              <div className="filter-pills">
                {types.map((t) => (
                  <button
                    key={t}
                    className={`filter-pill ${activeType === t ? "filter-pill--active" : ""}`}
                    onClick={() => setActiveType(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="filter-label">Status</span>
              <div className="filter-pills">
                {statuses.map((s) => (
                  <button
                    key={s}
                    className={`filter-pill ${activeStatus === s ? "filter-pill--active" : ""}`}
                    onClick={() => setActiveStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <span className="prop-count">{filtered.length} Properties</span>
          </div>

          {/* Grid */}
          <div className="prop-grid">
            {filtered.map((p) => (
              <div key={p.id} className="prop-card">
                <div className="prop-card__img">
                  <div className="prop-card__img-inner" />
                  {p.tag && <span className="prop-card__badge">{p.tag}</span>}
                  <span className="prop-card__status">{p.status}</span>
                </div>
                <div className="prop-card__body">
                  <div className="prop-card__type">{p.type}</div>
                  <h3 className="prop-card__name">{p.name}</h3>
                  <p className="prop-card__location">📍 {p.location}</p>
                  <div className="prop-card__specs">
                    <span>{p.beds} Bed</span>
                    <span className="dot" />
                    <span>{p.baths} Bath</span>
                    <span className="dot" />
                    <span>{p.sqft} sqft</span>
                  </div>
                  <div className="prop-card__footer">
                    <span className="prop-card__price">{p.price}</span>
                    <button className="btn-primary prop-card__cta">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <p>No properties match your current filters.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
