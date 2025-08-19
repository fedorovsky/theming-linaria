import * as React from 'react';
import { FirstComponent } from '@fedorovskyi/ui-kit/first-component';
import { SecondComponent } from '@fedorovskyi/ui-kit/second-component';
import { ThemeSwitcher } from './components/theme-switcher';

const InternalCard = React.lazy(() => import('./components/internal-card').then(module => ({ default: module.InternalCard })));

function App() {
  return (
    <>
      <ThemeSwitcher />
      <React.Suspense fallback={null}>
        <InternalCard />
      </React.Suspense>
      <FirstComponent />
      <SecondComponent />
    </>
  );
}

export default App;
