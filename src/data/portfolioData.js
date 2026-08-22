const projectsBase = [
  {
    variant: 'primary',
    index: '01',
    year: '2024',
    link: '#',
    repo: '#',
    visualType: 'browser',
    url: 'project-one.dev',
    image: '/projects/project-one.png',
  },
  {
    variant: 'primary',
    index: '02',
    year: '2024',
    link: '#',
    repo: '#',
    visualType: 'device',
    image: '/projects/project-two.png',
  },
  {
    variant: 'secondary',
    index: '03',
    year: '2023',
    link: '#',
    repo: '#',
    visualType: 'terminal',
    command: 'python automate.py',
    image: '/projects/project-three.png',
  },
  {
    variant: 'secondary',
    index: '04',
    year: '2023',
    link: '#',
    repo: '#',
    visualType: 'plate',
    image: '/projects/project-four.png',
  },
  {
    variant: 'primary',
    index: '05',
    year: '2023',
    link: '#',
    repo: '#',
    visualType: 'metric',
  },
  {
    index: '06',
    year: '2022',
    link: '#',
    repo: '#',
  },
]

const experienceBase = [
  {
    company: 'Pro 1 Global Co.',
    tech: ['HTML/CSS', 'JavaScript', 'Node.js', 'MySQL'],
  },
  {
    company: 'Being Myanmar',
    tech: ['Delphi', 'Gaia11'],
  },
  {
    company: 'GIC Myanmar',
    tech: ['React', 'React Native', 'TypeScript', 'Claude AI'],
  },
]

function withText(base, text) {
  return base.map((item, i) => ({ ...item, ...text[i] }))
}

const en = {
  profile: {
    name: 'Yee Mon Oo',
    title: 'Software Engineer',
    roles: ['frontend', 'backend', 'mobile', 'AI-assisted dev'],
    tagline: 'I enjoy building things that make technology feel simple.',
    location: 'Yangon, Myanmar',
    availability: 'Open to new opportunities',
    email: 'yeemonoo@example.com',
    resumeUrl: '#',
    social: {
      github: 'https://github.com/your-username',
      linkedin: 'https://linkedin.com/in/your-username',
      email: 'mailto:yeemonoo@example.com',
    },
  },

  about: {
    eyebrow: 'Who I am',
    heading: { before: 'About ', accent: 'me', after: '.' },
    statement: [
      { text: 'I like being somewhere ' },
      { text: 'between the idea and the finished product. ', accent: true },
    ],
    context:
      "I've worked across different stacks and learned that the technology is rarely the interesting part. The interesting part is figuring out what needs to exist — and then making it real.",
    facts: [
      { key: 'location', label: 'Based in', value: 'Yangon, Myanmar' },
      { key: 'education', label: 'Education', value: 'Bachelor of Computer Science(B.C.Sc), UCSY — 2024' },
      { key: 'languages', label: 'Languages', value: 'English, Japanese (N3)' },
    ],
    focus: [
      { title: 'Frontend', detail: "I care about the details people notice — and the ones they don't." },
      { title: 'Backend', detail: 'Keeping the logic underneath as clear as the interface above it.' },
      { title: 'AI-assisted dev', detail: 'AI helps me explore faster. I still decide what ships.' },
    ],
    metrics: [
      { end: 10, suffix: '+', label: 'Projects completed' },
      { end: 20, suffix: '+', label: 'Technologies used' },
      { end: 2, suffix: '+', label: 'Years of Experience' },
    ],
  },

  skills: [
    {
      category: 'Frontend',
      items: ['HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'jQuery', 'React', 'React Native'],
    },
    {
      category: 'Backend',
      items: ['Delphi', 'Node.js', 'Express', 'Java', 'C#'],
    },
    {
      category: 'Database',
      items: ['MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
      category: 'Tools',
      items: ['Claude Code', 'Git/GitHub', 'Figma', 'Docker', 'Linux'],
    },
  ],

  projects: withText(projectsBase, [
    {
      name: 'Project One',
      tag: 'Web App',
      description:
        'A placeholder flagship case study — describe the real problem this project solved, who it was for, and the outcome it produced.',
      highlights: [
        'Designed the core data model and API from scratch',
        'Built a responsive interface used by real end users',
        'Deployed and monitored the app in production',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      imageAlt: 'Project One dashboard screenshot',
    },
    {
      name: 'Project Two',
      tag: 'Mobile App',
      description:
        'A placeholder mobile case study — replace with the real app, the platform constraints you worked within, and a technical challenge you solved.',
      highlights: ['Shipped to a real device/app store build', 'Handled offline-first data sync'],
      tech: ['React Native', 'Firebase'],
      imageAlt: 'Project Two app screen',
    },
    {
      name: 'Project Three',
      tag: 'Automation',
      description: 'A placeholder AI-assisted tooling project — swap in the real automation or workflow you built.',
      tech: ['Python', 'OpenAI API'],
      imageAlt: 'Project Three terminal output',
    },
    {
      name: 'Project Four',
      tag: 'Backend Service',
      description: 'A placeholder backend service — describe the scale, uptime, or performance work involved.',
      tech: ['Node.js', 'Express', 'Redis'],
      layers: ['Client', 'API', 'Redis / DB'],
      imageAlt: 'Project Four architecture diagram',
    },
    {
      name: 'Project Five',
      tag: 'Utility',
      description: 'A smaller placeholder utility or open-source contribution — swap the description for the real one.',
      tech: ['TypeScript'],
      metric: { value: '500+', label: 'Weekly downloads' },
    },
    {
      name: 'Project Six',
      tag: 'Coursework',
      description: 'Another smaller placeholder project or coursework highlight worth a mention.',
      tech: ['Java'],
    },
  ]),

  experience: withText(experienceBase, [
    {
      role: 'Web Developer Intern',
      period: 'May 2024 — July 2024',
      achievements: [
        'Owned a user-facing feature from spec to production release',
        'Wrote automated tests that reduced regressions in the release pipeline',
        'Paired with senior engineers on code review and architecture decisions',
      ],
    },
    {
      role: 'Software Engineer',
      period: 'Jan 2025 — Dec 2025',
      achievements: [
        'Built and maintained internal tools used daily by the team',
        'Fixed customer-reported bugs across the stack',
        'Improved onboarding docs for new developers',
      ],
    },
    {
      role: 'Software Engineer',
      period: 'Jan 2026 — Present',
      achievements: [
        'Built and maintained internal tools used daily by the team',
        'Fixed customer-reported bugs across the stack',
        'Improved onboarding docs for new developers',
      ],
    },
  ]),

  ui: {
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    toggleMenu: 'Toggle menu',
    themeToggle: 'Toggle color theme',
    languageToggle: { groupLabel: 'Language' },
    hero: {
      greeting: 'Hello',
      imLabel: "I'm",
      buildingFor: 'Building for',
      diveIn: 'Dive In',
      getInTouch: 'Get in Touch',
    },
    sections: {
      skills: {
        title: 'What I work with',
        description: 'A few of the technologies I reach for when turning ideas into working software.',
      },
      projects: {
        title: 'Projects',
        description: "Projects I've built, explored, and learned from.",
        github: 'GitHub',
        demo: 'Demo',
        seeMoreOnGithub: 'See the rest on GitHub',
      },
      experience: { title: 'Experience' },
      contact: {
        eyebrow: 'Contact',
        heading: 'Let’s build something worth shipping.',
        availabilitySuffix: ' — reach out directly, or find me on GitHub and LinkedIn.',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
    },
    footer: { backToTop: 'Back to top ↑' },
  },
}

const ja = {
  profile: {
    name: 'Yee Mon Oo',
    title: 'ソフトウェアエンジニア',
    roles: ['フロントエンド', 'バックエンド', 'モバイル', 'AI活用開発'],
    tagline: 'テクノロジーをシンプルに感じさせるものづくりが好きです。',
    location: 'ミャンマー、ヤンゴン',
    availability: '新しい機会を歓迎しています',
    email: 'yeemonoo@example.com',
    resumeUrl: '#',
    social: {
      github: 'https://github.com/your-username',
      linkedin: 'https://linkedin.com/in/your-username',
      email: 'mailto:yeemonoo@example.com',
    },
  },

  about: {
    eyebrow: '自己紹介',
    heading: { before: '', accent: '私', after: 'について' },
    statement: [
      { text: 'アイデアと完成品の' },
      { text: 'あいだにいる感覚', accent: true },
      { text: 'が好きです。' },
    ],
    context:
      'これまで様々な技術スタックに携わる中で気づいたのは、技術そのものが面白いわけではないということです。本当に面白いのは、何を作るべきかを見極め、それを実際に形にしていくプロセスです。',
    facts: [
      { key: 'location', label: '拠点', value: 'ミャンマー、ヤンゴン' },
      { key: 'education', label: '学歴', value: 'コンピューターサイエンス学士（B.C.Sc）、UCSY — 2024年' },
      { key: 'languages', label: '言語', value: '英語、日本語（N3）' },
    ],
    focus: [
      { title: 'フロントエンド', detail: 'ユーザーが気づく細部も、気づかない細部も大切にしています。' },
      { title: 'バックエンド', detail: '表面のインターフェースと同じくらい、裏側のロジックも分かりやすく保つこと。' },
      { title: 'AI活用開発', detail: 'AIは探索を速めてくれる存在。何をリリースするかは自分で決めます。' },
    ],
    metrics: [
      { end: 10, suffix: '+', label: '完了プロジェクト数' },
      { end: 20, suffix: '+', label: '使用技術数' },
      { end: 2, suffix: '+', label: '実務経験年数' },
    ],
  },

  skills: [
    {
      category: 'フロントエンド',
      items: ['HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'jQuery', 'React', 'React Native'],
    },
    {
      category: 'バックエンド',
      items: ['Delphi', 'Node.js', 'Express', 'Java', 'C#'],
    },
    {
      category: 'データベース',
      items: ['MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
      category: 'ツール',
      items: ['Claude Code', 'Git/GitHub', 'Figma', 'Docker', 'Linux'],
    },
  ],

  projects: withText(projectsBase, [
    {
      name: 'プロジェクト1',
      tag: 'ウェブアプリ',
      description:
        'プレースホルダーの代表的な事例です。このプロジェクトが解決した実際の課題、対象ユーザー、そして得られた成果に置き換えてください。',
      highlights: [
        'コアとなるデータモデルとAPIをゼロから設計',
        '実際のエンドユーザーが使うレスポンシブなUIを構築',
        '本番環境へのデプロイと運用監視を担当',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      imageAlt: 'プロジェクト1のダッシュボード画面',
    },
    {
      name: 'プロジェクト2',
      tag: 'モバイルアプリ',
      description:
        'プレースホルダーのモバイル事例です。実際のアプリ内容、プラットフォーム上の制約、そして解決した技術的課題に置き換えてください。',
      highlights: ['実機・ストア向けビルドとしてリリース', 'オフラインファーストのデータ同期に対応'],
      tech: ['React Native', 'Firebase'],
      imageAlt: 'プロジェクト2のアプリ画面',
    },
    {
      name: 'プロジェクト3',
      tag: '自動化ツール',
      description: 'プレースホルダーのAI活用ツールです。実際に構築した自動化やワークフローに置き換えてください。',
      tech: ['Python', 'OpenAI API'],
      imageAlt: 'プロジェクト3のターミナル出力',
    },
    {
      name: 'プロジェクト4',
      tag: 'バックエンドサービス',
      description: 'プレースホルダーのバックエンドサービスです。関わった規模、稼働率、パフォーマンス改善などの内容に置き換えてください。',
      tech: ['Node.js', 'Express', 'Redis'],
      layers: ['クライアント', 'API', 'Redis / DB'],
      imageAlt: 'プロジェクト4のアーキテクチャ図',
    },
    {
      name: 'プロジェクト5',
      tag: 'ユーティリティ',
      description: '小規模なプレースホルダーのユーティリティ、またはOSSへの貢献です。実際の内容に置き換えてください。',
      tech: ['TypeScript'],
      metric: { value: '500+', label: '週間ダウンロード数' },
    },
    {
      name: 'プロジェクト6',
      tag: '授業課題',
      description: 'もう一つの小規模なプレースホルダープロジェクト、または授業課題のハイライトです。',
      tech: ['Java'],
    },
  ]),

  experience: withText(experienceBase, [
    {
      role: 'Webデベロッパーインターン',
      period: '2024年5月 — 2024年7月',
      achievements: [
        '仕様策定から本番リリースまで、ユーザー向け機能を一貫して担当',
        'リリースパイプラインでの不具合再発を減らす自動テストを作成',
        'シニアエンジニアとペアでコードレビューや設計判断に参加',
      ],
    },
    {
      role: 'ソフトウェアエンジニア',
      period: '2025年1月 — 2025年12月',
      achievements: [
        'チームが日常的に使う社内ツールの構築・保守を担当',
        'スタック全体にわたり顧客報告のバグを修正',
        '新人エンジニア向けのオンボーディング資料を改善',
      ],
    },
    {
      role: 'ソフトウェアエンジニア',
      period: '2026年1月 — 現在',
      achievements: [
        'チームが日常的に使う社内ツールの構築・保守を担当',
        'スタック全体にわたり顧客報告のバグを修正',
        '新人エンジニア向けのオンボーディング資料を改善',
      ],
    },
  ]),

  ui: {
    nav: { about: '自己紹介', skills: 'スキル', experience: '職務経歴', projects: 'プロジェクト', contact: 'お問い合わせ' },
    toggleMenu: 'メニューを切り替え',
    themeToggle: 'カラーテーマを切り替え',
    languageToggle: { groupLabel: '言語' },
    hero: {
      greeting: 'こんにちは',
      imLabel: '私は',
      buildingFor: '得意分野：',
      diveIn: '詳しく見る',
      getInTouch: 'お問い合わせ',
    },
    sections: {
      skills: {
        title: '得意な技術',
        description: 'アイデアを実際に動くソフトウェアにするときに使う技術の一部です。',
      },
      projects: {
        title: 'プロジェクト',
        description: 'これまでに作り、探求し、学びを得てきたプロジェクトです。',
        github: 'GitHub',
        demo: 'デモ',
        seeMoreOnGithub: 'GitHubでその他を見る',
      },
      experience: { title: '職務経歴' },
      contact: {
        eyebrow: 'お問い合わせ',
        heading: '一緒に、形にする価値のあるものを作りましょう。',
        availabilitySuffix: ' — お気軽にご連絡いただくか、GitHubやLinkedInでもご覧いただけます。',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
    },
    footer: { backToTop: 'トップへ戻る ↑' },
  },
}

export const content = { en, ja }
