export interface User {
  id: number;
  avatar_url: string;
  gravatar_id: string;
  login: string;
  location: string;
  email: string;
  name: string;
  bio: string;
  company: string | null;
  html_url: string;
}