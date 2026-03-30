import type { ArcData } from '../data/types';
import styles from './ArcSection.module.css';

const MAX_VALUE = 3.4;
const LABELS = ['I1', 'I2', 'I3', 'I4', 'I5', 'I6'];
const OPACITIES = [0.6, 0.8, 1.0];

export function ArcSection({ arc }: { arc: ArcData }) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Integration performance arc</div>

      <div className={styles.card}>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: 'var(--purple-600)' }} />
            Your CVR
          </div>
          <div className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: 'var(--border)', opacity: 0.6 }} />
            Mid-creator avg
          </div>
        </div>

        <div className={styles.chartContainer}>
          {LABELS.map((label, i) => {
            const yoursVal = arc.yours[i];
            const projVal = arc.projected[i];
            const avgVal = arc.avg[i];
            const isCurrent = i === arc.currentIndex;

            const yoursHeight = yoursVal != null ? (yoursVal / MAX_VALUE) * 80 : 0;
            const projHeight = projVal != null ? (projVal / MAX_VALUE) * 80 : 0;
            const avgHeight = (avgVal / MAX_VALUE) * 80;

            return (
              <div key={label} className={styles.integrationCol}>
                <div className={styles.barPair}>
                  {yoursVal != null && (
                    <div
                      className={styles.barActual}
                      style={{
                        height: `${yoursHeight}px`,
                        opacity: OPACITIES[i] ?? 1,
                      }}
                    />
                  )}
                  {projVal != null && (
                    <div
                      className={styles.barProjected}
                      style={{ height: `${projHeight}px` }}
                    />
                  )}
                  <div className={styles.barAvg} style={{ height: `${avgHeight}px` }} />
                </div>
                <span
                  className={
                    isCurrent ? styles.integrationLabelCurrent : styles.integrationLabel
                  }
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <div
          className={styles.peakNote}
          dangerouslySetInnerHTML={{ __html: arc.peakNote }}
        />
      </div>
    </section>
  );
}
