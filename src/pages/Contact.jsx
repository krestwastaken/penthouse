import React, { useState } from "react";


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
    <main className="contact page">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="tag">Get in Touch</span>
          <h1 className="page-hero__title">
            Begin Your <em>Journey</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          {/* Info side */}
          <div className="contact-info">
            <div className="contact-info__intro">
              <span className="gold-line" />
              <h2 className="contact-info__title">
                We'd Love to
                <br />
                <em>Hear From You</em>
              </h2>
              <p className="contact-info__text">
                Whether you're exploring properties for the first time or ready
                to make your move, our advisors are here to guide every step.
              </p>
            </div>

            <div className="contact-channels">
              {[
                {
                  label: "Phone",
                  value: "+1 800 PENTHOUSE",
                  href: "tel:+1800PENTHOUSE",
                },
                {
                  label: "Email",
                  value: "hello@penthouse.com",
                  href: "mailto:hello@penthouse.com",
                },
                {
                  label: "Head Office",
                  value: "One Luxury Tower, New York, NY 10001",
                  href: null,
                },
                {
                  label: "Hours",
                  value: "Mon–Fri: 9:00 AM – 6:00 PM EST",
                  href: null,
                },
              ].map(({ label, value, href }) => (
                <div key={label} className="contact-channel">
                  <span className="contact-channel__label">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      className="contact-channel__value contact-channel__link"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="contact-channel__value">{value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <span className="contact-success__icon">◈</span>
                <h3>Thank You</h3>
                <p>
                  Your enquiry has been received. One of our advisors will be in
                  touch within 24 hours.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000 0000"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Area of Interest</label>
                    <select
                      name="interest"
                      className="form-input form-select"
                      value={form.interest}
                      onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      <option>Buying a Property</option>
                      <option>Leasing a Property</option>
                      <option>Selling a Property</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-field form-field--full">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-input form-textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about what you're looking for..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit">
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
