
import { Project, SkillCategory, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Agrigro',
    description: 'A responsive web application that offers agricultural guidance and resources to help improve farming efficiency and decision-making.',
    technologies: ['VHDL', 'ModelSim', 'Digital Logic'],
    impact: 'Improves access to digital agricultural guidance for farmers.',
    category: 'Hardware',
    image: '/images/agrigro.jpg',
    link: 'https://github.com/Puspita2718/agrigroesih'
  },
  {
    id: '2',
    title: 'Pocket Doctor',
    description: 'Pocket Doctor SMF is a healthcare web application that provides quick access to basic medical guidance and health-related information through a simple and user-friendly interface.',
    technologies: ['Java', 'Swing', 'GraphStream'],
    impact: 'The project improves accessibility to health information and demonstrates practical web development skills by building a real-world, socially useful application.',
    category: 'Theory',
    image: '/images/pocket-doctor.jpg',
    link: 'https://github.com/Puspita2718/pocketdoctorsmf/commit/fac45689ffddc30645bb48ff234cacea7dc4ff62'
  },
  {
    id: '3',
    title: 'Weather',
    description: 'A web app that shows current weather for any city using the OpenWeatherMap API.',
    technologies: ['C', 'Pthreads', 'Valgrind'],
    impact: 'Provides users with accurate, real-time weather data for any location worldwide.',
    category: 'Software',
    image: '/images/weather.jpg',
    link: 'https://github.com/Puspita2718/Weather-API?tab=readme-ov-file'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: ['Java', 'C', 'VHDL', 'Python', 'Assembly (x86)'],
    icon: 'code'
  },
  {
    title: 'Technologies',
    items: ['Automata Theory', 'Formal Languages', 'Computer Architecture', 'DSP', 'Real-time Systems'],
    icon: 'cpu'
  },
  {
    title: 'Tools & Workflow',
    items: ['IntelliJ IDEA', 'VS Code', 'Git/GitHub', 'ModelSim', 'Xilinx Vivado', 'MATLAB'],
    icon: 'tool'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Beauty of Finite Automata',
    excerpt: 'Exploring how simple state machines power complex regular expression engines...',
    date: 'Oct 12, 2023',
    readTime: '5 min read'
  },
  {
    id: 'b2',
    title: 'C vs VHDL: A Designer Perspective',
    excerpt: 'Understanding the paradigm shift between sequential code and concurrent hardware...',
    date: 'Sep 28, 2023',
    readTime: '8 min read'
  }
];
