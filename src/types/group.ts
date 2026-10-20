export type GroupRole = "OWNER" | "ADMIN" | "MEMBER";

export interface GroupMember {
  userId: string,
  role: GroupRole,
}

export interface Group {
  id: string,
  name: string,
  description?: string,
  members: GroupMember[],
  createdAt: string,
  updatedAt: string,
}

export interface CreateGroupDTO {
  name: string,
  description?: string,
}

export interface UpdateGroupDTO {
  name?: string,
  description?: string,
}
