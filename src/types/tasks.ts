
export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export interface Task {
  id: string,
  title: string,
  description?: string,
  status: TaskStatus,
  createdAt: string,
  updatedAt: string,
  createdBy?: string,
  projectId?: string, //arrumar depois pra pegar um projeto
  assignedTo?: string,
};

export interface CreateTaskDTO {
  title: string,
  description?: string,
  projectId?: string, //arrumar depois pra pegar um projeto
  assignedTo?: string,
};
