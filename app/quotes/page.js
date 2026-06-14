import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import QuoteCard from '../../components/QuoteCard';
import WisdomEngine from '../../components/WisdomEngine';
import QuoteGenerator from '../../components/QuoteGenerator';
import styles from '../subpage.module.css';

export const metadata = {
  title: 'Quotes and Sayings of Umar ibn Al-Khattab',
  description: 'A compiled gallery of the most famous and inspiring quotes on justice, leadership, and wisdom by Umar ibn Al-Khattab.',
};

const quotes = [
  {
    arabic: "تَفَقَّهُوا قَبْلَ أَنْ تُسَوَّدُوا",
    english: "Acquire knowledge before you are made leaders.",
  },
  {
    arabic: "أَحَبُّ النَّاسِ إِلَيَّ مَنْ أَهْدَى إِلَيَّ عُيُوبِي",
    english: "The most beloved of people to me is the one who points out my flaws.",
  },
  {
    arabic: "كُنَّا أَذَلَّ قَوْمٍ فَأَعَزَّنَا اللَّهُ بِالإِسْلامِ",
    english: "We were the most humiliated people, and Allah gave us honor through Islam. If we seek honor through anything else, Allah will humiliate us again.",
  },
  {
    arabic: "مَنْ كَتَمَ سِرَّهُ كَانَ الْخِيَارُ فِي يَدِهِ",
    english: "He who keeps his secret safe has full control over his affairs.",
  },
  {
    arabic: "لَسْتُ بِخِبٍّ وَلا الْخِبُّ يَخْدَعُنِي",
    english: "I am not a deceiver, nor can a deceiver deceive me.",
  },
  {
    arabic: "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا مِنْ دِينِكُمْ",
    english: "Learn Arabic, for it is a part of your religion.",
  },
  {
    arabic: "لا تَنْظُرُوا إِلَى صَلاةِ أَحَدٍ وَلا إِلَى صِيَامِهِ، وَلَكِنِ انْظُرُوا إِلَى صِدْقِ حَدِيثِهِ إِذَا حَدَّثَ، وَأَمَانَتِهِ إِذَا ائْتُمِنَ",
    english: "Do not look at someone's prayer or fasting, but look at the truthfulness of their speech when they speak, and their trustworthiness when they are trusted.",
  },
  {
    arabic: "مَنْ أَكْثَرَ مِنْ شَيْءٍ عُرِفَ بِهِ",
    english: "Whoever does something frequently becomes known for it.",
  },
  {
    arabic: "الزُّهْدُ فِي الدُّنْيَا رَاحَةُ الْقَلْبِ وَالْبَدَنِ",
    english: "Asceticism (Zuhd) in this world brings comfort to the heart and the body.",
  }
];

export default function Quotes() {
  return (
    <div className={styles.subpage}>
      <HeroSection
        eyebrow="Part 06"
        arabicTitle="مأثورات عمر بن الخطاب"
        englishTitle="Quotes & Wisdom"
        subtitle="A collection of timeless and profound words on faith, intellect, character, and governance."
        compact={true}
      />

      <div className={styles.contentWrapper}>
        <SectionReveal>
          <div className={styles.leadParagraph} style={{ textAlign: 'center', borderLeft: 'none', paddingLeft: 0 }}>
            &ldquo;Indeed, the words of Umar (رضي الله عنه) were not merely spoken; they were engraved in history as guides for generations.&rdquo;
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <WisdomEngine />
        </SectionReveal>

        <SectionReveal delay={150}>
          <QuoteGenerator />
        </SectionReveal>

        <SectionReveal delay={200}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
            Sayings Gallery
          </h2>
        </SectionReveal>

        <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
          {quotes.map((quote, index) => (
            <SectionReveal key={index} delay={50}>
              <QuoteCard
                arabic={quote.arabic}
                english={quote.english}
                source="Umar ibn Al-Khattab (رضي الله عنه)"
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
