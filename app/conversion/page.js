import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Conversion of Umar ibn Al-Khattab to Islam',
  description: 'Discover the legendary and dramatic story of how Umar ibn Al-Khattab accepted Islam, transforming the early Muslim community.',
};

export default function Conversion() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 02"
        arabicTitle="إسلام عمر بن الخطاب"
        englishTitle="The Conversion to Islam"
        subtitle="The turning point of early Islamic history — how a fierce opponent became a pillar of the Islamic faith."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph}>
            In the sixth year of the Prophet ﷺ&apos;s mission, the Muslims were weak, persecuted, and forced to pray in secret. 
            Umar, infuriated by the division in Makkah, took up his sword to end the life of the Prophet ﷺ. 
            He returned that very day with his sword sheathed, weeping, and declaring the testimony of faith.
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className={styles.articleBody}>
            <h2>The Prophet&apos;s Du&apos;a</h2>
            <p>
              Before Umar&apos;s conversion, the Prophet Muhammad ﷺ made a sincere and historic supplication (Du&apos;a) to Allah:
            </p>
            
            <div className={styles.callout}>
              <p className={styles.calloutText}>
                &ldquo;O Allah! Strengthen Islam with the one who is more beloved to You of these two men: Abu Jahl or Umar ibn al-Khattab.&rdquo;
              </p>
              <span className={styles.calloutSource}>— Sunan al-Tirmidhi</span>
            </div>

            <h2>The Night before the Conversion</h2>
            <p>
              Historical accounts state that the evening before his conversion, Umar went to the Ka&apos;bah. He saw the Prophet ﷺ praying and reciting Surah al-Haqqah. Umar stood behind him, listening. As he listened to the rhythm of the verses, he thought to himself: &ldquo;This must be the poetry of a poet, as Quraysh say.&rdquo;
            </p>
            <p>
              Immediately, the Prophet ﷺ recited the verse: <i>&ldquo;It is not the word of a poet; little is it that you believe.&rdquo;</i> (69:41)
            </p>
            <p>
              Astonished, Umar thought: &ldquo;Then he must be a soothsayer.&rdquo;
            </p>
            <p>
              The Prophet ﷺ then recited: <i>&ldquo;Nor is it the word of a soothsayer; little is it that you remember. It is a revelation from the Lord of the worlds.&rdquo;</i> (69:42-43)
            </p>
            <p>
              Umar later said: &ldquo;At that moment, Islam entered my heart.&rdquo; Yet, his tribal pride and anger kept him from accepting it openly.
            </p>

            <h2>The Sword and the Sister</h2>
            <p>
              The next day, Umar strapped on his sword and marched out to assassinate the Prophet ﷺ. On his way, he met Nu&apos;aym ibn Abdillah, a secret Muslim, who noticed Umar&apos;s rage and asked where he was going. When Umar revealed his plan, Nu&apos;aym, trying to divert him, said: &ldquo;Why don&apos;t you look after your own household first? Your sister Fatimah and her husband Sa&apos;eed have accepted your new faith!&rdquo;
            </p>
            <p>
              Shocked and furious, Umar immediately redirected his steps to his sister&apos;s house. As he approached, he heard Khabbab ibn al-Aratt reciting Surah Taha to Fatimah and Sa&apos;eed. 
            </p>
            <p>
              Umar burst in, demanding to know what they were reading. When they confirmed their Islam, Umar assaulted Sa&apos;eed. When Fatimah tried to protect her husband, Umar struck her, causing her to bleed. Seeing her blood, Umar was struck with sudden remorse. He saw the scrolls on the floor and asked to read them.
            </p>
            <p>
              Fatimah refused: &ldquo;You are impure in your idolatry, and only the pure may touch it.&rdquo; Umar washed himself, picked up the scroll, and read the first verses of Surah Taha:
            </p>

            <div className={styles.callout}>
              <p className={styles.calloutText} style={{ direction: 'rtl', fontFamily: 'var(--font-arabic)', fontSize: '1.4rem' }}>
                مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ إِلاَّ تَذْكِرَةً لِّمَن يَخْشَىٰ تَنزِيلاً مِّمَّنْ خَلَقَ الأَرْضَ وَالسَّمَاوَاتِ الْعُلَى
              </p>
              <p className={styles.calloutText}>
                &ldquo;We have not sent down the Quran to thee to cause thee distress, but only as an admonition to those who fear [Allah], a revelation from Him Who created the earth and the high heavens.&rdquo; (Surah Taha, 20:2-4)
              </p>
            </div>

            <p>
              Upon reading this, Umar wept and said: &ldquo;How beautiful and noble are these words! Lead me to Muhammad.&rdquo;
            </p>

            <h2>Declaring Islam Publicly</h2>
            <p>
              Umar went to the house of Al-Arqam, where the Prophet ﷺ was gathering with the early companions. When Umar knocked, the companions were terrified seeing his sword, but Hamzah ibn Abdul-Muttalib (رضي الله عنه) said: &ldquo;Let him in. If he comes with good, we welcome him. If he comes with evil, we will kill him with his own sword.&rdquo;
            </p>
            <p>
              The Prophet ﷺ grabbed Umar by his collar and said: &ldquo;Will you not yield, O Umar, until Allah sends down disgrace upon you?&rdquo;
            </p>
            <p>
              Umar replied: &ldquo;I testify that there is no god but Allah, and that you are the Messenger of Allah.&rdquo; The Muslims gathered in the house shouted &ldquo;Allahu Akbar&rdquo; so loudly that the sound resonated throughout Makkah.
            </p>
            <p>
              Immediately after converting, Umar insisted that Muslims pray openly at the Ka&apos;bah. He marched them in two columns — one led by Hamzah and the other by Umar — to pray in public. From that day, the Prophet ﷺ called him <b>Al-Farooq</b>: the one who distinguishes truth from falsehood.
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
