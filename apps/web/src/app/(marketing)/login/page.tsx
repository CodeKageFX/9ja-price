import type { Metadata } from "next";
import { LoginForm } from "@/components/auth-pages/LoginForm";

import AuthMain from "@/components/auth-pages/AuthMain";

export const metadata: Metadata = {
  title: "Sign In — 9jaPrice",
  description:
    "Sign in to your 9jaPrice developer account to access your API keys, usage analytics, and the API playground.",
};

export default function LoginPage() {
  return (
    <AuthMain>
      <LoginForm />
    </AuthMain>
  );
}
