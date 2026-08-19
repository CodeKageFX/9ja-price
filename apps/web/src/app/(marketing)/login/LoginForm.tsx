"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, TrendingUp, Code } from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-surface-container-lowest border border-border-subtle rounded-xl p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-display-lg text-title-md text-primary mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2.5} />
          9jaPrice
        </h1>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
          Welcome back
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Sign in to your developer account.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            className="block font-label-caps text-label-caps text-on-surface-variant mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="w-full px-4 py-2 bg-surface-white border border-border-subtle rounded-lg font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-colors outline-none"
            id="email"
            name="email"
            placeholder="developer@example.com"
            required
            type="email"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              className="block font-label-caps text-label-caps text-on-surface-variant"
              htmlFor="password"
            >
              Password
            </label>
            <Link
              className="font-body-sm text-body-sm text-primary hover:text-primary-container transition-colors"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 bg-surface-white border border-border-subtle rounded-lg font-body-sm text-body-sm text-on-surface focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-colors outline-none pr-10"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type={showPassword ? "text" : "password"}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-on-surface transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <button
          className="w-full bg-primary-container hover:bg-tertiary-container text-on-primary font-body-sm text-body-sm font-semibold py-3 px-4 rounded-lg transition-colors"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center space-y-4">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link
            className="text-primary hover:text-primary-container font-medium transition-colors"
            href="/signup"
          >
            Create one
          </Link>
        </p>
        <div className="pt-6 border-t border-border-subtle flex items-center justify-center gap-2 text-on-surface-variant">
          <Code className="w-4 h-4" />
          <span className="font-label-caps text-label-caps">
            Build with Nigerian food-price data
          </span>
        </div>
      </div>
    </div>
  );
}
