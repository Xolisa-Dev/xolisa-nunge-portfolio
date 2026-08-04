export interface LearningItem {
  id: string
  topic: string
  description: string
  icon: string
  progress: number
  category: 'Frontend' | 'Backend' | 'Design' | 'AI' | 'Craft'
}

export const learningItems: LearningItem[] = [
  {
    id: 'advanced-vue',
    topic: 'Advanced Vue Patterns',
    description: 'Renderless components, compound components, and advanced state management with Pinia.',
    icon: 'i-simple-icons-vuedotjs',
    progress: 65,
    category: 'Frontend'
  },
  {
    id: 'nuxt-advanced',
    topic: 'Nuxt Internals & Layers',
    description: 'Nuxt layers, server routes, hybrid rendering, and building production-grade Nuxt applications.',
    icon: 'i-simple-icons-nuxt',
    progress: 55,
    category: 'Frontend'
  },
  {
    id: 'backend-architecture',
    topic: 'Backend Architecture',
    description: 'REST API design, authentication patterns, middleware, and building scalable Node.js services.',
    icon: 'i-lucide-server',
    progress: 35,
    category: 'Backend'
  },
  {
    id: 'databases',
    topic: 'Database Design',
    description: 'Relational modelling, normalisation, query optimisation, and working with ORMs.',
    icon: 'i-lucide-database',
    progress: 40,
    category: 'Backend'
  },
  {
    id: 'performance',
    topic: 'Web Performance',
    description: 'Core Web Vitals, performance profiling, image optimisation, and rendering performance.',
    icon: 'i-lucide-zap',
    progress: 60,
    category: 'Frontend'
  },
  {
    id: 'accessibility',
    topic: 'Advanced Accessibility',
    description: 'WCAG 2.2, complex ARIA patterns, screen reader testing, and accessible animation.',
    icon: 'i-lucide-accessibility',
    progress: 50,
    category: 'Craft'
  },
  {
    id: 'ai-integration',
    topic: 'AI-Powered Interfaces',
    description: 'Integrating LLM APIs, building AI-assisted features, and understanding responsible AI UX.',
    icon: 'i-lucide-brain',
    progress: 25,
    category: 'AI'
  },
  {
    id: 'ux-design',
    topic: 'UX Design Principles',
    description: 'User research, wireframing, information architecture, and usability testing fundamentals.',
    icon: 'i-lucide-layout-template',
    progress: 45,
    category: 'Design'
  }
]
