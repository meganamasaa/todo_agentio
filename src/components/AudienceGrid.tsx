import type { AudienceBar } from '../data/types';
import styles from './AudienceGrid.module.css';

interface Props {
  age: AudienceBar[];
  interests: AudienceBar[];
}

function BarGroup({ label, bars }: { label: string; bars: AudienceBar[] }) {
  return (
    <div className={styles.tile}>
      <div className={styles.tileLabel}>{label}</div>
      {bars.map((b) => (
        <div key={b.label} className={styles.barRow}>
          <span className={styles.barLabel}>{b.label}</span>
          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{ width: `${b.pct}%`, background: b.color }}
            />
          </div>
          <span className={styles.barPct}>{b.pct}%</span>
        </div>
      ))}
    </div>
  );
}

export function AudienceGrid({ age, interests }: Props) {
  return (
    <div className={styles.grid}>
      <BarGroup label="Age breakdown" bars={age} />
      <BarGroup label="Interest signals" bars={interests} />
    </div>
  );
}
