import { User } from '../../Auth/types/auth';

export interface Users {
  total_count: number;
  items: User[];
}