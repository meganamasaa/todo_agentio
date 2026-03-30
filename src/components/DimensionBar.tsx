import type { Dimension } from '../data/types';
import styles from './DimensionBar.module.css';

export function DimensionBar({ dim }: { dim: Dimension }) {
  const fillWidth = (dim.yours / dim.max) * 100;
  const benchmarkLeft = (dim.avg / dim.max) * 100;

  return (
    <div className={styles.dimension}>
      <div className={styles.headerRow}>
        <span className={styles.dimensionName}>{dim.name}</span>
        <span className={styles.delta}>{dim.delta}</span>
      </div>

      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${fillWidth}%` }} />
        <div className={styles.benchmark} style={{ left: `${benchmarkLeft}%` }} />
      </div>

      <div className={styles.valuesRow}>
        <span className={styles.yourValue}>
          {dim.yours}
          {dim.unit}
        </span>
        <span className={styles.avgLabel}>
          Mid avg {dim.avg}
          {dim.unit}
        </span>
      </div>

      <div
        className={styles.insightCallout}
        dangerouslySetInnerHTML={{ __html: dim.insight }}
      />
    </div>
  );
}
