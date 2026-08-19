import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In — 9jaPrice",
  description: "Sign in to your 9jaPrice developer account to access your API keys, usage analytics, and the API playground.",
};

export default function LoginPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 selection:bg-primary selection:text-on-primary">
      <LoginForm />
    </main>
  );
}
