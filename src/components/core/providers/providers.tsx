'use client';

import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/core/providers/theme-provider';
import { TabTitleChanger } from '@/components/core/reusable/tab-title-changer';
import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <TooltipProvider>
        <TabTitleChanger />
        {children}
      </TooltipProvider>
      <Toaster richColors theme='system' />
    </ThemeProvider>
  );
}
