import Image from "next/image";
import { ArrowRight, ArrowUpRight, Clock3, ScanLine, Shirt, SlidersHorizontal } from "lucide-react";
import Faq from "./components/faq";
import LeadForm from "./components/lead-form";
import ScrollMotion from "./components/scroll-motion";

const seller = "https://www.rejuvafresh.com/products/emstrong-infinity";

export default function Home() {
  return (
    <main className="landing">
      <ScrollMotion />
      <header className="landing-header">
        <a className="wordmark" href="#top">EMSTRONG<span>®</span><small>INFINITY</small></a>
        <nav aria-label="Main navigation"><a href="#benefits">Why Infinity</a><a href="#experience">The experience</a><a href="#faq">FAQ</a></nav>
        <a className="header-cta" href="#pricing">Explore pricing <ArrowUpRight size={15} /></a>
      </header>

      <section id="top" className="original-hero">
        <Image src="/banner.png" alt="EMStrong Infinity chair with integrated touch screen" fill priority sizes="100vw" className="original-hero-image" />
        <div className="content-container original-hero-copy">
          <div>
            <p className="landing-eyebrow"><span /> EMSTRONG® INFINITY</p>
            <h1>More care.<br /><em>More confidence.</em></h1>
            <p>A seated pelvic wellness experience designed to bring thoughtful technology into your practice.</p>
            <a className="landing-button" href="#pricing">Explore pricing &amp; support <ArrowUpRight size={17} /></a>
            <div className="hero-points"><span><Shirt size={16} /> Fully clothed</span><span><Clock3 size={16} /> Approx. 30 minutes</span><span><SlidersHorizontal size={16} /> Personalized settings</span></div>
          </div>
        </div>
      </section>
      <section id="pricing" className="lead-section"><div className="landing-wrap lead-layout"><div data-reveal><p className="landing-eyebrow"><span /> LET’S GET STARTED</p><h2>Discover Infinity<br /><em>for your practice.</em></h2><p>Leave your email to experience the enquiry flow, or visit the seller for current pricing and product information.</p></div><div data-reveal data-stagger="1" className="lead-card"><h3>Start a conversation.</h3><p>Explore pricing, product details, training and support.</p><LeadForm /><a href={seller} target="_blank" rel="noopener noreferrer" className="text-link">Visit seller’s product page <ArrowUpRight size={16} /></a></div></div></section>
      <div className="proof-strip"><div className="landing-wrap proof-inner"><p>BUILT AROUND<br /><strong>THE EXPERIENCE</strong></p><span><Shirt /> Fully clothed</span><span><Clock3 /> Approx. 30 minutes</span><span><SlidersHorizontal /> Adjustable settings</span><a href="#pricing">Explore Infinity <ArrowRight size={17} /></a></div></div>

      <section id="benefits" className="landing-section benefits-section"><div className="landing-wrap">
        <div data-reveal className="section-heading"><div><p className="landing-eyebrow"><span /> WHY INFINITY</p><h2>Thoughtful technology.<br /><em>Simple by design.</em></h2></div><p>Bring a new dimension of care to your space with an experience built around comfort, simplicity and flexibility.</p></div>
        <div data-reveal className="benefits-grid">
          <article><div className="benefit-number">01 <ScanLine /></div><h3>Targeted<br />stimulation.</h3><p>Electromagnetic technology is designed to stimulate pelvic floor muscles through clothing.</p></article>
          <article><div className="benefit-number">02 <SlidersHorizontal /></div><h3>Made to<br />adapt.</h3><p>Multiple programs and adjustable settings make it possible to tailor each session.</p></article>
          <article><div className="benefit-number">03 <Clock3 /></div><h3>Fits into<br />the day.</h3><p>A seated session takes approximately 30 minutes, making it easy to plan into a routine.</p></article>
        </div>
      </div></section>

      <section className="story-section"><div data-reveal className="story-image"><Image src="/wellness-moment.jpg" alt="A quiet moment by a sunlit window" fill sizes="(max-width: 800px) 100vw, 50vw" className="object-cover" /></div><div data-reveal data-stagger="1" className="story-copy"><p className="landing-eyebrow"><span /> THE BIGGER PICTURE</p><h2>Good care starts<br />with the <em>foundation.</em></h2><p>Pelvic floor muscles play a role in everyday functions, yet pelvic wellness is often overlooked. Infinity offers a considered way to bring more attention to this part of wellbeing.</p><a href="#pricing" className="text-link">Explore product details <ArrowUpRight size={17} /></a></div></section>

      <section className="landing-section evidence-section"><div className="landing-wrap"><div data-reveal className="section-heading"><div><p className="landing-eyebrow"><span /> SEE IT FOR YOURSELF</p><h2>A closer look at<br /><em>the experience.</em></h2></div><p>Get to know the technology and explore product videos from MShape Beauty.</p></div><div data-reveal className="video-feature"><div className="video-picture"><iframe src="https://www.youtube-nocookie.com/embed/4Fo2Ui15rB0" title="MShape Beauty EMStrong video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><div className="video-copy"><p className="landing-eyebrow">PRODUCT VIDEOS</p><h3>See the details<br />in motion.</h3><p>Watch a video featured by MShape Beauty about EMStrong. The video is not confirmed to show the Infinity model.</p><a href="https://www.youtube.com/@mshapebeauty" target="_blank" rel="noopener noreferrer" className="text-link">Visit the YouTube channel <ArrowUpRight size={17} /></a></div></div>
        <div data-reveal className="more-videos" aria-label="More MShape Beauty videos">
          <article><div className="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/qWbuXl6PHiM" title="MShape Beauty practitioner video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><p>PROFESSIONAL PERSPECTIVE</p><h3>Explore practitioner experiences.</h3><small>Featured by MShape Beauty · May show other equipment.</small></article>
          <article><div className="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/tVvPaILhZlE" title="MShape Beauty practitioner video on other equipment" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><p>MORE FROM MSHAPE BEAUTY</p><h3>Discover more from the field.</h3><small>Featured by MShape Beauty · May show other equipment.</small></article>
        </div>
      </div></section>
      <section className="expert-section"><div className="landing-wrap"><div data-reveal className="section-heading"><div><p className="landing-eyebrow"><span /> PROFESSIONAL PERSPECTIVES</p><h2>Thoughtful care,<br /><em>shared perspectives.</em></h2></div><p>Concept profiles for demonstration only. The professionals, credentials and statements below are fictional and are not verified endorsements.</p></div><div className="expert-grid">{[
        ["A thoughtful addition to a wellness space.", "The seated format and adjustable settings offer a simple way to introduce a conversation about pelvic wellness.", "Dr. Alex Morgan", "MD · WELLNESS MEDICINE", "avatar-one"],
        ["Designed with the experience in mind.", "A fully clothed session helps make the experience feel approachable and easy to understand.", "Dr. Jamie Lee", "DPT · PELVIC HEALTH", "avatar-two"],
        ["Care that fits into the day.", "A clear, comfortable routine can be a meaningful part of how a practice welcomes its clients.", "Dr. Taylor Reed", "MD · CLINICAL PRACTICE", "avatar-three"],
      ].map(([title, quote, name, role, avatar]) => <article data-reveal className="expert-card" key={name}><div className="expert-card-copy"><div className="expert-top"><span aria-hidden="true">★★★★★</span><small>FICTIONAL DEMO REVIEW</small></div><h3>{title}</h3><p>“{quote}”</p><div className="expert-person"><span className={`expert-avatar ${avatar}`} role="img" aria-label="AI-generated fictional professional portrait" /><div><strong>{name}</strong><small className="expert-role">{role}</small><small>Fictional profile · Demo credentials</small></div></div></div></article>)}</div><a className="landing-button expert-cta" href="#pricing">Explore pricing &amp; support <ArrowRight size={17} /></a></div></section>
      <section className="cert-section"><div className="landing-wrap"><div data-reveal className="section-heading"><div><p className="landing-eyebrow"><span /> BRAND SHOWCASE</p><h2>Built around<br /><em>confidence.</em></h2></div><p>Real brand logos shown as visual examples for this demo. They do not represent certification, partnership, or endorsement of EMStrong Infinity.</p></div><div data-reveal className="brand-grid">{[
        ["Google", "https://mshapebeauty.com/cdn/shop/files/icon-1.png?v=1785403817&width=240"],
        ["IBM", "https://mshapebeauty.com/cdn/shop/files/icon-2.png?v=1785403817&width=240"],
        ["Amazon", "https://mshapebeauty.com/cdn/shop/files/icon-3.png?v=1785403817&width=240"],
      ].map(([name, src]) => <div className="brand-tile" key={name}><Image src={src} alt={`${name} logo`} width={180} height={80} unoptimized /><span>{name}</span></div>)}</div><p className="cert-disclaimer">Brand marks are displayed for demo layout only, sourced from MShape Beauty’s website. Product certifications have not been verified.</p></div></section>
      <section id="experience" className="landing-section journey-section"><div className="landing-wrap"><div data-reveal className="section-heading"><div><p className="landing-eyebrow"><span /> THE INFINITY EXPERIENCE</p><h2>From first look<br />to <em>everyday care.</em></h2></div><p>A straightforward experience, from exploring the details to settling into a session.</p></div><div data-reveal className="journey-grid"><article><span>01</span><h3>Explore</h3><p>Review the specifications and ask the seller about pricing, delivery and support.</p></article><article><span>02</span><h3>Get comfortable</h3><p>Take a seat in a comfortable position, fully clothed throughout the session.</p></article><article><span>03</span><h3>Choose settings</h3><p>Select a program and adjust the intensity and duration with the controller.</p></article><article><span>04</span><h3>Settle in</h3><p>Relax while the chair delivers electromagnetic muscle stimulation.</p></article></div><a className="landing-button journey-button" href="#pricing">Explore pricing &amp; support <ArrowRight size={17} /></a></div></section>

      <section className="landing-section details-section"><div className="landing-wrap details-grid"><div data-reveal><p className="landing-eyebrow"><span /> THE DETAILS</p><h2>Made with<br /><em>intention.</em></h2><p>Everything you need to start getting to know the chair. Confirm the latest specifications and support terms with the seller.</p><div className="details-image"><Image src="/infinity-cutout.png" alt="EMStrong Infinity chair and touch-screen controller" fill sizes="(max-width: 800px) 90vw, 500px" className="object-contain" /></div></div><div data-reveal data-stagger="1" className="specs">{[["Technology", "HICMMT electromagnetic stimulation"], ["Display", "8-inch LCD touch screen"], ["Power supply", "100–240V, 50/60Hz"], ["Dimensions", "87 × 70 × 113 cm"], ["Chair weight", "57 kg"], ["Included", "Chair, controller, cables & manual"]].map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}<p>Specifications are based on the seller’s listing and should be verified before purchase.</p></div></div></section>
      <Faq />
      <section className="final-cta"><div data-reveal className="landing-wrap"><p className="landing-eyebrow">A MORE THOUGHTFUL APPROACH</p><h2>Ready to make space<br />for <em>better care?</em></h2><p>Discover the details and take the next step with EMStrong® Infinity.</p><a className="landing-button" href="#pricing">Explore pricing &amp; support <ArrowRight size={17} /></a></div></section>
      <footer className="landing-footer"><div className="landing-wrap"><a className="wordmark" href="#top">EMSTRONG<span>®</span><small>INFINITY</small></a><p>Concept page for product discovery. Results vary. Consult a qualified healthcare professional about suitability and review the device instructions and local regulatory status before use.</p><span>© EMStrong Infinity · Demo concept</span></div></footer>
    </main>
  );
}
