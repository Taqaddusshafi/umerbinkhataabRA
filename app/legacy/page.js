import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import Timeline from '../../components/Timeline';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Legacy and Martyrdom of Umar ibn Al-Khattab',
  description: 'Understand the martyrdom (Shahadah) of Umar ibn Al-Khattab and explore his lasting legacy in world history.',
};

const timelineItems = [
  {
    year: '584 CE',
    title: 'Birth in Makkah',
    description: 'Born into the Banu Adi clan of the Quraysh tribe in Makkah.',
  },
  {
    year: '616 CE',
    title: 'Conversion to Islam',
    description: 'Accepted Islam in a dramatic turning point, publicly declaring the faith at the Ka\'bah.',
  },
  {
    year: '622 CE',
    title: 'Migration (Hijrah)',
    description: 'Migrated openly to Madinah, defying the Quraysh who dared anyone to stop him.',
  },
  {
    year: '624 - 632 CE',
    title: 'Close Companion and Advisor',
    description: 'Fought alongside the Prophet ﷺ in all major battles and served as one of his closest advisors.',
  },
  {
    year: '632 - 634 CE',
    title: 'Advisor to Abu Bakr',
    description: 'Served as the chief advisor and judge during the Caliphate of Abu Bakr Al-Siddiq (رضي الله عنه).',
  },
  {
    year: '634 CE',
    title: 'Assumed the Caliphate',
    description: 'Appointed as the second Caliph of Islam following the passing of Abu Bakr.',
  },
  {
    year: '636 - 642 CE',
    title: 'Era of Expansion',
    description: 'Orchestrated the victories at Yarmouk, Qadisiyyah, and peaceful entry into Jerusalem.',
  },
  {
    year: '644 CE',
    title: 'Martyrdom and Burial',
    description: 'Assassinated during morning prayer by Abu Lu\'lu\'ah, buried next to the Prophet ﷺ and Abu Bakr.',
  }
];

export default function Legacy() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 07"
        arabicTitle="استشهاده وأثره"
        englishTitle="Legacy & Martyrdom"
        subtitle="The passing of a titan of history and his enduring influence on global administration, law, and justice."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            The life of Umar ibn Al-Khattab ended as he had prayed for: with martyrdom (Shahadah) in the city of the Prophet ﷺ, while leading the Muslims in worship. 
            His legacy, however, has endured for over fourteen centuries.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className={styles.articleBody}>
            <h2>The Martyrdom (Shahadah)</h2>
            <p>
              In late 644 CE, while leading the Fajr (morning) prayer in the Prophet&apos;s Mosque in Madinah, Umar was stabbed six times with a double-edged dagger by Abu Lu&apos;lu&apos;ah (Piruz Nahavandi), a Persian slave who was angry about a tax dispute.
            </p>
            <p>
              As Umar lay bleeding, his first question was: &ldquo;Who stabbed me?&rdquo;
            </p>
            <p>
              When told it was Abu Lu&apos;lu&apos;ah, he replied: &ldquo;Praise be to Allah Who did not cause my death to be at the hand of a man who has prostrated to Allah even once.&rdquo;
            </p>
            <p>
              Umar passed away three days later, on the 26th of Dhu al-Hijjah, 23 AH, at the age of 63. He was buried, as he had requested and received permission from Aisha (رضي الله عنها), in the chamber of the Prophet ﷺ, right next to his beloved Prophet Muhammad ﷺ and his companion Abu Bakr Al-Siddiq (رضي الله عنه).
            </p>

            <h2>Historical Timeline</h2>
            <div style={{ margin: 'var(--space-3xl) 0' }}>
              <Timeline items={timelineItems} />
            </div>

            <h2>Scholarly and Historical Opinions</h2>
            <p>
              Umar ibn Al-Khattab is widely regarded by Muslim and non-Muslim historians alike as one of the most influential political and religious leaders in world history.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Michael H. Hart</h3>
                <p className={styles.infoCardText}>
                  In his famous book <i>The 100: A Ranking of the Most Influential Persons in History</i>, Hart ranked Umar at number 52, noting his critical role in the rapid expansion of Islam and the establishment of its empire.
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Encyclopedia Britannica</h3>
                <p className={styles.infoCardText}>
                  Describes Umar as &ldquo;the second Islamic Caliph, under whom the Arab empire expanded at an unprecedented rate, ruling the whole Middle East.&rdquo;
                </p>
              </div>
            </div>

            <p>
              His legacy is defined by the absolute rule of law, administrative structure, and humility. He left behind an empire that spanned millions of square miles, yet he died possessing nothing but the patched clothes on his back, leaving a standard of leadership that has never been surpassed.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
