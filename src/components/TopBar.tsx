import type { CreatorProfile } from '../data/types';
import styles from './TopBar.module.css';

export function TopBar({ profile }: { profile: CreatorProfile }) {
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <header className={styles.topBar}>
      <div className={styles.logoGroup}>
        <img
          src="/agentio-logo.png"
          alt="Agentio"
          className={styles.logo}
        />
      </div>

      <div className={styles.identityPill}>
        <div className={styles.avatar}>{initials}</div>
        <div className={styles.identityText}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.meta}>
            {profile.tier} · {profile.vertical}
          </span>
        </div>
      </div>
    </header>
  );
}
