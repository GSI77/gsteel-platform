export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Dashboard
        </h2>
        <p className="text-sm text-slate-500">
          Welcome to GSteel Platform
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-slate-900 transition">
          🔔
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            SG
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              Stefan George
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}