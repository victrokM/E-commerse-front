import { User } from "@/models/User.interface";

export interface UserState {
  user: User;
  token: string | null;
}
