"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Link from "next/link";
import SubscriptionModal from "@/components/SubscriptionModal";

const missions = [
  { id: "MB-124", title: "Lead Data Architect", status: "Open", deadline: "Mar 28, 2025", candidates: 12, score: 94 },
  { id: "MB-123", title: "React Frontend Developer", status: "Matching", deadline: "Apr 5, 2025", candidates: 7, score: 87 },
  { id: "MB-121", title: "UX Researcher", status: "Open", deadline: "Apr 12, 2025", candidates: 9, score: 76 },
  { id: "MB-118", title: "Backend API Engineer", status: "Open", deadline: "Apr 20, 2025", candidates: 3, score: 0 },
];

const statusBadge: Record<string, string> = {
  Open: "badge-green",
  Matching: "badge-blue",
  Closed: "badge-gray",
};

export default function SmeMissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar role="sme" />
      <div className="main-content flex-1">
        <Topbar
          title="My Missions"
          subtitle="TechNova Inc. mission portfolio"
          actions={
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">add</span>
              Create Mission
            </button>
          }
        />
        <div className="page">
          <div className="card">
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mission Title</th>
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
                        <p className="font-semibold text-slate-900">{m.title}</p>
                        <p className="text-xs text-slate-400">{m.id}</p>
                      </td>
                      <td><span className={statusBadge[m.status]}>{m.status}</span></td>
                      <td className="text-slate-500">{m.deadline}</td>
                      <td className="font-semibold">{m.candidates}</td>
                      <td>{m.score > 0 ? <span className="font-bold text-emerald-600">{m.score}%</span> : <span className="text-slate-300">—</span>}</td>
                      <td>
                        <div className="flex gap-1">
                          <Link href="/sme/matching" className="btn-primary btn-sm">
                            <span className="material-symbols-rounded text-[14px]">hub</span>
                            Match
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
          </div>
        </div>
      </div>
      
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
