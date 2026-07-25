export type ProjectStatus =
  | "Draft"
  | "Active"
  | "Completed";

export interface Project {
  id: string;
  name: string;
  client: string;
  description: string;

  country: string;
  currency: string;

  steelGrade: string;
  executionClass: string;

  status: ProjectStatus;

  createdAt: Date;
}