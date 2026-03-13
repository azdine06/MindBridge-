import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const missions = [
  { id: "MB-124", title: "Mission 1", company: "TechNova", status: "Matched", deadline: "Mar 28", score: 94 },
  { id: "MB-122", title: "Mission 2", company: "DataSphere", status: "In Progress", deadline: "Mar 20", score: 91 },
  { id: "MB-119", title: "Mission 3", company: "InsightLab", status: "Pending Review", deadline: "Mar 25", score: 89 },
  { id: "MB-115", title: "Mission 4", company: "AutomateX", status: "Completed", deadline: "Mar 10", score: 94 },
];

const statusBadge: Record<string, string> = {
  Matched: "badge-purple",
  "In Progress": "badge-blue",
  "Pending Review": "badge-orange",
  Completed: "badge-green",
};

export default function TalentMissions() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="talent" />
      <div className="main-content flex-1">
        <Topbar
          title="My Missions"
          subtitle="Track your mission assignments and deliverables"
        />
        <div className="page">
          <div className="card">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mission</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Match Score</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {missions.map((m) => (
                    <tr key={m.id}>
                      <td>
                        <p className="font-semibold text-slate-900">{m.title}</p>
                        <p className="text-xs text-slate-400">{m.id}</p>
                      </td>
                      <td>{m.company}</td>
                      <td><span className={statusBadge[m.status]}>{m.status}</span></td>
                      <td className="text-slate-500">{m.deadline}</td>
                      <td><span className="font-bold text-emerald-600">{m.score}%</span></td>
                      <td>
                        <div className="flex gap-1">
                          {m.status !== "Completed" && (
                            <button className="btn-primary btn-sm">
                              <span className="material-symbols-rounded text-[14px]">upload_file</span>
                              Submit
                            </button>
                          )}
                          <button className="btn-ghost btn-sm">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
