import { V3PageHeader } from "@/components/v3/v3-page-header";

import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <V3PageHeader />

      <section className={styles.hero}>
        <div className={styles.meta}>
          <span>About Softech</span>
          <span>Business meets technology</span>
          <span>Since 2010</span>
        </div>

        <h1>
          We build systems that move
          <em> ambitious businesses forward.</em>
        </h1>

        <div className={styles.intro}>
          <p>
            Softech Business Services brings strategy, experience
            design and engineering together to solve real operational
            challenges.
          </p>

          <p>
            Our work begins with understanding how a business actually
            operates. We then design technology that improves clarity,
            efficiency and long-term performance.
          </p>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.sectionMeta}>
          <span>Our approach</span>
          <span>Clarity before complexity</span>
        </div>

        <div className={styles.principleGrid}>
          <article>
            <span>01</span>
            <h2>Understand deeply</h2>
            <p>
              We study the people, workflows and decisions behind the
              problem before proposing a solution.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>Design deliberately</h2>
            <p>
              Every interface, interaction and system decision must
              serve a clear operational purpose.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>Build responsibly</h2>
            <p>
              We create dependable products designed for real use,
              measurable value and continued evolution.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}