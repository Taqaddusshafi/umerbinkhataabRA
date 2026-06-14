'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AmbientSoundscape.module.css';

const VIDEO_ID = 'PKO3YkNAvhE';

export default function AmbientSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [showEntryGate, setShowEntryGate] = useState(true);
  const playerRef = useRef(null);
  const removeInteractionListenersRef = useRef(() => {});

  const isPlayerReadyRef = useRef(false);
  const hasUserPausedRef = useRef(false);

  // Initialize YouTube Iframe Player API ONCE on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;

    const startAudiblePlayback = () => {
      if (!playerRef.current || !isPlayerReadyRef.current || hasUserPausedRef.current) return;

      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        playerRef.current.playVideo();
        setIsPlaying(true);
        setShowEntryGate(false);
      } catch (error) {
        console.error('Audio playback failed:', error);
      }
    };

    const handleFirstInteraction = () => {
      startAudiblePlayback();
      if (isPlayerReadyRef.current) {
        removeInteractionListenersRef.current();
      }
    };

    const addInteractionListeners = () => {
      window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
      window.addEventListener('keydown', handleFirstInteraction);
      window.addEventListener('scroll', handleFirstInteraction, { passive: true, once: true });
    };

    removeInteractionListenersRef.current = () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    const ensurePlayerContainer = () => {
      let container = document.getElementById('yt-player-container');
      if (container) {
        container.innerHTML = '';
      } else {
        container = document.createElement('div');
        container.id = 'yt-player-container';
        container.style.position = 'absolute';
        container.style.width = '1px';
        container.style.height = '1px';
        container.style.top = '-999px';
        container.style.left = '-999px';
        container.style.opacity = '0';
        container.style.pointerEvents = 'none';
        document.body.appendChild(container);
      }

      const playerDiv = document.createElement('div');
      playerDiv.id = 'yt-player-iframe';
      container.appendChild(playerDiv);
    };

    const initPlayer = () => {
      if (!isMounted || !window.YT?.Player || playerRef.current) return;

      ensurePlayerContainer();

      playerRef.current = new window.YT.Player('yt-player-iframe', {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          playlist: VIDEO_ID,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            if (!isMounted) return;

            isPlayerReadyRef.current = true;
            setIsPlayerReady(true);
            event.target.setVolume(50);

            // Browsers allow muted autoplay more consistently. The first user gesture unmutes it.
            try {
              event.target.mute();
              event.target.playVideo();
            } catch (error) {
              console.info('Muted autoplay is unavailable until interaction:', error);
            }

            addInteractionListeners();
          },
          onStateChange: (event) => {
            if (!window.YT?.PlayerState) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(!event.target.isMuted?.());
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousCallback?.();
        initPlayer();
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        tag.onerror = () => console.error('Could not load YouTube audio player.');
        document.head.appendChild(tag);
      }
    }

    return () => {
      isMounted = false;
      isPlayerReadyRef.current = false;
      removeInteractionListenersRef.current();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch {
          // YouTube can throw if the iframe was already removed during a hot reload.
        }
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

    if (!isPlayerReady || !playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      setShowEntryGate(false);
      hasUserPausedRef.current = true;
    } else {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(50);
        playerRef.current.playVideo();
        setIsPlaying(true);
        setShowEntryGate(false);
        hasUserPausedRef.current = false;
        removeInteractionListenersRef.current();
      } catch (err) {
        console.error('Play failed:', err);
      }
    }
  };

  return (
    <>
      {showEntryGate && (
        <div className={styles.entryGate}>
          <div className={styles.entryPanel}>
            <p className={styles.entryEyebrow}>Begin the Journey</p>
            <h2 className={styles.entryTitle}>Umar ibn Al-Khattab</h2>
            <p className={styles.entryText}>
              Enter the site with the Nasheed playing in the background.
            </p>
            <div className={styles.entryActions}>
              <button className={styles.enterBtn} onClick={togglePlay} disabled={!isPlayerReady}>
                {isPlayerReady ? 'Enter Site' : 'Loading Audio'}
              </button>
              <button
                className={styles.quietBtn}
                onClick={() => {
                  setShowEntryGate(false);
                  hasUserPausedRef.current = true;
                  playerRef.current?.pauseVideo();
                }}
              >
                Continue Quietly
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.widget}>
        <button
          className={`${styles.toggleBtn} ${isPlaying ? styles.playing : ''}`}
          onClick={(e) => togglePlay(e)}
          aria-label="Toggle Nasheed"
          title={isPlaying ? 'Pause Nasheed' : 'Play Nasheed'}
          disabled={!isPlayerReady}
        >
          <div className={styles.wavesContainer}>
            <span className={styles.wave} />
            <span className={styles.wave} />
            <span className={styles.wave} />
          </div>
          <span className={styles.btnText}>
            {!isPlayerReady ? 'LOADING' : isPlaying ? 'PAUSE' : 'PLAY AUDIO'}
          </span>
        </button>
      </div>
    </>
  );
}
