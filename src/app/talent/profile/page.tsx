import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { DonutChart, HorizontalBar } from "@/components/Charts";

const skills = [
  { label: "PySpark", level: 95 },
  { label: "AWS (Kinesis, Glue, Redshift)", level: 92 },
  { label: "Python", level: 97 },
  { label: "Kafka / Kubernetes", level: 84 },
  { label: "Data Engineering / ETL", level: 90 },
  { label: "Team Leadership", level: 87 },
];

const history = [
  { id: "MB-122", title: "ML Engineer (NLP)", company: "DataSphere", score: 91, status: "Completed" },
  { id: "MB-119", title: "Data Analyst", company: "InsightLab", score: 89, status: "Completed" },
  { id: "MB-115", title: "Python Developer", company: "AutomateX", score: 94, status: "Completed" },
  { id: "MB-110", title: "Cloud Data Lead", company: "TechNova", score: 87, status: "Completed" },
];

export default function TalentProfile() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="talent" />
      <div className="main-content flex-1">
        <Topbar
          title="My Profile"
          subtitle="Manage your profile, CV, and skill visibility"
          actions={
            <button className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">edit</span>
              Edit Profile
            </button>
          }
        />
        <div className="page">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left: Profile card */}
            <div className="xl:col-span-1 flex flex-col gap-6">
              {/* Profile */}
              <div className="card-p flex flex-col items-center text-center">
                <div className="avatar-xl mb-4">SC</div>
                <h2 className="text-xl font-extrabold text-slate-900">Sarah Chen</h2>
                <p className="text-sm text-slate-500 mt-0.5">Senior Data Engineer</p>
                <p className="text-xs text-primary-600 font-semibold mt-1">Paris Tech · Class of 2015</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="material-symbols-rounded text-primary-500 text-[15px]">verified</span>
                  <span className="text-xs text-slate-600 font-medium">MindBridge Verified</span>
                </div>
                <div className="w-full mt-5 pt-5 border-t border-border grid grid-cols-3 gap-2">
                  {[
                    { label: "Missions", value: "5" },
                    { label: "Avg Score", value: "94%" },
                    { label: "Rating", value: "4.9★" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-extrabold text-slate-900 text-lg">{s.value}</p>
                      <p className="text-xs text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & CV */}
              <div className="card-p">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Contact & Links</h3>
                <div className="space-y-2.5">
                  {[
                    { icon: "mail", text: "sarah.chen@email.com" },
                    { icon: "location_on", text: "Paris, France" },
                    { icon: "link", text: "linkedin.com/in/sarahchen" },
                    { icon: "code", text: "github.com/sarahchen" },
                  ].map((l) => (
                    <div key={l.text} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="material-symbols-rounded text-slate-400 text-[16px]">{l.icon}</span>
                      <span className="truncate">{l.text}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-secondary w-full mt-4 btn-sm">
                  <span className="material-symbols-rounded text-[16px]">upload_file</span>
                  Update CV / Resume
                </button>
              </div>

              {/* Matching Score Donut */}
              <div className="card-p text-center">
                <h3 className="text-sm font-bold text-slate-900 mb-3">Avg Matching Score</h3>
                <div className="flex justify-center">
                  <DonutChart value={94} color="#6366f1" size={100} />
                </div>
                <p className="text-xs text-slate-400 mt-2">Top 2% of all talents on the platform</p>
              </div>
            </div>

            {/* Right: Skills + History */}
            <div className="xl:col-span-2 flex flex-col gap-6">
              {/* Skills */}
              <div className="card-p">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Skill Proficiency</h3>
                <div className="space-y-3">
                  {skills.map((s) => (
                    <HorizontalBar key={s.label} label={s.label} value={s.level} color="#6366f1" />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["PySpark", "Python", "AWS", "Kafka", "Kubernetes", "Dask", "Redshift", "Airflow", "SQL", "Leadership"].map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* CV Preview */}
              <div className="card-p">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900">CV Preview</h3>
                  <button className="btn-ghost btn-sm">
                    <span className="material-symbols-rounded text-[15px]">download</span>
                    Download PDF
                  </button>
                </div>
                <div className="border border-border rounded-xl p-5 bg-surface-2 space-y-4 text-sm text-slate-700">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Experience</p>
                    {[
                      { role: "Senior Data Engineer", company: "TechSphere", period: "2018–Present", desc: "Led cross-functional team of 6, built scalable data pipelines on AWS (Kinesis, Glue, Redshift). 9+ yrs cloud-native distributed systems." },
                      { role: "Data Engineer", company: "InnovateAI", period: "2015–2018", desc: "Mastered PySpark for multi-petabyte ETL pipelines. Optimized complex distributed workflows." },
                    ].map((exp) => (
                      <div key={exp.role} className="border-l-2 border-primary-200 pl-3 mb-3">
                        <div className="flex justify-between">
                          <p className="font-bold text-slate-900">{exp.role} @ {exp.company}</p>
                          <span className="text-xs text-slate-400">{exp.period}</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Education</p>
                    <div className="border-l-2 border-emerald-200 pl-3">
                      <p className="font-semibold text-slate-900">MSc Data Science — Paris Tech (2015)</p>
                      <p className="text-xs text-slate-500 mt-0.5">Valedictorian · Thesis: Distributed Semantic Embeddings at Scale</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission History */}
              <div className="card">
                <div className="p-5 border-b border-border">
                  <h3 className="text-sm font-bold text-slate-900">Previous Missions</h3>
                </div>
                <div className="table-wrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mission</th>
                        <th>Company</th>
                        <th>Match Score</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((m) => (
                        <tr key={m.id}>
                          <td>
                            <p className="font-semibold text-slate-900">{m.title}</p>
                            <p className="text-xs text-slate-400">{m.id}</p>
                          </td>
                          <td>{m.company}</td>
                          <td><span className="font-bold text-emerald-600">{m.score}%</span></td>
                          <td><span className="badge-green">{m.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
