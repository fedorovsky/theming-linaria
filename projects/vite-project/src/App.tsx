import * as React from 'react';
import { Demo } from '@mstyle/ui-kit';
import { ThemeSwitcher } from './components/theme-switcher';

const InternalCard = React.lazy(() =>
  import('./components/internal-card').then((module) => ({ default: module.InternalCard })),
);

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Demo />
      <React.Suspense fallback={null}>
        <InternalCard />
      </React.Suspense>
    </>
  );
}

export default App;
