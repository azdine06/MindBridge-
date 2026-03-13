import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

const missions = [
  { id: "MB-122", title: "ML Engineer (NLP)", company: "DataSphere", status: "In Progress", deadline: "Mar 20", progress: 70, priority: "High" },
  { id: "MB-119", title: "Data Analyst", company: "InsightLab", status: "Pending Review", deadline: "Mar 25", progress: 90, priority: "Medium" },
  { id: "MB-115", title: "Python Developer", company: "AutomateX", status: "Completed", deadline: "Mar 10", progress: 100, priority: "Low" },
];

const statusBadge: Record<string, string> = {
  "In Progress": "badge-blue",
  "Pending Review": "badge-orange",
  Completed: "badge-green",
};

const progressColor: Record<string, string> = {
  "In Progress": "#6366f1",
  "Pending Review": "#f59e0b",
  Completed: "#10b981",
};

export default function TalentDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="talent" />
      <div className="main-content flex-1">
        <Topbar
          title="My Dashboard"
          subtitle="Welcome back, Sarah Chen!"
        />
        <div className="page">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Active Missions", value: "2", icon: "rocket_launch", color: "text-primary-600", bg: "bg-primary-50" },
              { label: "Matching Score (avg)", value: "94%", icon: "hub", color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "Missions Completed", value: "5", icon: "task_alt", color: "text-violet-600", bg: "bg-violet-50" },
            ].map((s) => (
              <div key={s.label} className="stat-card flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-rounded text-[20px] ${s.color}`}>{s.icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Missions list */}
          <div className="card mb-6">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-sm font-bold text-slate-900">My Assigned Missions</h2>
            </div>
            <div className="divide-y divide-border">
              {missions.map((m) => (
                <div key={m.id} className="p-5 hover:bg-surface-2 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-slate-900 text-sm">{m.title}</p>
                        <span className={statusBadge[m.status]}>{m.status}</span>
                      </div>
                      <p className="text-xs text-slate-400">{m.id} · {m.company} · Deadline: {m.deadline}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {m.status !== "Completed" && (
                        <button className="btn-primary btn-sm">
                          <span className="material-symbols-rounded text-[14px]">upload_file</span>
                          Submit Deliverable
                        </button>
                      )}
                      <button className="btn-ghost btn-sm">View Details</button>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${m.progress}%`, backgroundColor: progressColor[m.status] }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-600 w-8">{m.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* notifications */}
          <div className="card-p">
            <h2 className="text-sm font-bold text-slate-900 mb-4">Recent Notifications</h2>
            <div className="space-y-3">
              {[
                { icon: "hub", color: "bg-primary-100 text-primary-600", text: "You've been matched with MB-124 (Lead Data Architect, TechNova) at 94%.", time: "10 min ago", unread: true },
                { icon: "event", color: "bg-cyan-100 text-cyan-600", text: "Interview scheduled with TechNova for March 22, 2025 at 14:00.", time: "1 hr ago", unread: true },
                { icon: "check_circle", color: "bg-emerald-100 text-emerald-600", text: "Your deliverable for MB-119 has been received and is under review.", time: "Yesterday", unread: false },
              ].map((n, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${n.unread ? "bg-primary-50/50" : ""}`}>
                  <div className={`w-8 h-8 rounded-lg ${n.color} flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-rounded text-[16px]">{n.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700">{n.text}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
