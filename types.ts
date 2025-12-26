
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  category: 'Software' | 'Hardware' | 'Theory';
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
  icon: string;
}
