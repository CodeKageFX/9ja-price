"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, type SignupFormData } from "@/lib/schema/signupSchema";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { TrendingUp, User, Mail, Lock, ShieldCheck, Code } from "lucide-react";
import AuthContaner from "@/components/auth-pages/AuthContaner";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupSchema),
    mode: "onTouched",
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const passwordField = register("password");
  const confirmPasswordField = register("confirm_password");

  function onSubmit(data: SignupFormData) {
    console.log(data);
  }
  return (
    <AuthContaner>
      <div className="text-center mb-8">
        <h1 className="text-[20px] font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <TrendingUp className="w-7 h-7 text-primary" strokeWidth={2.5} />
          9jaPrice
        </h1>
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#191c1e] mb-2 leading-tight">
          Create your developer account
        </h2>
        <p className="text-[14px] text-on-surface-variant">
          Get your free API key and start building with Nigerian food-price
          data.nt.
        </p>
      </div>

      {/* Signup Card */}

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name Field */}
        <div>
          <label className={LABEL_CLASS} htmlFor="name">
            Name
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 py-2 grid place-items-center pointer-events-none text-on-surface-variant">
              <User className="size-5" />
            </span>
            <input
              className={INPUT_CLASS}
              autoComplete="name"
              id="name"
              placeholder="John Doe"
              required
              type="text"
              {...register("full_name")}
            />
          </div>
          {errors.full_name && (
            <p aria-live="polite" className="text-sm text-red-500">
              {errors.full_name.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className={LABEL_CLASS} htmlFor="email">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <Mail className="size-5" />
            </div>
            <input
              className={INPUT_CLASS}
              autoComplete="email"
              id="email"
              placeholder="developer@example.com"
              required
              type="email"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p aria-live="polite" className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className={LABEL_CLASS} htmlFor="password">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <Lock className="size-5" />
            </div>
            <input
              className={INPUT_CLASS}
              autoComplete="new-password"
              id="password"
              placeholder="••••••••"
              required
              type="password"
              {...passwordField}
              onChange={(event) => {
                passwordField.onChange(event);
                if (getValues("confirm_password")) {
                  trigger("confirm_password");
                }
              }}
            />
          </div>
          {errors.password && (
            <p aria-live="polite" className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className={LABEL_CLASS} htmlFor="confirm-password">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <ShieldCheck className="size-5" />
            </div>
            <input
              className={INPUT_CLASS}
              autoComplete="new-password"
              id="confirm-password"
              placeholder="••••••••"
              required
              type="password"
              {...confirmPasswordField}
              onChange={(event) => {
                confirmPasswordField.onChange(event);
                if (getValues("confirm_password")) {
                  trigger("confirm_password");
                }
              }}
            />
          </div>
          {errors.confirm_password && (
            <p aria-live="polite" className="text-sm text-red-500">
              {errors.confirm_password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button className="w-full" size="lg" type="submit" disabled={!isValid}>
          Create Account
        </Button>
      </form>

      <div className="mt-8 text-center space-y-4">
        <p className="text-[14px] text-on-surface-variant">
          Already have an account?{" "}
          <Link
            className="text-primary hover:text-primary-container font-medium transition-colors"
            href="/login"
          >
            Sign in
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
  "w-full px-4 py-2 pl-10 bg-white border border-border-subtle rounded-lg text-sm text-on-surface focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-colors outline-none";
