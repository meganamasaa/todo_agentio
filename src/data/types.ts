export interface CreatorProfile {
  name: string;
  handle: string;
  tier: string;
  vertical: string;
  integrationsProcessed: number;
  brandsProcessed: number;
}

export interface RevealStat {
  value: string;
  label: string;
}

export interface Dimension {
  name: string;
  yours: number;
  avg: number;
  max: number;
  unit: string;
  delta: string;
  insight: string;
}

export interface AudienceBar {
  label: string;
  pct: number;
  color: string;
}

export interface ArcData {
  yours: (number | null)[];
  projected: (number | null)[];
  avg: number[];
  currentIndex: number;
  peakNote: string;
}

export interface Match {
  id: string;
  brandName: string;
  category: string;
  iconInitials: string;
  iconBg: string;
  iconColor: string;
  score: number;
  tags: { label: string; bg: string; color: string }[];
  reasoning: string;
  signals: string[];
  predictions: { label: string; value: string; positive: boolean }[];
  riskNote: string | null;
}

export interface GrowthSignal {
  title: string;
  severity: 'watch' | 'act';
  metric: string;
  metricLabel: string;
  insight: string;
  action: string;
}

export interface CreatorData {
  profile: CreatorProfile;
  revealStats: RevealStat[];
  revealHeadline: string;
  revealSubtext: string;
  dimensions: Dimension[];
  growthSignals: GrowthSignal[];
  audienceAge: AudienceBar[];
  audienceInterests: AudienceBar[];
  arc: ArcData;
  matches: Match[];
}
