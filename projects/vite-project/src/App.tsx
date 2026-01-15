import * as React from 'react';
import { Demo, Button } from '@mstyle/ui-kit';
import { ThemeSwitcher } from './components/theme-switcher';

const InternalCard = React.lazy(() =>
  import('./components/internal-card').then((module) => ({ default: module.InternalCard })),
);

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Demo />
      <br />
      <Button color="primary">Button</Button>
      <React.Suspense fallback={null}>
        <InternalCard />
      </React.Suspense>
    </>
  );
}

export default App;
