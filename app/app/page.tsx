import DashboardLayout from "../components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-600">
          Welcome to the GSteel Platform.
        </p>

        <div className="grid grid-cols-4 gap-6">
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Projects</h2>
            <p className="mt-2 text-3xl font-bold">24</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Suppliers</h2>
            <p className="mt-2 text-3xl font-bold">18</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">RFQs</h2>
            <p className="mt-2 text-3xl font-bold">12</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-sm text-slate-500">Quotes</h2>
            <p className="mt-2 text-3xl font-bold">7</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}