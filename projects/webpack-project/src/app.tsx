import React from 'react';
import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { Button } from '@fedorovskyi/ui-kit-linaria/button';
import { ThemeSwitcher } from './components/theme-switcher';
import { InternalCard } from './components/internal-card';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <FirstComponent />
      <Button color="primary">Button</Button>
      <InternalCard />
    </div>
  );
};
