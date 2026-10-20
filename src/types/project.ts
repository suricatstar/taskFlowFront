export interface Project {
  id: string,
  name: string,
  description?: string,
  ownerId: string,
  groupId?: string,
  createdAt: string,
  updatedAt: string,
}

export interface CreateProjectDTO {
  name: string,
  description?: string,
  groupId?: string,
}

export interface UpdateProjectDTO {
  name?: string,
  description?: string,
  groupId?: string,
}
