import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { Button } from '@fedorovskyi/ui-kit-linaria/button';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { InternalCard } from '@/app/_components/internal-card';

export default function Home() {
  return (
      <div>
        <ThemeSwitcher />
        <FirstComponent />
        <Button color="primary" shadow>Button</Button>
        <InternalCard />
      </div>
  );
}
