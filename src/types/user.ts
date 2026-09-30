export type UserRole = "ADMIN" | "USER" | "VIEWER";

export interface User {
  id: string,
  name: string,
  email: string,
  role: UserRole,
}


