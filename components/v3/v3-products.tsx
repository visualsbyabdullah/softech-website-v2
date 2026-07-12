"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./v3-products.module.css";

const products = [
  {
    number: "01",
    name: "AMS",
    category: "Workforce operations",
    description:
      "Attendance, leave, payroll and employee operations brought together inside one dependable platform.",
    outcome: "One connected workforce system",
    tags: ["Attendance", "Payroll", "People"],
    tone: "ams",
  },
  {
    number: "02",
    name: "E-Bazaar",
    category: "Digital commerce",
    description:
      "A marketplace ecosystem created to simplify local discovery, buying, selling and digital fulfilment.",
    outcome: "Commerce made more accessible",
    tags: ["Marketplace", "Commerce", "Pakistan"],
    tone: "bazaar",
  },
  {
    number: "03",
    name: "Audit Tracker 24/7",
    category: "Compliance platform",
    description:
      "Continuous visibility across audits, evidence, corrective actions and accountability without fragmented spreadsheets.",
    outcome: "Always-on audit visibility",
    tags: ["Compliance", "Evidence", "Reporting"],
    tone: "audit",
  },
  {
    number: "04",
    name: "Softech POS",
    category: "Retail operations",
    description:
      "A practical retail system connecting transactions, products, inventory and daily business decisions.",
    outcome: "Retail operations in one place",
    tags: ["Sales", "Inventory", "Retail"],
    tone: "pos",
  },
  {
    number: "05",
    name: "Sofi",
    category: "Digital assistant",
    description:
      "A conversational experience designed to make everyday customer and business interactions more helpful.",
    outcome: "Assistance that feels direct",
    tags: ["Assistant", "Support", "Automation"],
    tone: "sofi",
  },
  {
    number: "06",
    name: "SofiGenie",
    category: "Applied intelligence",
    description:
      "An intelligent product layer that turns operational questions and information into useful next actions.",
    outcome: "Information turned into action",
    tags: ["AI", "Insights", "Decisions"],
    tone: "genie",
  },
];

export function V3Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const updateActiveProduct = () => {
      const storyElements = Array.from(
        section.querySelectorAll<HTMLElement>(
          `.${styles.story}`
        )
      );

      const viewportCenter = window.innerHeight * 0.5;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      storyElements.forEach((story, index) => {
        const rect = story.getBoundingClientRect();
        const centre = rect.top + rect.height * 0.5;
        const currentDistance = Math.abs(
          centre - viewportCenter
        );

        if (currentDistance < nearestDistance) {
          nearestDistance = currentDistance;
          nearestIndex = index;
        }
      });

      setActiveProduct(nearestIndex);
    };

    const context = gsap.context(() => {
      gsap.from(`.${styles.headingLine}`, {
        opacity: 0,
        y: 90,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `.${styles.intro}`,
          start: "top 72%",
        },
      });

      gsap.utils
        .toArray<HTMLElement>(`.${styles.story}`)
        .forEach((story, index) => {
          ScrollTrigger.create({
            trigger: story,
            start: "top 62%",
            end: "bottom 38%",
            onEnter: () => setActiveProduct(index),
            onEnterBack: () => setActiveProduct(index),
            onUpdate: (self) => {
              if (self.isActive) {
                setActiveProduct(index);
              }
            },
          });

          gsap.from(story, {
            opacity: 0.18,
            y: 70,
            scrollTrigger: {
              trigger: story,
              start: "top 88%",
              end: "top 54%",
              scrub: 1,
            },
          });
        });

      const frames = gsap.utils.toArray<HTMLElement>(
        `.${styles.visualFrame}`
      );

      if (frames[0]) {
        gsap.to(frames[0], {
          yPercent: -12,
          rotate: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (frames[1]) {
        gsap.to(frames[1], {
          yPercent: 10,
          rotate: 5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, section);

    window.addEventListener("scroll", updateActiveProduct, {
      passive: true,
    });

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
      updateActiveProduct();
    }, 500);

    updateActiveProduct();

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveProduct
      );

      window.clearTimeout(refreshTimer);
      context.revert();
    };
  }, []);

  const product = products[activeProduct];

  return (
    <section
      ref={sectionRef}
      id="v3-products"
      className={styles.section}
    >
      <header className={styles.intro}>
        <div className={styles.introMeta}>
          <span>Product stories</span>
          <span>Softech ecosystem</span>
          <span>01—06</span>
        </div>

        <h2>
          <span className={styles.headingLine}>We close</span>
          <span className={styles.headingLine}>
            the operational
          </span>
          <em className={styles.headingLine}>gap.</em>
        </h2>

        <p>
          Each product begins with a real point of friction and
          becomes a system people can depend on every day.
        </p>
      </header>

      <div className={styles.productExperience}>
        <div className={styles.visualColumn}>
          <div className={styles.stickyVisual}>
            <div className={styles.visualFrame} />

            <div
              className={`${styles.productVisual} ${
                styles[product.tone]
              }`}
              key={product.name}
            >
              <div className={styles.visualTop}>
                <span>SFT / PRODUCT</span>
                <span>{product.number}</span>
              </div>

              <div className={styles.interface}>
                <div className={styles.interfaceHeader}>
                  <i />
                  <i />
                  <i />
                </div>

                <div className={styles.interfaceBody}>
                  <aside>
                    <span />
                    <span />
                    <span />
                    <span />
                  </aside>

                  <div>
                    <div className={styles.interfaceTitle}>
                      <span />
                      <span />
                    </div>

                    <div className={styles.interfaceGrid}>
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>

              <span className={styles.visualLetter}>
                {product.name.charAt(0)}
              </span>

              <div className={styles.visualBottom}>
                <strong>{product.name}</strong>
                <span>{product.category}</span>
              </div>
            </div>

            <div className={styles.visualFrame} />

            <div className={styles.visualProgress}>
              <span>0{activeProduct + 1}</span>
              <i>
                <b
                  style={{
                    width: `${
                      ((activeProduct + 1) / products.length) * 100
                    }%`,
                  }}
                />
              </i>
              <span>0{products.length}</span>
            </div>
          </div>
        </div>

        <div className={styles.stories}>
          {products.map((item) => (
            <article className={styles.story} key={item.name}>
              <div className={styles.storyMeta}>
                <span>{item.number}</span>
                <span>{item.category}</span>
              </div>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.outcome}>
                <span>Product outcome</span>
                <strong>{item.outcome}</strong>
              </div>

              <a href="#v3-contact">
                Explore product
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}





