import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const notifs = [
  { id: 1, type: "match", icon: "hub", title: "New AI Match Detected", body: "Sarah Chen has been matched with MB-124 (Lead Data Architect) at 94% score.", time: "2 min ago", unread: true, color: "bg-primary-100 text-primary-600" },
  { id: 2, type: "mission", icon: "rocket_launch", title: "New Mission Submitted", body: "TechNova posted a new mission: 'Senior Cloud Engineer'. Review and start matching.", time: "18 min ago", unread: true, color: "bg-emerald-100 text-emerald-600" },
  { id: 3, type: "deliverable", icon: "upload_file", title: "Deliverable Submitted", body: "Marc Dupont submitted a deliverable for MB-119 (Data Analyst at InsightLab).", time: "1 hr ago", unread: true, color: "bg-violet-100 text-violet-600" },
  { id: 4, type: "confirmation", icon: "handshake", title: "Mission Confirmed", body: "MB-122 (ML Engineer) has been confirmed with Aisha Patel and DataSphere.", time: "3 hrs ago", unread: false, color: "bg-amber-100 text-amber-600" },
  { id: 5, type: "assignment", icon: "assignment_ind", title: "Talent Assigned", body: "Lucas Moreira has been assigned to MB-120 (DevOps Engineer, CloudPlus).", time: "5 hrs ago", unread: false, color: "bg-cyan-100 text-cyan-600" },
  { id: 6, type: "match", icon: "hub", title: "Batch Matching Completed", body: "AI matching run completed for 3 open missions. 47 candidates ranked.", time: "Yesterday", unread: false, color: "bg-primary-100 text-primary-600" },
  { id: 7, type: "mission", icon: "rocket_launch", title: "Mission Deadline Approaching", body: "MB-121 (UX Researcher, DesignCo) deadline is in 2 days. 9 candidates pending review.", time: "Yesterday", unread: false, color: "bg-red-100 text-red-600" },
];

const tabs = ["All", "Unread", "Matches", "Missions", "Deliverables"];

export default function AdminNotifications() {
  const unreadCount = notifs.filter((n) => n.unread).length;
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="Notifications"
          subtitle={`${unreadCount} unread notifications`}
          actions={
            <button className="btn-secondary btn-sm">
              <span className="material-symbols-rounded text-[16px]">done_all</span>
              Mark all read
            </button>
          }
        />
        <div className="page max-w-3xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  i === 0 ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-600 border-border hover:border-primary-300"
                }`}
              >
                {t}
                {t === "Unread" && (
                  <span className="ml-1.5 bg-red-500 text-white text-[9px] rounded-full px-1.5 py-0.5">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Notification list */}
          <div className="card divide-y divide-border">
            {notifs.map((n) => (
              <div key={n.id} className={`notif-item ${n.unread ? "bg-primary-50/30" : ""}`}>
                <div className={`w-9 h-9 rounded-xl ${n.color} flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-rounded text-[18px]">{n.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">
                      {n.unread && <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mr-2 mb-0.5" />}
                      {n.title}
                    </p>
                    <span className="text-xs text-slate-400 shrink-0">{n.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{n.body}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="text-xs text-primary-600 font-semibold hover:underline">View</button>
                    {n.unread && (
                      <button className="text-xs text-slate-400 hover:text-slate-600">Mark as read</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Email settings CTA */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-primary-50 to-violet-50 border border-primary-200 flex items-center gap-4">
            <span className="material-symbols-rounded text-primary-600 text-[28px]">mail</span>
            <div className="flex-1">
              <p className="font-bold text-slate-900 text-sm">Email Notifications</p>
              <p className="text-xs text-slate-500">Manage which events you receive via email</p>
            </div>
            <button className="btn-primary btn-sm">Configure</button>
          </div>
        </div>
      </div>
    </div>
  );
}
