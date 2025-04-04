import type { Metadata } from "next";
import Login from "./_component/login";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default async function page() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return <Login />;
}
