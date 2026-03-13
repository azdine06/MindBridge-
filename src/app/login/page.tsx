"use client";
import Link from "next/link";
import { useState } from "react";

const roles = [
  { id: "admin", label: "Admin", icon: "admin_panel_settings", href: "/admin/dashboard", desc: "Platform management & oversight" },
  { id: "sme", label: "SME / Company", icon: "business_center", href: "/sme/dashboard", desc: "Post missions & find talent" },
  { id: "talent", label: "Junior Talent", icon: "school", href: "/talent/dashboard", desc: "Browse & apply to missions" },
];

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("admin");
  const [email, setEmail] = useState("alex@mindbridge.ai");
  const [password, setPassword] = useState("••••••••••");
  const [loading, setLoading] = useState(false);

  const target = roles.find((r) => r.id === selectedRole)?.href ?? "/admin/dashboard";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = target;
    }, 900);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel — Brand */}
      <div className="hidden lg:flex flex-col justify-between w-[42%] relative overflow-hidden bg-sidebar p-12">
        {/* Decorative orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-600/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="sidebar-icon">M</div>
          <div>
            <p className="text-white text-xl font-bold">MindBridge</p>
            <p className="text-slate-500 text-xs uppercase tracking-widest">AI Matching ATS</p>
          </div>
        </div>

        {/* Headline */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Connecting Ambition<br />
            with <span className="text-primary-400">Opportunity.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-10">
            AI-powered semantic matching that pairs the best junior talent with
            the missions that matter.
          </p>

          {/* Feature pills */}
          <div className="flex flex-col gap-3">
            {[
              { icon: "psychology", text: "Semantic AI Matching Engine" },
              { icon: "verified", text: "Verified SME Missions" },
              { icon: "trending_up", text: "Real-time Matching Analytics" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary-400 text-[16px]">
                    {f.icon}
                  </span>
                </div>
                <span className="text-slate-300 text-sm">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5">
          <p className="text-slate-300 text-sm italic leading-relaxed">
            "MindBridge cut our hiring time by 60%. The AI understands context, not just keywords."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="avatar text-xs">JL</div>
            <div>
              <p className="text-white text-sm font-semibold">Julie Lefebvre</p>
              <p className="text-slate-500 text-xs">CTO at TechNova</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-surface-2">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="sidebar-icon w-8 h-8 text-sm">M</div>
            <span className="text-xl font-bold text-slate-900">MindBridge</span>
          </div>

          <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
            Welcome back
          </h1>
          <p className="text-slate-500 text-sm mb-8">
            Sign in to your workspace to continue.
          </p>

          {/* Role selector */}
          <div className="mb-6">
            <label className="form-label">Sign in as</label>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRole(r.id)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border text-center transition-all ${
                    selectedRole === r.id
                      ? "border-primary-500 bg-primary-50 text-primary-700"
                      : "border-border bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className="material-symbols-rounded text-[22px]">{r.icon}</span>
                  <span className="text-[11px] font-semibold leading-tight">{r.label}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
              <span className="material-symbols-rounded text-[14px]">info</span>
              {roles.find((r) => r.id === selectedRole)?.desc}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="form-label">Email address</label>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  mail
                </span>
                <input
                  type="email"
                  className="form-input pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="form-label mb-0">Password</label>
                <a href="#" className="text-xs text-primary-600 hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  lock
                </span>
                <input
                  type="password"
                  className="form-input pl-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-border text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember" className="text-sm text-slate-600">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 text-base relative overflow-hidden"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Signing in…
                </span>
              ) : (
                <>
                  <span className="material-symbols-rounded text-[18px]">login</span>
                  Sign in to {roles.find((r) => r.id === selectedRole)?.label}
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-primary-600 font-semibold hover:underline">
              Request access
            </a>
          </p>

          {/* Demo links */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-center text-slate-400 mb-3 font-medium uppercase tracking-wider">Quick Demo Access</p>
            <div className="grid grid-cols-3 gap-2">
              {roles.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  className="text-center text-xs py-2 rounded-lg border border-border hover:bg-surface-3 text-slate-600 transition-all"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
