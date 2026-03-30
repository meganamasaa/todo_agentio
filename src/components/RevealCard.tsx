import { useState, useEffect, useRef } from 'react';
import type { RevealStat } from '../data/types';
import styles from './RevealCard.module.css';

interface Props {
  headline: string;
  subtext: string;
  stats: RevealStat[];
}

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([+]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { prefix, number, suffix } = parseStatValue(value);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => {
            setVisible(true);
            const duration = 1200;
            const steps = 40;
            const stepTime = duration / steps;
            const isDecimal = number % 1 !== 0;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = eased * number;
              setCurrent(isDecimal ? parseFloat(val.toFixed(1)) : Math.round(val));

              if (step >= steps) {
                setCurrent(number);
                clearInterval(timer);
              }
            }, stepTime);
          }, delay);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number, delay]);

  const isDecimal = number % 1 !== 0;
  const display = `${prefix}${isDecimal ? current.toFixed(1) : current}${suffix}`;

  return (
    <div
      ref={ref}
      className={`${styles.statTile} ${visible ? styles.statTileVisible : ''}`}
    >
      <span className={styles.statValue}>{display}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function RevealCard({ headline, subtext, stats }: Props) {
  const [textVisible, setTextVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={`${styles.eyebrow} ${textVisible ? styles.fadeIn : styles.hidden}`}>
        What makes you valuable
      </div>
      <div className={`${styles.headline} ${textVisible ? styles.fadeIn : styles.hidden}`}>
        {headline}
      </div>
      <div
        className={`${styles.subtext} ${textVisible ? styles.fadeInDelay : styles.hidden}`}
      >
        {subtext}
      </div>
      <div className={styles.statGrid}>
        {stats.map((s, i) => (
          <AnimatedStat
            key={s.label}
            value={s.value}
            label={s.label}
            delay={400 + i * 200}
          />
        ))}
      </div>
    </div>
  );
}
