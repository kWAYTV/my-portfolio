'use client';

import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster richColors theme='system' />
    </ThemeProvider>
  );
}
