import DashboardLayout from "../../components/layout/DashboardLayout";
import NewProjectDialog from "../../components/projects/NewProjectDialog";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Projects
            </h1>

            <p className="mt-2 text-slate-500">
              Manage all your steel structure projects.
            </p>
          </div>

          <NewProjectDialog />
        </div>

        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-700">
            No projects yet
          </h2>

          <p className="mt-3 text-slate-500">
            Create your first project to start importing material lists.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}