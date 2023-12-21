import { User } from "../models/user";

export class userServiceMock {
  user: User | null = null
  
  getAllUsers(): void{}

  deleteUser(): void{ }

  addUser(): void{ }

  getUser(): void{ }

  editUser(): void{ }
}

export interface usersResponse{
  users: User[]
}