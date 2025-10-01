import * as React from 'react';
import { Demo } from '@fedorovskyi/ui-kit-linaria/demo';
import { Button } from '@fedorovskyi/ui-kit-linaria/button';
import { ThemeSwitcher } from './components/theme-switcher';

const InternalCard = React.lazy(() =>
  import('./components/internal-card').then((module) => ({ default: module.InternalCard })),
);

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Demo />
      <Button color="primary" shadow>
        Button
      </Button>
      <React.Suspense fallback={null}>
        <InternalCard />
      </React.Suspense>
    </>
  );
}

export default App;
