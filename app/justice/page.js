import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import NightPatrolGame from '../../components/NightPatrolGame';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Justice and Governance of Umar ibn Al-Khattab',
  description: 'Explore the stories of justice, accountability, and the legendary servant leadership of Umar ibn Al-Khattab (رضي الله عنه).',
};

export default function Justice() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 05"
        arabicTitle="عدل عمر بن الخطاب"
        englishTitle="Justice & Accountability"
        subtitle="Stories of a ruler who feared the account of his Lord more than any earthly power, establishing the standard for rule of law."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            Umar&apos;s title was Al-Farooq — the one who separates truth from falsehood. 
            For Umar, justice was not a political slogan; it was an absolute duty. He held himself and his family to a higher standard than the average citizen, proving that true leadership is absolute servitude.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <NightPatrolGame />
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className={styles.articleBody}>
            <h2>Historical Records of His Justice</h2>
            <p>
              The interactive scenarios above are drawn directly from early Islamic histories. Below, we examine the formal administrative framework and other instances of Umar&apos;s legendary commitment to absolute justice.
            </p>
            
            <h2>The Famine and the Clay Pot</h2>
            <p>
              During the Year of Ramadah (Famine) in 18 AH, Umar refused to eat butter, meat, or fat, surviving solely on olive oil, which made his skin turn dark. He swore: &ldquo;How can I concern myself with my subjects if I do not experience what they experience?&rdquo;
            </p>
            <p>
              During his night patrols, he came across a woman with crying children. On the fire, she had a pot containing only water and stones, boiling to make the children believe food was coming until they fell asleep. She did not recognize the Caliph and said: &ldquo;Allah will judge between us and Umar! He is the ruler, yet he is unaware of our plight!&rdquo;
            </p>
            <p>
              Deeply shaken, Umar rushed to the state treasury, loaded a sack of flour and cooking fat onto his own back. When his servant offered to carry it, Umar wept and said:
            </p>

            <div className={styles.callout}>
              <p className={styles.calloutText}>
                &ldquo;Will you carry my burden for me on the Day of Resurrection?&rdquo;
              </p>
              <span className={styles.calloutSource}>— Umar ibn Al-Khattab (رضي الله عنه)</span>
            </div>

            <p>
              He carried the sack himself, cooked the food for the children, and stayed until they were fed and laughing.
            </p>

            <h2>Equality Under the Law: The Prince and the Bedouin</h2>
            <p>
              Jabalah ibn al-Aiham, a Christian king of the Ghassanids who had accepted Islam, was circumambulating the Ka&apos;bah when a poor Bedouin accidentally stepped on his robe. In a fit of royal pride, Jabalah slapped the Bedouin.
            </p>
            <p>
              The Bedouin complained to Umar. Umar summoned the king and said: &ldquo;You must either satisfy this man or he will slap you in return.&rdquo;
            </p>
            <p>
              Jabalah was outraged: &ldquo;How can that be? I am a king and he is a commoner!&rdquo;
            </p>
            <p>
              Umar calmly replied: &ldquo;Islam has made you both equal. You have no superiority over him except by piety.&rdquo;
            </p>

            <h2>Accountability of Governors</h2>
            <p>
              Umar kept a strict watch on his governors. Upon appointment, he made them sign an agreement promising:
            </p>
            <ul>
              <li>Not to ride expensive horses.</li>
              <li>Not to wear luxurious garments.</li>
              <li>Not to eat sifted flour.</li>
              <li>Not to keep guards at their doors so the poor could always access them.</li>
            </ul>
            <p>
              He required all governors to declare their wealth before taking office and again at the end of their service, and any unexplained increase was confiscated for the public treasury.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>The Syrian Governor</h3>
                <p className={styles.infoCardText}>
                  Umar once visited Syria and found his governor living in a modest mud house with nothing but a shield, a sword, and a sheepskin. Umar wept and said, &ldquo;The world changed us all, except you.&rdquo;
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>The Famine Quote</h3>
                <p className={styles.infoCardText}>
                  &ldquo;If a lost sheep dies on the banks of the Euphrates, I fear that Allah will hold Umar accountable for it.&rdquo;
                </p>
              </div>
            </div>

            <h2>Respect for Non-Muslims</h2>
            <p>
              Once, Umar saw an elderly Jewish man begging. He asked why he was begging, and the man replied that he had to pay the Jizyah (tax) and could not afford it due to old age.
            </p>
            <p>
              Umar took the man by his hand, led him to the treasury, and decreed: &ldquo;By Allah, we have not been fair to him! We took tax from him in his youth, and then abandoned him in his old age!&rdquo; He ordered that the man be exempted from the tax and given a pension from the state treasury.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
