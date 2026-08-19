"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, TrendingUp, Code } from "lucide-react";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-white border border-[#e2e8f0] rounded-xl p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[20px] font-bold text-[#006b3f] mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="w-7 h-7 text-[#006b3f]" strokeWidth={2.5} />
          9jaPrice
        </h1>
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#191c1e] mb-2 leading-tight">
          Welcome back
        </h2>
        <p className="text-[14px] text-[#3e4a41]">
          Sign in to your developer account.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase mb-2"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="w-full px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-[14px] text-[#191c1e] focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-colors outline-none"
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
              className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase"
              htmlFor="password"
            >
              Password
            </label>
            <Link
              className="text-[14px] text-[#006b3f] hover:text-[#008751] transition-colors"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-[14px] text-[#191c1e] focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-colors outline-none pr-10"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type={showPassword ? "text" : "password"}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#3e4a41] hover:text-[#191c1e] transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-[#3e4a41]" />
              ) : (
                <Eye className="w-5 h-5 text-[#3e4a41]" />
              )}
            </button>
          </div>
        </div>

        <button
          className="w-full bg-[#008751] hover:bg-[#006b3f] text-white text-[14px] font-semibold py-3 px-4 rounded-lg transition-colors shadow-sm"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-[14px] text-[#3e4a41]">
          Don&apos;t have an account?{" "}
          <Link
            className="text-[#006b3f] hover:text-[#008751] font-medium transition-colors"
            href="/signup"
          >
            Create one
          </Link>
        </p>
        <div className="pt-6 border-t border-[#e2e8f0] flex items-center justify-center gap-2 text-[#3e4a41]">
          <Code className="w-4 h-4 text-[#3e4a41]" />
          <span className="text-[12px] font-semibold tracking-wider uppercase">
            Build with Nigerian food-price data
          </span>
        </div>
      </div>
    </div>
  );
}
