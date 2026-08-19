import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In — 9jaPrice",
  description: "Sign in to your 9jaPrice developer account to access your API keys, usage analytics, and the API playground.",
};

export default function LoginPage() {
  return (
    <main className="bg-[#f7f9fb] min-h-screen w-full flex flex-col justify-center items-center px-4 py-12 selection:bg-[#006b3f] selection:text-white">
      <LoginForm />
    </main>
  );
}
