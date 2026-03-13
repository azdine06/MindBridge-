"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

type Member = {
  id: string;
  name: string;
  specialty: string;
  initials: string;
};

type Team = {
  id: string;
  name: string;
  specialty: string;
  members: Member[];
  mission?: string;
};

const initialTeams: Team[] = [
  {
    id: "T1",
    name: "Data Science Squad",
    specialty: "AI & Machine Learning",
    members: [
      { id: "M1", name: "Sarah Chen", specialty: "Data Scientist", initials: "SC" },
      { id: "M2", name: "Marc Dupont", specialty: "Data Engineer", initials: "MD" },
    ],
    mission: "MB-124: Lead Data Architect",
  },
  {
    id: "T2",
    name: "Frontend Masters",
    specialty: "React & UI/UX",
    members: [
      { id: "M3", name: "Aisha Patel", specialty: "UI Designer", initials: "AP" },
      { id: "M4", name: "Lee Wei", specialty: "Frontend Dev", initials: "LW" },
    ],
  },
];

export default function AdminTeams() {
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  return (
    <div className="flex min-h-screen">
      <Sidebar role="admin" />
      <div className="main-content flex-1">
        <Topbar
          title="Team Management"
          subtitle="Assemble specialized teams of talents for missions"
          actions={
            <button className="btn-primary">
              <span className="material-symbols-rounded text-[17px]">add</span>
              Create New Team
            </button>
          }
        />
        <div className="page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div key={team.id} className="card-p flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{team.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{team.specialty}</p>
                  </div>
                  <button className="btn-icon btn-sm">
                    <span className="material-symbols-rounded text-[18px]">edit</span>
                  </button>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Members ({team.members.length})</p>
                  <div className="space-y-3">
                    {team.members.map((member) => (
                      <div key={member.id} className="flex items-center gap-3 bg-surface-2 p-2 rounded-xl">
                        <div className="avatar text-[10px] w-7 h-7">{member.initials}</div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                          <p className="text-[10px] text-slate-500">{member.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Assigned To</p>
                  {team.mission ? (
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="material-symbols-rounded text-emerald-500 text-[18px]">rocket_launch</span>
                      <span className="truncate">{team.mission}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400 italic">Available for mission</p>
                  )}
                </div>
                
                <div className="mt-4">
                  <button className="btn-secondary w-full btn-sm">
                    Assign Mission
                  </button>
                </div>
              </div>
            ))}

            {/* Placeholder for new team */}
            <button 
              className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-6 text-slate-400 hover:text-primary-600 hover:border-primary-300 hover:bg-primary-50 transition-all group min-h-[300px]"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                <span className="material-symbols-rounded text-2xl">group_add</span>
              </div>
              <p className="font-semibold px-4 text-center">Create another Specialized Team</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
