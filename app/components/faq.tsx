"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "What is EMStrong® Infinity?",
    answer: "It is a chair-shaped device marketed for pelvic floor muscle stimulation. The seller describes its technology as High-Intensity Concentrated Magnetic Muscle Training (HICMMT).",
  },
  {
    question: "What happens during a session?",
    answer: "The seller describes a seated session performed fully clothed. A user or trained operator selects a program and adjusts intensity and duration. The seller describes a typical session as approximately 30 minutes.",
  },
  {
    question: "Who is it designed for?",
    answer: "The seller markets the chair for professional and personal use, with programs for men and women. Suitability depends on individual circumstances and local regulations.",
  },
  {
    question: "How do I know if it is right for me?",
    answer: "Consult a qualified healthcare professional before use, especially if you are pregnant, have an implanted electronic device or metal implant, or have a medical condition. Ask the seller for the full instructions and contraindications.",
  },
  {
    question: "What about price, shipping and warranty?",
    answer: "These vary by seller, destination and time. Visit the seller’s listing for current availability, delivery, pricing and the full warranty terms.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-canvas py-section">
      <div className="content-container grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div data-reveal>
          <p className="mb-6 flex items-center gap-3 text-label font-bold tracking-eyebrow text-brand"><span className="h-px w-6 bg-brand" aria-hidden="true" />GOOD TO KNOW</p>
          <h2 id="faq-title" className="font-display text-title font-semibold tracking-display">Questions,<br /><span className="text-brand">Answered.</span></h2>
        </div>
        <div className="border-t border-line">
          {questions.map(({ question, answer }, index) => {
            const expanded = open === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div key={question} data-reveal data-stagger={index} className="border-b border-line">
                <h3>
                  <button type="button" aria-expanded={expanded} aria-controls={answerId} onClick={() => setOpen(expanded ? null : index)} className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left text-body font-semibold tracking-body text-ink transition-colors hover:text-brand">
                    <span>{question}</span>
                    <Plus size={20} strokeWidth={1.5} aria-hidden="true" className={`shrink-0 text-brand transition-transform duration-300 ease-gentle motion-reduce:transition-none ${expanded ? "rotate-45" : "rotate-0"}`} />
                  </button>
                </h3>
                <div id={answerId} aria-hidden={!expanded} inert={!expanded} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-gentle motion-reduce:transition-none ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0 overflow-hidden"><p className="max-w-copy pb-6 pr-8 text-body text-ink-secondary">{answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
