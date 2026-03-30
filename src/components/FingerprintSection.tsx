import type { CreatorData } from '../data/types';
import { RevealCard } from './RevealCard';
import { DimensionBar } from './DimensionBar';
import { AudienceGrid } from './AudienceGrid';
import styles from './FingerprintSection.module.css';

export function FingerprintSection({ data }: { data: CreatorData }) {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Your value fingerprint</div>

      <RevealCard
        headline={data.revealHeadline}
        subtext={data.revealSubtext}
        stats={data.revealStats}
      />

      <div className={styles.dimensionList}>
        {data.dimensions.map((dim) => (
          <DimensionBar key={dim.name} dim={dim} />
        ))}
      </div>

      <AudienceGrid age={data.audienceAge} interests={data.audienceInterests} />
    </section>
  );
}
