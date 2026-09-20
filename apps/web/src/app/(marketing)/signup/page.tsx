import type { Metadata } from "next";
import { SignupForm } from "@/components/auth-pages/SignupForm";
import AuthMain from "@/components/auth-pages/AuthMain";

export const metadata: Metadata = {
  title: "Create Account — 9jaPrice",
  description:
    "Get your free API key and start building with Nigerian food-price data.",
};

export default function SignupPage() {
  return (
    <AuthMain>
      <SignupForm />
    </AuthMain>
  );
}
