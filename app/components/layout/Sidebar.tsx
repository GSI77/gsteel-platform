"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  FolderOpen,
  ClipboardList,
  Package,
  FileText,
  Building2,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: FolderOpen,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: ClipboardList,
    label: "Material Lists",
    href: "#",
  },
  {
    icon: Package,
    label: "Smart Procurement",
    href: "#",
  },
  {
    icon: FileText,
    label: "RFQs",
    href: "#",
  },
  {
    icon: Building2,
    label: "Suppliers",
    href: "#",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen bg-slate-950 text-white flex flex-col">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold tracking-wide text-orange-500">
          GSTEEL
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Steel Procurement Platform
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="font-semibold">GSteel Alpha</p>

          <p className="text-sm text-slate-400">
            Version 0.1
          </p>
        </div>
      </div>
    </aside>
  );
}