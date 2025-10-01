import React from 'react';
import { Demo } from '@fedorovskyi/ui-kit-linaria/demo';
import { Button } from '@fedorovskyi/ui-kit-linaria/button';
import { ThemeSwitcher } from './components/theme-switcher';

export const App = () => {
  return (
    <div>
      <ThemeSwitcher />
      <Demo />
      <Button color="primary">Button</Button>
    </div>
  );
};
