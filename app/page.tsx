import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ExpectedPages } from "@/components/expected-pages";

export default function HomePage() {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-orbs" aria-hidden />
        <div className="landing-hero-inner">
          <BrandLogo className="landing-logo" aria-label="ReliefFlow logo" />
          <span className="tag">Humanitarian cash · Integrity · Stellar</span>
          <h1 className="hero-headline">Aid that arrives—and proves it.</h1>
          <p
            className="landing-lead"
            dangerouslySetInnerHTML={{ __html: "ReliefFlow aligns <strong>beneficiary records, campaign treasuries, and integrity workflows</strong> on Soroban\u2014so donors see transparent paths from funding to impact without exposing vulnerable data." }}
          />
          <div className="landing-cta-row">
            <Link href="/roadmap" className="cta">Field roadmap</Link>
            <Link href="/programs" className="cta-secondary">Programs overview</Link>
          </div>
          <ul className="landing-stats">
            <li>Program rules on-chain</li>
            <li>Tranche-safe escrow</li>
            <li>Challenge-ready integrity</li>
          </ul>
        </div>
      </section>

      <section className="landing-pillars">
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◆</div>
          <h3>Enrollment rails</h3>
          <p>Design choices that respect privacy and duplication risk.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◇</div>
          <h3>Treasury tranches</h3>
          <p>Release schedules donors can reason about.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>○</div>
          <h3>Impact surfaces</h3>
          <p>Aggregate reporting without unsafe micro-data leaks.</p>
        </article>
      </section>

      <p className="landing-trust">For agencies, field partners, and donors who need speed and accountability.</p>

      <ExpectedPages />
    </>
  );
}
