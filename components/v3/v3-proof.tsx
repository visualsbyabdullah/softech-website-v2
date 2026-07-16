"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./v3-proof.module.css";

const principles = [
  {
    number: "01",
    title: "Business before software",
    statement: "We solve the operation, not just the interface.",
    detail:
      "Every engagement begins with the business problem, the people involved and the outcome the system must create.",
    tag: "OPERATIONAL THINKING",
  },
  {
    number: "02",
    title: "One connected team",
    statement: "Strategy, design and engineering move together.",
    detail:
      "Fewer handovers create clearer decisions, faster delivery and a product that stays true to its original purpose.",
    tag: "CONNECTED DELIVERY",
  },
  {
    number: "03",
    title: "Built around reality",
    statement: "Software should fit the way work actually happens.",
    detail:
      "We account for real users, existing workflows, operational pressure and the systems already inside the business.",
    tag: "PRACTICAL INNOVATION",
  },
  {
    number: "04",
    title: "Ready to evolve",
    statement: "Launch is a milestone, not the finish line.",
    detail:
      "Products are engineered for stability today and continuous improvement as the organisation grows.",
    tag: "LONG-TERM VALUE",
  },
];

const sectors = [
  "WORKFORCE",
  "RETAIL",
  "COMMERCE",
  "FINANCE",
  "OPERATIONS",
  "CUSTOMER EXPERIENCE",
];

export function V3Proof() {
  const [active, setActive] = useState(0);
  const principle = principles[active];

  return (
    <section className={styles.proof} id="v3-proof">
      <header className={styles.topbar}>
        <span>WHY SOFTECH / DELIVERY PRINCIPLES</span>
        <span>SYSTEMS BUILT FOR REAL USE</span>
        <span>01-04</span>
      </header>

      <div className={styles.heading}>
        <span className={styles.eyebrow}>THE DIFFERENCE</span>

        <h2>
          The work has
          <br />
          to <em>work.</em>
        </h2>

        <p>
          Good technology is not measured by how impressive it looks in a
          presentation. It is measured by what improves after people start
          using it.
        </p>
      </div>

      <div className={styles.interactive}>
        <div className={styles.principleList}>
          {principles.map((item, index) => (
            <button
              key={item.number}
              className={index === active ? styles.activeRow : ""}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </button>
          ))}
        </div>

        <div className={styles.statement} key={principle.number}>
          <span className={styles.statementTag}>{principle.tag}</span>

          <div className={styles.orbit} aria-hidden="true">
            <span />
            <span />
            <i>{principle.number}</i>
          </div>

          <h3>{principle.statement}</h3>
          <p>{principle.detail}</p>

          <div className={styles.counter}>
            <span>{principle.number}</span>
            <span>/ 04</span>
          </div>
        </div>
      </div>

      <div className={styles.sectors}>
        <div className={styles.sectorLabel}>SYSTEMS ACROSS</div>

        <div className={styles.sectorTrack}>
          <div>
            {[...sectors, ...sectors].map((sector, index) => (
              <span key={`${sector}-${index}`}>
                {sector}
                <i />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
