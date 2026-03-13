"use client";
import { useState } from "react";
import Link from "next/link";

type SubscriptionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl border border-border overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-slate-50 shrink-0">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Choose Your Path</h2>
            <p className="text-sm text-slate-500 mt-1">Upgrade your SME account to post more missions and access advanced AI matching.</p>
          </div>
          <button onClick={onClose} className="btn-icon p-1.5 hover:bg-slate-200">
            <span className="material-symbols-rounded text-[22px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto bg-surface-2 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Free Tier */}
            <div className="bg-white rounded-2xl border border-border p-6 flex flex-col">
              <div className="mb-6">
                <span className="badge-gray mb-3">Starter</span>
                <h3 className="text-2xl font-bold text-slate-900">Free</h3>
                <p className="text-sm text-slate-500 mt-2">Perfect for exploring the platform and your first hire.</p>
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-6">
                $0 <span className="text-base font-medium text-slate-400">/ forever</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  { text: "1 Active mission at a time", inc: true },
                  { text: "Standard AI Matching", inc: true },
                  { text: "Up to 5 candidate profiles", inc: true },
                  { text: "Email support", inc: true },
                  { text: "Automated CV Ranking", inc: false },
                  { text: "Dedicated account manager", inc: false },
                ].map((f, i) => (
                  <li key={i} className={`flex items-start gap-3 text-sm ${f.inc ? "text-slate-700" : "text-slate-400"}`}>
                    <span className={`material-symbols-rounded text-[20px] shrink-0 ${f.inc ? "text-emerald-500" : "text-slate-300"}`}>
                      {f.inc ? "check_circle" : "cancel"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href="/sme/create-mission" className="btn-secondary w-full justify-center">
                Continue with Free
              </Link>
            </div>

            {/* Pro Tier (Highlighted) */}
            <div className="bg-gradient-to-b from-primary-600 to-accent-600 relative rounded-2xl border-2 border-primary-500 p-0.5 flex flex-col shadow-xl -mt-4 mb-4 md:-mt-4 md:-mb-4 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-primary-400 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
              <div className="bg-white rounded-[14px] p-6 flex flex-col h-full overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-16 -mt-16 opacity-50" />
                <div className="mb-6 relative z-10">
                  <span className="badge-indigo mb-3">Growth</span>
                  <h3 className="text-2xl font-bold text-primary-700">Pro</h3>
                  <p className="text-sm text-slate-600 mt-2">Supercharge your recruitment with advanced AI insights.</p>
                </div>
                <div className="text-4xl font-extrabold text-slate-900 mb-6 relative z-10">
                  $49 <span className="text-base font-medium text-slate-400">/ month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {[
                    { text: "5 Active missions", inc: true },
                    { text: "Advanced Semantic Matching", inc: true },
                    { text: "Unlimited candidate profiles", inc: true },
                    { text: "Automated CV Ranking", inc: true },
                    { text: "Priority support (24h)", inc: true },
                    { text: "Custom AI matching parameters", inc: false },
                  ].map((f, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm ${f.inc ? "text-slate-800 font-medium" : "text-slate-400"}`}>
                      <span className={`material-symbols-rounded text-[20px] shrink-0 ${f.inc ? "text-primary-500" : "text-slate-300"}`}>
                        {f.inc ? "check_circle" : "cancel"}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link href="/sme/create-mission" className="btn-primary w-full justify-center relative z-10 py-3 shadow-lg shadow-primary-500/30">
                  Start Pro Trial
                </Link>
              </div>
            </div>

            {/* Ultra Tier */}
            <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6 flex flex-col text-slate-300 shadow-xl">
              <div className="mb-6">
                <span className="badge-purple mb-3 bg-white/10 text-white border-white/20">Enterprise</span>
                <h3 className="text-2xl font-bold text-white">Ultra</h3>
                <p className="text-sm text-slate-400 mt-2">For high-volume hiring teams requiring maximum flexibility.</p>
              </div>
              <div className="text-4xl font-extrabold text-white mb-6">
                 $149 <span className="text-base font-medium text-slate-500">/ month</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  { text: "Unlimited active missions", inc: true },
                  { text: "Custom AI matching parameters", inc: true },
                  { text: "Direct interview scheduling", inc: true },
                  { text: "Dedicated account manager", inc: true },
                  { text: "Custom API & integrations", inc: true },
                  { text: "White-labeled platform", inc: true },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="material-symbols-rounded text-[20px] shrink-0 text-cyan-400">
                      verified
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href="/sme/create-mission" className="btn inline-flex items-center justify-center gap-2 font-semibold bg-white text-slate-900 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all focus:ring-slate-300 w-full">
                Upgrade to Ultra
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
