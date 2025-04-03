import type { Metadata } from "next";
import Login from "./_component/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

export default function page() {
  return <Login />;
}
