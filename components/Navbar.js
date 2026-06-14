'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/early-life', label: 'Early Life' },
  { href: '/conversion', label: 'Conversion' },
  { href: '/caliphate', label: 'Caliphate' },
  { href: '/conquests', label: 'Conquests' },
  { href: '/justice', label: 'Justice' },
  { href: '/quotes', label: 'Quotes' },
  { href: '/legacy', label: 'Legacy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="main-nav">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            <div>
              <div className={styles.logoArabic}>عمر بن الخطاب</div>
              <div className={styles.logoEnglish}>Al-Farooq</div>
            </div>
          </Link>

          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            id="mobile-menu-toggle"
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} id="mobile-menu">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
