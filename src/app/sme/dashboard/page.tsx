import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";
import { SparkLine } from "@/components/Charts";

const stats = [
  { label: "Active Missions", value: "4", icon: "rocket_launch", bg: "bg-primary-50", color: "text-primary-600", points: "0,60 40,45 80,30 140,15" },
  { label: "AI Matches Found", value: "38", icon: "hub", bg: "bg-violet-50", color: "text-violet-600", points: "0,55 40,40 80,35 140,10" },
  { label: "Interviews Scheduled", value: "7", icon: "event", bg: "bg-cyan-50", color: "text-cyan-600", points: "0,65 40,50 80,35 140,20" },
  { label: "Completed Missions", value: "12", icon: "task_alt", bg: "bg-emerald-50", color: "text-emerald-600", points: "0,50 40,42 80,30 140,12" },
];

const myMissions = [
  { id: "MB-124", title: "Lead Data Architect", status: "Open", deadline: "Mar 28", matches: 12, top: 94 },
  { id: "MB-123", title: "React Frontend Developer", status: "Matching", deadline: "Apr 5", matches: 7, top: 87 },
  { id: "MB-121", title: "UX Researcher", status: "Open", deadline: "Apr 12", matches: 9, top: 76 },
  { id: "MB-118", title: "Backend API Engineer", status: "Open", deadline: "Apr 20", matches: 3, top: 0 },
];

const statusBadge: Record<string, string> = {
  Open: "badge-green",
  Matching: "badge-blue",
  Closed: "badge-gray",
};

export default function SmeDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="sme" />
      <div className="main-content flex-1">
        <Topbar
          title="Company Dashboard"
          subtitle="TechNova Inc. — Manage your missions and talent pipeline"
          actions={
            <Link href="/sme/create-mission" className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">add</span>
              New Mission
            </Link>
          }
        />
        <div className="page">
          {/* Welcome Banner */}
          <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-primary-600 to-violet-600 text-white flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <span className="material-symbols-rounded text-[28px]">business_center</span>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-lg mb-0.5">Good afternoon, TechNova 👋</h2>
              <p className="text-primary-100 text-sm">You have 12 new candidate matches since yesterday. Start reviewing now.</p>
            </div>
            <Link href="/sme/matching" className="bg-white text-primary-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-all shrink-0">
              Review Matches
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${s.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-rounded text-[18px] ${s.color}`}>{s.icon}</span>
                  </div>
                </div>
                <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                <div className="h-8 mt-2 opacity-60">
                  <SparkLine color="#6366f1" points={s.points} />
                </div>
              </div>
            ))}
          </div>

          {/* My Missions */}
          <div className="card mb-6">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-sm font-bold text-slate-900">My Active Missions</h2>
              <Link href="/sme/missions" className="btn-ghost text-xs">
                View all
                <span className="material-symbols-rounded text-[14px]">arrow_forward</span>
              </Link>
            </div>
            <div className="divide-y divide-border">
              {myMissions.map((m) => (
                <div key={m.id} className="flex items-center gap-4 p-4 hover:bg-surface-2 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-rounded text-primary-600 text-[18px]">rocket_launch</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">{m.title}</p>
                    <p className="text-xs text-slate-400">{m.id} · Deadline: {m.deadline}</p>
                  </div>
                  <span className={statusBadge[m.status]}>{m.status}</span>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-slate-900">{m.matches} matches</p>
                    {m.top > 0 && <p className="text-xs text-emerald-600 font-semibold">Top: {m.top}%</p>}
                  </div>
                  <Link href="/sme/matching" className="btn-primary btn-sm shrink-0">
                    <span className="material-symbols-rounded text-[14px]">hub</span>
                    Review
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
