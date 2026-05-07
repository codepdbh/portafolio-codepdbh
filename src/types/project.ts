export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  category: string[];
  language?: string;
  featured?: boolean;
}
