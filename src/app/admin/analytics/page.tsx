import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { BarChart, DonutChart, HorizontalBar } from "@/components/Charts";

const monthlyData = [
  { label: "Aug", value: 18 }, { label: "Sep", value: 24 }, { label: "Oct", value: 21 },
  { label: "Nov", value: 30 }, { label: "Dec", value: 27 }, { label: "Jan", value: 35 },
  { label: "Feb", value: 42 }, { label: "Mar", value: 38 },
];

const categoryData = [
  { label: "Engineering", value: 38 }, { label: "Design", value: 22 },
  { label: "Data", value: 30 }, { label: "Marketing", value: 14 },
  { label: "Finance", value: 10 }, { label: "PM", value: 8 },
];

const topTalents = [
  { name: "Sarah Chen", missions: 94 },
  { name: "Marc Dupont", missions: 87 },
  { name: "Aisha Patel", missions: 81 },
  { name: "Lucas Moreira", missions: 76 },
  { name: "Yuki Tanaka", missions: 68 },
];

const kpis = [
  { label: "Avg Matching Accuracy", value: "94.2%", change: "+2.4%", pos: true, icon: "hub", color: "text-primary-600", bg: "bg-primary-50" },
  { label: "Avg Completion Time", value: "12.4d", change: "-1.2d", pos: true, icon: "schedule", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Talent Engagement Rate", value: "78%", change: "+5%", pos: true, icon: "trending_up", color: "text-violet-600", bg: "bg-violet-50" },
  { label: "Mission Success Rate", value: "88%", change: "+3%", pos: true, icon: "task_alt", color: "text-cyan-600", bg: "bg-cyan-50" },
];

export default function AdminAnalytics() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="Analytics & Insights"
          subtitle="Platform performance metrics and matching intelligence"
          actions={
            <button className="btn-secondary">
              <span className="material-symbols-rounded text-[17px]">download</span>
              Export Report
            </button>
          }
        />
        <div className="page">
          {/* Date range */}
          <div className="flex items-center gap-3 mb-6">
            {["Last 7 days", "Last 30 days", "Last 3 months", "Custom"].map((d, i) => (
              <button
                key={d}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  i === 1 ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-600 border-border hover:border-primary-300"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {kpis.map((k) => (
              <div key={k.label} className="stat-card flex items-start gap-3">
                <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-rounded text-[20px] ${k.color}`}>{k.icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">{k.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">{k.label}</p>
                  <span className="badge-green text-[10px] mt-1">{k.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts row 1 */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
            <div className="xl:col-span-2 card-p">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">Monthly Mission Volume</h2>
                  <p className="text-xs text-slate-400">Active missions posted per month</p>
                </div>
                <span className="badge-indigo text-[11px]">Aug 2024 – Mar 2025</span>
              </div>
              <BarChart data={monthlyData} color="#6366f1" />
            </div>

            <div className="card-p">
              <div className="mb-4">
                <h2 className="text-sm font-bold text-slate-900">AI Matching Accuracy</h2>
                <p className="text-xs text-slate-400">Semantic precision score</p>
              </div>
              <div className="flex items-center justify-center my-4">
                <DonutChart value={94} color="#6366f1" size={120} />
              </div>
              <div className="space-y-2">
                {[
                  { label: "Technical Match", val: 96, c: "#3b82f6" },
                  { label: "Domain Alignment", val: 91, c: "#8b5cf6" },
                  { label: "Cultural Fit", val: 89, c: "#f43f5e" },
                ].map((r) => (
                  <HorizontalBar key={r.label} label={r.label} value={r.val} color={r.c} />
                ))}
              </div>
            </div>
          </div>

          {/* Charts row 2 */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="card-p">
              <h2 className="text-sm font-bold text-slate-900 mb-4">Top Active Talents</h2>
              <div className="space-y-3">
                {topTalents.map((t, i) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-400 w-4">#{i + 1}</span>
                    <div className="avatar text-[10px] w-7 h-7">{t.name.split(" ").map(n=>n[0]).join("")}</div>
                    <HorizontalBar label={t.name} value={t.missions} color="#6366f1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="card-p">
              <h2 className="text-sm font-bold text-slate-900 mb-4">Missions by Category</h2>
              <BarChart data={categoryData} color="#8b5cf6" />
              <div className="grid grid-cols-3 gap-2 mt-4">
                {categoryData.map((c) => (
                  <div key={c.label} className="text-center">
                    <p className="text-sm font-bold text-slate-900">{c.value}</p>
                    <p className="text-xs text-slate-400">{c.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
