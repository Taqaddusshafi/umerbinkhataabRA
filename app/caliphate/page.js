import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'The Caliphate of Umar ibn Al-Khattab — Al-Farooq',
  description: 'Examine the administrative genius, social policies, and innovations established during the Caliphate of Umar ibn Al-Khattab.',
};

export default function Caliphate() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 03"
        arabicTitle="خلافة عمر بن الخطاب"
        englishTitle="The Caliphate & Governance"
        subtitle="A golden age of administrative genius, justice, and the building of a state founded on the principles of welfare and accountability."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            Following the passing of Abu Bakr Al-Siddiq (رضي الله عنه) in 634 CE, Umar assumed the leadership of the Muslim world. 
            Over the next ten years, he did not just rule an empire; he designed the modern administrative infrastructure of a global Islamic state.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className={styles.articleBody}>
            <h2>Establishment of the Diwan & Welfare State</h2>
            <p>
              Umar was the first ruler in history to establish a comprehensive welfare state. He created the <b>Diwan</b>, an office responsible for registering citizens and distributing stipends. Every man, woman, and child — including newborns and non-Muslim citizens (Dhimmi) — received financial support from the state treasury (Bayt al-Mal).
            </p>
            <p>
              When Umar saw a mother trying to wean her infant child early because state stipends only began after weaning, he immediately changed the law: stipends would be paid starting from birth.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Bayt al-Mal</h3>
                <p className={styles.infoCardText}>
                  The public treasury was structured as a formal financial institution, with provincial branches managed by independent treasurers.
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Night Patrols (Ases)</h3>
                <p className={styles.infoCardText}>
                  Umar initiated the practice of walking the streets of Madinah in disguise at night to check on the welfare of his citizens.
                </p>
              </div>
            </div>

            <h2>Administrative Innovations</h2>
            <p>
              Umar structured the expanding empire into organized provinces, each led by a governor (Wali) and supported by a treasury officer, judge (Qadi), and tax collector.
            </p>
            <p>
              His administrative achievements include:
            </p>
            <ul>
              <li><strong>The Hijri Calendar:</strong> Established the Islamic calendar dating from the migration (Hijrah) of the Prophet ﷺ.</li>
              <li><strong>The Judicial System:</strong> Separated the judiciary from the executive. Judges were appointed independently and could rule against governors or the Caliph himself.</li>
              <li><strong>Census & Land Surveys:</strong> Conducted a complete census of regions and structured land taxation based on productivity.</li>
              <li><strong>Police & Prisons:</strong> Founded the first formal police force (Shurta) and established state prisons.</li>
              <li><strong>Postal Services:</strong> Created an efficient communications network between Madinah and the provinces.</li>
            </ul>

            <h2>The Principles of Shura (Consultation)</h2>
            <p>
              Umar took counsel very seriously. He held regular consultations with the senior companions of the Prophet ﷺ and open assemblies where any citizen — including women — could challenge his decisions.
            </p>

            <div className={styles.callout}>
              <p className={styles.calloutText}>
                &ldquo;There is no Caliphate without consultation (Shura).&rdquo;
              </p>
              <span className={styles.calloutSource}>— Umar ibn Al-Khattab (رضي الله عنه)</span>
            </div>

            <p>
              His rule set a standard of administrative transparency, legal equality, and social welfare that remains a blueprint for just governance in human history.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
