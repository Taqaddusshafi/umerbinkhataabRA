import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = [
  { href: '/early-life', label: 'Early Life' },
  { href: '/conversion', label: 'Conversion' },
  { href: '/caliphate', label: 'Caliphate' },
  { href: '/conquests', label: 'Conquests' },
  { href: '/justice', label: 'Justice' },
  { href: '/quotes', label: 'Quotes' },
  { href: '/legacy', label: 'Legacy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <p className={styles.dua}>
          اللَّهُمَّ اغْفِرْ لِعُمَرَ بْنِ الْخَطَّابِ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ
        </p>

        <nav className={styles.links}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>Dedicated to the memory of Umar ibn Al-Khattab (رضي الله عنه) — Al-Farooq</p>
          <p className={styles.bottomArabic}>
            رضي الله عنه وأرضاه
          </p>
        </div>
      </div>
    </footer>
  );
}
