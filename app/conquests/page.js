import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import ConquestsMap from '../../components/ConquestsMap';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Conquests and Expansion under Umar ibn Al-Khattab',
  description: 'Explore the historic military campaigns and conquests of Persia, Rome, and the entry into Jerusalem under Umar ibn Al-Khattab.',
};

export default function Conquests() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 04"
        arabicTitle="الفتوحات الإسلامية"
        englishTitle="Conquests & Expansion"
        subtitle="The collapse of ancient empires and the spread of Islam, characterized by unprecedented discipline, strategic planning, and humanitarian law."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            During the decade of Umar&apos;s Caliphate, the map of the world was redrawn. 
            The Islamic state defeated the two dominant superpowers of the era — the Byzantine (Eastern Roman) and Sasanian (Persian) Empires — not through devastation, but with a highly structured military and exemplary treatment of conquered populations.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <ConquestsMap />
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className={styles.articleBody}>
            <h2>Historical Campaigns & Conquests</h2>
            <p>
              The campaigns detailed in the interactive map above laid the foundations for a global civilization. Below, we examine the specific military strategies and treaties that defined Umar&apos;s era.
            </p>
            
            <h2>The Conquest of the Levant & the Battle of Yarmouk</h2>
            <p>
              In 636 CE, near the Yarmouk River, a Muslim army led by Khalid ibn al-Walid (رضي الله عنه) confronted a massive Byzantine force. 
              The resulting victory secured the Levant and marked the end of Byzantine rule in Syria, paving the way for the peaceful entry into Jerusalem.
            </p>

            <h2>Humility Entering Jerusalem (637 CE)</h2>
            <p>
              When the Patriarch of Jerusalem, Sophronius, agreed to surrender the city, he insisted on doing so only to the Caliph Umar himself. 
              Umar travelled from Madinah to Jerusalem with a single servant, taking turns riding their sole camel.
            </p>
            <p>
              By the time they reached Jerusalem, it was the servant&apos;s turn to ride. Umar entered the city walking, holding the camel&apos;s reins, his clothes patched and dusty. The Patriarch, seeing this unparalleled humility, remarked that such leadership would inevitably triumph.
            </p>

            <div className={styles.callout}>
              <h3 style={{ margin: 0, color: 'var(--accent-gold)' }}>The Covenant of Umar (Al-Aqd al-Umariyya)</h3>
              <p className={styles.calloutText} style={{ marginTop: 'var(--space-sm)' }}>
                &ldquo;This is the protection which the servant of Allah, Umar, the Commander of the Faithful, has given to the people of Jerusalem. He has given them protection for their lives, their property, their churches, and their crosses... Their churches shall not be occupied, nor shall they be destroyed...&rdquo;
              </p>
              <span className={styles.calloutSource}>— Historical Record of the Treaty</span>
            </div>

            <h2>The Fall of the Sasanian Empire</h2>
            <p>
              The Persian Sasanian Empire, which had ruled for over four centuries, collapsed following key battles orchestrated by Umar&apos;s military command. 
              The Battle of Qadisiyyah (636 CE) led by Sa&apos;d ibn Abi Waqqas (رضي الله عنه) shattered the Persian army, culminating in the capture of Ctesiphon (the Sasanian capital) and eventually the Battle of Nihawand (642 CE), which opened Persia completely.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Military Code of Conduct</h3>
                <p className={styles.infoCardText}>
                  Umar strictly forbade the killing of non-combatants, women, children, and priests. He banned the destruction of crops, cutting down trees, and pillaging homes.
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Treatment of the Defeated</h3>
                <p className={styles.infoCardText}>
                  Local populations were left to practice their religions, keep their lands, and run their local judiciaries in exchange for a protection tax (Jizyah).
                </p>
              </div>
            </div>

            <h2>Conquest of Egypt (640-642 CE)</h2>
            <p>
              Led by Amr ibn al-Aas (رضي الله عنه), Muslim forces liberated Egypt from heavy Byzantine taxation. 
              Under Umar&apos;s directives, the ancient canal connecting the Nile to the Red Sea was cleared and rebuilt, facilitating rapid aid during the Year of Famine in Arabia.
            </p>
            <p>
              The conquests under Umar were unique because they did not result in colonial exploitation; rather, they established governance, protected minorities, and integrated diverse peoples into a thriving, unified civilization.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
