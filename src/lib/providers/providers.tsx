import { Toaster } from "sonner";
import { AuthProvider } from "./auth-provider";
import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      <Toaster position="top-right" richColors closeButton />
      {children}
      <Footer />
    </AuthProvider>
  );
}
