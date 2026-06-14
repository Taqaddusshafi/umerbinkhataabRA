import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Umar ibn Al-Khattab (رضي الله عنه) — Al-Farooq',
  description: 'Explore the life, legacy, and contributions of Umar ibn Al-Khattab (عمر بن الخطاب رضي الله عنه), the second Caliph of Islam, known as Al-Farooq — the one who distinguishes between truth and falsehood.',
  keywords: 'Umar ibn Al-Khattab, عمر بن الخطاب, Al-Farooq, Second Caliph, Islam, Islamic History, Caliphate',
  openGraph: {
    title: 'Umar ibn Al-Khattab — Al-Farooq',
    description: 'The life and legacy of the greatest Caliph in Islamic history.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
