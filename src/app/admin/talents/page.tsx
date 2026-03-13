import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { DonutChart } from "@/components/Charts";

const talents = [
  { name: "Sarah Chen", initials: "SC", university: "Paris Tech", missions: 5, score: 94, skills: ["PySpark", "AWS", "Python"], status: "Active" },
  { name: "Marc Dupont", initials: "MD", university: "EPFL", missions: 3, score: 87, skills: ["Spark", "GCP", "Python"], status: "Active" },
  { name: "Aisha Patel", initials: "AP", university: "LSE", missions: 4, score: 81, skills: ["Airflow", "Python", "SQL"], status: "Interviewing" },
  { name: "Lucas Moreira", initials: "LM", university: "Polytechnique", missions: 2, score: 76, skills: ["Hadoop", "Scala", "Redshift"], status: "Active" },
  { name: "Yuki Tanaka", initials: "YT", university: "Waseda", missions: 1, score: 68, skills: ["SQL", "Pandas", "Power BI"], status: "Inactive" },
];

const statusBadge: Record<string, string> = {
  Active: "badge-green",
  Interviewing: "badge-blue",
  Inactive: "badge-gray",
};

const scoreColor = (s: number) => s >= 90 ? "#10b981" : s >= 80 ? "#6366f1" : "#f59e0b";

export default function AdminTalents() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar title="Talent Management" subtitle="Registered junior talents on the platform" />
        <div className="page">
          <div className="card">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Talent</th>
                    <th>University</th>
                    <th>Skills</th>
                    <th>Avg Score</th>
                    <th>Missions</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {talents.map((t) => (
                    <tr key={t.name}>
                      <td>
                        <div className="flex items-center gap-2">
                          <div className="avatar w-8 h-8 text-[10px]">{t.initials}</div>
                          <span className="font-semibold text-slate-900">{t.name}</span>
                        </div>
                      </td>
                      <td className="text-slate-500">{t.university}</td>
                      <td><div className="flex flex-wrap gap-1">{t.skills.map(s=><span key={s} className="skill-tag">{s}</span>)}</div></td>
                      <td><DonutChart value={t.score} color={scoreColor(t.score)} size={50} /></td>
                      <td className="font-semibold">{t.missions}</td>
                      <td><span className={statusBadge[t.status]}>{t.status}</span></td>
                      <td>
                        <div className="flex gap-1">
                          <button className="btn-ghost btn-sm">View</button>
                          <button className="btn-primary btn-sm">Match</button>
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
