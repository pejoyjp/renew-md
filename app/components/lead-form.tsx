"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  return <form className="lead-form" onSubmit={(event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();
    try {
      const existing = JSON.parse(localStorage.getItem("infinity-demo-leads") || "[]");
      const leads = Array.isArray(existing) ? existing : [];
      leads.push({ email, createdAt: new Date().toISOString() });
      localStorage.setItem("infinity-demo-leads", JSON.stringify(leads));
      setSubmitted(true);
      setError(false);
      form.reset();
    } catch { setError(true); }
  }}>
    <label htmlFor="lead-email">Your email address</label>
    <div className="lead-fields"><input id="lead-email" name="email" type="email" placeholder="you@yourpractice.com" autoComplete="email" required /><button className="landing-button" type="submit">Submit <ArrowRight size={16} /></button></div>
    <p aria-live="polite">{error ? "Unable to save in this browser. Please try again." : submitted ? "Saved in this browser for demo purposes. No email has been sent." : "Demo only: your email is saved in this browser, not sent to our team."}</p>
  </form>;
}
