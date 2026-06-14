'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AmbientSoundscape.module.css';

// Safe localStorage helpers to prevent issues in private browsing or cookie-restricted environments
const getSafeLocalStorage = (key) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key);
    }
  } catch (e) {
    console.warn('LocalStorage is not accessible:', e);
  }
  return null;
};

const setSafeLocalStorage = (key, value) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    console.warn('LocalStorage write failed:', e);
  }
};

export default function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const playerRef = useRef(null);
  const hasAttemptedAutoplay = useRef(false);
  const firstInteractionListenerRef = useRef(null);

  // Sync state values to refs to avoid stale closures in event listeners
  const isPlayingRef = useRef(false);
  isPlayingRef.current = isPlaying;

  const isPlayerReadyRef = useRef(false);
  isPlayerReadyRef.current = isPlayerReady;

  // Initialize YouTube Iframe Player API ONCE on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set up interaction-triggered autoplay fallback
    const handleFirstInteraction = () => {
      if (playerRef.current && isPlayerReadyRef.current && !isPlayingRef.current && !hasAttemptedAutoplay.current) {
        const isPaused = getSafeLocalStorage('nasheed_paused') === 'true';
        if (!isPaused) {
          try {
            playerRef.current.playVideo();
            setIsPlaying(true);
          } catch (e) {
            console.error('Autoplay trigger failed:', e);
          }
        }
        hasAttemptedAutoplay.current = true;
        removeInteractionListeners();
      }
    };

    firstInteractionListenerRef.current = handleFirstInteraction;

    const removeInteractionListeners = () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    // 1. Create container div for the player if it doesn't exist
    if (!document.getElementById('yt-player-container')) {
      const container = document.createElement('div');
      container.id = 'yt-player-container';
      container.style.position = 'absolute';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.top = '-999px';
      container.style.left = '-999px';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);

      const playerDiv = document.createElement('div');
      playerDiv.id = 'yt-player-iframe';
      container.appendChild(playerDiv);
    }

    // 2. Load YouTube API script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // 3. Define global callback for player creation
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('yt-player-iframe', {
        // Mishary Rashid Alafasy - Salam Un Ya Omar Farooq
        videoId: 'PKO3YkNAvhE',
        playerVars: {
          autoplay: 1,      // Request autoplay
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: 'PKO3YkNAvhE' // required for looping
        },
        events: {
          onReady: (event) => {
            setIsPlayerReady(true);
            event.target.setVolume(50); // Set moderate volume (50%)
            
            // Check if user has explicitly paused
            const isPaused = getSafeLocalStorage('nasheed_paused') === 'true';
            if (!isPaused) {
              // Try to play immediately (might be blocked by browser autoplay policy)
              try {
                event.target.playVideo();
              } catch (e) {
                console.log('Direct autoplay blocked, waiting for interaction.');
              }
              
              // Set up fallback interaction listeners to start audio when user interacts
              window.addEventListener('click', handleFirstInteraction);
              window.addEventListener('scroll', handleFirstInteraction);
            } else {
              hasAttemptedAutoplay.current = true;
            }
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Clean up
    return () => {
      removeInteractionListeners();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
      const container = document.getElementById('yt-player-container');
      if (container) {
        container.remove();
      }
    };
  }, []); // Run exactly once on mount!

  const togglePlay = (e) => {
    if (e) {
      e.stopPropagation();
    }
    
    // Disable background autoplay triggers
    hasAttemptedAutoplay.current = true;
    if (typeof window !== 'undefined' && firstInteractionListenerRef.current) {
      window.removeEventListener('click', firstInteractionListenerRef.current);
      window.removeEventListener('scroll', firstInteractionListenerRef.current);
    }

    if (!isPlayerReady || !playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      setSafeLocalStorage('nasheed_paused', 'true');
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
      setSafeLocalStorage('nasheed_paused', 'false');
    }
  };

  return (
    <div className={styles.widget}>
      <button 
        className={`${styles.toggleBtn} ${isPlaying ? styles.playing : ''}`} 
        onClick={(e) => togglePlay(e)}
        aria-label="Toggle Nasheed"
        title={isPlaying ? 'Pause Nasheed' : 'Play Nasheed'}
      >
        <div className={styles.wavesContainer}>
          <span className={styles.wave} />
          <span className={styles.wave} />
          <span className={styles.wave} />
        </div>
        <span className={styles.btnText}>
          {isPlaying ? 'PAUSE' : 'PLAY AUDIO'}
        </span>
      </button>
    </div>
  );
}
