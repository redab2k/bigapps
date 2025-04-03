import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:py-32">
      <SignIn />
    </main>
  );
}
