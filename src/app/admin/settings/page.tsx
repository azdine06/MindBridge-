import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const sections = [
  { title: "General", fields: [
    { label: "Platform Name", type: "input", value: "MindBridge" },
    { label: "Platform URL", type: "input", value: "https://mindbridge.ai" },
    { label: "Default Language", type: "select", options: ["English", "French", "Spanish"] },
  ]},
  { title: "AI Matching", fields: [
    { label: "Matching Algorithm", type: "select", options: ["Semantic v2 (recommended)", "TF-IDF Classic", "Hybrid"] },
    { label: "Minimum Match Score (%)", type: "input", value: "65" },
    { label: "Auto-Run Matching on New Mission", type: "toggle", value: true },
  ]},
  { title: "Notifications", fields: [
    { label: "Email Notifications", type: "toggle", value: true },
    { label: "In-App Alerts", type: "toggle", value: true },
    { label: "Weekly Summary Report", type: "toggle", value: false },
  ]},
];

export default function AdminSettings() {
  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar title="Platform Settings" subtitle="Configure AI matching, notifications, and system preferences" />
        <div className="page max-w-2xl">
          <div className="space-y-6">
            {sections.map((sec) => (
              <div key={sec.title} className="card-p">
                <h2 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-rounded text-primary-600 text-[18px]">settings</span>
                  {sec.title}
                </h2>
                <div className="space-y-4">
                  {sec.fields.map((f) => (
                    <div key={f.label} className="flex items-center justify-between gap-4">
                      <label className="text-sm text-slate-700 font-medium flex-1">{f.label}</label>
                      {f.type === "input" && (
                        <input className="form-input w-56" defaultValue={f.value as string} />
                      )}
                      {f.type === "select" && (
                        <select className="form-select w-56">
                          {f.options?.map(o => <option key={o}>{o}</option>)}
                        </select>
                      )}
                      {f.type === "toggle" && (
                        <button className={`relative w-11 h-6 rounded-full transition-colors ${f.value ? "bg-primary-600" : "bg-slate-200"}`}>
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${f.value ? "left-5" : "left-0.5"}`} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-3">
              <button className="btn-secondary">Reset to Defaults</button>
              <button className="btn-primary">Save Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
