"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services.module.css";

const services = [
  {
    number: "01",
    title: "Product Engineering",
    description:
      "From system planning to production-ready platforms built around real business operations.",
    tags: ["Web Platforms", "Mobile Products", "SaaS"],
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "Connected workflows that replace repetitive work, fragmented tools and operational bottlenecks.",
    tags: ["Process Design", "Integrations", "ERP"],
  },
  {
    number: "03",
    title: "AI & Intelligent Systems",
    description:
      "Useful intelligence embedded inside products, decisions and customer-facing experiences.",
    tags: ["AI Assistants", "Computer Vision", "Analytics"],
  },
  {
    number: "04",
    title: "Digital Commerce",
    description:
      "Commerce ecosystems designed for discovery, conversion and reliable everyday management.",
    tags: ["E-commerce", "Marketplaces", "POS"],
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Secure technical foundations that remain stable as products, teams and demand grow.",
    tags: ["Cloud Systems", "DevOps", "Security"],
  },
  {
    number: "06",
    title: "Experience Design",
    description:
      "Clear and intentional interfaces that make complex software feel direct and human.",
    tags: ["UX Strategy", "UI Systems", "Prototyping"],
  },
];

export function Services() {
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
      gsap.from(`.${styles.headingLine}`, {
        yPercent: 115,
        duration: 1.15,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.service}`)
        .forEach((row, index) => {
          const visual = row.querySelector(`.${styles.visual}`);

          gsap.from(row, {
            opacity: 0,
            y: index % 2 ? 54 : 34,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
            },
          });

          gsap.fromTo(
            visual,
            {
              xPercent: index % 2 ? 12 : -12,
              rotate: index % 3 === 0 ? -3 : 3,
            },
            {
              xPercent: 0,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            }
          );
        });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={styles.section}
    >
      <div className="site-container">
        <header className={styles.intro}>
          <p className="eyebrow">Capabilities / 01—06</p>

          <div className={styles.heading}>
            <div>
              <span className={styles.headingLine}>What we build</span>
            </div>

            <div>
              <span className={styles.headingLine}>changes how</span>
            </div>

            <div>
              <em className={styles.headingLine}>
                business works.
              </em>
            </div>
          </div>

          <p className={styles.lead}>
            Six connected disciplines. One delivery team responsible
            for the complete system—not only the surface.
          </p>
        </header>

        <div className={styles.list}>
          {services.map((service, index) => (
            <article className={styles.service} key={service.number}>
              <span className={styles.number}>{service.number}</span>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div
                className={`${styles.visual} ${
                  styles[`visual${index + 1}`]
                }`}
                aria-hidden="true"
              >
                <span className={styles.visualLabel}>
                  SFT / {service.number}
                </span>

                <div className={styles.motif}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <ArrowUpRight
                  className={styles.arrow}
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
