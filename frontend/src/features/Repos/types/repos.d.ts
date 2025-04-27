import { User } from '../../Auth/types/auth';

export interface Repos {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  description: string;
  owner: User;
}