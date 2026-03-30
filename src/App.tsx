import { creatorData } from './data/creatorData';
import { TopBar } from './components/TopBar';
import { FingerprintSection } from './components/FingerprintSection';
import { GrowthSignals } from './components/GrowthSignals';
import { ArcSection } from './components/ArcSection';
import { MatchSection } from './components/MatchSection';

const pageStyle: React.CSSProperties = {
  maxWidth: 'var(--page-max-width)',
  margin: '0 auto',
  padding: 'var(--page-padding)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--section-gap)',
};

function App() {
  return (
    <div style={pageStyle}>
      <TopBar profile={creatorData.profile} />
      <FingerprintSection data={creatorData} />
      <GrowthSignals signals={creatorData.growthSignals} />
      <ArcSection arc={creatorData.arc} />
      <MatchSection matches={creatorData.matches} />
    </div>
  );
}

export default App;
