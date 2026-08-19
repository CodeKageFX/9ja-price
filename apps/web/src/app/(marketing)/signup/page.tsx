import type { Metadata } from "next";
import { SignupForm } from "./SignupForm";

export const metadata: Metadata = {
  title: "Create Account — 9jaPrice",
  description: "Get your free API key and start building with Nigerian food-price data.",
};

export default function SignupPage() {
  return (
    <main className="bg-[#f7f9fb] min-h-screen w-full flex items-center justify-center p-4 antialiased selection:bg-[#006b3f] selection:text-white">
      <SignupForm />
    </main>
  );
}
