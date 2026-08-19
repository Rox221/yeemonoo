export const profile = {
  name: 'Yee Mon Oo',
  title: 'Software Engineer',
  roles: ['frontend', 'backend', 'mobile', 'AI-assisted dev'],
  tagline:
    'I design and build software across the stack — interfaces, APIs, and mobile apps — increasingly with AI as a collaborator, not just a tool.',
  location: 'Yangon, Myanmar',
  availability: 'Open to new opportunities',
  email: 'yeemonoo@example.com',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
    email: 'mailto:yeemonoo@example.com',
  },
}

export const about = {
  statement: [
    { text: 'I like being somewhere ' },
    { text: 'between the idea and the finished product. ', accent: true },
  ],
  context:
    'I have worked across different stacks and learned that the technology is rarely the interesting part. The interesting part is figuring out what needs to exist — and then making it real.',
  facts: [
    { label: 'Location', value: 'Yangon, Myanmar' },
    { label: 'Education', value: 'Bachelor of Computer Science(B.C.Sc), UCSY — 2024' },
    { label: 'Languages', value: 'English, Japanese (N3)' },
  ],
  focus: [
    { title: 'Frontend', detail: 'Interfaces that feel considered, not just functional.' },
    { title: 'Backend', detail: 'APIs and data models built to hold up under real use.' },
    { title: 'Mobile', detail: 'Cross-platform apps that reach an actual app store.' },
    { title: 'AI-assisted dev', detail: 'Claude drafts, I decide what actually ships.' },
  ],
  metrics: [
    { end: 10, suffix: '+', label: 'Projects shipped' },
    { end: 20, suffix: '+', label: 'Technologies used' },
    { end: 2, suffix: '+', label: 'Years building' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 2 },
      { name: 'React Native', level: 2 },
      { name: 'JavaScript', level: 3 },
      { name: 'jQuery', level: 2 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Bootstrap', level: 5 },
      { name: 'HTML/CSS', level: 5 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Delphi', level: 3 },
      { name: 'Node.js', level: 1 },
      { name: 'Express', level: 1 },
      { name: 'Java', level: 1 },
      { name: 'C#', level: 1 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', level: 1 },
      { name: 'MySQL', level: 2 },
      { name: 'Supabase', level: 1 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Claude Code', level: 4 },
      { name: 'Git/GitHub', level: 4 },
      { name: 'Docker', level: 1 },
      { name: 'Linux', level: 1 },
      { name: 'Figma', level: 3 },
    ],
  },
]

export const projects = [
  {
    variant: 'featured',
    index: '01',
    name: 'Project One',
    year: '2024',
    description:
      'A placeholder flagship case study — describe the real problem this project solved, who it was for, and the outcome it produced.',
    highlights: [
      'Designed the core data model and API from scratch',
      'Built a responsive interface used by real end users',
      'Deployed and monitored the app in production',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    repo: '#',
  },
  {
    variant: 'split',
    index: '02',
    name: 'Project Two',
    year: '2024',
    description:
      'A placeholder mobile case study — replace with the real app, the platform constraints you worked within, and a technical challenge you solved.',
    highlights: ['Shipped to a real device/app store build', 'Handled offline-first data sync'],
    tech: ['React Native', 'Firebase'],
    link: '#',
    repo: '#',
  },
  {
    variant: 'rail',
    index: '03',
    name: 'Project Three',
    year: '2023',
    description: 'A placeholder AI-assisted tooling project — swap in the real automation or workflow you built.',
    tech: ['Python', 'OpenAI API'],
    link: '#',
    repo: '#',
  },
  {
    variant: 'rail',
    index: '04',
    name: 'Project Four',
    year: '2023',
    description: 'A placeholder backend service — describe the scale, uptime, or performance work involved.',
    tech: ['Node.js', 'Express', 'Redis'],
    link: '#',
    repo: '#',
  },
  {
    variant: 'list',
    index: '05',
    name: 'Project Five',
    year: '2023',
    description: 'A smaller placeholder utility or open-source contribution.',
    tech: ['TypeScript'],
    link: '#',
    repo: '#',
  },
  {
    variant: 'list',
    index: '06',
    name: 'Project Six',
    year: '2022',
    description: 'Another smaller placeholder project or coursework highlight worth a mention.',
    tech: ['Java'],
    link: '#',
    repo: '#',
  },
]

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'Pro 1 Global Co.',
    period: 'May 2024 — July 2024',
    achievements: [
      'Owned a user-facing feature from spec to production release',
      'Wrote automated tests that reduced regressions in the release pipeline',
      'Paired with senior engineers on code review and architecture decisions',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MySQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Being Myanmar',
    period: 'Jan 2025 — Dec 2025',
    achievements: [
      'Built and maintained internal tools used daily by the team',
      'Fixed customer-reported bugs across the stack',
      'Improved onboarding docs for new developers',
    ],
    tech: ['Delphi', 'Gaia11'],
  },
  {
    role: 'Software Engineer',
    company: 'GIC Myanmar',
    period: 'Jan 2026 — Current',
    achievements: [
      'Built and maintained internal tools used daily by the team',
      'Fixed customer-reported bugs across the stack',
      'Improved onboarding docs for new developers',
    ],
    tech: ['React', 'React Native', 'TypeScript', 'Claude AI'],
  },
]

