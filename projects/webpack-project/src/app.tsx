import React from 'react';
import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { ThemeSwitcher } from './components/theme-switcher';
import { InternalCard } from './components/internal-card';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <FirstComponent />
      <InternalCard />
    </div>
  );
};
