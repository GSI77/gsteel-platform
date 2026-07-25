export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Projects",
    "Material Lists",
    "Smart Procurement",
    "RFQs",
    "Quotes",
    "Suppliers",
    "Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold tracking-wide text-orange-500">
          GSTEEL
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Steel Procurement Platform
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item}>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700 text-sm text-slate-400">
        GSteel v0.1 Alpha
      </div>
    </aside>
  );
}