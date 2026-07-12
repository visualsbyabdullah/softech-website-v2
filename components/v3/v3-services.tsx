"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./v3-services.module.css";

const services = [
  {
    number: "01",
    title: "Product Engineering",
    description:
      "From product architecture and technical planning to reliable web, mobile and SaaS platforms.",
    tags: ["Web Platforms", "Mobile Products", "SaaS"],
    statement: "Ideas become dependable systems.",
  },
  {
    number: "02",
    title: "Business Automation",
    description:
      "We connect fragmented processes and replace repetitive manual work with clear digital workflows.",
    tags: ["Workflows", "Integrations", "ERP"],
    statement: "Repetition becomes momentum.",
  },
  {
    number: "03",
    title: "AI & Intelligent Systems",
    description:
      "Applied intelligence embedded inside products, decisions and customer-facing experiences.",
    tags: ["AI Assistants", "Computer Vision", "Analytics"],
    statement: "Information becomes action.",
  },
  {
    number: "04",
    title: "Digital Commerce",
    description:
      "Commerce ecosystems designed around discovery, conversion, fulfilment and everyday management.",
    tags: ["E-commerce", "Marketplaces", "POS"],
    statement: "Transactions become relationships.",
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    description:
      "Secure technical foundations that remain stable as products, teams and demand continue to grow.",
    tags: ["Cloud Systems", "DevOps", "Security"],
    statement: "Growth stays dependable.",
  },
  {
    number: "06",
    title: "Experience Design",
    description:
      "Intentional interfaces that make complicated products and operational processes feel clear.",
    tags: ["UX Strategy", "UI Systems", "Prototyping"],
    statement: "Complexity becomes clarity.",
  },
];

export function V3Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to(`.${styles.tickerLine}:first-child`, {
        xPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.ticker}`,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.fromTo(
        `.${styles.tickerLine}:last-child`,
        {
          xPercent: -18,
        },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: `.${styles.ticker}`,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      );

      gsap.from(`.${styles.introLine}`, {
        opacity: 0,
        y: 90,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${styles.content}`,
          start: "top 72%",
        },
      });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.service}`)
        .forEach((service, index) => {
          gsap.from(service, {
            opacity: 0,
            y: 55,
            duration: 0.85,
            delay: index * 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: service,
              start: "top 88%",
            },
          });
        });
    }, section);

    return () => context.revert();
  }, []);

  const selected = services[activeService];

  return (
    <section
      ref={sectionRef}
      id="v3-services"
      className={styles.section}
    >
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerLine}>
          <span>Product Engineering</span>
          <i />
          <span>Business Automation</span>
          <i />
          <span>Artificial Intelligence</span>
        </div>

        <div className={styles.tickerLine}>
          <span>Digital Commerce</span>
          <i />
          <span>Cloud Infrastructure</span>
          <i />
          <span>Experience Design</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentMeta}>
          <span>Capabilities</span>
          <span>One team · Six disciplines</span>
          <span>01—06</span>
        </div>

        <div className={styles.intro}>
          <h2>
            <span className={styles.introLine}>
              Capability
            </span>

            <span className={styles.introLine}>
              without the
            </span>

            <em className={styles.introLine}>handoffs.</em>
          </h2>

          <div className={styles.activeStatement}>
            <span>Active discipline / {selected.number}</span>
            <strong key={selected.statement}>
              {selected.statement}
            </strong>
          </div>
        </div>

        <div className={styles.serviceList}>
          {services.map((service, index) => {
            const isActive = index === activeService;

            return (
              <article
                className={`${styles.service} ${
                  isActive ? styles.active : ""
                }`}
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                tabIndex={0}
              >
                <div className={styles.serviceHeading}>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>

                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.serviceDetails}>
                  <p>{service.description}</p>

                  <div className={styles.tags}>
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#v3-contact">
                    Discuss this capability
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
