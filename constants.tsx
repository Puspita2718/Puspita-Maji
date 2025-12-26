
import { Project, SkillCategory, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'High-Performance VHDL Multiplier',
    description: 'Designed and simulated a 16-bit Wallace Tree Multiplier optimized for low-latency digital signal processing applications.',
    technologies: ['VHDL', 'ModelSim', 'Digital Logic'],
    impact: 'Reduced computation delay by 15% compared to standard carry-save architectures.',
    category: 'Hardware',
    image: 'https://picsum.photos/seed/vhdl/600/400'
  },
  {
    id: '2',
    title: 'Automata Theory Simulator',
    description: 'A visual tool for creating and testing Finite Automata (DFA/NFA) and Pushdown Automata. Includes regex-to-NFA conversion.',
    technologies: ['Java', 'Swing', 'GraphStream'],
    impact: 'Used as a teaching aid for 100+ students in Formal Languages coursework.',
    category: 'Theory',
    image: 'https://picsum.photos/seed/automata/600/400'
  },
  {
    id: '3',
    title: 'Concurrent Cache Optimizer',
    description: 'A multithreaded cache simulation framework analyzing L1/L2 cache miss rates under various replacement policies.',
    technologies: ['C', 'Pthreads', 'Valgrind'],
    impact: 'Achieved 40% faster simulation speeds through efficient use of mutex-free data structures.',
    category: 'Software',
    image: 'https://picsum.photos/seed/cache/600/400'
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
