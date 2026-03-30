import type { GrowthSignal } from '../data/types';
import styles from './GrowthSignals.module.css';

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 6V9.75M9 12.75H9.0075M3.345 15.75H14.655C15.7875 15.75 16.4925 14.5275 15.9263 13.545L10.2713 3.5025C9.705 2.52 8.295 2.52 7.7288 3.5025L2.0738 13.545C1.5075 14.5275 2.2125 15.75 3.345 15.75Z"
        stroke="#B45309"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M1.5 9C1.5 9 3.75 3.75 9 3.75C14.25 3.75 16.5 9 16.5 9C16.5 9 14.25 14.25 9 14.25C3.75 14.25 1.5 9 1.5 9Z"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalCard({ signal }: { signal: GrowthSignal }) {
  const isAct = signal.severity === 'act';

  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <div className={`${styles.iconWrap} ${isAct ? styles.iconAct : styles.iconWatch}`}>
          {isAct ? <AlertIcon /> : <EyeIcon />}
        </div>
        <div className={styles.titleBlock}>
          <div className={styles.title}>{signal.title}</div>
          <span className={`${styles.severityTag} ${isAct ? styles.tagAct : styles.tagWatch}`}>
            {isAct ? 'Act on this' : 'Watch this'}
          </span>
        </div>
        <div className={styles.metricBlock}>
          <span className={styles.metricValue}>{signal.metric}</span>
          <span className={styles.metricLabel}>{signal.metricLabel}</span>
        </div>
      </div>

      <div className={styles.insight}>{signal.insight}</div>

      <div className={styles.actionBox}>
        <span className={styles.actionIcon}>
          <ArrowIcon />
        </span>
        <span className={styles.actionText}>{signal.action}</span>
      </div>
    </div>
  );
}

export function GrowthSignals({ signals }: { signals: GrowthSignal[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>What the model thinks you should know</div>
      {signals.map((s) => (
        <SignalCard key={s.title} signal={s} />
      ))}
    </section>
  );
}
