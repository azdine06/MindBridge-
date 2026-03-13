"use client";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useState } from "react";

export default function CreateMission() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [deadline, setDeadline] = useState("");
  const [skills, setSkills] = useState<string[]>(["Python", "AWS"]);
  const [skillInput, setSkillInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function addSkill(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.key === ",") && skillInput.trim()) {
      e.preventDefault();
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  }
  function removeSkill(s: string) {
    setSkills(skills.filter((sk) => sk !== s));
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen">
        <Sidebar role="sme" />
        <div className="main-content flex-1 flex items-center justify-center">
          <div className="text-center max-w-sm">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-rounded text-emerald-600 text-[42px]">check_circle</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 mb-2">Mission Submitted!</h2>
            <p className="text-slate-500 text-sm mb-6">
              Your mission has been published. AI matching will start automatically and you&apos;ll be notified when top candidates are ranked.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-primary w-full">
              Create Another Mission
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar role="sme" />
      <div className="main-content flex-1">
        <Topbar
          title="Create New Mission"
          subtitle="Define your mission and let AI find the best junior talent"
        />
        <div className="page max-w-3xl">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-6"
          >
            {/* Basic info card */}
            <div className="card-p">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary-600 text-[18px]">info</span>
                Mission Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Mission Title *</label>
                  <input
                    className="form-input"
                    placeholder="e.g., Lead Data Architect for Analytics Pipeline"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option>Engineering</option>
                      <option>Data Science</option>
                      <option>Design</option>
                      <option>Marketing</option>
                      <option>Finance</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Mission Type</label>
                    <select className="form-select">
                      <option>Short mission (1–4 weeks)</option>
                      <option>Medium mission (1–3 months)</option>
                      <option>Internship</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Deadline *</label>
                  <input
                    type="date"
                    className="form-input"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card-p">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary-600 text-[18px]">description</span>
                Problem Description
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                Be specific — the AI uses this text to semantically match the best candidates.
              </p>
              <textarea
                className="form-textarea"
                rows={8}
                placeholder="Describe the mission objectives, technical requirements, expected deliverables, and the ideal candidate profile…"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
              <div className="flex items-center justify-between mt-2">
                <p className="form-hint">{desc.length} / 2000 characters</p>
                <div className="flex items-center gap-1 text-xs text-primary-600">
                  <span className="material-symbols-rounded text-[13px]">psychology</span>
                  AI will extract keywords automatically
                </div>
              </div>
            </div>

            {/* Required Skills */}
            <div className="card-p">
              <h2 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary-600 text-[18px]">build</span>
                Required Skills
              </h2>
              <p className="form-hint mb-3">Press Enter or comma to add a skill tag</p>
              <div className="flex flex-wrap gap-2 p-3 border border-border rounded-xl bg-surface-2 min-h-12">
                {skills.map((s) => (
                  <span key={s} className="skill-tag flex items-center gap-1">
                    {s}
                    <button type="button" onClick={() => removeSkill(s)} className="hover:text-red-500">
                      <span className="material-symbols-rounded text-[12px]">close</span>
                    </button>
                  </span>
                ))}
                <input
                  className="bg-transparent outline-none text-sm text-slate-700 flex-1 min-w-24 placeholder-slate-400"
                  placeholder="Add skill…"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                />
              </div>
            </div>

            {/* File upload */}
            <div className="card-p">
              <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary-600 text-[18px]">attach_file</span>
                Supporting Documents
              </h2>
              <label className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border rounded-xl p-8 bg-surface-2 hover:border-primary-300 hover:bg-primary-50/30 transition-all cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <span className="material-symbols-rounded text-primary-600 text-[24px]">cloud_upload</span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-slate-700">Drag & drop files here</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOCX, PNG up to 10MB</p>
                </div>
                <input type="file" className="hidden" multiple accept=".pdf,.docx,.png,.jpg" />
              </label>
            </div>

            {/* Submit */}
            <div className="flex items-center justify-between gap-4 pb-4">
              <button type="button" className="btn-secondary">Save as Draft</button>
              <button type="submit" className="btn-primary px-8">
                <span className="material-symbols-rounded text-[18px]">rocket_launch</span>
                Publish Mission & Start AI Matching
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
