"use client";

import Link from "next/link";
import { TrendingUp, User, Mail, Lock, ShieldCheck } from "lucide-react";

export function SignupForm() {
  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="font-display-lg text-title-md font-bold text-primary inline-flex items-center gap-2">
          <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2.5} />
          9jaPrice
        </h1>
      </div>

      {/* Signup Card */}
      <div className="bg-surface-white border border-border-subtle rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.05)] p-8">
        <div className="mb-8 text-center">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
            Create your developer account
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Get your free API key and start building with Nigerian food-price data.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Name Field */}
          <div>
            <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                <User className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg bg-surface-white text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all"
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
            <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                <Mail className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg bg-surface-white text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all"
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
            <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                <Lock className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg bg-surface-white text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all"
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
            <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg bg-surface-white text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:border-primary-container transition-all"
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-body-sm font-body-sm font-medium text-on-primary bg-primary-container hover:bg-tertiary-container focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            type="submit"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            className="font-body-sm text-body-sm text-primary hover:text-tertiary-container transition-colors"
            href="/login"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
