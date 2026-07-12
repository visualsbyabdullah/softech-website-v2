"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./products-v2.module.css";

const products = [
  {
    number: "01",
    name: "AMS",
    category: "Workforce operations",
    description:
      "Attendance, leave, payroll and employee operations connected inside one practical platform.",
    tags: ["HR Operations", "Attendance", "Payroll"],
    tone: "ams",
  },
  {
    number: "02",
    name: "E-Bazaar",
    category: "Digital commerce",
    description:
      "A local commerce ecosystem built to make online buying and selling easier across Pakistan.",
    tags: ["Marketplace", "Commerce", "Pakistan"],
    tone: "bazaar",
  },
  {
    number: "03",
    name: "Audit Tracker 24/7",
    category: "Compliance platform",
    description:
      "Continuous visibility across audits, corrective actions, evidence and team accountability.",
    tags: ["Compliance", "Tracking", "Reporting"],
    tone: "audit",
  },
  {
    number: "04",
    name: "Softech POS",
    category: "Retail operations",
    description:
      "A connected point-of-sale system for transactions, inventory and everyday retail decisions.",
    tags: ["Retail", "Inventory", "Sales"],
    tone: "pos",
  },
  {
    number: "05",
    name: "Sofi",
    category: "Digital assistant",
    description:
      "A conversational digital experience designed to make customer interactions more helpful.",
    tags: ["Assistant", "Support", "Automation"],
    tone: "sofi",
  },
  {
    number: "06",
    name: "SofiGenie",
    category: "Applied intelligence",
    description:
      "An intelligent layer that turns questions and operational information into useful next actions.",
    tags: ["AI", "Insights", "Decisions"],
    tone: "genie",
  },
];

function ProductArtwork({
  tone,
  name,
  number,
}: {
  tone: string;
  name: string;
  number: string;
}) {
  return (
    <div className={`${styles.artwork} ${styles[tone]}`}>
      <div className={styles.artworkTop}>
        <span>SFT / PRODUCT</span>
        <span>{number}</span>
      </div>

      <div className={styles.interface} data-product-interface>
        <div className={styles.interfaceBar}>
          <i />
          <i />
          <i />
        </div>

        <div className={styles.interfaceBody}>
          <div className={styles.interfaceNav}>
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.interfaceContent}>
            <div className={styles.interfaceHeading}>
              <span />
              <span />
            </div>

            <div className={styles.interfaceModules}>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.productLetter} aria-hidden="true">
        {name.charAt(0)}
      </div>

      <div className={styles.artworkFooter}>
        <strong>{name}</strong>
        <span>Interface preview</span>
      </div>
    </div>
  );
}

export function ProductsV2() {
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
      gsap.from(`.${styles.heroLine}`, {
        yPercent: 110,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${styles.header}`,
          start: "top 72%",
        },
      });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.product}`)
        .forEach((product, index) => {
          const media = product.querySelector(
            `.${styles.media}`
          );

          const interfaceElement = product.querySelector(
            "[data-product-interface]"
          );

          gsap.from(product, {
            opacity: 0,
            y: index % 2 === 0 ? 100 : 150,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: product,
              start: "top 88%",
            },
          });

          gsap.fromTo(
            media,
            {
              yPercent: index % 2 === 0 ? -4 : 4,
            },
            {
              yPercent: index % 2 === 0 ? 4 : -4,
              ease: "none",
              scrollTrigger: {
                trigger: product,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );

          gsap.from(interfaceElement, {
            scale: 0.82,
            rotate: index % 2 === 0 ? -3 : 3,
            duration: 1.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: product,
              start: "top 78%",
            },
          });
        });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className={styles.section}
    >
      <header className={styles.header}>
        <div className="site-container">
          <div className={styles.headerMeta}>
            <span>Softech product ecosystem</span>
            <span>Built around real operations</span>
            <span>01—06</span>
          </div>

          <h2>
            <span className={styles.heroMask}>
              <span className={styles.heroLine}>Software that</span>
            </span>

            <span className={styles.heroMask}>
              <span className={styles.heroLine}>finds its place</span>
            </span>

            <span className={styles.heroMask}>
              <em className={styles.heroLine}>in the real world.</em>
            </span>
          </h2>

          <div className={styles.headerBottom}>
            <p>
              Digital products designed for people, operations and
              businesses that need software to genuinely work.
            </p>

            <span>Scroll to explore</span>
          </div>
        </div>
      </header>

      <div className={`site-container ${styles.grid}`}>
        {products.map((product) => (
          <article
            className={`${styles.product} ${styles[product.tone]}`}
            key={product.name}
          >
            <div className={styles.media}>
              <ProductArtwork
                tone={product.tone}
                name={product.name}
                number={product.number}
              />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productTitle}>
                <div>
                  <span>{product.number}</span>
                  <span>{product.category}</span>
                </div>

                <h3>{product.name}</h3>
              </div>

              <p>{product.description}</p>

              <div className={styles.tags}>
                {product.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a href="#contact">
                Explore product
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
