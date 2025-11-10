import { Demo } from '@mstyle/ui-kit/demo';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';
import { InternalCard } from '@/app/_components/internal-card';

export default function Home() {
  return (
      <div>
        <ThemeSwitcher />
        <Demo />
        <InternalCard />
      </div>
  );
}
