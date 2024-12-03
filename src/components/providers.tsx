'use client';

import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/providers/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <Toaster richColors theme='system' />
    </ThemeProvider>
  );
}
