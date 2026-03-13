import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { DonutChart } from "@/components/Charts";
import Link from "next/link";

const candidates = [
  { rank: 1, name: "Sarah Chen", initials: "SC", university: "Paris Tech", skills: ["PySpark", "AWS", "Kafka", "Python"], score: 94, status: "Available" },
  { rank: 2, name: "Marc Dupont", initials: "MD", university: "EPFL", skills: ["Kubernetes", "Spark", "GCP"], score: 87, status: "Available" },
  { rank: 3, name: "Aisha Patel", initials: "AP", university: "LSE", skills: ["Data Engineering", "Airflow", "Python"], score: 81, status: "Interviewing" },
];

const scoreColor = (s: number) => s >= 90 ? "#10b981" : s >= 80 ? "#6366f1" : "#f59e0b";

export default function SmeMatching() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="sme" />
      <div className="main-content flex-1">
        <Topbar
          title="AI Matching Results"
          subtitle="Top candidates for MB-124: Lead Data Architect"
          actions={
            <button className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">hub</span>
              Re-run Matching
            </button>
          }
        />
        <div className="page">
          <div className="card">
            <div className="p-5 border-b border-border">
              <h2 className="text-sm font-bold text-slate-900">Ranked Candidates</h2>
              <p className="text-xs text-slate-400 mt-0.5">Select a candidate to view full comparison</p>
            </div>
            <div className="divide-y divide-border">
              {candidates.map((c) => (
                <div key={c.rank} className={`flex items-center gap-4 p-4 hover:bg-surface-2 transition-colors ${c.rank === 1 ? "bg-primary-50/30" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${c.rank === 1 ? "bg-primary-600 text-white" : "bg-surface-3 text-slate-600"}`}>
                    {c.rank === 1 ? "★" : `#${c.rank}`}
                  </div>
                  <div className="flex items-center gap-3 w-40 shrink-0">
                    <div className="avatar">{c.initials}</div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{c.name}</p>
                      <p className="text-xs text-slate-400">{c.university}</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-wrap gap-1">
                    {c.skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                  <DonutChart value={c.score} color={scoreColor(c.score)} size={60} />
                  <div className="flex gap-2 shrink-0">
                    <button className="btn-primary btn-sm">Select</button>
                    <Link href="/sme/comparison" className="btn-secondary btn-sm">Compare</Link>
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
