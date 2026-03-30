import { useState } from 'react';
import type { Match } from '../data/types';
import { MatchCard } from './MatchCard';
import styles from './MatchSection.module.css';

export function MatchSection({ matches }: { matches: Match[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>Untapped brand matches</div>

      {matches.map((m) => (
        <MatchCard
          key={m.id}
          match={m}
          isOpen={openId === m.id}
          onToggle={() => setOpenId(openId === m.id ? null : m.id)}
        />
      ))}
    </section>
  );
}
