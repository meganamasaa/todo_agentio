import type { Match } from '../data/types';
import styles from './MatchCard.module.css';

interface Props {
  match: Match;
  isOpen: boolean;
  onToggle: () => void;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

export function MatchCard({ match, isOpen, onToggle }: Props) {
  return (
    <div className={`${styles.card} ${isOpen ? styles.cardActive : ''}`}>
      <div className={styles.header} onClick={onToggle}>
        <div
          className={styles.brandIcon}
          style={{ background: match.iconBg, color: match.iconColor }}
        >
          {match.iconInitials}
        </div>

        <div className={styles.brandMeta}>
          <div className={styles.brandName}>{match.brandName}</div>
          <div className={styles.brandCategory}>{match.category}</div>
          <div className={styles.tags}>
            {match.tags.map((t) => (
              <span
                key={t.label}
                className={styles.tag}
                style={{ background: t.bg, color: t.color }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.scoreCol}>
          <span className={styles.scoreValue}>{match.score}</span>
          <span className={styles.scoreLabel}>match score</span>
          <div className={styles.scoreBar}>
            <div className={styles.scoreBarFill} style={{ width: `${match.score}%` }} />
          </div>
        </div>
      </div>

      <div className={styles.toggleStrip} onClick={onToggle}>
        <ChevronIcon open={isOpen} />
        Why Agentio sees this match for you
      </div>

      {isOpen && (
        <div className={styles.panel}>
          <div
            className={styles.reasoning}
            dangerouslySetInnerHTML={{ __html: match.reasoning }}
          />

          <div className={styles.signals}>
            {match.signals.map((s) => (
              <span key={s} className={styles.signalPill}>{s}</span>
            ))}
          </div>

          <div className={styles.predictionGrid}>
            {match.predictions.map((p) => (
              <div key={p.label} className={styles.predictionTile}>
                <span
                  className={`${styles.predictionValue} ${
                    p.positive ? styles.predictionValuePositive : styles.predictionValueNeutral
                  }`}
                >
                  {p.value}
                </span>
                <span className={styles.predictionLabel}>{p.label}</span>
              </div>
            ))}
          </div>

          {match.riskNote && (
            <div className={styles.riskNote}>{match.riskNote}</div>
          )}

          <div className={styles.ctaRow}>
            <button className={styles.ctaGhost}>Express interest</button>
            <button className={styles.ctaFilled}>Plan test campaign</button>
          </div>
        </div>
      )}
    </div>
  );
}
