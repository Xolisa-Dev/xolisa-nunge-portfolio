export interface ClientWork {
  id: string
  client: string
  industry: string
  project: string
  role: string
  contribution: string
  tech: string[]
  outcome: string
  year: string
  confidential: boolean
}

export const clientWork: ClientWork[] = [
  {
    id: 'client-1',
    client: 'Local Business Client',
    industry: 'Professional Services',
    project: 'Client Management Web Application',
    role: 'Full-Stack Developer',
    contribution: 'Designed and built a full client management system from scratch, replacing a spreadsheet workflow with a modern web application. Handled everything from database design to UI implementation and deployment.',
    tech: ['Nuxt', 'Vue 3', 'Strapi', 'MySQL', 'Tailwind CSS', 'Vercel'],
    outcome: 'Reduced admin time by an estimated 60%. Client now manages projects, invoices, and communications in one place.',
    year: '2024',
    confidential: true
  },
  {
    id: 'client-2',
    client: 'Content Publisher',
    industry: 'Media & Publishing',
    project: 'Custom WordPress Theme Rebuild',
    role: 'Frontend Developer',
    contribution: 'Rebuilt an ageing, slow WordPress site with a custom theme built from the ground up. Focused on performance, accessibility, and clean semantic markup. No page builders — just solid code.',
    tech: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'ACF'],
    outcome: 'Improved Lighthouse performance score from 38 to 91. Mobile LCP reduced from 8.2s to 1.8s.',
    year: '2024',
    confidential: true
  },
  {
    id: 'client-3',
    client: 'Small E-commerce Business',
    industry: 'Retail',
    project: 'Landing Page & Product Showcase',
    role: 'Frontend Developer',
    contribution: 'Designed and developed a marketing landing page with product showcase, testimonials, and a lead capture form. Mobile-first, fast-loading, and easy for the client to update.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    outcome: 'Launched on time and within budget. Client reported a measurable increase in enquiries within the first month.',
    year: '2023',
    confidential: false
  }
]
