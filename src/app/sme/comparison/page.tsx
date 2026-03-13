"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

// SME-variant of the comparison page with sme sidebar
export default function SmeComparison() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="sme" />
      <div className="main-content flex-1">
        <Topbar
          title="Comparison View"
          subtitle="Match Report: MB-124 vs. Sarah Chen — 94% Semantic Match"
          actions={
            <>
              <button className="btn-secondary">
                <span className="material-symbols-rounded text-[17px]">share</span>
                Share
              </button>
              <button className="btn-primary">
                <span className="material-symbols-rounded text-[17px]">download</span>
                Export PDF
              </button>
            </>
          }
        />
        <div className="page">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Technical Overlap", score: 96, color: "text-blue-600" },
              { label: "Overall Match", score: 94, color: "text-primary-600" },
              { label: "Cultural Fit", score: 91, color: "text-rose-500" },
            ].map((s) => (
              <div key={s.label} className="card-p flex flex-col items-center text-center">
                <p className={`text-3xl font-extrabold ${s.color}`}>{s.score}%</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="card-p">
              <h3 className="font-bold text-slate-900 mb-3">MB-124: Lead Data Architect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seeking a specialist to architect our next-gen data pipeline with{" "}
                <span className="bg-primary-100 text-primary-800 px-1.5 rounded font-semibold">7+ years distributed systems</span>,{" "}
                <span className="bg-blue-100 text-blue-800 px-1.5 rounded font-semibold">PySpark and Dask</span>, and{" "}
                <span className="bg-amber-100 text-amber-800 px-1.5 rounded font-semibold">AWS Kinesis/Redshift/Glue</span> experience.
              </p>
            </div>
            <div className="card-p">
              <h3 className="font-bold text-slate-900 mb-3">Sarah Chen — Candidate Profile</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Senior Data Engineer with{" "}
                <span className="bg-primary-100 text-primary-800 px-1.5 rounded font-semibold">9 years cloud distributed systems</span>,{" "}
                <span className="bg-blue-100 text-blue-800 px-1.5 rounded font-semibold">PySpark expert</span>, and{" "}
                <span className="bg-rose-100 text-rose-800 px-1.5 rounded font-semibold">team lead of 6 engineers</span>.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["PySpark", "Dask", "AWS Glue", "Redshift", "Kafka", "Kubernetes"].map(s => (
                  <span key={s} className="skill-tag-match">{s}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button className="btn-danger">Discard Match</button>
            <button className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">event</span>
              Schedule Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
