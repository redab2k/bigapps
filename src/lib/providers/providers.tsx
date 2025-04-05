import { Toaster } from "sonner";
import { AuthProvider } from "./auth-provider";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Header />
      <Toaster position="top-right" richColors closeButton />
      {children}
      <Footer />
    </AuthProvider>
  );
}
