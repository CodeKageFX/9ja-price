"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type LoginFormData } from "@/lib/schema/loginSchema";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, TrendingUp, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthContaner from "@/components/auth-pages/AuthContaner";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onTouched",
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <AuthContaner>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[20px] font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2.5} />
          9jaPrice
        </h1>
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#191c1e] mb-2 leading-tight">
          Welcome back
        </h2>
        <p className="text-[14px] text-on-surface-variant">
          Sign in to your developer account.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label className={LABEL_CLASS} htmlFor="email">
            Email address
          </label>
          <input
            className={INPUT_CLASS}
            id="email"
            placeholder="developer@example.com"
            required
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm" aria-live="polite">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className={LABEL_CLASS} htmlFor="password">
              Password
            </label>
            <Link
              className="text-sm underline text-primary hover:text-primary-container transition-colors"
              href="#"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              className={`${INPUT_CLASS} pr-10`}
              id="password"
              placeholder="••••••••"
              required
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-[#191c1e] transition-colors"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-on-surface-variant" />
              ) : (
                <Eye className="w-5 h-5 text-on-surface-variant" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm" aria-live="polite">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button size="lg" type="submit" disabled={!isValid} className="w-full">
          Sign In
        </Button>
      </form>

      {/* Footer */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-[14px] text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <Link
            className="text-primary hover:text-primary-container font-medium transition-colors"
            href="/signup"
          >
            Create one
          </Link>
        </p>
        <div className="pt-6 border-t border-border-subtle flex items-center justify-center gap-2 text-on-surface-variant">
          <Code className="w-4 h-4 text-on-surface-variant" />
          <span className="text-[12px] font-semibold tracking-wider uppercase">
            Build with Nigerian food-price data
          </span>
        </div>
      </div>
    </AuthContaner>
  );
}

const LABEL_CLASS =
  "text-sm font-semibold tracking-wider text-on-surface-variant uppercase mb-2";

const INPUT_CLASS =
  "w-full px-4 py-2 bg-white border border-border-subtle rounded-lg text-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-colors outline-none";
