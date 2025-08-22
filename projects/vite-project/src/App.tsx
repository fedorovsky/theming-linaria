import * as React from 'react';
import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { Button } from '@fedorovskyi/ui-kit-linaria';
import { ThemeSwitcher } from './components/theme-switcher';

const InternalCard = React.lazy(() => import('./components/internal-card').then(module => ({ default: module.InternalCard })));

function App() {
  return (
    <>
      <ThemeSwitcher />
      <FirstComponent />
      <Button color="primary" shadow>Button</Button>
      <React.Suspense fallback={null}>
        <InternalCard />
      </React.Suspense>
    </>
  );
}

export default App;
