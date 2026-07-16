"use client";

import { ArrowDown } from "lucide-react";
import styles from "./v3-cinematic-hero.module.css";

export function V3CinematicHero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/v3/hero/softech-building.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.videoShade} />

      <div className={styles.clouds} aria-hidden="true">
        <img src="/v3/hero/softech-clouds.png" alt="" />
      </div>

      <div className={styles.meta}>
        <span>Independent digital engineering company</span>
        <span>Islamabad / Pakistan / Global</span>
        <span>State Life Tower / 15th Floor</span>
      </div>

      <div className={styles.headline}>
        <span className={styles.systems}>Systems</span>

        <span className={styles.move}>
          Built to
          <br />
          move
        </span>

        <span className={styles.business}>Business.</span>
      </div>

      <div className={styles.bottom}>
        <p>
          We transform operational complexity into digital products,
          intelligent platforms and connected experiences.
        </p>

        <a href="#v3-statistics">
          Enter Softech
          <ArrowDown size={17} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}