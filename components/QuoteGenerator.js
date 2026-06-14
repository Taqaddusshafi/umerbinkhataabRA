'use client';

import { useState, useRef } from 'react';
import styles from './QuoteGenerator.module.css';

const quotes = [
  {
    id: 1,
    arabic: "حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا",
    english: "Hold yourselves accountable before you are held accountable.",
  },
  {
    id: 2,
    arabic: "كُنَّا أَذَلَّ قَوْمٍ فَأَعَزَّنَا اللَّهُ بِالإِسْلامِ",
    english: "We were the most humiliated people, and Allah gave us honor through Islam.",
  },
  {
    id: 3,
    arabic: "أَحَبُّ النَّاسِ إِلَيَّ مَنْ أَهْدَى إِلَيَّ عُيُوبِي",
    english: "The most beloved of people to me is the one who points out my flaws.",
  },
  {
    id: 4,
    arabic: "تَفَقَّهُوا قَبْلَ أَنْ تُسَوَّدُوا",
    english: "Acquire knowledge before you are made leaders.",
  }
];

const themes = [
  {
    id: 'gold-dark',
    name: 'Classic Gold',
    bg: '#000000',
    border: '#c9a84c',
    text: '#f0ebe0',
    arabicText: '#e8d5a0',
    subtext: '#5a5445'
  },
  {
    id: 'emerald-oasis',
    name: 'Emerald Oasis',
    bg: '#061d15',
    border: '#c9a84c',
    text: '#e6efeb',
    arabicText: '#e8d5a0',
    subtext: '#225740'
  },
  {
    id: 'royal-navy',
    name: 'Royal Indigo',
    bg: '#070f1a',
    border: '#c9a84c',
    text: '#e6edf5',
    arabicText: '#e8d5a0',
    subtext: '#1a365d'
  }
];

export default function QuoteGenerator() {
  const [selectedQuote, setSelectedQuote] = useState(quotes[0]);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef(null);

  const handleDownload = () => {
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = 1080;
    const height = 1080;
    canvas.width = width;
    canvas.height = height;

    // 1. Draw Background
    ctx.fillStyle = selectedTheme.bg;
    ctx.fillRect(0, 0, width, height);

    // 2. Draw Decorative Border Grid
    ctx.strokeStyle = selectedTheme.border;
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, width - 80, height - 80);

    ctx.strokeStyle = selectedTheme.border;
    ctx.lineWidth = 1;
    ctx.strokeRect(50, 50, width - 100, height - 100);

    // Corner Accents (Draw small squares at corners of inside border)
    const drawCornerAccent = (x, y) => {
      ctx.fillStyle = selectedTheme.border;
      ctx.fillRect(x - 8, y - 8, 16, 16);
    };
    drawCornerAccent(50, 50);
    drawCornerAccent(width - 50, 50);
    drawCornerAccent(50, height - 50);
    drawCornerAccent(width - 50, height - 50);

    // 3. Draw Watermark/Quotes Icon
    ctx.fillStyle = selectedTheme.border;
    ctx.globalAlpha = 0.08;
    ctx.font = '280px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText('“', width / 2, 280);
    ctx.globalAlpha = 1.0;

    // 4. Draw Arabic Text
    ctx.fillStyle = selectedTheme.arabicText;
    ctx.font = 'bold 44px Amiri, Georgia, serif';
    ctx.textAlign = 'center';
    ctx.direction = 'rtl';
    
    // Wrap and draw Arabic text
    const arabicWords = selectedQuote.arabic.split(' ');
    let arabicLine = '';
    let arabicLines = [];
    for (let i = 0; i < arabicWords.length; i++) {
      let testLine = arabicLine + arabicWords[i] + ' ';
      let metrics = ctx.measureText(testLine);
      if (metrics.width > 800 && i > 0) {
        arabicLines.push(arabicLine);
        arabicLine = arabicWords[i] + ' ';
      } else {
        arabicLine = testLine;
      }
    }
    arabicLines.push(arabicLine);

    let currentY = 300; // start higher up
    arabicLines.forEach((line) => {
      ctx.fillText(line.trim(), width / 2, currentY);
      currentY += 62; // tighter spacing
    });

    // 5. Draw Decorative Divider Line
    ctx.strokeStyle = selectedTheme.border;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 80, currentY + 20);
    ctx.lineTo(width / 2 + 80, currentY + 20);
    ctx.stroke();

    currentY += 80;

    // 6. Draw English Text
    ctx.fillStyle = selectedTheme.text;
    ctx.font = 'italic 34px Georgia, "Times New Roman", serif';
    ctx.direction = 'ltr';

    const englishWords = selectedQuote.english.split(' ');
    let englishLine = '';
    let englishLines = [];
    for (let i = 0; i < englishWords.length; i++) {
      let testLine = englishLine + englishWords[i] + ' ';
      let metrics = ctx.measureText(testLine);
      if (metrics.width > 800 && i > 0) {
        englishLines.push(englishLine);
        englishLine = englishWords[i] + ' ';
      } else {
        englishLine = testLine;
      }
    }
    englishLines.push(englishLine);

    englishLines.forEach((line) => {
      ctx.fillText(line.trim(), width / 2, currentY);
      currentY += 48; // tighter spacing
    });

    // 7. Draw Attribution (Footer)
    ctx.fillStyle = selectedTheme.border;
    ctx.font = '650 20px Inter, sans-serif';
    ctx.fillText('UMAR IBN AL-KHATTAB (رضي الله عنه)', width / 2, height - 120);

    ctx.fillStyle = selectedTheme.subtext;
    ctx.font = '500 14px Inter, sans-serif';
    ctx.fillText('AL-FAROOQ BIOGRAPHY WEBSITE', width / 2, height - 90);

    // 8. Download Triggers
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `umar_quote_${selectedQuote.id}.png`;
    link.href = url;
    link.click();

    setIsGenerating(false);
  };

  return (
    <div className={styles.container}>
      <span className={styles.badge}>Shareable Card Creator</span>
      <h3 className={styles.title}>Quote Card Generator</h3>
      <p className={styles.subtitle}>Select a saying and layout to download a custom high-resolution social media graphic</p>

      <div className={styles.grid}>
        {/* Left Side: Selectors */}
        <div className={styles.controls}>
          <div className={styles.controlGroup}>
            <span className={styles.label}>Select Quote</span>
            <div className={styles.selectWrapper}>
              {quotes.map((q) => (
                <button
                  key={q.id}
                  className={`${styles.quoteSelectorBtn} ${selectedQuote.id === q.id ? styles.active : ''}`}
                  onClick={() => setSelectedQuote(q)}
                >
                  {q.english.substring(0, 50)}...
                </button>
              ))}
            </div>
          </div>

          <div className={styles.controlGroup}>
            <span className={styles.label}>Select Theme</span>
            <div className={styles.themeGrid}>
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`${styles.themeBtn} ${selectedTheme.id === t.id ? styles.active : ''}`}
                  style={{ background: t.bg, borderColor: t.border }}
                  onClick={() => setSelectedTheme(t)}
                  title={t.name}
                >
                  <span className={styles.themeName} style={{ color: t.text }}>{t.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <button className={styles.downloadBtn} onClick={handleDownload} disabled={isGenerating}>
            {isGenerating ? 'Generating Image...' : 'Download High-Res PNG'}
          </button>
        </div>

        {/* Right Side: Interactive Visual Preview */}
        <div className={styles.previewContainer}>
          <span className={styles.previewLabel}>Visual Preview</span>
          <div
            className={styles.previewCard}
            style={{
              backgroundColor: selectedTheme.bg,
              borderColor: selectedTheme.border,
              color: selectedTheme.text
            }}
          >
            <div className={styles.innerBorders} style={{ borderColor: selectedTheme.border }}>
              <span className={styles.largeQuoteSymbol} style={{ color: selectedTheme.border }}>“</span>
              <div className={styles.quoteTextWrapper}>
                <p className={styles.previewArabic} style={{ color: selectedTheme.arabicText }}>{selectedQuote.arabic}</p>
                <div className={styles.previewDivider} style={{ background: selectedTheme.border }} />
                <p className={styles.previewEnglish}>{selectedQuote.english}</p>
              </div>
              <div className={styles.previewFooter}>
                <span className={styles.attribution} style={{ color: selectedTheme.border }}>UMAR IBN AL-KHATTAB (رضي الله عنه)</span>
                <span className={styles.siteLabel} style={{ color: selectedTheme.subtext }}>Al-Farooq Biography</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden compilation canvas */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}
