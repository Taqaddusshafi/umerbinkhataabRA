import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Early Life of Umar ibn Al-Khattab — Al-Farooq',
  description: 'Learn about the early life, upbringing, and characteristics of Umar ibn Al-Khattab (رضي الله عنه) in pre-Islamic Makkah.',
};

export default function EarlyLife() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 01"
        arabicTitle="النشأة والشباب"
        englishTitle="Early Life & Upbringing"
        subtitle="The formative years of a strong, literate, and respected nobleman of Makkah before his path crossed with Islam."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            Born in Makkah around 584 CE, Umar ibn Al-Khattab belonged to the Banu Adi clan of the Quraysh tribe. 
            In a society where literacy was rare and physical strength was supreme, Umar grew to master both, becoming one of the most prominent young noblemen in Makkah.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className={styles.articleBody}>
            <h2>Birth and Family Lineage</h2>
            <p>
              Umar was born roughly thirteen years after the Year of the Elephant (the birth year of the Prophet Muhammad ﷺ). 
              His father, Al-Khattab ibn Nufayl, was known for his harshness, which shaped Umar&apos;s early resilience and strict discipline. 
              His mother, Hantama bint Hashim, was also from a high-status family. The Banu Adi clan was traditionally responsible for arbitration and diplomacy among the Quraysh clans, a role that required intellectual acuity, eloquence, and sound judgment.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Lineage</h3>
                <p className={styles.infoCardText}>
                  Umar ibn Al-Khattab ibn Nufayl ibn Abd al-Uzza ibn Riyah ibn Abdullah ibn Qurt ibn Razah ibn Adi ibn Ka&apos;b.
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Clan Standing</h3>
                <p className={styles.infoCardText}>
                  Banu Adi held the role of official negotiators and arbiters, a position Umar inherited and performed with great distinction.
                </p>
              </div>
            </div>

            <h2>Education and Intellectual Pursuits</h2>
            <p>
              In pre-Islamic Arabia (Jahiliyyah), literacy was an extremely rare skill. It is estimated that only about seventeen people in the entire tribe of Quraysh could read and write. Umar was one of these few. He learned to read and write in his childhood, allowing him to appreciate Arabic poetry, genealogies, and historical legends.
            </p>
            <p>
              He was also a skilled equestrian, a wrestler, and an expert in physical combat. His physical attributes were legendary; he was exceptionally tall, broad-shouldered, and strong. It was said that when Umar rode a horse, he appeared as if he was standing up, and when he walked, he walked with a commanding speed and power.
            </p>

            <h2>Pre-Islamic Character and Career</h2>
            <p>
              Umar worked as a merchant, travelling to Syria and Iraq for trade. Through these journeys, he met diverse cultures, developed administrative intelligence, and deepened his diplomatic expertise.
            </p>
            <p>
              Despite his qualities, Umar was initially a fierce opponent of Islam. He saw the new message as a threat to the unity of the Quraysh and the traditions of their ancestors. He was fiercely devoted to the pagan idols of Makkah and actively persecuted those who accepted the new faith.
            </p>

            <div className={styles.callout}>
              <p className={styles.calloutText}>
                &ldquo;Umar was a man of extreme emotions; when he opposed, he opposed with full vigor, and when he loved, he loved with all his heart.&rdquo;
              </p>
              <span className={styles.calloutSource}>— Historical Analysis</span>
            </div>

            <p>
              Yet, beneath his tough exterior lay a deeply reflective mind that valued truth and justice. This internal tension would set the stage for one of the most dramatic conversion stories in the history of religion.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
