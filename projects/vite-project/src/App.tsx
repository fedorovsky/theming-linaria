import { FirstComponent } from '@fedorovskyi/ui-kit/first-component';
import { SecondComponent } from '@fedorovskyi/ui-kit/second-component';
import { ThemeSwitcher } from './components/theme-switcher';
import { InternalCard } from './components/internal-card';

function App() {
  return (
    <>
      <ThemeSwitcher />
      <InternalCard />
      <FirstComponent />
      <SecondComponent />
    </>
  );
}

export default App;
