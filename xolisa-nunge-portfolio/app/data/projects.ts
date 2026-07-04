export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  challenge: string
  role: string
  solution: string
  lessons: string[]
  tech: string[]
  image: string
  github?: string
  live?: string
  featured: boolean
  year: string
  status: 'live' | 'in-progress' | 'archived'
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio v2',
    tagline: 'Where craft meets identity.',
    description: 'A ground-up redesign of my personal portfolio. Designed and built to be worthy of an Awwwards nomination — premium dark aesthetic, smooth animations, and a story that communicates who I am as a developer and product thinker.',
    challenge: 'Most developer portfolios look the same — a hero, a skills list, and a GitHub link. I wanted something that felt like reading a story rather than scanning a résumé.',
    role: 'Solo — Design, Frontend Architecture, Copywriting',
    solution: 'Built on Nuxt 4 with a bespoke design system. Used Intersection Observer for scroll reveals, CSS animations for the hero, and a data-driven architecture so content is always easy to update.',
    lessons: [
      'Design and engineering are not separate disciplines — the best work happens when they are treated as one.',
      'Constraint in a design system leads to more creative output, not less.',
      'Copy is design. Words matter as much as visuals.'
    ],
    tech: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Nuxt UI'],
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/Xolisa-Dev/xolisa-nunge-portfolio',
    live: 'https://xolisanunge.dev',
    featured: true,
    year: '2025',
    status: 'live'
  },
  {
    id: 'client-platform',
    title: 'Client Management Platform',
    tagline: 'Streamlining operations for a growing business.',
    description: 'A full-stack web application built for a local business to manage clients, projects, and invoices in one place. Replaced a spreadsheet-heavy workflow with a clean, intuitive interface.',
    challenge: 'The client was managing everything in Excel. Data was getting lost, invoices were inconsistent, and there was no visibility into project status. They needed a system that felt as easy as a spreadsheet but gave them the power of a proper application.',
    role: 'Full-Stack Developer — Architecture, Frontend, Backend API, Deployment',
    solution: 'Built a Vue/Nuxt frontend connected to a Strapi CMS backend. Role-based access control, PDF invoice generation, and a dashboard with live project metrics.',
    lessons: [
      'Non-technical users will use your software differently than you expect — observe them, then iterate.',
      'Simple architecture wins in small-to-medium projects. Choose boring technology for the backend.',
      'Deployment and maintenance are part of the product. Vercel + Ploi made this sustainable.'
    ],
    tech: ['Vue 3', 'Nuxt', 'Strapi', 'MySQL', 'TypeScript', 'Tailwind CSS'],
    image: '/images/projects/client-platform.jpg',
    featured: true,
    year: '2024',
    status: 'live'
  },
  {
    id: 'wordpress-theme',
    title: 'Custom WordPress Theme',
    tagline: 'Performance-first, design-led publishing.',
    description: 'A bespoke WordPress theme for a content-heavy website. Zero page-builder dependencies — pure PHP templates, custom blocks, and a focus on speed and accessibility.',
    challenge: 'The client had a WordPress site built on a heavy page-builder theme. Load times were over 8 seconds on mobile. Google Search Console showed Core Web Vitals failures across the board.',
    role: 'Frontend Developer — Custom Theme Development, Performance Auditing',
    solution: 'Rebuilt the theme from scratch using block patterns, custom post types, and optimised asset loading. Achieved sub-2-second LCP on mobile and a Lighthouse performance score above 90.',
    lessons: [
      'WordPress is a serious platform when treated seriously. Respect its architecture.',
      'Performance is a feature, not an afterthought. Users notice speed.',
      'Accessibility on content sites is often overlooked — heading structure and alt text matter enormously for SEO and screen readers.'
    ],
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'ACF'],
    image: '/images/projects/wordpress-theme.jpg',
    featured: true,
    year: '2024',
    status: 'live'
  }
]
