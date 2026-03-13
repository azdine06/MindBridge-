import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";

const missions = [
  { id: "MB-124", title: "Mission 1", company: "TechNova", status: "Open", deadline: "Mar 28, 2025", candidates: 12, score: 94 },
  { id: "MB-123", title: "Mission 2", company: "FinEase", status: "Matching", deadline: "Apr 5, 2025", candidates: 7, score: 87 },
  { id: "MB-122", title: "Mission 3", company: "DataSphere", status: "Closed", deadline: "Mar 20, 2025", candidates: 22, score: 91 },
  { id: "MB-121", title: "Mission 4", company: "DesignCo", status: "Open", deadline: "Apr 12, 2025", candidates: 9, score: 76 },
  { id: "MB-120", title: "Mission 5", company: "CloudPlus", status: "Matching", deadline: "Mar 30, 2025", candidates: 4, score: 82 },
  { id: "MB-119", title: "Mission 6", company: "InsightLab", status: "Closed", deadline: "Mar 15, 2025", candidates: 18, score: 89 },
  { id: "MB-118", title: "Mission 7", company: "PayCore", status: "Open", deadline: "Apr 20, 2025", candidates: 3, score: 0 },
  { id: "MB-117", title: "Mission 8", company: "AppWave", status: "Open", deadline: "Apr 25, 2025", candidates: 6, score: 71 },
];

const statusBadge: Record<string, string> = {
  Open: "badge-green",
  Matching: "badge-blue",
  Closed: "badge-gray",
};

export default function AdminMissions() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="Mission Management"
          subtitle="All SME missions on the platform"
          actions={
            <Link href="/sme/create-mission" className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">add</span>
              Create Mission
            </Link>
          }
        />
        <div className="page">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {["All", "Open", "Matching", "Closed"].map((f) => (
              <button
                key={f}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  f === "All"
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-slate-600 border-border hover:border-primary-300"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <select className="form-select py-2 text-xs w-auto">
                <option>Sort by: Deadline</option>
                <option>Sort by: Score</option>
                <option>Sort by: Candidates</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="card">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Candidates</th>
                    <th>Top Score</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {missions.map((m) => (
                    <tr key={m.id}>
                      <td>
                        <div>
                          <p className="font-semibold text-slate-900">{m.title}</p>
                          <p className="text-xs text-slate-400">{m.id}</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-700">
                            {m.company[0]}
                          </div>
                          {m.company}
                        </div>
                      </td>
                      <td>
                        <span className={statusBadge[m.status]}>{m.status}</span>
                      </td>
                      <td className="text-slate-500">{m.deadline}</td>
                      <td>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-rounded text-[14px] text-slate-400">group</span>
                          <span className="font-semibold">{m.candidates}</span>
                        </div>
                      </td>
                      <td>
                        {m.score > 0 ? (
                          <span className="font-bold text-emerald-600">{m.score}%</span>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                      <td>
                        <div className="flex items-center gap-1">
                          <Link href="/admin/matching" className="btn-ghost btn-sm">
                            <span className="material-symbols-rounded text-[14px]">hub</span>
                            Match
                          </Link>
                          <Link href="/admin/comparison" className="btn-ghost btn-sm">
                            <span className="material-symbols-rounded text-[14px]">compare_arrows</span>
                          </Link>
                          <button className="btn-icon btn-sm">
                            <span className="material-symbols-rounded text-[14px]">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-border">
              <span className="text-xs text-slate-500">Showing 8 of 124 missions</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, "…", 16].map((p) => (
                  <button
                    key={p}
                    className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                      p === 1
                        ? "bg-primary-600 text-white"
                        : "text-slate-600 hover:bg-surface-3"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
