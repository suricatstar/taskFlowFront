import type { User } from "./user";

export interface LoginDTO {
  email: string,
  password: string,
}

export interface RegisterDTO {
  name: string,
  email: string,
  password: string,
}

export interface AuthResponseDTO {
  user: User,
  token: string,
}
