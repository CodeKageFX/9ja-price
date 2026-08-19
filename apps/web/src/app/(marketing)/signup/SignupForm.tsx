"use client";

import Link from "next/link";
import { TrendingUp, User, Mail, Lock, ShieldCheck } from "lucide-react";

export function SignupForm() {
  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-[20px] font-bold text-[#006b3f] inline-flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-[#006b3f]" strokeWidth={2.5} />
          9jaPrice
        </h1>
      </div>

      {/* Signup Card */}
      <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] p-8">
        <div className="mb-8 text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#191c1e] mb-2 leading-tight">
            Create your developer account
          </h2>
          <p className="text-[14px] text-[#3e4a41]">
            Get your free API key and start building with Nigerian food-price data.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
          <div>
            <label className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase mb-1" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3e4a41]">
                <User className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-[#e2e8f0] rounded-lg bg-white text-[#191c1e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                type="text"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3e4a41]">
                <Mail className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-[#e2e8f0] rounded-lg bg-white text-[#191c1e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all"
                id="email"
                name="email"
                placeholder="developer@example.com"
                required
                type="email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3e4a41]">
                <Lock className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-[#e2e8f0] rounded-lg bg-white text-[#191c1e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-[12px] font-semibold tracking-wider text-[#3e4a41] uppercase mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#3e4a41]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-[#e2e8f0] rounded-lg bg-white text-[#191c1e] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#008751]/20 focus:border-[#008751] transition-all"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[14px] font-semibold text-white bg-[#008751] hover:bg-[#006b3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008751] transition-colors"
            type="submit"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            className="text-[14px] text-[#006b3f] hover:text-[#008751] transition-colors"
            href="/login"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
