"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function SettingsContent() {
  const [fullName, setFullName] = useState("Jane Doe");
  const [email, setEmail] = useState("jane.doe@example.com");
  const [apiVersion, setApiVersion] = useState("v2");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-8">
      {/* 1. Profile Section */}
      <section className="bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-border-subtle bg-surface">
          <h3 className="text-[20px] font-bold text-on-background">Profile</h3>
          <p className="text-[14px] text-on-surface-variant">
            Update your personal information.
          </p>
        </div>
        <form onSubmit={handleSaveProfile} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label
                className="block text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="w-full bg-white border border-border-subtle rounded-lg px-4 py-2 text-[14px] text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label
                className="block text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="w-full bg-white border border-border-subtle rounded-lg px-4 py-2 text-[14px] text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            {savedSuccess ? (
              <span className="text-[14px] font-semibold text-[#22c55e]">
                ✓ Profile saved successfully
              </span>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="bg-primary-container text-white text-[14px] font-semibold py-2 px-5 rounded-lg hover:bg-primary transition-colors shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>

      {/* 2. Security Section */}
      <section className="bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-border-subtle bg-surface">
          <h3 className="text-[20px] font-bold text-on-background">Security</h3>
          <p className="text-[14px] text-on-surface-variant">
            Manage your password and authentication settings.
          </p>
        </div>
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-[16px] text-on-background font-medium">
              Password
            </p>
            <p className="text-[14px] text-on-surface-variant">
              Last changed 3 months ago
            </p>
          </div>
          <button className="bg-white border border-border-subtle text-on-background text-[14px] font-medium py-2 px-5 rounded-lg hover:bg-surface-container transition-colors whitespace-nowrap shadow-sm">
            Change Password
          </button>
        </div>
      </section>

      {/* 3. API Preferences Section */}
      <section className="bg-white border border-border-subtle rounded-xl overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-border-subtle bg-surface">
          <h3 className="text-[20px] font-bold text-on-background">
            API Preferences
          </h3>
          <p className="text-[14px] text-on-surface-variant">
            Configure default behaviors for your API requests.
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            <label
              className="block text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider"
              htmlFor="apiVersion"
            >
              Default API Version
            </label>
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border border-border-subtle rounded-lg px-4 py-2 font-mono text-[14px] text-on-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors pr-10 shadow-sm"
                id="apiVersion"
                value={apiVersion}
                onChange={(e) => setApiVersion(e.target.value)}
              >
                <option value="v2">v2 (Latest)</option>
                <option value="v1">v1 (Legacy)</option>
              </select>
              <ChevronDown className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
            </div>
            <p className="text-[12px] text-on-surface-variant mt-1">
              Requests without an explicit version will default to this
              selection.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Danger Zone */}
      <section className="bg-error-container/20 border border-error-container  rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-error-container/50 bg-error-container/10">
          <h3 className="text-[20px] font-bold text-error">Danger Zone</h3>
          <p className="text-[14px] text-on-surface-variant">
            Irreversible account actions.
          </p>
        </div>
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-[16px] text-on-background font-medium">
              Delete Account
            </p>
            <p className="text-[14px] text-on-surface-variant">
              Permanently delete your account, API keys, and all associated
              data.
            </p>
          </div>
          <button className="bg-error text-white text-[14px] font-semibold py-2 px-5 rounded-lg hover:bg-error/90 transition-colors whitespace-nowrap shadow-sm">
            Delete Account
          </button>
        </div>
      </section>
    </div>
  );
}
