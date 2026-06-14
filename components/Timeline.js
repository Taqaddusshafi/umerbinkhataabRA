import SectionReveal from './SectionReveal';
import styles from './Timeline.module.css';

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <SectionReveal key={index} delay={index * 100}>
          <div className={styles.item}>
            <div className={styles.dot} />
            <div className={styles.year}>{item.year}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}
