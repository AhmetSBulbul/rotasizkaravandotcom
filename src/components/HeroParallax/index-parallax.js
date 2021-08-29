import React from "react";
import ParallaxBackground from "./__parallaxBackground";
import * as styles from "./index.module.css";
import cn from "classnames";

export default function HeroParallax({
  children,
}) {
  return (
    <div className={styles.baseWrapper}>
      <div className={styles.parallaxContainer}>
        <div className={styles.wrapper}>
          <div
            className={cn([
              styles.ground,
              styles.background,
            ])}
          >
            <ParallaxBackground className="h-full" />
          </div>
          <div
            className={cn([
              styles.ground,
              styles.hero,
            ])}
          >
            <div className={styles.heroContent}>
              ROTASIZ KARAVAN
            </div>
          </div>
          <div
            className={cn([
              styles.ground,
              styles.foreground,
            ])}
          >
            <div
              className={styles.foregroundContent}
            >
              Hello
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
