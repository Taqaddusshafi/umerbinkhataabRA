import styles from './HeroSection.module.css';

export default function HeroSection({
  arabicTitle,
  englishTitle,
  subtitle,
  eyebrow,
  compact = false,
  showScroll = true,
}) {
  return (
    <section className={`${styles.hero} ${compact ? styles.heroCompact : ''}`} id="hero">
      <div className={styles.patternOverlay} />
      <div className={styles.content}>
        {eyebrow && (
          <div className={styles.eyebrow}>{eyebrow}</div>
        )}
        <h1 className={styles.arabicTitle}>{arabicTitle}</h1>
        {englishTitle && (
          <p className={styles.englishTitle}>{englishTitle}</p>
        )}
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
        {showScroll && !compact && (
          <>
            <div className={styles.decorativeLine} />
            <p className={styles.scrollHint}>Scroll to explore</p>
          </>
        )}
      </div>
    </section>
  );
}
