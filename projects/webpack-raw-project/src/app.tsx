import React from 'react';
import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { ThemeSwitcher } from './components/theme-switcher';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <FirstComponent />
    </div>
  );
};
