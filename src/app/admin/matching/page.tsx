import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { DonutChart } from "@/components/Charts";
import Link from "next/link";

const candidates = [
  {
    rank: 1, name: "Sarah Chen", initials: "SC", university: "Paris Tech", skills: ["PySpark", "AWS", "Kafka", "Python"], score: 94, status: "Available",
    explanation: "9+ years distributed systems, direct AWS Kinesis/Glue overlap, team lead experience exceeds requirements.",
  },
  {
    rank: 2, name: "Marc Dupont", initials: "MD", university: "EPFL", skills: ["Kubernetes", "Spark", "GCP", "Python"], score: 87, status: "Available",
    explanation: "Strong ETL background with Spark, GCP equivalent cloud experience, ML pipeline expertise.",
  },
  {
    rank: 3, name: "Aisha Patel", initials: "AP", university: "LSE", skills: ["Data Engineering", "Airflow", "Python", "SQL"], score: 81, status: "Interviewing",
    explanation: "Solid data engineering foundation, Python/SQL proficiency, proactive communication style.",
  },
  {
    rank: 4, name: "Lucas Moreira", initials: "LM", university: "Polytechnique", skills: ["Hadoop", "Scala", "Redshift", "Python"], score: 76, status: "Available",
    explanation: "Hadoop/Redshift experience aligns, Scala transferable to pipeline work.",
  },
  {
    rank: 5, name: "Yuki Tanaka", initials: "YT", university: "Waseda", skills: ["SQL", "Pandas", "Power BI", "Python"], score: 68, status: "Available",
    explanation: "Junior profile, strong SQL and analytics focus, recommended for pipeline monitoring role.",
  },
];

const scoreColor = (s: number) => s >= 90 ? "#10b981" : s >= 80 ? "#6366f1" : s >= 70 ? "#f59e0b" : "#ef4444";

const statusBadge: Record<string, string> = {
  Available: "badge-green",
  Interviewing: "badge-blue",
};

export default function AdminMatching() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="AI Matching Engine"
          subtitle="Semantic candidate ranking for Mission MB-124: Lead Data Architect"
          actions={
            <button className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">hub</span>
              Run AI Matching
            </button>
          }
        />
        <div className="page">
          {/* Mission context banner */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-primary-50 border border-primary-200 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-rounded text-white text-[20px]">rocket_launch</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-sm">MB-124 – Lead Data Architect</p>
              <p className="text-xs text-slate-500">TechNova · Deadline: Mar 28 · 7+ yrs distributed systems, PySpark, AWS required</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="badge-indigo">
                <span className="material-symbols-rounded text-[12px]">group</span>
                {candidates.length} candidates
              </span>
              <Link href="/admin/comparison" className="btn-secondary btn-sm">
                <span className="material-symbols-rounded text-[15px]">compare_arrows</span>
                Compare
              </Link>
            </div>
          </div>

          {/* Score bands */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Strong Match (≥ 90%)", count: 1, color: "#10b981" },
              { label: "Good Match (80–89%)", count: 2, color: "#6366f1" },
              { label: "Partial Match (< 80%)", count: 2, color: "#f59e0b" },
            ].map((b) => (
              <div key={b.label} className="card-p flex items-center gap-3">
                <div className="w-3 h-10 rounded-full" style={{ backgroundColor: b.color }} />
                <div>
                  <p className="text-xl font-extrabold text-slate-900">{b.count}</p>
                  <p className="text-xs text-slate-500">{b.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Candidate Table */}
          <div className="card">
            <div className="p-5 border-b border-border">
              <h2 className="text-sm font-bold text-slate-900">Ranked Candidates</h2>
              <p className="text-xs text-slate-400 mt-0.5">Sorted by semantic matching score (highest first)</p>
            </div>
            <div className="divide-y divide-border">
              {candidates.map((c) => (
                <div key={c.rank} className={`flex items-center gap-4 p-4 hover:bg-surface-2 transition-colors ${c.rank === 1 ? "bg-primary-50/40" : ""}`}>
                  {/* Rank */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${c.rank === 1 ? "bg-primary-600 text-white" : "bg-surface-3 text-slate-600"}`}>
                    {c.rank === 1 ? "★" : `#${c.rank}`}
                  </div>

                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3 w-40 shrink-0">
                    <div className="avatar">{c.initials}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.university}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex-1 flex flex-wrap gap-1 min-w-0">
                    {c.skills.map((s) => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>

                  {/* Score */}
                  <div className="w-20 shrink-0">
                    <DonutChart value={c.score} color={scoreColor(c.score)} size={60} />
                  </div>

                  {/* Status */}
                  <span className={`${statusBadge[c.status]} shrink-0`}>{c.status}</span>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="btn-primary btn-sm">
                      <span className="material-symbols-rounded text-[14px]">check_circle</span>
                      Select
                    </button>
                    <Link href="/admin/comparison" className="btn-secondary btn-sm">
                      <span className="material-symbols-rounded text-[14px]">compare_arrows</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Explanation panel for top match */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-200">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-white text-[18px]">psychology</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 mb-1">AI Reasoning – Why Sarah Chen (#1)</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {candidates[0].explanation}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["9+ yrs seniority", "AWS direct overlap", "Team lead ✓", "PySpark expert"].map((t) => (
                    <span key={t} className="skill-tag-match">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
