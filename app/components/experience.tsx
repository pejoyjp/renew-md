"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const alignWithContent = (viewportWidth: number, slideWidth: number, index: number) => {
  const container = typeof document === "undefined" ? null : document.querySelector(".content-container");
  const pageInset = Math.min(32, Math.max(20, viewportWidth * 0.04));
  const contentWidth = viewportWidth >= 1280 ? 1200 : 768;
  const inset = container ? container.getBoundingClientRect().left : Math.max(pageInset, (viewportWidth - contentWidth) / 2);
  const slideGap = typeof window !== "undefined" && window.matchMedia("(min-width: 48rem)").matches ? 20 : 16;
  const rightEdge = container ? container.getBoundingClientRect().right : viewportWidth - inset;
  return index === 2 ? rightEdge - slideWidth + slideGap : inset;
};
const steps = [
  { title: "Take A Seat", description: "Find a comfortable, upright position while remaining fully clothed.", image: "/experience-seat.jpg", alt: "A woman sitting comfortably in an armchair", position: "object-[center_60%]" },
  { title: "Choose Your Settings", description: "Select a program and adjust the intensity and duration with the controller.", image: "/infinity-reclined.png", alt: "EMStrong Infinity chair and its touch-screen controller", position: "object-center" },
  { title: "Settle Into Your Session", description: "Relax while the chair delivers electromagnetic muscle stimulation.", image: "/experience-relax.jpg", alt: "A woman relaxing at home in a sunlit room", position: "object-[center_60%]" },
];

export default function Experience() {
  const [emblaRef, embla] = useEmblaCarousel({ align: alignWithContent, loop: false, containScroll: false, duration: 35 });

  const move = (direction: "prev" | "next") => {
    if (!embla) return;
    if (direction === "prev") embla.scrollPrev();
    else embla.scrollNext();
  };

  return (
    <section aria-labelledby="experience-title" className="overflow-hidden bg-surface py-16 md:py-20">
      <div className="content-container">
        <div data-reveal className="flex items-end justify-between gap-5">
        <div >
          <p className="mb-6 flex items-center gap-3 text-label font-bold tracking-eyebrow text-brand"><span className="h-px w-6 bg-brand" aria-hidden="true" />A MORE EFFORTLESS EXPERIENCE</p>
          <h2 id="experience-title" className="font-display text-title font-semibold tracking-display">Make Space For Your <span className="text-brand">Wellbeing.</span></h2>
          <p className="mt-5  text-body text-ink-secondary">Designed around comfort and simplicity, Infinity fits into a considered wellness routine—without changing clothes.</p>
        </div>
        <div className="flex shrink-0 gap-2 pb-1" aria-label="Carousel navigation">
          <button type="button" aria-label="Previous experience" onClick={() => move("prev")} className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-surface-soft"><ArrowLeft size={18} aria-hidden="true" /></button>
          <button type="button" aria-label="Next experience" onClick={() => move("next")} className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-surface-soft"><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
        </div>
      </div>
      <div className="experience-bleed relative mt-8 md:mt-10" role="region" aria-roledescription="carousel" aria-label="The Infinity experience">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {steps.map((step, index) => (
              <div key={step.title} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${steps.length}`} className="experience-slide min-w-0 shrink-0 pr-4 md:pr-5">
                <article data-reveal data-stagger={index} className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-ink sm:aspect-[16/10]">
                    <Image src={step.image} alt={step.alt} fill sizes="(max-width: 767px) 90vw, 860px" className={`object-cover transition-transform duration-700 ease-gentle motion-safe:group-hover:scale-105 motion-reduce:transition-none ${step.position}`} />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-surface md:p-10">
                    <h3 className="text-title font-semibold tracking-display">{step.title}</h3>
                    <p className="mt-3 max-w-copy text-body text-surface/90">{step.description}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
