import { Project } from "@/types/project";

const projects: Project[] = [];

export function getProjects(): Project[] {
  return projects;
}

export function createProject(
  project: Omit<Project, "id" | "createdAt">
): Project {
  const newProject: Project = {
    ...project,
    id: crypto.randomUUID(),
    createdAt: new Date(),
  };

  projects.push(newProject);

  return newProject;
}

export function deleteProject(id: string) {
  const index = projects.findIndex((p) => p.id === id);

  if (index !== -1) {
    projects.splice(index, 1);
  }
}