
export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export interface Task {
  id: string,
  title: string,
  description?: string,
  status: TaskStatus,
  createdAt: string,
  updatedAt: string,
  createdBy?: string,
  projectId?: string,
  assignedTo?: string,
};

export interface CreateTaskDTO {
  title: string,
  description?: string,
  projectId?: string,
  assignedTo?: string,
};

export interface UpdateTaskDTO {
  title?: string,
  description?: string,
  status?: TaskStatus,
  projectId?: string,
  assignedTo?: string,
};
