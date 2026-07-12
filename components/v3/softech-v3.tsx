"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./softech-v3.module.css";
import { V3Products } from "./v3-products";

const statistics = [
  {
    value: "06",
    label: "Connected capabilities",
    description:
      "Strategy, design, software and intelligence working as one delivery system.",
  },
  {
    value: "06",
    label: "Featured products",
    description:
      "Digital products shaped around real operational problems and opportunities.",
  },
  {
    value: "03",
    label: "Delivery reach",
    description:
      "Working across Pakistan, the United Kingdom and global digital markets.",
  },
];

export function SoftechV3() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statistic, setStatistic] = useState(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !rootRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(`.${styles.brand}`, {
          opacity: 0,
          y: -20,
          duration: 0.7,
        })
        .from(
          `.${styles.navigation} a, .${styles.menuButton}`,
          {
            opacity: 0,
            y: -18,
            stagger: 0.06,
            duration: 0.65,
          },
          "-=0.45"
        )
        .from(
          `.${styles.heroLine} span`,
          {
            yPercent: 120,
            duration: 1.15,
            stagger: 0.09,
          },
          "-=0.3"
        )
        .from(
          `.${styles.heroMeta}, .${styles.heroBottom}`,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.65"
        );

      gsap.to(`.${styles.heroWordOne}`, {
        xPercent: -11,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.hero}`,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(`.${styles.heroWordTwo}`, {
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles.hero}`,
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.from(`.${styles.manifestoLine}`, {
        opacity: 0.1,
        stagger: 0.16,
        scrollTrigger: {
          trigger: `.${styles.manifesto}`,
          start: "top 74%",
          end: "center 42%",
          scrub: 1,
        },
      });

      gsap.from(`.${styles.founderCard}`, {
        y: 110,
        rotate: -4,
        opacity: 0,
        duration: 1.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.manifesto}`,
          start: "top 64%",
        },
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  function previousStatistic() {
    setStatistic((current) =>
      current === 0 ? statistics.length - 1 : current - 1
    );
  }

  function nextStatistic() {
    setStatistic((current) =>
      current === statistics.length - 1 ? 0 : current + 1
    );
  }

  const activeStatistic = statistics[statistic];

  return (
    <div ref={rootRef} className={styles.site}>
      <header className={styles.header}>
        <a href="/v3" className={styles.brand}>
          <span className={styles.brandMark}>S</span>

          <span>
            <strong>SOFTECH</strong>
            <small>Business Services</small>
          </span>
        </a>

        <nav className={styles.navigation}>
          <a href="#v3-products">Products</a>
          <a href="#v3-services">Services</a>
          <a href="#v3-process">Process</a>
          <a href="#v3-contact">Contact</a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={18} strokeWidth={1.6} />
          <span>Menu</span>
        </button>
      </header>

      <div
        className={`${styles.menuOverlay} ${
          menuOpen ? styles.menuOpen : ""
        }`}
      >
        <button
          type="button"
          className={styles.menuClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <span className={styles.menuLabel}>
          Navigation / Softech
        </span>

        <nav>
          {["Products", "Services", "Process", "Company", "Contact"].map(
            (item, index) => (
              <a
                href={`#v3-${item.toLowerCase()}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                <span>0{index + 1}</span>
                {item}
                <ArrowUpRight size={24} strokeWidth={1.3} />
              </a>
            )
          )}
        </nav>

        <div className={styles.menuFooter}>
          <span>Pakistan · United Kingdom · Global</span>
          <span>Engineering the digital edge</span>
        </div>
      </div>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>Independent digital engineering company</span>
            <span>Pakistan · UK · Global</span>
            <span>Est. for progress</span>
          </div>

          <h1>
            <span className={styles.heroLine}>
              <span className={styles.heroWordOne}>Systems</span>
            </span>

            <span className={styles.heroLine}>
              <span>built to move</span>
            </span>

            <span className={styles.heroLine}>
              <span className={styles.heroWordTwo}>business.</span>
            </span>
          </h1>

          <div className={styles.heroBottom}>
            <p>
              We transform operational complexity into digital
              products, intelligent platforms and connected
              experiences.
            </p>

            <a href="#v3-manifesto">
              Discover Softech
              <ArrowDown size={17} strokeWidth={1.6} />
            </a>
          </div>

          <div className={styles.heroCoordinate}>
            <span>33.6844° N</span>
            <i />
            <span>73.0479° E</span>
          </div>
        </section>

        <section className={styles.statistics}>
          <div className={styles.statControls}>
            <button
              type="button"
              onClick={previousStatistic}
              aria-label="Previous statistic"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={nextStatistic}
              aria-label="Next statistic"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.statCounter}>
            <span>0{statistic + 1}</span>
            <i />
            <span>0{statistics.length}</span>
          </div>

          <div className={styles.statContent} key={statistic}>
            <strong>{activeStatistic.value}</strong>

            <div>
              <h2>{activeStatistic.label}</h2>
              <p>{activeStatistic.description}</p>
            </div>
          </div>
        </section>

        <section
          id="v3-manifesto"
          className={styles.manifesto}
        >
          <div className={styles.manifestoLabel}>
            <span>Why Softech</span>
            <span>Technology with consequence</span>
          </div>

          <h2>
            <span className={styles.manifestoLine}>
              Ambitious businesses deserve
            </span>

            <span className={styles.manifestoLine}>
              systems as capable as the people
            </span>

            <span className={styles.manifestoLine}>
              running them.
            </span>

            <span className={styles.manifestoLine}>
              The gap between ambition and
            </span>

            <span className={styles.manifestoLine}>
              execution is where we work.
            </span>
          </h2>

          <div className={styles.manifestoBottom}>
            <div className={styles.founderCard}>
              <span className={styles.founderImage}>
                SFT
              </span>

              <div>
                <strong>Softech Business Services</strong>
                <span>Strategy · Products · Engineering</span>
              </div>
            </div>

            <p>
              We do not add technology for appearance. We uncover
              operational friction, design the right system and
              remain accountable until it works in the real world.
            </p>
          </div>
        </section>

        <section
          id="v3-products"
          className={styles.nextSection}
        >
          <span>Next / Products</span>
          <h2>We close the operational gap.</h2>
        </section>
      </main>
    </div>
  );
}

