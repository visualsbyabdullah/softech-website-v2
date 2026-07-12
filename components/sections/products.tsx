"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./products.module.css";

const products = [
  {
    index: "01",
    name: "AMS",
    kind: "Workforce operations",
    copy: "Attendance, leave, payroll and employee operations brought into one reliable workspace.",
    tone: "red",
    labels: ["Attendance", "Payroll", "People"],
  },
  {
    index: "02",
    name: "E-Bazaar",
    kind: "Digital commerce",
    copy: "A connected marketplace built to make local buying and selling simpler, faster and more accessible.",
    tone: "paper",
    labels: ["Marketplace", "Commerce", "Pakistan"],
  },
  {
    index: "03",
    name: "Audit Tracker 24/7",
    kind: "Compliance platform",
    copy: "Continuous visibility across audits, actions and accountability—without disconnected spreadsheets.",
    tone: "charcoal",
    labels: ["Audit", "Tracking", "Reports"],
  },
  {
    index: "04",
    name: "Softech POS",
    kind: "Retail operations",
    copy: "A practical point-of-sale system connecting transactions, inventory and daily retail decisions.",
    tone: "red",
    labels: ["Sales", "Inventory", "Retail"],
  },
  {
    index: "05",
    name: "Sofi",
    kind: "Digital assistant",
    copy: "A conversational product experience designed to make everyday interactions more direct and helpful.",
    tone: "paper",
    labels: ["Assistant", "Support", "Automation"],
  },
  {
    index: "06",
    name: "SofiGenie",
    kind: "Applied intelligence",
    copy: "Intelligence that turns questions and operational data into clear, useful next actions.",
    tone: "charcoal",
    labels: ["AI", "Insights", "Decisions"],
  },
];

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (
      !section ||
      !track ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 9999px)", () => {
        const distance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              `+=${distance() + window.innerHeight * 0.7}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => media.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className={styles.section}
    >
      <div className={styles.topbar}>
        <span>Products / Built by Softech</span>
        <span>Software with a job to do</span>
        <span>01—06</span>
      </div>

      <div ref={trackRef} className={styles.track}>
        <header className={styles.introPanel}>
          <p className="eyebrow">Our product ecosystem</p>

          <h2>
            Software with
            <br />
            a job to do.
          </h2>

          <p>
            Products shaped around real operational friction—not
            invented feature lists.
          </p>

          <div className={styles.scrollCue}>
            <span>Scroll to explore</span>
            <i />
          </div>
        </header>

        {products.map((product) => (
          <article className={styles.product} key={product.name}>
            <div className={styles.copy}>
              <div className={styles.meta}>
                <span>{product.index}</span>
                <span>{product.kind}</span>
              </div>

              <h3>{product.name}</h3>
              <p>{product.copy}</p>

              <div className={styles.labels}>
                {product.labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              <a href="#contact">
                Discover product
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </a>
            </div>

            <div
              className={`${styles.art} ${styles[product.tone]}`}
            >
              <div className={styles.artTop}>
                <span>SFT / PRODUCT</span>
                <span>{product.index}</span>
              </div>

              <div className={styles.window}>
                <div className={styles.windowBar}>
                  <i />
                  <i />
                  <i />
                </div>

                <div className={styles.windowBody}>
                  <div className={styles.sideNav}>
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className={styles.data}>
                    <b />
                    <b />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <strong>{product.name}</strong>
              <small>Interface preview / replace later</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

