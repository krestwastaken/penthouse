import React, { useState } from "react";


const offices = [
  {
    id: 1,
    city: "New York",
    country: "United States",
    address: "1 World Trade Center, Suite 8500",
    phone: "+1 212 555 0100",
    email: "ny@penthouse.com",
    region: "Americas",
    head: "Alexander Voss",
  },
  {
    id: 2,
    city: "Los Angeles",
    country: "United States",
    address: "9800 Wilshire Blvd, Beverly Hills",
    phone: "+1 310 555 0200",
    email: "la@penthouse.com",
    region: "Americas",
    head: "Sarah Kim",
  },
  {
    id: 3,
    city: "London",
    country: "United Kingdom",
    address: "1 Mayfair Square, London W1K",
    phone: "+44 20 7946 0800",
    email: "london@penthouse.com",
    region: "Europe",
    head: "James Ashford",
  },
  {
    id: 4,
    city: "Paris",
    country: "France",
    address: "8 Avenue Montaigne, 75008",
    phone: "+33 1 47 20 0100",
    email: "paris@penthouse.com",
    region: "Europe",
    head: "Isabelle Laurent",
  },
  {
    id: 5,
    city: "Dubai",
    country: "UAE",
    address: "DIFC Gate Village, Tower 1",
    phone: "+971 4 555 0300",
    email: "dubai@penthouse.com",
    region: "Middle East",
    head: "Khalid Al Mansoori",
  },
  {
    id: 6,
    city: "Singapore",
    country: "Singapore",
    address: "Marina Bay Financial Centre, Tower 3",
    phone: "+65 6555 0400",
    email: "sg@penthouse.com",
    region: "Asia Pacific",
    head: "Marcus Chen",
  },
];

const regions = ["All", "Americas", "Europe", "Middle East", "Asia Pacific"];

export default function Offices() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [selected, setSelected] = useState(offices[0]);

  const filtered =
    activeRegion === "All"
      ? offices
      : offices.filter((o) => o.region === activeRegion);

  return (
    <main className="offices page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Global Presence</span>
          <h1 className="page-hero__title">
            Our <em>Offices</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Region filter */}
          <div className="office-filters">
            {regions.map((r) => (
              <button
                key={r}
                className={`filter-pill ${activeRegion === r ? "filter-pill--active" : ""}`}
                onClick={() => setActiveRegion(r)}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Layout: list + detail */}
          <div className="offices-layout">
            <div className="offices-list">
              {filtered.map((o) => (
                <div
                  key={o.id}
                  className={`office-item ${selected?.id === o.id ? "office-item--active" : ""}`}
                  onClick={() => setSelected(o)}
                >
                  <div className="office-item__left">
                    <h3 className="office-item__city">{o.city}</h3>
                    <span className="office-item__country">{o.country}</span>
                  </div>
                  <div className="office-item__region">{o.region}</div>
                  <span className="office-item__arrow">→</span>
                </div>
              ))}
            </div>

            {/* Detail panel */}
            {selected && (
              <div className="office-detail">
                <div className="office-detail__map-placeholder" />
                <div className="office-detail__info">
                  <div className="office-detail__header">
                    <div>
                      <h2 className="office-detail__city">{selected.city}</h2>
                      <span className="office-detail__country">
                        {selected.country}
                      </span>
                    </div>
                    <span className="office-detail__region tag">
                      {selected.region}
                    </span>
                  </div>
                  <div className="office-detail__fields">
                    {[
                      { label: "Address", value: selected.address },
                      { label: "Phone", value: selected.phone },
                      { label: "Email", value: selected.email },
                      { label: "Office Head", value: selected.head },
                    ].map(({ label, value }) => (
                      <div key={label} className="office-detail__field">
                        <span className="office-detail__field-label">
                          {label}
                        </span>
                        <span className="office-detail__field-value">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a href={`mailto:${selected.email}`} className="btn-primary">
                    Contact This Office
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
