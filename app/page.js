import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import QuoteCard from '../components/QuoteCard';
import SectionReveal from '../components/SectionReveal';
import styles from './page.module.css';

const sections = [
  {
    href: '/early-life',
    number: '01',
    title: 'Early Life',
    desc: 'Born in Makkah around 584 CE into the Banu Adi clan of Quraysh. Known for his strength, intellect, and commanding presence even before Islam.',
  },
  {
    href: '/conversion',
    number: '02',
    title: 'The Conversion',
    desc: 'The night he set out to kill the Prophet ﷺ and returned as a believer — one of the most dramatic moments in Islamic history.',
  },
  {
    href: '/caliphate',
    number: '03',
    title: 'The Caliphate',
    desc: 'Ten years of revolutionary governance that established the treasury, the Hijri calendar, night patrols, and the Shura council.',
  },
  {
    href: '/conquests',
    number: '04',
    title: 'Conquests & Expansion',
    desc: 'From Yarmouk to Jerusalem, from Persia to Egypt — the greatest expansion of any civilisation, conducted with justice and mercy.',
  },
  {
    href: '/justice',
    number: '05',
    title: 'Justice & Governance',
    desc: '"If a dog dies hungry on the banks of the Euphrates, Umar would be responsible." His legendary commitment to accountability.',
  },
  {
    href: '/quotes',
    number: '06',
    title: 'Quotes & Wisdom',
    desc: 'Timeless words of wisdom on leadership, faith, humility, and justice that continue to inspire millions today.',
  },
  {
    href: '/legacy',
    number: '07',
    title: 'Legacy & Martyrdom',
    desc: 'His final days, lasting impact on Islamic governance, law, and civilisation — and what scholars and historians say about him.',
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ═══ HERO ═══ */}
      <HeroSection
        eyebrow="The Second Caliph of Islam"
        arabicTitle="عُمَرُ بْنُ الْخَطَّابِ"
        englishTitle="Umar ibn Al-Khattab · Al-Farooq"
        subtitle="The one who distinguished between truth and falsehood. Commander of the Faithful. The man whose footsteps made the devils flee. رضي الله عنه"
      />

      {/* ═══ ARCHAEOLOGICAL DISCOVERY BANNER ═══ */}
      <section className={styles.discoveryBanner} id="discovery">
        <div className={styles.discoveryInner}>
          <SectionReveal direction="left">
            <div className={styles.discoveryContent}>
              <div className={styles.discoveryBadge}>
                <span className={styles.discoveryBadgeDot} />
                Recent Discovery
              </div>
              <h2 className={styles.discoveryTitle}>
                Ancient Stone Inscription{' '}
                <span className={styles.discoveryTitleGold}>Mentioning Umar ibn Al-Khattab</span>{' '}
                Discovered
              </h2>
              <p className={styles.discoveryText}>
                A remarkable archaeological discovery has brought new historical evidence to light — an ancient stone
                inscription bearing the name of Umar ibn Al-Khattab (رضي الله عنه) has been found, providing
                a tangible connection to one of Islam&apos;s greatest figures. This inscription serves as a
                powerful physical testament to his enduring legacy, bridging 1,400 years of history and confirming
                what Muslims have always known through authentic narrations.
              </p>
              <div className={styles.discoveryArabic}>
                الله ولي عمر بن الخطاب في الدنيا والآخرة
                <br />
                لا إله إلا الله
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={200}>
            <div className={styles.discoveryVisual}>
              <div className={styles.stoneCard}>
                <div className={styles.stoneInscription}>
                  الله ولي عمر
                  <br />
                  بن الخطاب
                  <br />
                  في الدنيا والآخرة
                  <br />
                  لا إله إلا الله
                </div>
                <span className={styles.stoneLabel}>Ancient Stone Inscription</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <SectionReveal>
        <div className={styles.statsBar}>
          <div className={styles.statsInner}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10</div>
              <div className={styles.statLabel}>Years as Caliph</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2.2M</div>
              <div className={styles.statLabel}>Sq Miles Governed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>634</div>
              <div className={styles.statLabel}>CE — Became Caliph</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>63</div>
              <div className={styles.statLabel}>Years of Life</div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ═══ SECTIONS GRID ═══ */}
      <section className={styles.sectionsGrid} id="explore">
        <SectionReveal>
          <div className={styles.sectionsHeader}>
            <p className="eyebrow">Explore His Story</p>
            <h2 className="section-title">The Life of Al-Farooq</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Journey through the remarkable life of a man who transformed the world with justice,
              faith, and unparalleled leadership.
            </p>
          </div>
        </SectionReveal>

        <div className={styles.cardsGrid}>
          {sections.map((section, i) => (
            <SectionReveal key={section.href} delay={i * 80}>
              <Link href={section.href} className={styles.sectionCard} id={`section-card-${section.number}`}>
                <span className={styles.cardNumber}>{section.number}</span>
                <h3 className={styles.cardTitle}>{section.title}</h3>
                <p className={styles.cardDesc}>{section.desc}</p>
                <span className={styles.cardArrow}>→</span>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED QUOTE ═══ */}
      <section className={styles.featuredQuote}>
        <SectionReveal>
          <div className={styles.featuredQuoteInner}>
            <p className="eyebrow">Words of Al-Farooq</p>
            <QuoteCard
              arabic="حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا"
              english="Hold yourselves accountable before you are held accountable."
              source="Umar ibn Al-Khattab (رضي الله عنه)"
            />
          </div>
        </SectionReveal>
      </section>
    </div>
  );
}
