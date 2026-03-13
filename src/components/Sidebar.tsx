"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  icon: string;
  label: string;
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const adminNav: NavSection[] = [
  {
    title: "Overview",
    items: [
      { href: "/admin/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/admin/analytics", icon: "bar_chart_4_bars", label: "Analytics" },
      { href: "/admin/notifications", icon: "notifications", label: "Notifications" },
    ],
  },
  {
    title: "Management",
    items: [
      { href: "/admin/matching", icon: "hub", label: "AI Matching" },
      { href: "/admin/comparison", icon: "compare_arrows", label: "Comparison View" },
      { href: "/admin/missions", icon: "rocket_launch", label: "Missions" },
      { href: "/admin/talents", icon: "group", label: "Talents" },
    ],
  },
  {
    title: "Settings",
    items: [
      { href: "/admin/settings", icon: "settings", label: "Settings" },
    ],
  },
];

const smeNav: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { href: "/sme/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/sme/missions", icon: "rocket_launch", label: "My Missions" },
      { href: "/sme/create-mission", icon: "add_circle", label: "Create Mission" },
    ],
  },

];

const talentNav: NavSection[] = [
  {
    title: "My Space",
    items: [
      { href: "/talent/dashboard", icon: "dashboard", label: "Dashboard" },
      { href: "/talent/profile", icon: "person", label: "My Profile" },
      { href: "/talent/missions", icon: "rocket_launch", label: "Missions" },
    ],
  },
];

type Role = "admin" | "sme" | "talent";

const navByRole: Record<Role, NavSection[]> = {
  admin: adminNav,
  sme: smeNav,
  talent: talentNav,
};

const userByRole: Record<Role, { name: string; role: string; initials: string }> = {
  admin: { name: "Alex Martin", role: "Platform Admin", initials: "AM" },
  sme: { name: "TechNova Inc.", role: "SME Account", initials: "TN" },
  talent: { name: "Sarah Chen", role: "Junior Talent", initials: "SC" },
};

export default function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const sections = navByRole[role];
  const user = userByRole[role];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-icon">M</div>
        <div>
          <p className="sidebar-brand">MindBridge</p>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">
            AI Matching ATS
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="nav-section">{section.title}</p>
            {section.items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-item ${active ? "active" : ""}`}
                >
                  <span className="material-symbols-rounded nav-icon text-[18px]">
                    {item.icon}
                  </span>
                  {item.label}
                  {item.label === "Notifications" && (
                    <span className="ml-auto bg-primary-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      3
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="avatar">{user.initials}</div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-500 truncate">{user.role}</p>
          </div>
          <span className="material-symbols-rounded text-slate-500 text-[18px] ml-auto shrink-0">
            more_vert
          </span>
        </div>
        <Link
          href="/login"
          className="nav-item mt-2 w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
        >
          <span className="material-symbols-rounded nav-icon text-[18px]">logout</span>
          Sign Out
        </Link>
      </div>
    </aside>
  );
}
