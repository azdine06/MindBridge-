import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const missionHighlights = [
  { text: "7+ years of experience in distributed systems", color: "bg-primary-100 text-primary-800 border border-primary-200" },
  { text: "Python-based ETL frameworks", color: "bg-blue-100 text-blue-800 border border-blue-200" },
  { text: "PySpark and Dask", color: "bg-blue-100 text-blue-800 border border-blue-200" },
  { text: "AWS Cloud Architecture", color: "bg-amber-100 text-amber-800 border border-amber-200" },
  { text: "Kinesis, Redshift, and Glue", color: "bg-amber-100 text-amber-800 border border-amber-200" },
  { text: "strong mentorship and leadership capabilities", color: "bg-rose-100 text-rose-800 border border-rose-200" },
];

const cvHighlights = [
  { text: "9 years in cloud-native distributed environments", color: "bg-primary-100 text-primary-800 border border-primary-200" },
  { text: "exceptional leadership and strategic mentorship", color: "bg-rose-100 text-rose-800 border border-rose-200" },
  { text: "Python performance tuning using PySpark", color: "bg-blue-100 text-blue-800 border border-blue-200" },
];

function Highlight({ text, color }: { text: string; color: string }) {
  return (
    <span className={`inline px-1.5 py-0.5 rounded-md font-semibold leading-relaxed ${color}`}>
      {text}
    </span>
  );
}

export default function AdminComparison() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
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
          {/* Score Hero */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { label: "Technical Overlap", score: 96, color: "text-blue-600", icon: "code", fill: "#3b82f6" },
              { label: "Overall Match", score: 94, color: "text-primary-600", icon: "hub", fill: "#6366f1" },
              { label: "Cultural Fit", score: 91, color: "text-rose-500", icon: "groups", fill: "#f43f5e" },
            ].map((s) => (
              <div key={s.label} className="card-p flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  <span className={`material-symbols-rounded text-[20px] ${s.color}`}>{s.icon}</span>
                </div>
                <p className={`text-3xl font-extrabold ${s.color}`}>{s.score}%</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-border mb-6">
            {["Side-by-Side View", "Detailed Breakdown", "Interview Guide"].map((t, i) => (
              <button
                key={t}
                className={`pb-3 pt-1 text-sm font-semibold transition-colors border-b-2 ${
                  i === 0
                    ? "text-primary-600 border-primary-600"
                    : "text-slate-500 border-transparent hover:text-slate-700"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Side-by-side */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            {/* Mission */}
            <div className="card">
              <div className="flex items-center gap-3 p-4 border-b border-border bg-slate-50">
                <span className="material-symbols-rounded text-primary-600 text-[20px]">assignment</span>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 text-sm">MB-124: Lead Data Architect</p>
                  <p className="text-xs text-slate-400">TechNova · 7+ yrs required</p>
                </div>
                <span className="badge-green">Active</span>
              </div>
              <div className="p-5 space-y-5">
                <section>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Core Requirements</h4>
                  <p className="text-sm text-slate-700 leading-7">
                    We are seeking a specialist to architect our next-gen data pipeline. The ideal candidate must have{" "}
                    <Highlight text="7+ years of experience in distributed systems" color={missionHighlights[0].color} />. A deep understanding of{" "}
                    <Highlight text="Python-based ETL frameworks" color={missionHighlights[1].color} /> is essential, particularly{" "}
                    <Highlight text="PySpark and Dask" color={missionHighlights[2].color} /> for high-volume processing. Infrastructure focus on{" "}
                    <Highlight text="AWS Cloud Architecture" color={missionHighlights[3].color} />, requiring hands-on proficiency with{" "}
                    <Highlight text="Kinesis, Redshift, and Glue" color={missionHighlights[4].color} />. The role requires{" "}
                    <Highlight text="strong mentorship and leadership capabilities" color={missionHighlights[5].color} />.
                  </p>
                </section>
                <section>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key KPI Deliverables</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      "99.9% pipeline uptime during data migration",
                      "Latency reduction in real-time streaming by 40%",
                      "Implementation of automated data quality frameworks",
                    ].map((d) => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="material-symbols-rounded text-primary-500 text-[16px] mt-0.5 shrink-0">check_circle</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>

            {/* Candidate CV */}
            <div className="card">
              <div className="flex items-center gap-3 p-4 border-b border-border bg-slate-50">
                <div className="avatar">SC</div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 text-sm">Sarah Chen</p>
                  <p className="text-xs text-slate-400">Paris Tech · Senior Data Engineer</p>
                </div>
                <div className="flex items-center gap-1 text-primary-600">
                  <span className="material-symbols-rounded text-[15px]">verified</span>
                  <span className="text-xs font-bold">TOP MATCH</span>
                </div>
              </div>
              <div className="p-5 space-y-5">
                <section>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Experience Highlights</h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Senior Data Engineer @ TechSphere",
                        period: "2018—Present",
                        desc: "Directing a cross-functional team of 6, demonstrating strong team leadership. Scaled data operations with over 9 years in cloud-native distributed environments. Managed multi-petabyte Kinesis/Glue pipelines on AWS.",
                      },
                      {
                        title: "Data Engineer @ InnovateAI",
                        period: "2015—2018",
                        desc: "Mastered Python performance tuning using PySpark to handle multi-petabyte datasets. Optimized complex ETL workflows.",
                      },
                    ].map((exp) => (
                      <div key={exp.title} className="border-l-2 border-primary-200 pl-4 py-0.5">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-bold text-slate-900 text-sm">{exp.title}</p>
                          <span className="text-xs text-slate-400">{exp.period}</span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Technical Stack Match</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "PySpark (Expert)", m: true },
                      { label: "Dask", m: true },
                      { label: "AWS (Kinesis, Glue)", m: true },
                      { label: "Redshift", m: true },
                      { label: "Kafka", m: false },
                      { label: "Kubernetes", m: false },
                    ].map((s) => (
                      <span key={s.label} className={s.m ? "skill-tag-match" : "skill-tag"}>
                        {s.m && <span className="material-symbols-rounded text-[10px]">check</span>}
                        {s.label}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Semantic Breakdown */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-violet-50 border border-primary-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <span className="material-symbols-rounded text-white text-[18px]">psychology</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Semantic Intelligence Breakdown</h3>
                <p className="text-xs text-slate-500">Why Sarah Chen is the best fit for this mission</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: "code", label: "Technical Overlap", color: "text-blue-600", text: "Strong Python/PySpark experience directly mirrors the mission's ETL requirements. Her Dask work specifically covers high-volume processing." },
                { icon: "cloud", label: "Domain Alignment", color: "text-amber-600", text: "Direct AWS ecosystem match. Sarah managed Glue and Redshift pipelines for 4 years — exactly the infrastructure defined in MB-124." },
                { icon: "groups", label: "Cultural Fit", color: "text-rose-500", text: "Proven leadership of a team of 6, exceeding the mission's requirement of 4 engineers. Agile-first methodology aligns perfectly." },
              ].map((b) => (
                <div key={b.label} className="bg-white rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`material-symbols-rounded text-[18px] ${b.color}`}>{b.icon}</span>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{b.label}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-primary-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JH", "MK", "+2"].map((i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-primary-200 flex items-center justify-center text-[9px] font-bold text-primary-700">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">Reviewed by 4 collaborators</p>
              </div>
              <div className="flex gap-3">
                <button className="btn-danger btn-sm">
                  <span className="material-symbols-rounded text-[14px]">close</span>
                  Discard
                </button>
                <button className="btn-primary">
                  <span className="material-symbols-rounded text-[17px]">event</span>
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
