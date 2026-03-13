"use client";

type TopbarProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
};

export default function Topbar({ title, subtitle, actions }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="flex items-center gap-3">
        <button className="lg:hidden btn-icon p-1 -ml-2">
          <span className="material-symbols-rounded text-[24px]">menu</span>
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-tight">{title}</h1>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5 hidden sm:block">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <div className="topbar-search hidden md:flex">
          <span className="material-symbols-rounded text-[18px] text-slate-400">
            search
          </span>
          <input
            className="bg-transparent outline-none flex-1 text-slate-700 placeholder-slate-400 border-none p-0 focus:ring-0 shadow-none focus:outline-none ring-0 w-full"
            placeholder="Search anything…"
          />
          <kbd className="text-[10px] bg-slate-200 text-slate-400 rounded px-1.5 py-0.5 ml-2">
            ⌘K
          </kbd>
        </div>

        {/* Notifications bell */}
        <button className="btn-icon relative">
          <span className="material-symbols-rounded text-[20px]">
            notifications
          </span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Help */}
        <button className="btn-icon">
          <span className="material-symbols-rounded text-[20px]">help</span>
        </button>

        {/* Actions */}
        {actions && <div className="flex items-center gap-2 pl-2 border-l border-border">{actions}</div>}
      </div>
    </header>
  );
}
