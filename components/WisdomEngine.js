'use client';

import { useState } from 'react';
import styles from './WisdomEngine.module.css';

const statesOfMind = [
  {
    state: 'In Leadership',
    quote: 'أَحَبُّ النَّاسِ إِلَيَّ مَنْ أَهْدَى إِلَيَّ عُيُوبِي',
    translation: 'The most beloved of people to me is the one who points out my flaws.',
    context: 'Umar (رضي الله عنه) actively encouraged criticism of his decisions. When a woman challenged his decree regarding marriage dowries in public, he openly admitted: "The woman is right and Umar is wrong," reversing his decision immediately.'
  },
  {
    state: 'Seeking Justice',
    quote: 'كُنَّا أَذَلَّ قَوْمٍ فَأَعَزَّنَا اللَّهُ بِالإِسْلامِ',
    translation: 'We were the most humiliated people, and Allah gave us honor through Islam. If we seek honor through anything else, Allah will humiliate us again.',
    context: 'Said when entering Jerusalem. Some companions suggested he wear finer clothes to impress the Christian patriarchs, but Umar refused, asserting that true status comes from faith and justice, not material displays.'
  },
  {
    state: 'Struggling with Pride',
    quote: 'حَاسِبُوا أَنْفُسَكُمْ قَبْلَ أَنْ تُحَاسَبُوا',
    translation: 'Hold yourselves accountable before you are held accountable.',
    context: 'Umar constantly monitored his own intentions. He was once seen carrying a water-skin on his back through Madinah. When asked why, he replied that he felt pride entering his heart and wanted to humiliate his ego.'
  },
  {
    state: 'Facing Hardship',
    quote: 'الزُّهْدُ فِي الدُّنْيَا رَاحَةُ الْقَلْبِ وَالْبَدَنِ',
    translation: 'Asceticism (Zuhd) in this world brings comfort to the heart and the body.',
    context: 'During the Year of Famine, Umar survived on olive oil and dry bread, refusing luxury. He taught that detaching from worldly comforts frees the heart from anxiety during times of crisis.'
  }
];

export default function WisdomEngine() {
  const [selectedState, setSelectedState] = useState(statesOfMind[0]);

  return (
    <div className={styles.container}>
      <span className={styles.badge}>Wisdom Selection Engine</span>
      <h3 className={styles.title}>Reflections for Your Journey</h3>
      <p className={styles.subtitle}>Select your current state of mind to receive a saying of Al-Farooq with its historical context</p>

      <div className={styles.buttonGrid}>
        {statesOfMind.map((item) => (
          <button
            key={item.state}
            className={`${styles.stateBtn} ${selectedState.state === item.state ? styles.active : ''}`}
            onClick={() => setSelectedState(item)}
          >
            {item.state}
          </button>
        ))}
      </div>

      <div className={styles.card}>
        <div className={styles.cardInner}>
          <span className={styles.decor}>✨</span>
          <p className={styles.arabic}>{selectedState.quote}</p>
          <p className={styles.translation}>&ldquo;{selectedState.translation}&rdquo;</p>
          
          <div className={styles.divider} />
          
          <div className={styles.contextSection}>
            <span className={styles.contextLabel}>Historical Context</span>
            <p className={styles.contextText}>{selectedState.context}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
