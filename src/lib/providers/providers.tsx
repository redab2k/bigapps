import { Toaster } from "sonner";
import { AuthProvider } from "./auth-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors closeButton />
      {children}
    </AuthProvider>
  );
}
