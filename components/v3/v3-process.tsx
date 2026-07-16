"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./v3-process.module.css";

const stages = [
  {
    number: "01",
    label: "DISCOVER",
    title: "We find the real friction.",
    description:
      "Before proposing technology, we study the operation—people, workflows, dependencies and the moments where progress slows down.",
    outcome: "Operational clarity",
    items: ["Stakeholder workshops", "Process mapping", "Opportunity definition"],
  },
  {
    number: "02",
    label: "DESIGN",
    title: "We shape the right system.",
    description:
      "Strategy becomes a clear product architecture, thoughtful experience and a practical roadmap built around measurable business outcomes.",
    outcome: "A system worth building",
    items: ["Product strategy", "Experience design", "Technical architecture"],
  },
  {
    number: "03",
    label: "ENGINEER",
    title: "We build for real-world use.",
    description:
      "Design and engineering move together through focused releases, quality checks and continuous validation with the people who will use the product.",
    outcome: "Reliable execution",
    items: ["Agile delivery", "Quality engineering", "Launch and evolution"],
  },
];

export function V3Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = Array.from(
      section.querySelectorAll<HTMLElement>(`[data-process-stage]`)
    );

    const updateActiveStage = () => {
      const focusLine = window.innerHeight * 0.52;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        const panelCentre = rect.top + rect.height * 0.5;
        const distance = Math.abs(panelCentre - focusLine);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveStage(nearestIndex);
    };

    updateActiveStage();
    window.addEventListener("scroll", updateActiveStage, { passive: true });
    window.addEventListener("resize", updateActiveStage);

    return () => {
      window.removeEventListener("scroll", updateActiveStage);
      window.removeEventListener("resize", updateActiveStage);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.process} id="v3-process">
      <header className={styles.topbar}>
        <span>PROCESS / HOW WE WORK</span>
        <span>CLARITY BEFORE COMPLEXITY</span>
        <span>01—03</span>
      </header>

      <div className={styles.intro}>
        <div className={styles.eyebrow}>THE SOFTECH METHOD</div>

        <h2>
          From operational
          <br />
          truth to <em>working systems.</em>
        </h2>

        <p>
          A connected process that keeps business thinking, design and
          engineering moving in the same direction.
        </p>
      </div>

      <div className={styles.processBody}>
        <aside className={styles.progressColumn}>
          <div className={styles.progressSticky}>
            <span className={styles.progressLabel}>CURRENT PHASE</span>

            <strong>{stages[activeStage].number}</strong>

            <div className={styles.rail}>
              <span
                className={styles.railFill}
                style={{
                  transform: `scaleY(${(activeStage + 1) / stages.length})`,
                }}
              />
            </div>

            <div className={styles.stageNavigation}>
              {stages.map((stage, index) => (
                <button
                  key={stage.number}
                  className={index === activeStage ? styles.activeNav : ""}
                  onClick={() => {
                    const target = sectionRef.current?.querySelector<HTMLElement>(
                      `[data-process-stage="${index}"]`
                    );
                    target?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  <span>{stage.number}</span>
                  {stage.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className={styles.stageStack}>
          {stages.map((stage, index) => (
            <article
              key={stage.number}
              data-process-stage={index}
              className={`${styles.stage} ${
                index === activeStage ? styles.activeStage : ""
              }`}
            >
              <div className={styles.stageMeta}>
                <span>{stage.number}</span>
                <span>{stage.label}</span>
              </div>

              <div className={styles.stageContent}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>

                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>
                      <span />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.outcome}>
                <span>PHASE OUTCOME</span>
                <strong>{stage.outcome}</strong>
                <ArrowUpRight size={22} strokeWidth={1.5} />
              </div>

              <span className={styles.watermark}>{stage.number}</span>
            </article>
          ))}
        </div>
      </div>

      <footer className={styles.processFooter}>
        <span>ONE TEAM. ONE SYSTEM. ONE ACCOUNTABLE DELIVERY PARTNER.</span>
        <a href="#contact">
          Start a conversation
          <ArrowUpRight size={17} />
        </a>
      </footer>
    </section>
  );
}

