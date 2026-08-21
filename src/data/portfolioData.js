export const profile = {
  name: 'Yee Mon Oo',
  title: 'Software Engineer',
  roles: ['frontend', 'backend', 'mobile', 'AI-assisted dev'],
  tagline:
    'I enjoy building things that make technology feel simple.',
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
    "I've worked across different stacks and learned that the technology is rarely the interesting part. The interesting part is figuring out what needs to exist — and then making it real.",
  facts: [
    { label: 'Location', value: 'Yangon, Myanmar' },
    { label: 'Education', value: 'Bachelor of Computer Science(B.C.Sc), UCSY — 2024' },
    { label: 'Languages', value: 'English, Japanese (N3)' },
  ],
  focus: [
    { title: 'Frontend', detail: "I care about the details people notice — and the ones they don't." },
    { title: 'Backend', detail: 'Keeping the logic underneath as clear as the interface above it.' },
    { title: 'Mobile', detail: 'Building apps that feel natural to use, not just responsive.' },
    { title: 'AI-assisted dev', detail: 'AI helps me explore faster. I still decide what ships.' },
  ],
  metrics: [
    { end: 10, suffix: '+', label: 'Projects completed' },
    { end: 20, suffix: '+', label: 'Technologies used' },
    { end: 2, suffix: '+', label: 'Years of Experience' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 5 },
      { name: 'Bootstrap', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'JavaScript', level: 3 },
      { name: 'jQuery', level: 2 },
      { name: 'React', level: 2 },
      { name: 'React Native', level: 2 },
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
      { name: 'MySQL', level: 2 },
      { name: 'PostgreSQL', level: 1 },
      { name: 'Supabase', level: 1 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Claude Code', level: 4 },
      { name: 'Git/GitHub', level: 4 },
      { name: 'Figma', level: 3 },
      { name: 'Docker', level: 1 },
      { name: 'Linux', level: 1 },
    ],
  },
]

export const projects = [
  {
    variant: 'primary',
    index: '01',
    name: 'Project One',
    year: '2024',
    tag: 'Web App',
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
    visualType: 'browser',
    url: 'project-one.dev',
    image: '/projects/project-one.png',
    imageAlt: 'Project One dashboard screenshot',
  },
  {
    variant: 'primary',
    index: '02',
    name: 'Project Two',
    year: '2024',
    tag: 'Mobile App',
    description:
      'A placeholder mobile case study — replace with the real app, the platform constraints you worked within, and a technical challenge you solved.',
    highlights: ['Shipped to a real device/app store build', 'Handled offline-first data sync'],
    tech: ['React Native', 'Firebase'],
    link: '#',
    repo: '#',
    visualType: 'device',
    image: '/projects/project-two.png',
    imageAlt: 'Project Two app screen',
  },
  {
    variant: 'secondary',
    index: '03',
    name: 'Project Three',
    year: '2023',
    tag: 'Automation',
    description: 'A placeholder AI-assisted tooling project — swap in the real automation or workflow you built.',
    tech: ['Python', 'OpenAI API'],
    link: '#',
    repo: '#',
    visualType: 'terminal',
    command: 'python automate.py',
    image: '/projects/project-three.png',
    imageAlt: 'Project Three terminal output',
  },
  {
    variant: 'secondary',
    index: '04',
    name: 'Project Four',
    year: '2023',
    tag: 'Backend Service',
    description: 'A placeholder backend service — describe the scale, uptime, or performance work involved.',
    tech: ['Node.js', 'Express', 'Redis'],
    link: '#',
    repo: '#',
    visualType: 'plate',
    layers: ['Client', 'API', 'Redis / DB'],
    image: '/projects/project-four.png',
    imageAlt: 'Project Four architecture diagram',
  },
  {
    variant: 'primary',
    index: '05',
    name: 'Project Five',
    year: '2023',
    tag: 'Utility',
    description: 'A smaller placeholder utility or open-source contribution — swap the description for the real one.',
    tech: ['TypeScript'],
    link: '#',
    repo: '#',
    visualType: 'metric',
    metric: { value: '500+', label: 'Weekly downloads' },
  },
  {
    index: '06',
    name: 'Project Six',
    year: '2022',
    tag: 'Coursework',
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
    period: 'Jan 2026 — Present',
    achievements: [
      'Built and maintained internal tools used daily by the team',
      'Fixed customer-reported bugs across the stack',
      'Improved onboarding docs for new developers',
    ],
    tech: ['React', 'React Native', 'TypeScript', 'Claude AI'],
  },
]

