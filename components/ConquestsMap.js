'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ConquestsMap.module.css';

const timelineSteps = [
  {
    year: 634,
    label: '634 CE',
    title: 'Accession of Umar (رضي الله عنه)',
    description: 'Umar became Caliph in 634 CE. The core Islamic state comprised the Arabian Peninsula. Regions like the Levant, Persia, and Egypt were governed by Byzantine and Sasanian rulers.',
    highlights: ['arabia']
  },
  {
    year: 636,
    label: '636 CE',
    title: 'Syria and Iraq Campaigns',
    description: 'Decisive battles transformed the region. The Battle of Yarmouk broke Byzantine control over Syria, while the Battle of Qadisiyyah opened the plains of Iraq/Mesopotamia.',
    highlights: ['arabia', 'syria', 'iraq']
  },
  {
    year: 638,
    label: '638 CE',
    title: 'Entry into Jerusalem',
    description: 'Following the siege of Jerusalem, Patriarch Sophronius agreed to hand the keys to Caliph Umar in person. Umar established the historic Covenant protecting Christian citizens.',
    highlights: ['arabia', 'syria', 'iraq', 'jerusalem']
  },
  {
    year: 640,
    label: '640 CE',
    title: 'The Conquest of Egypt',
    description: 'Commander Amr ibn al-Aas crossed into Egypt, capturing the Babylon Fortress and Alexandria, establishing Fustat (modern Cairo) and administrative canals.',
    highlights: ['arabia', 'syria', 'iraq', 'jerusalem', 'egypt']
  },
  {
    year: 644,
    label: '644 CE',
    title: 'Collapse of Persia & Max Expansion',
    description: 'With the Battle of Nihawand, the Sasanian dynasty fell completely. Under Umar\'s ten-year reign, the state grew into a structured welfare empire spanning 2.2 million square miles.',
    highlights: ['arabia', 'syria', 'iraq', 'jerusalem', 'egypt', 'persia']
  }
];

export default function ConquestsMap() {
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playTimerRef = useRef(null);

  const activeStep = timelineSteps[stepIndex];

  useEffect(() => {
    if (isPlaying) {
      playTimerRef.current = setInterval(() => {
        setStepIndex((prev) => (prev + 1) % timelineSteps.length);
      }, 3500);
    } else {
      if (playTimerRef.current) {
        clearInterval(playTimerRef.current);
      }
    }
    return () => {
      if (playTimerRef.current) clearInterval(playTimerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const isConquered = (region) => {
    return activeStep.highlights.includes(region);
  };

  return (
    <div className={styles.mapContainer}>
      <div className={styles.header}>
        <span className={styles.badge}>Next-Level Geographic Timelapse</span>
        <h3 className={styles.title}>The Caliphate Expansion Timeline</h3>
        <p className={styles.subtitle}>Watch the gold glowing borders expand over the actual geographical map of the Middle East</p>
      </div>

      <div className={styles.layout}>
        {/* 🗺️ SVG Geographic Map */}
        <div className={styles.mapWrapper}>
          <svg className={styles.svgMap} viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(201, 168, 76, 0.06)" strokeWidth="0.5"/>
              </pattern>
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="seaGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(26, 112, 138, 0.32)" />
                <stop offset="100%" stopColor="rgba(12, 52, 72, 0.16)" />
              </linearGradient>
            </defs>

            {/* Grid overlay */}
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Water bodies for clearer orientation */}
            <path d="M 0 145 C 95 125, 190 136, 270 160 L 255 210 C 185 205, 100 212, 0 205 Z" fill="url(#seaGradient)" />
            <path d="M 282 245 C 305 300, 326 366, 350 470" stroke="rgba(70, 170, 190, 0.34)" strokeWidth="18" strokeLinecap="round" />
            <path d="M 555 328 C 610 318, 650 328, 700 358" stroke="rgba(70, 170, 190, 0.26)" strokeWidth="22" strokeLinecap="round" />
            <text x="82" y="178" fill="rgba(183, 225, 232, 0.42)" fontSize="12" fontWeight="700" letterSpacing="0.16em" pointerEvents="none">MEDITERRANEAN SEA</text>
            <text x="306" y="365" fill="rgba(183, 225, 232, 0.36)" fontSize="10" fontWeight="700" letterSpacing="0.12em" pointerEvents="none" transform="rotate(69 306 365)">RED SEA</text>

            {/* 2. EGYPT (Geographical Sinai & Nile Delta contours) */}
            <path
              d="M 50 210 
                 C 120 210, 180 205, 230 205 
                 C 245 205, 255 210, 260 220 
                 C 255 240, 250 260, 240 290 
                 L 210 350 L 50 350 Z"
              className={`${styles.region} ${isConquered('egypt') ? styles.conquered : ''}`}
            />

            {/* 3. SYRIA & LEVANT (Geographical coastal line & desert border) */}
            <path
              d="M 260 215 
                 C 255 180, 260 140, 265 110 
                 C 300 110, 330 105, 360 115 
                 C 380 130, 390 155, 395 180 
                 L 310 230 Z"
              className={`${styles.region} ${isConquered('syria') ? styles.conquered : ''}`}
            />

            {/* 4. IRAQ / MESOPOTAMIA (Tigris and Euphrates valley to Persian Gulf) */}
            <path
              d="M 395 180 
                 C 400 150, 440 120, 480 125 
                 C 500 135, 510 160, 520 190 
                 C 515 220, 490 250, 470 270 
                 L 425 240 Z"
              className={`${styles.region} ${isConquered('iraq') ? styles.conquered : ''}`}
            />

            {/* 5. PERSIA / IRAN (Zagros mountains and eastern Plateau) */}
            <path
              d="M 520 125 
                 C 600 100, 680 90, 750 95 
                 C 770 140, 760 200, 740 260 
                 C 680 290, 600 300, 560 300 
                 L 520 190 Z"
              className={`${styles.region} ${isConquered('persia') ? styles.conquered : ''}`}
            />

            {/* 6. ARABIA (Geographically accurate Peninsula contour) */}
            <path
              d="M 260 220 
                 C 275 220, 295 240, 310 280 
                 C 325 320, 340 370, 355 425 
                 C 400 440, 480 435, 545 400 
                 C 560 380, 570 355, 565 330 
                 C 530 305, 515 285, 470 270 
                 L 425 240 Z"
              className={`${styles.region} ${isConquered('arabia') ? styles.conquered : ''}`}
            />

            {/* City Indicators */}
            
            {/* Madinah (Capital) */}
            <g transform="translate(390, 320)" className={styles.cityGroup}>
              <circle r="7" fill="var(--bg-primary)" stroke="var(--accent-gold)" strokeWidth="2" />
              <circle r="2.5" fill="var(--accent-gold)" />
              <text x="12" y="4" fill="#a09882" fontSize="9" fontWeight="700" letterSpacing="0.1em">MADINAH</text>
            </g>

            {/* Jerusalem */}
            {isConquered('jerusalem') && (
              <g transform="translate(305, 195)" className={styles.cityGroupActive}>
                <circle r="5" fill="#000" stroke="var(--accent-gold)" strokeWidth="2" filter="url(#goldGlow)" />
                <circle r="2" fill="var(--accent-gold-light)" />
                <text x="-75" y="-6" fill="#f0ebe0" fontSize="9" fontWeight="700">JERUSALEM</text>
              </g>
            )}

            {/* Damascus */}
            {isConquered('syria') && (
              <g transform="translate(325, 145)" className={styles.cityGroupActive}>
                <circle r="4" fill="#000" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <text x="10" y="3" fill="#a09882" fontSize="8">Damascus</text>
              </g>
            )}

            {/* Ctesiphon */}
            {isConquered('iraq') && (
              <g transform="translate(470, 190)" className={styles.cityGroupActive}>
                <circle r="4" fill="#000" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <text x="10" y="3" fill="#a09882" fontSize="8">Ctesiphon</text>
              </g>
            )}

            {/* Alexandria */}
            {isConquered('egypt') && (
              <g transform="translate(145, 220)" className={styles.cityGroupActive}>
                <circle r="4" fill="#000" stroke="var(--accent-gold)" strokeWidth="1.5" />
                <text x="-65" y="-6" fill="#a09882" fontSize="8">Alexandria</text>
              </g>
            )}

            {/* Geographical Region Labels */}
            <text x="360" y="380" fill="rgba(255,255,255,0.48)" fontSize="16" fontWeight="900" letterSpacing="0.2em" pointerEvents="none">ARABIA</text>
            <text x="610" y="200" fill="rgba(255,255,255,0.48)" fontSize="15" fontWeight="900" letterSpacing="0.2em" pointerEvents="none">PERSIA</text>
            <text x="110" y="280" fill="rgba(255,255,255,0.48)" fontSize="15" fontWeight="900" letterSpacing="0.2em" pointerEvents="none">EGYPT</text>
            <text x="310" y="125" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="900" letterSpacing="0.1em" pointerEvents="none">SYRIA</text>
            <text x="426" y="214" fill="rgba(255,255,255,0.44)" fontSize="10" fontWeight="900" letterSpacing="0.1em" pointerEvents="none">IRAQ</text>
          </svg>

          {/* Current Year display overlay inside map */}
          <div className={styles.yearDisplay}>
            {activeStep.label}
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className={styles.detailsPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelYear}>TIMELAPSE STAGE</span>
            <h4 className={styles.panelTitle}>{activeStep.title}</h4>
          </div>

          <div className={styles.panelBody}>
            <p className={styles.description}>{activeStep.description}</p>
            
            <div className={styles.highlightsContainer}>
              <span className={styles.label}>Controlled Territories</span>
              <div className={styles.chipsRow}>
                {activeStep.highlights.map((h) => (
                  <span key={h} className={styles.chip}>
                    {h.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎛️ Timeline Control Console */}
      <div className={styles.timelineConsole}>
        <button className={styles.playBtn} onClick={togglePlay}>
          {isPlaying ? '⏸ Pause' : '▶ Play Timelapse'}
        </button>

        <div className={styles.sliderWrapper}>
          {timelineSteps.map((step, idx) => (
            <button
              key={step.year}
              className={`${styles.timelineNode} ${stepIndex === idx ? styles.activeNode : ''} ${stepIndex > idx ? styles.passedNode : ''}`}
              onClick={() => {
                setStepIndex(idx);
                setIsPlaying(false);
              }}
            >
              <span className={styles.nodeDot} />
              <span className={styles.nodeLabel}>{step.label}</span>
            </button>
          ))}
          <div 
            className={styles.nodeProgressLine} 
            style={{ width: `${(stepIndex / (timelineSteps.length - 1)) * 100}%` }}
          />
          <div className={styles.nodeBaseLine} />
        </div>
      </div>
    </div>
  );
}
