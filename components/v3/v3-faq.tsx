"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import styles from "./v3-faq.module.css";

const questions = [
  {
    number: "01",
    question: "What kind of businesses does Softech work with?",
    answer:
      "We work with organisations that need clearer operations, connected systems and software built around a real business requirement. This includes new digital products, internal platforms and modernisation of existing systems.",
  },
  {
    number: "02",
    question: "Can you improve an existing system?",
    answer:
      "Yes. We can assess the current product, identify technical and experience gaps, then modernise it in focused stages without forcing the business into an unnecessary complete rebuild.",
  },
  {
    number: "03",
    question: "Do you build custom software or offer products?",
    answer:
      "Both. Softech develops custom digital systems and offers purpose-built products including AMS, E-Bazaar, Audit Tracker, POS, Sofi and SofiGenie.",
  },
  {
    number: "04",
    question: "How does a project begin?",
    answer:
      "It begins with a focused discovery conversation. We clarify the business problem, users, workflows, constraints and intended outcome before recommending scope or delivery phases.",
  },
  {
    number: "05",
    question: "Will Softech support the product after launch?",
    answer:
      "Yes. We can continue through monitoring, maintenance, optimisation and product evolution so the system remains reliable as the organisation grows.",
  },
];

export function V3Faq() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const visibleIndex = activeQuestion < 0 ? 0 : activeQuestion;

  return (
    <section className={styles.faq} id="v3-faq">
      <header className={styles.topbar}>
        <span>FAQ / BEFORE WE BEGIN</span>
        <span>CLEAR ANSWERS. BETTER STARTS.</span>
        <span>01-05</span>
      </header>

      <div className={styles.layout}>
        <aside className={styles.intro}>
          <span className={styles.eyebrow}>COMMON QUESTIONS</span>

          <h2>
            A few things
            <br />
            worth <em>knowing.</em>
          </h2>

          <div className={styles.activeNumber}>
            <span>{questions[visibleIndex].number}</span>
            <small>/ 05</small>
          </div>
        </aside>

        <div className={styles.questions}>
          {questions.map((item, index) => {
            const isActive = activeQuestion === index;

            return (
              <article
                key={item.number}
                className={isActive ? styles.activeItem : ""}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() =>
                    setActiveQuestion(isActive ? -1 : index)
                  }
                >
                  <span>{item.number}</span>
                  <strong>{item.question}</strong>

                  <span className={styles.icon}>
                    <Plus size={22} strokeWidth={1.4} />
                  </span>
                </button>

                <div className={styles.answer}>
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
