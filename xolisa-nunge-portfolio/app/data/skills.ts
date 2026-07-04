export type TechCategory = 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'CMS' | 'Styling' | 'Tools'

export interface TechItem {
  name: string
  icon: string
  category: TechCategory
  description: string
  experience: 'Familiar' | 'Comfortable' | 'Proficient' | 'Expert'
}

export interface ProfessionalSkill {
  id: string
  title: string
  description: string
  icon: string
  tags: string[]
}

export const techStack: TechItem[] = [
  // Languages
  { name: 'HTML', icon: 'i-simple-icons-html5', category: 'Languages', description: 'Semantic, accessible markup that search engines and screen readers appreciate.', experience: 'Expert' },
  { name: 'CSS', icon: 'i-simple-icons-css3', category: 'Languages', description: 'From custom properties and grid to animations — I write CSS that scales.', experience: 'Expert' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript', category: 'Languages', description: 'The backbone of every interactive experience I build.', experience: 'Proficient' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript', category: 'Languages', description: 'Type safety that catches bugs before users do. My preferred way to write JS.', experience: 'Comfortable' },
  // Frontend
  { name: 'Vue', icon: 'i-simple-icons-vuedotjs', category: 'Frontend', description: 'My primary framework. I love the Composition API and the Vue ecosystem.', experience: 'Proficient' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxt', category: 'Frontend', description: 'SSR, file-based routing, auto-imports — Nuxt makes Vue production-ready.', experience: 'Proficient' },
  // Backend
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs', category: 'Backend', description: 'Building APIs and server-side logic with the language I already know.', experience: 'Familiar' },
  // Databases
  { name: 'MySQL', icon: 'i-simple-icons-mysql', category: 'Databases', description: 'Relational data modelling for production applications.', experience: 'Familiar' },
  { name: 'SQLite', icon: 'i-simple-icons-sqlite', category: 'Databases', description: 'Lightweight, fast, zero-config — perfect for smaller applications.', experience: 'Familiar' },
  // CMS
  { name: 'WordPress', icon: 'i-simple-icons-wordpress', category: 'CMS', description: 'Custom themes, block development, and headless setups.', experience: 'Comfortable' },
  { name: 'Strapi', icon: 'i-simple-icons-strapi', category: 'CMS', description: 'Headless CMS with a clean API. Great for content-driven Nuxt apps.', experience: 'Comfortable' },
  { name: 'Directus', icon: 'i-simple-icons-directus', category: 'CMS', description: 'Data platform with powerful permissions and a flexible content model.', experience: 'Familiar' },
  // Styling
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss', category: 'Styling', description: 'Utility-first CSS that makes shipping fast and staying consistent easy.', experience: 'Expert' },
  // Tools
  { name: 'Git', icon: 'i-simple-icons-git', category: 'Tools', description: 'Version control is part of my workflow, not an afterthought.', experience: 'Comfortable' },
  { name: 'GitHub', icon: 'i-simple-icons-github', category: 'Tools', description: 'Where my code lives, my ideas are tracked, and collaboration happens.', experience: 'Comfortable' },
  { name: 'Figma', icon: 'i-simple-icons-figma', category: 'Tools', description: 'Design, prototype, inspect — I speak Figma fluently with designers.', experience: 'Comfortable' },
  { name: 'VS Code', icon: 'i-simple-icons-visualstudiocode', category: 'Tools', description: 'My editor of choice. Highly customised and keyboard-driven.', experience: 'Expert' },
  { name: 'Postman', icon: 'i-simple-icons-postman', category: 'Tools', description: 'API testing and documentation that keeps integrations reliable.', experience: 'Comfortable' },
  { name: 'Netlify', icon: 'i-simple-icons-netlify', category: 'Tools', description: 'Fast, reliable static site deployment with CI/CD out of the box.', experience: 'Comfortable' },
  { name: 'Vercel', icon: 'i-simple-icons-vercel', category: 'Tools', description: 'Zero-config deployment for Nuxt and Next projects.', experience: 'Comfortable' },
  { name: 'npm', icon: 'i-simple-icons-npm', category: 'Tools', description: 'Package management, scripts, and dependency hygiene.', experience: 'Comfortable' }
]

export const professionalSkills: ProfessionalSkill[] = [
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Every component I build works flawlessly from 320px to 4K. Mobile-first is not a checkbox — it is how I think.',
    icon: 'i-lucide-monitor-smartphone',
    tags: ['Mobile-First', 'CSS Grid', 'Flexbox']
  },
  {
    id: 'component-architecture',
    title: 'Component Architecture',
    description: 'Building UI systems that scale. Composable, reusable, well-named components that other developers understand immediately.',
    icon: 'i-lucide-layers',
    tags: ['Vue 3', 'Composition API', 'Design Systems']
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Connecting frontends to backends, third-party services and headless CMSes. REST, async/await, error handling.',
    icon: 'i-lucide-plug',
    tags: ['REST', 'Fetch API', 'Error Handling']
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    description: 'Semantic HTML, ARIA roles, keyboard navigation, colour contrast. The web should work for everyone.',
    icon: 'i-lucide-accessibility',
    tags: ['WCAG', 'ARIA', 'Screen Readers']
  },
  {
    id: 'performance',
    title: 'Performance Optimisation',
    description: 'Lazy loading, code splitting, image optimisation, Core Web Vitals. Fast sites are a form of respect for your users.',
    icon: 'i-lucide-zap',
    tags: ['Core Web Vitals', 'Lighthouse', 'Lazy Load']
  },
  {
    id: 'version-control',
    title: 'Version Control',
    description: 'Meaningful commits, feature branches, clean pull request hygiene. Git is part of how I communicate with teams.',
    icon: 'i-lucide-git-branch',
    tags: ['Git', 'GitHub', 'PR Reviews']
  },
  {
    id: 'agile',
    title: 'Agile Development',
    description: 'Sprints, standups, iterative delivery. I understand how product teams work and adapt to their processes.',
    icon: 'i-lucide-refresh-cw',
    tags: ['Sprints', 'Iterative', 'Collaboration']
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Breaking down complex requirements into clear, implementable solutions. I enjoy the puzzle as much as the result.',
    icon: 'i-lucide-puzzle',
    tags: ['Debugging', 'Research', 'Critical Thinking']
  },
  {
    id: 'client-communication',
    title: 'Client Communication',
    description: 'Translating technical concepts for non-technical stakeholders. Clear updates, honest timelines, and no jargon.',
    icon: 'i-lucide-message-circle',
    tags: ['Stakeholders', 'Documentation', 'Empathy']
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Manual testing, browser dev tools, and learning to write unit tests. Quality is not optional.',
    icon: 'i-lucide-check-circle',
    tags: ['QA', 'Dev Tools', 'Unit Tests']
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'The tech landscape moves fast. I embrace it — reading, building, experimenting, and sharing what I learn.',
    icon: 'i-lucide-book-open',
    tags: ['Self-taught', 'Growth Mindset', 'Curiosity']
  }
]
