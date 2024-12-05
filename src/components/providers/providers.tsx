'use client';

import { Toaster } from 'sonner';

import { TabTitleChanger } from '@/components/core/reusable/tab-title-changer';
import { ThemeProvider } from '@/components/providers/theme-provider';
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
