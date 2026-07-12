"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./services-v2.module.css";

const capabilities = [
  {
    number: "01",
    eyebrow: "Product Engineering",
    title: "From complex idea to working system.",
    description:
      "We plan, design and engineer reliable digital products around real operational requirements.",
    tags: ["Web Platforms", "Mobile Products", "SaaS"],
  },
  {
    number: "02",
    eyebrow: "Business Automation",
    title: "Less repetition. More momentum.",
    description:
      "Disconnected manual tasks become one clear and connected operational workflow.",
    tags: ["Workflows", "Integrations", "ERP"],
  },
  {
    number: "03",
    eyebrow: "AI & Intelligent Systems",
    title: "Intelligence where it creates value.",
    description:
      "Applied AI that helps teams understand information, automate decisions and respond faster.",
    tags: ["AI Assistants", "Computer Vision", "Analytics"],
  },
  {
    number: "04",
    eyebrow: "Digital Commerce",
    title: "Every transaction, connected.",
    description:
      "Commerce systems built around discovery, conversion, fulfilment and everyday management.",
    tags: ["E-commerce", "Marketplaces", "POS"],
  },
  {
    number: "05",
    eyebrow: "Cloud & Infrastructure",
    title: "Built stable. Ready to scale.",
    description:
      "Secure technical foundations that stay dependable as products, teams and demand grow.",
    tags: ["Cloud Systems", "DevOps", "Security"],
  },
  {
    number: "06",
    eyebrow: "Experience Design",
    title: "Complex software, made clear.",
    description:
      "We turn complicated processes into direct, intentional and human product experiences.",
    tags: ["UX Strategy", "UI Systems", "Prototyping"],
  },
];

function EngineeringVisual() {
  return (
    <div className={styles.engineeringVisual}>
      <span className={styles.visualIndex}>SYSTEM / 01</span>

      <div className={styles.engineeringLayer} data-layer="one">
        <span>Product architecture</span>
        <i />
        <i />
        <i />
      </div>

      <div className={styles.engineeringLayer} data-layer="two">
        <span>Interface system</span>
        <div className={styles.miniGrid}>
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>

      <div className={styles.engineeringLayer} data-layer="three">
        <span>Production build</span>
        <strong>READY</strong>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className={styles.automationVisual}>
      <span className={styles.visualIndex}>WORKFLOW / 02</span>

      <div className={styles.workflow}>
        {["Input", "Process", "Review", "Complete"].map(
          (label, index) => (
            <div className={styles.workflowStep} key={label}>
              <span data-node>{index + 1}</span>
              <strong>{label}</strong>

              {index < 3 && <i data-connector />}
            </div>
          )
        )}
      </div>

      <div className={styles.workflowStatus}>
        <span>Manual effort</span>
        <i />
        <strong>−68%</strong>
      </div>
    </div>
  );
}

function IntelligenceVisual() {
  return (
    <div className={styles.intelligenceVisual}>
      <span className={styles.visualIndex}>INTELLIGENCE / 03</span>

      <div className={styles.dataGrid}>
        {Array.from({ length: 48 }).map((_, index) => (
          <i key={index} data-cell />
        ))}
      </div>

      <div className={styles.scanner} data-scanner />

      <div className={styles.signal}>
        <span>Signal detected</span>
        <strong>98.4%</strong>
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className={styles.commerceVisual}>
      <span className={styles.visualIndex}>COMMERCE / 04</span>

      <div className={styles.commerceTrack}>
        <div className={styles.commerceCard} data-commerce-card>
          <span>01</span>
          <strong>Discover</strong>
          <i />
        </div>

        <div className={styles.commerceCard} data-commerce-card>
          <span>02</span>
          <strong>Purchase</strong>
          <i />
        </div>

        <div className={styles.commerceCard} data-commerce-card>
          <span>03</span>
          <strong>Fulfil</strong>
          <i />
        </div>
      </div>

      <div className={styles.orderStatus}>
        <i />
        <span>Order connected</span>
        <strong>LIVE</strong>
      </div>
    </div>
  );
}

function InfrastructureVisual() {
  return (
    <div className={styles.infrastructureVisual}>
      <span className={styles.visualIndex}>INFRASTRUCTURE / 05</span>

      <div className={styles.infrastructureStack}>
        {["Experience", "Applications", "Data", "Cloud"].map(
          (label, index) => (
            <div
              className={styles.infrastructureLayer}
              data-infrastructure-layer
              key={label}
            >
              <span>0{index + 1}</span>
              <strong>{label}</strong>
              <i />
            </div>
          )
        )}
      </div>

      <div className={styles.systemStatus}>
        <span>System status</span>
        <strong>STABLE</strong>
      </div>
    </div>
  );
}

function ExperienceVisual() {
  return (
    <div className={styles.experienceVisual}>
      <span className={styles.visualIndex}>EXPERIENCE / 06</span>

      <div className={styles.wireframe} data-wireframe>
        <div className={styles.wireframeNav}>
          <i />
          <i />
          <i />
        </div>

        <div className={styles.wireframeBody}>
          <div className={styles.wireframeCopy}>
            <span />
            <span />
            <span />
          </div>

          <div className={styles.wireframeMedia} />
        </div>
      </div>

      <div className={styles.polishedInterface} data-interface>
        <div className={styles.interfaceNav}>
          <strong>SOFTECH</strong>
          <span>Product experience</span>
        </div>

        <div className={styles.interfaceBody}>
          <small>Clear by design</small>
          <strong>Built for people.</strong>
          <button type="button">
            Explore
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </div>
  );
}

const visuals = [
  EngineeringVisual,
  AutomationVisual,
  IntelligenceVisual,
  CommerceVisual,
  InfrastructureVisual,
  ExperienceVisual,
];

export function ServicesV2() {
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
      gsap.from(`.${styles.introTitle} span`, {
        opacity: 0,
        y: 80,
        duration: 1.1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${styles.intro}`,
          start: "top 72%",
        },
      });

      const chapters = gsap.utils.toArray<HTMLElement>(
        `.${styles.chapter}`
      );

      chapters.forEach((chapter, index) => {
        const copy = chapter.querySelector(
          `.${styles.chapterCopy}`
        );

        gsap.from(copy, {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chapter,
            start: "top 67%",
          },
        });

        if (index === 0) {
          gsap.from(chapter.querySelectorAll("[data-layer]"), {
            x: (itemIndex) => (itemIndex - 1) * 160,
            y: (itemIndex) => (itemIndex - 1) * 65,
            rotate: (itemIndex) => (itemIndex - 1) * 7,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: chapter,
              start: "top 85%",
              end: "bottom 35%",
              scrub: 1,
            },
          });
        }

        if (index === 1) {
          gsap.from(chapter.querySelectorAll("[data-node]"), {
            scale: 0,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: chapter,
              start: "top 70%",
            },
          });

          gsap.from(chapter.querySelectorAll("[data-connector]"), {
            scaleX: 0,
            transformOrigin: "left center",
            stagger: 0.15,
            scrollTrigger: {
              trigger: chapter,
              start: "top 68%",
            },
          });
        }

        if (index === 2) {
          gsap.from(chapter.querySelectorAll("[data-cell]"), {
            opacity: 0.08,
            stagger: {
              amount: 1.2,
              from: "random",
            },
            scrollTrigger: {
              trigger: chapter,
              start: "top 72%",
            },
          });

          gsap.fromTo(
            chapter.querySelector("[data-scanner]"),
            { yPercent: -250 },
            {
              yPercent: 250,
              ease: "none",
              scrollTrigger: {
                trigger: chapter,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }

        if (index === 3) {
          gsap.from(
            chapter.querySelectorAll("[data-commerce-card]"),
            {
              x: 220,
              rotate: 4,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 72%",
              },
            }
          );
        }

        if (index === 4) {
          gsap.from(
            chapter.querySelectorAll(
              "[data-infrastructure-layer]"
            ),
            {
              y: -130,
              opacity: 0,
              stagger: 0.14,
              ease: "bounce.out",
              scrollTrigger: {
                trigger: chapter,
                start: "top 70%",
              },
            }
          );
        }

        if (index === 5) {
          gsap.to(chapter.querySelector("[data-wireframe]"), {
            opacity: 0,
            scale: 0.88,
            scrollTrigger: {
              trigger: chapter,
              start: "top 58%",
              end: "center 38%",
              scrub: 1,
            },
          });

          gsap.from(chapter.querySelector("[data-interface]"), {
            opacity: 0,
            scale: 0.86,
            y: 80,
            scrollTrigger: {
              trigger: chapter,
              start: "top 58%",
              end: "center 38%",
              scrub: 1,
            },
          });
        }
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
      <header className={styles.intro}>
        <div className="site-container">
          <div className={styles.introMeta}>
            <span>Capabilities</span>
            <span>Six connected disciplines</span>
            <span>01—06</span>
          </div>

          <h2 className={styles.introTitle}>
            <span>What we build</span>
            <span>changes how</span>
            <span>business works.</span>
          </h2>

          <p>
            Each capability solves a different part of the system,
            but they work together as one complete delivery practice.
          </p>
        </div>
      </header>

      <div className={styles.chapters}>
        {capabilities.map((capability, index) => {
          const Visual = visuals[index];

          return (
            <article
              className={`${styles.chapter} ${
                styles[`chapter${index + 1}`]
              }`}
              key={capability.number}
            >
              <div className={`site-container ${styles.chapterInner}`}>
                <div className={styles.chapterCopy}>
                  <div className={styles.chapterMeta}>
                    <span>{capability.number}</span>
                    <span>{capability.eyebrow}</span>
                  </div>

                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>

                  <div className={styles.tags}>
                    {capability.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.visualStage}>
                  <Visual />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
