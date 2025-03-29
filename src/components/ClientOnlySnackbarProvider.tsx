
'use client';

import { SnackbarProvider } from 'notistack';

export default function ClientOnlySnackbarProvider({ children }: { children: React.ReactNode }) {
  return <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>;
}