import { FirstComponent } from '@fedorovskyi/ui-kit-linaria/first-component';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { InternalCard } from '@/app/_components/internal-card';

export default function Home() {
  return (
      <div>
        <ThemeSwitcher />
        <FirstComponent />
        <InternalCard />
      </div>
  );
}
