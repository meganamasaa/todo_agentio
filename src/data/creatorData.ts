import type { CreatorData } from './types';

export const creatorData: CreatorData = {
  profile: {
    name: 'Sarah Lavigne',
    handle: '@sarahlavigne',
    tier: 'Mid-creator',
    vertical: 'Fitness & Lifestyle',
    integrationsProcessed: 8,
    brandsProcessed: 4,
  },

  revealHeadline:
    "You're not just a fitness creator. You're a conversion engine for health-adjacent brands.",

  revealSubtext:
    "Agentio's model has processed your last 8 integrations across 4 brand verticals. Here's what the data says about you that your channel analytics don't show.",

  revealStats: [
    { value: '2.9×', label: 'CVR vs. Macro avg' },
    { value: '+34%', label: 'CTR above Mid avg' },
    { value: '7.1%', label: 'Engagement rate' },
  ],

  dimensions: [
    {
      name: 'Engagement rate',
      yours: 7.1,
      avg: 5.2,
      max: 10,
      unit: '%',
      delta: '+1.9% vs Mid avg',
      insight:
        'Your audience comments and shares at <strong>1.4× the Mid-creator average</strong>. This signals active trust — not passive watching.',
    },
    {
      name: 'View-through rate',
      yours: 85,
      avg: 82,
      max: 100,
      unit: '%',
      delta: '+3% vs Mid avg',
      insight:
        'Viewers watch through your integrations at a rate that suggests the <strong>sponsorship feels native</strong>, not forced.',
    },
    {
      name: 'Avg integration CVR',
      yours: 2.6,
      avg: 2.4,
      max: 5,
      unit: '%',
      delta: '+0.2% vs Mid avg',
      insight:
        'You convert above the Mid average even in early integrations — before the <strong>trust-building arc fully kicks in</strong>. Your floor is high.',
    },
    {
      name: 'Repeat viewer rate',
      yours: 54,
      avg: 39,
      max: 100,
      unit: '%',
      delta: '+15% vs Mid avg',
      insight:
        '<strong>54% of your viewers come back</strong>. That loyalty is rare at the Mid tier and is the primary driver of your long-term brand value.',
    },
  ],

  growthSignals: [
    {
      title: 'Posting cadence is costing you warm audiences',
      severity: 'act',
      metric: '18 days',
      metricLabel: 'avg gap between uploads',
      insight:
        'Your average gap between uploads is 18 days — nearly 2× the Mid-creator median of 10 days. When you go dark for 2+ weeks, your audience cools. Brands see this: your first-integration CVR is strong, but your between-integration drop-off is 22% steeper than creators who post weekly. The algorithm penalizes inconsistency, and so do brand buyers reviewing your profile.',
      action:
        'Even 1 short-form post per week between integrations would keep your audience warm and reduce your first-day CVR dip by an estimated 15–20%.',
    },
    {
      title: 'Vertical concentration is narrowing your brand pool',
      severity: 'watch',
      metric: '91%',
      metricLabel: 'of integrations in wellness',
      insight:
        'All but one of your integrations have been in wellness or supplements. Your audience data suggests strong crossover potential into travel, activewear, and personal finance — but there\'s zero performance data to prove it. Brands in those categories can\'t model your fit, so you\'re invisible to them on the marketplace.',
      action:
        'A single integration outside wellness — even a lower-CPM test — would generate the cross-vertical signal that opens 3–4 new brand categories in your match pool.',
    },
  ],

  audienceAge: [
    { label: '18–24', pct: 18, color: 'var(--purple-400)' },
    { label: '25–34', pct: 52, color: 'var(--purple-600)' },
    { label: '35–44', pct: 22, color: 'var(--purple-400)' },
    { label: '45+', pct: 8, color: '#CECBF6' },
  ],

  audienceInterests: [
    { label: 'Wellness', pct: 88, color: 'var(--teal-600)' },
    { label: 'Nutrition', pct: 74, color: 'var(--teal-600)' },
    { label: 'Income $60k+', pct: 61, color: 'var(--teal-400)' },
    { label: 'Repeat viewers', pct: 54, color: 'var(--teal-400)' },
  ],

  arc: {
    yours: [1.0, 0.75, 0.65, null, null, null],
    projected: [null, null, null, 1.4, 2.1, 3.4],
    avg: [1.0, 0.70, 0.60, 0.70, 0.70, 1.90],
    currentIndex: 2,
    peakNote:
      "You're currently at <strong>integration 3</strong> with your top brand — the typical trust-building dip. Based on comparable creator arcs, your CVR is projected to reach <strong>3.4% by integration 6</strong>, nearly <strong>2× your current rate</strong>. <strong>Don't stop here.</strong>",
  },

  matches: [
    {
      id: 'ritual',
      brandName: 'Ritual',
      category: 'Health & Wellness · Supplements',
      iconInitials: 'RI',
      iconBg: '#E1F5EE',
      iconColor: '#085041',
      score: 92,
      tags: [
        { label: 'Strong fit', bg: 'var(--teal-50)', color: '#085041' },
        { label: 'Endemic match', bg: 'var(--purple-100)', color: 'var(--purple-800)' },
      ],
      reasoning:
        'Your <strong>88% wellness-interest audience</strong> and above-average CVR make you a natural fit for Ritual\'s acquisition funnel. Comparable fitness creator integrations with supplement brands averaged <strong>2.8× your current CVR baseline</strong> by integration 4.',
      signals: [
        'Supplement comp: 2.8× CVR',
        '61% income $60k+',
        '88% wellness audience',
        'High repeat viewer loyalty',
      ],
      predictions: [
        { label: 'Predicted CVR', value: '2.9%', positive: true },
        { label: 'Est. CPM', value: '$23', positive: false },
        { label: 'CTR vs category', value: '+34%', positive: true },
      ],
      riskNote: null,
    },
    {
      id: 'whoop',
      brandName: 'WHOOP',
      category: 'Health & Wellness · Wearables',
      iconInitials: 'WH',
      iconBg: '#E6F1FB',
      iconColor: '#0C447C',
      score: 87,
      tags: [
        { label: 'Strong fit', bg: 'var(--blue-50)', color: 'var(--blue-800)' },
      ],
      reasoning:
        'Your audience\'s <strong>54% repeat viewer rate</strong> and $60k+ income skew maps closely to WHOOP\'s buyer profile. Wearable integrations on fitness channels with your engagement profile convert at <strong>1.6× the category average</strong>.',
      signals: [
        '54% repeat viewer rate',
        'High-income audience',
        'Performance content affinity',
        'Wearable comp: 1.6× CVR',
      ],
      predictions: [
        { label: 'Predicted CVR', value: '2.7%', positive: true },
        { label: 'Est. CPM', value: '$25', positive: false },
        { label: 'CTR vs category', value: '+28%', positive: true },
      ],
      riskNote: null,
    },
    {
      id: 'noom',
      brandName: 'Noom',
      category: 'Health Tech · Behavior Change',
      iconInitials: 'NO',
      iconBg: '#FAEEDA',
      iconColor: '#633806',
      score: 81,
      tags: [
        { label: 'Non-obvious match', bg: 'var(--amber-100)', color: 'var(--amber-800)' },
        { label: 'Moderate confidence', bg: 'var(--gray-100)', color: 'var(--gray-600)' },
      ],
      reasoning:
        'Noom targets people motivated by long-term behavior change — a psychological profile that over-indexes heavily in audiences who repeatedly return to the same creators. Your <strong>54% repeat viewer rate</strong> is the signal. Only 3 comparable pairings exist, but all three outperformed category CVR.',
      signals: [
        'Repeat viewer loyalty signal',
        'Behavior-change content affinity',
        '3 comp pairings: all above CVR avg',
        'Non-endemic — low CPM competition',
      ],
      predictions: [
        { label: 'Predicted CVR', value: '2.4%', positive: true },
        { label: 'Est. CPM', value: '$24', positive: false },
        { label: 'CTR vs category', value: '+22%', positive: true },
      ],
      riskNote:
        'Moderate confidence — only 3 comparable pairings in dataset. Recommend a 2-integration test before long-term commitment.',
    },
  ],
};
