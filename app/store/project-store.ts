import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Project } from "@/types/project";

type NewProject = Omit<Project, "id" | "createdAt">;

interface ProjectStore {
  projects: Project[];

  addProject: (project: NewProject) => void;

  removeProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projects: [],

      addProject: (project) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              ...project,
              id: crypto.randomUUID(),
              createdAt: new Date(),
            },
          ],
        })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter(
            (p) => p.id !== id
          ),
        })),
    }),
    {
      name: "gsteel-projects",
    }
  )
);