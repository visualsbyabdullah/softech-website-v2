"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./impact.module.css";

const metrics = [
  {
    number: "06",
    label: "Connected capabilities",
    detail: "Strategy, design and engineering working as one system.",
  },
  {
    number: "06",
    label: "Featured products",
    detail: "Software platforms built around real operational needs.",
  },
  {
    number: "03",
    label: "Delivery reach",
    detail: "UK · Pakistan · Global",
  },
  {
    number: "01",
    label: "Accountable team",
    detail: "One delivery practice from first idea to final system.",
  },
];

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !sectionRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(`.${styles.marqueeLine}:first-child`, {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        `.${styles.marqueeLine}:last-child`,
        {
          xPercent: -18,
        },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.from(`.${styles.metric}`, {
        opacity: 0,
        y: 90,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.metrics}`,
          start: "top 78%",
        },
      });

      gsap.from(`.${styles.number}`, {
        textContent: 0,
        duration: 1.7,
        ease: "power2.out",
        snap: {
          textContent: 1,
        },
        stagger: 0.12,
        scrollTrigger: {
          trigger: `.${styles.metrics}`,
          start: "top 78%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className={styles.section}
    >
      <header className={styles.header}>
        <div className="site-container">
          <div className={styles.headerMeta}>
            <span>Built for operational progress</span>
            <span>Evidence over decoration</span>
            <span>2026</span>
          </div>

          <div className={styles.statement}>
            <p>
              Technology should not simply look impressive.
            </p>

            <h2>
              It should earn
              <br />
              its place.
            </h2>

            <ArrowDownRight
              size={34}
              strokeWidth={1.4}
              aria-hidden="true"
            />
          </div>
        </div>
      </header>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeLine}>
          <span>Useful systems</span>
          <i />
          <span>Measurable progress</span>
          <i />
          <span>Clear operations</span>
        </div>

        <div className={styles.marqueeLine}>
          <span>Designed to work</span>
          <i />
          <span>Engineered to last</span>
          <i />
          <span>Ready to scale</span>
        </div>
      </div>

      <div className={`site-container ${styles.metrics}`}>
        {metrics.map((metric, index) => (
          <article className={styles.metric} key={metric.label}>
            <div className={styles.metricTop}>
              <span>0{index + 1}</span>
              <span>SFT / IMPACT</span>
            </div>

            <strong className={styles.number}>
              {metric.number}
            </strong>

            <h3>{metric.label}</h3>
            <p>{metric.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
