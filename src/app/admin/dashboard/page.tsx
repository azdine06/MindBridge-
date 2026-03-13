import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { SparkLine, DonutChart, BarChart } from "@/components/Charts";
import Link from "next/link";

const stats = [
  { label: "Total Missions", value: "124", change: "+12%", icon: "rocket_launch", color: "text-primary-600", bg: "bg-primary-50", positive: true, points: "0,60 20,50 40,55 60,35 80,25 100,20 120,15 140,8" },
  { label: "Active Talents", value: "856", change: "+8%", icon: "group", color: "text-emerald-600", bg: "bg-emerald-50", positive: true, points: "0,65 20,55 40,60 60,45 80,38 100,30 120,22 140,15" },
  { label: "Matching Runs", value: "2,340", change: "+24%", icon: "hub", color: "text-violet-600", bg: "bg-violet-50", positive: true, points: "0,70 20,58 40,50 60,40 80,32 100,22 120,18 140,10" },
  { label: "Completed Projects", value: "89", change: "-2%", icon: "task_alt", color: "text-orange-600", bg: "bg-orange-50", positive: false, points: "0,30 20,40 40,35 60,50 80,48 100,55 120,60 140,65" },
];

const recentMissions = [
  { id: "MB-124", title: "Lead Data Architect", company: "TechNova", deadline: "Mar 28", status: "Open", matches: 12 },
  { id: "MB-123", title: "React Frontend Dev", company: "FinEase", deadline: "Apr 5", status: "Matching", matches: 7 },
  { id: "MB-122", title: "ML Engineer (NLP)", company: "DataSphere", deadline: "Mar 20", status: "Closed", matches: 0 },
  { id: "MB-121", title: "UX Researcher", company: "DesignCo", deadline: "Apr 12", status: "Open", matches: 9 },
  { id: "MB-120", title: "DevOps Engineer", company: "CloudPlus", deadline: "Mar 30", status: "Matching", matches: 4 },
];

const statusColor: Record<string, string> = {
  Open: "badge-green",
  Matching: "badge-blue",
  Closed: "badge-gray",
};

const topTalents = [
  { name: "Sarah Chen", score: 94, missions: 5 },
  { name: "Marc Dupont", score: 89, missions: 3 },
  { name: "Aisha Patel", score: 87, missions: 4 },
  { name: "Lucas Moreira", score: 82, missions: 2 },
];

const barData = [
  { label: "Jan", value: 14 },
  { label: "Feb", value: 22 },
  { label: "Mar", value: 18 },
  { label: "Apr", value: 30 },
  { label: "May", value: 26 },
  { label: "Jun", value: 38 },
  { label: "Jul", value: 42 },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="Platform Overview"
          subtitle="Real-time recruitment and AI matching intelligence"
          actions={
            <>
              <Link href="/admin/matching" className="btn-secondary">
                <span className="material-symbols-rounded text-[17px]">hub</span>
                Run Matching
              </Link>
              <Link href="/admin/missions" className="btn-primary">
                <span className="material-symbols-rounded text-[17px]">add</span>
                New Mission
              </Link>
            </>
          }
        />

        <div className="page">
          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-rounded text-[20px] ${s.color}`}>
                      {s.icon}
                    </span>
                  </div>
                  <span className={`badge ${s.positive ? "badge-green" : "badge-red"} text-[10px]`}>
                    {s.change}
                  </span>
                </div>
                <p className="text-2xl font-extrabold text-slate-900 mb-0.5">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
                <div className="h-10 mt-3 opacity-60">
                  <SparkLine color={s.positive ? "#6366f1" : "#f97316"} points={s.points} />
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            {/* Missions Table */}
            <div className="xl:col-span-2 card">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Recent Missions</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Latest SME mission activity</p>
                </div>
                <Link href="/admin/missions" className="btn-ghost text-xs">
                  View all
                  <span className="material-symbols-rounded text-[14px]">arrow_forward</span>
                </Link>
              </div>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mission</th>
                      <th>Company</th>
                      <th>Deadline</th>
                      <th>Status</th>
                      <th>Matches</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMissions.map((m) => (
                      <tr key={m.id}>
                        <td>
                          <div>
                            <p className="font-semibold text-slate-900 text-sm">{m.title}</p>
                            <p className="text-xs text-slate-400">{m.id}</p>
                          </div>
                        </td>
                        <td className="text-slate-600">{m.company}</td>
                        <td className="text-slate-600">{m.deadline}</td>
                        <td>
                          <span className={statusColor[m.status]}>{m.status}</span>
                        </td>
                        <td>
                          <span className="font-semibold text-slate-900">{m.matches}</span>
                        </td>
                        <td>
                          <Link href="/admin/matching" className="btn-ghost btn-sm">
                            <span className="material-symbols-rounded text-[15px]">hub</span>
                            Match
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar widgets */}
            <div className="flex flex-col gap-6">
              {/* AI Accuracy */}
              <div className="card-p">
                <h2 className="text-sm font-bold text-slate-900 mb-1">AI Accuracy Score</h2>
                <p className="text-xs text-slate-400 mb-4">Overall semantic matching precision</p>
                <div className="flex items-center justify-center mb-4">
                  <DonutChart value={94} color="#6366f1" size={100} />
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-primary-50 border border-primary-100">
                  <span className="material-symbols-rounded text-primary-600 text-[16px]">trending_up</span>
                  <span className="text-xs text-primary-700 font-medium">+2.4% from last week</span>
                </div>
              </div>

              {/* Top talents */}
              <div className="card-p">
                <h2 className="text-sm font-bold text-slate-900 mb-4">Top Performing Talents</h2>
                <div className="flex flex-col gap-3">
                  {topTalents.map((t, i) => (
                    <div key={t.name} className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-400 w-4">#{i + 1}</span>
                      <div className="avatar text-[10px] w-7 h-7 text-[10px]">{t.name.split(" ").map(n=>n[0]).join("")}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800 truncate">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.missions} missions</p>
                      </div>
                      <span className="text-sm font-bold text-primary-600">{t.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Monthly missions bar chart */}
            <div className="card-p">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Missions per Month</h2>
                  <p className="text-xs text-slate-400">2025 mission volume overview</p>
                </div>
                <span className="badge-indigo">2025</span>
              </div>
              <BarChart data={barData} color="#6366f1" />
            </div>

            {/* Quick Actions */}
            <div className="card-p">
              <h2 className="text-sm font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "hub", label: "Run AI Matching", href: "/admin/matching", color: "bg-primary-600 hover:bg-primary-700 text-white" },
                  { icon: "compare_arrows", label: "Comparison View", href: "/admin/comparison", color: "bg-violet-600 hover:bg-violet-700 text-white" },
                  { icon: "rocket_launch", label: "Review Missions", href: "/admin/missions", color: "bg-slate-900 hover:bg-slate-800 text-white" },
                  { icon: "bar_chart_4_bars", label: "See Analytics", href: "/admin/analytics", color: "bg-cyan-500 hover:bg-cyan-600 text-white" },
                ].map((a) => (
                  <Link
                    key={a.label}
                    href={a.href}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all hover:-translate-y-0.5 shadow-sm ${a.color}`}
                  >
                    <span className="material-symbols-rounded text-[26px]">{a.icon}</span>
                    <span className="text-xs font-semibold leading-tight">{a.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
