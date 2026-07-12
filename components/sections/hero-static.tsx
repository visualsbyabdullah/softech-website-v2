import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import styles from "./hero-static.module.css";

export function HeroStatic() {
  return (
    <section className={styles.hero}>
      <div className={styles.sideRail}>
        <span>SOFTECH / 2026</span>
        <div />
        <span>UK · PK · GLOBAL</span>
      </div>

      <div className={`site-container ${styles.inner}`}>
        <div className={styles.meta}>
          <span>Independent digital engineering company</span>
          <span>Strategy · Software · AI · Products</span>
        </div>

        <div className={styles.composition}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              Engineering the digital edge
            </p>

            <h1>
              <span>Digital systems</span>
              <span>built to move</span>
              <em>business forward.</em>
            </h1>

            <div className={styles.copyFooter}>
              <p>
                Softech turns complex operations into scalable products,
                intelligent platforms and connected digital experiences.
              </p>

              <div className={styles.actions}>
                <Button size="lg">
                  Explore capabilities
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </Button>

                <a href="#work" className={styles.textLink}>
                  Selected work
                  <ArrowDownRight size={16} strokeWidth={1.7} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mediaStage}>
            <MediaPlaceholder
              label="Primary product screen"
              ratio="4 / 5"
              index="01"
              className={styles.primaryMedia}
            />

            <MediaPlaceholder
              label="AMS interface"
              ratio="16 / 10"
              index="02"
              className={styles.secondaryMedia}
            />

            <MediaPlaceholder
              label="Sofi interaction"
              ratio="1 / 1"
              index="03"
              className={styles.tertiaryMedia}
            />

            <div className={styles.mediaCaption}>
              <span>PRODUCT-LED DELIVERY</span>
              <strong>Designing systems around real operations.</strong>
            </div>

            <div className={styles.mediaIndex}>
              <span>01</span>
              <small>Hero composition</small>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>Scroll to explore</span>
          <div />
          <span>Digital products · Custom software · AI systems</span>
        </div>
      </div>
    </section>
  );
}