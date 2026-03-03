import { useState } from "react";
import Hero from "../../components/hero/Hero";
import styles from "./Contact.module.css";

const channels = [
  {
    icon: "📍",
    label: "Office Address",
    value:
      "Poly Plaza, Plot 102, Ademola Adetokunbo Crescent, Wuse 2, Abuja. FCT Nigeria",
    href: "https://maps.google.com/?q=Poly+Plaza+Plot+102+Ademola+Adetokunbo+Crescent+Wuse+2+Abuja",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "penthouseproperties@gmail.com",
    href: "mailto:penthouseproperties@gmail.com",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "Chat with us on WhatsApp",
    href: "https://wa.me/2348000000000",
  },
  {
    icon: "🕐",
    label: "Office Hours",
    value: "Monday – Friday: 8:00 AM – 5:00 PM WAT",
    href: null,
  },
];

const socials = [
  { icon: "📸", label: "Instagram", href: "https://instagram.com" },
  { icon: "💼", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "𝕏", label: "Twitter / X", href: "https://twitter.com" },
  { icon: "📘", label: "Facebook", href: "https://facebook.com" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.contact}>
      {/* ── HERO ───────────────────────────────── */}
      <Hero
        tag="Get in Touch"
        title={
          <>
            Begin Your <em>Journey</em>
          </>
        }
        subtitle="Shelter At its Best and Beyond"
      />

      {/* ── MAIN SECTION ───────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* ── INFO SIDE ────────────────────── */}
            <div className={styles.info}>
              <div className={styles.intro}>
                <span className={styles.goldLine} />
                <h2 className={styles.infoTitle}>
                  We'd Love to
                  <br />
                  <em>Hear From You</em>
                </h2>
                <p className={styles.infoText}>
                  Whether you're exploring properties for the first time or
                  ready to make your move, our advisors are here to guide every
                  step of the journey.
                </p>
                <span className={styles.tagline}>
                  "Shelter At its Best and Beyond"
                </span>
              </div>

              {/* Contact channels */}
              <div className={styles.channels}>
                {channels.map(({ icon, label, value, href }) => (
                  <div key={label} className={styles.channel}>
                    <span className={styles.channelIcon}>{icon}</span>
                    <div className={styles.channelBody}>
                      <span className={styles.channelLabel}>{label}</span>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer"
                          className={styles.channelLink}
                        >
                          {value}
                        </a>
                      ) : (
                        <span className={styles.channelValue}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p
                  className={styles.channelLabel}
                  style={{ marginBottom: "10px" }}
                >
                  Follow Us
                </p>
                <div className={styles.socialsRow}>
                  {socials.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialBtn}
                    >
                      <span className={styles.socialIcon}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* RC Number */}
              <p className={styles.legalNote}>
                RC No. 200,167 — Registered in Nigeria
              </p>

              {/* Google Map */}
              <div>
                <p className={styles.mapLabel}>📍 Find Us</p>
                <div className={styles.mapWrap}>
                  <iframe
                    title="Penthouse Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.900972791154!2d7.474017074781237!3d9.072785790990281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0afc28b2855d%3A0x2675f7488fd258c2!2sPoly%20Plaza!5e0!3m2!1sen!2sng!4v1772533751720!5m2!1sen!2sng"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* ── FORM SIDE ────────────────────── */}
            <div className={styles.formWrap}>
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}>◈</span>
                  <h3>Thank You</h3>
                  <p>
                    Your enquiry has been received. One of our advisors will be
                    in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className={styles.formInput}
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className={styles.formInput}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className={styles.formInput}
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div className={styles.formField}>
                      <label className={styles.formLabel}>
                        Area of Interest
                      </label>
                      <select
                        name="interest"
                        className={`${styles.formInput} ${styles.formSelect}`}
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select one</option>
                        <option>Buying a Property</option>
                        <option>Leasing a Property</option>
                        <option>Selling a Property</option>
                        <option>Property Management</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div
                    className={`${styles.formField} ${styles.formFieldFull}`}
                  >
                    <label className={styles.formLabel}>Message *</label>
                    <textarea
                      name="message"
                      className={`${styles.formInput} ${styles.formTextarea}`}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about what you're looking for..."
                      rows={6}
                      required
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Enquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
