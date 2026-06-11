import {
  Code2,
  Database,
  Mail,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      { name: 'HTML', level: '92%' },
      { name: 'CSS', level: '88%' },
      { name: 'JavaScript', level: '84%' },
      { name: 'React', level: '90%' },
      { name: 'Tailwind', level: '86%' },
    ],
  },
  {
    title: 'Backend',
    icon: TerminalSquare,
    items: [
      { name: 'Node.js', level: '78%' },
      { name: 'Express.js', level: '74%' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: '80%' },
      { name: 'MySQL', level: '76%' },
    ],
  },
  {
    title: 'Programming',
    icon: ShieldCheck,
    items: [
      { name: 'C++', level: '82%' },
      { name: 'JavaScript', level: '85%' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      { name: 'Git', level: '89%' },
      { name: 'GitHub', level: '87%' },
      { name: 'VS Code', level: '91%' },
      { name: 'Postman', level: '79%' },
    ],
  },
]

export const timeline = [
  'Learning HTML & CSS',
  'Learning JavaScript',
  'Learning React',
  'Learning MERN Stack',
  'Learning DSA',
]

export const projects = [
  {
    name: 'Neon Notes',
    description: 'A fast note-taking app with reusable components, search, and responsive glassmorphism UI.',
    stack: ['React', 'Tailwind', 'Local Storage'],
    link: 'https://github.com',
  },
  {
    name: 'CodeFlow Hub',
    description: 'A developer dashboard for organizing projects, learning resources, and coding challenges.',
    stack: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
  },
  {
    name: 'AlgoSphere',
    description: 'An interactive DSA practice space focused on clarity, progress tracking, and problem-solving.',
    stack: ['JavaScript', 'CSS', 'Algorithms'],
    link: 'https://github.com',
  },
]

export const achievements = [
  { label: 'DSA Progress', value: '85%', accent: 'from-fuchsia-500 to-violet-500' },
  { label: 'Certifications', value: '6+', accent: 'from-cyan-500 to-emerald-500' },
  { label: 'College Achievements', value: 'Top 10% ', accent: 'from-amber-400 to-pink-500' },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/AbhishekSingh-code/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhishek-singh-696042326/', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/the._.abhisheksingh/', icon: FaInstagram },
  { label: 'Email', href: 'mailto:abhishekbhadoria2425@gmail.com', icon: Mail },
]

export const stats = [
  { value: '12+', label: 'Projects Completed' },
  { value: '150+', label: 'DSA Problems Solved' },
  { value: '8+', label: 'Technologies Learned' },
]

export const highlights = [
  'Currently pursuing a Computer Science degree with a strong interest in full-stack development and problem solving.',
  'I build responsive, high-performing interfaces and enjoy turning complex ideas into clean, scalable products.',
  'My goal is to contribute to impactful engineering teams and keep growing with modern web technologies.',
]

export const heroBadges = ['MERN Stack', 'UI/UX', 'DSA Enthusiast', 'Open Source']

export const experienceNotes = [
  'Built modern web interfaces with React, Tailwind, and animation libraries.',
  'Practiced core DSA topics including arrays, graphs, recursion, and dynamic programming.',
  'Continuously learning backend architecture, APIs, and deployment workflows.',
]

export const footerPillars = [
  'Fast loading',
  'Responsive design',
  'Professional aesthetic',
  'Recruiter-friendly',
]

export const primaryAccent = 'from-fuchsia-500 via-violet-500 to-cyan-400'

export function getSparklesIcon() {
  return Sparkles
}
