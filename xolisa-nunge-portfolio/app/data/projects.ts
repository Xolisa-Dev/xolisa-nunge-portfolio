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
    id: 'brand-audit-hub',
    title: 'MailOps',
    tagline: 'Everything between idea and inbox.',
    description:
    'Brand Audit Hub is an enterprise email production platform that centralises campaign management, email creation, quality assurance and approvals into a single collaborative workspace. Originally conceived as a QA and brand audit tool, the platform evolved into a complete workflow solution that reduces manual processes, improves collaboration and prepares campaigns for release with confidence.',

    challenge:
    'Marketing email production relied on multiple disconnected tools including project management software, Slack, email builders, Gmail and spreadsheets. Developers, QA specialists and Project Managers constantly switched between platforms, manually reviewed campaigns, tracked feedback and packaged final assets. This fragmented workflow slowed production, increased context switching and made quality assurance difficult to scale.',

    role:
    'Product Strategy, UX/UI Design, Full Stack Development & System Architecture',

    solution:
    'Designed and developed a collaborative platform that brings every stage of the email production lifecycle into one place. The platform features campaign management, a visual email builder, developer tools, an automated QA workspace, PM approvals, user management and role-based dashboards. Every workflow was designed to minimise friction while creating a scalable foundation for future automation and AI-assisted quality assurance.',

    lessons: [
      'Enterprise software creates the most value when it simplifies workflows rather than adding more features.',
      'Good UX is about reducing context switching and helping users stay focused on their task.',
      'Designing systems requires balancing developer flexibility with usability and consistency.',
      'Building with real user feedback led to better workflows and a more intuitive product experience.',
      'Automation should support people by removing repetitive work while keeping humans in control of critical decisions.'
    ],

    tech: [
      'Nuxt 3',
      'Vue 3',
      'TypeScript',
      'Drizzle ORM',
      'MySQL',
      'Tailwind CSS',
      'Google OAuth',
      'HTML Email Development',
      'UX Design',
      'Product Strategy'
    ],

    image: '/images/projects/mailops-submission.png',

    live: 'https://docs.google.com/presentation/d/1DZfurUgTlb28Yql_B6lCqFhTbxvzjsmLymFnZO_1vpg/edit?usp=sharing',

    featured: true,

    year: '2026',

    status: 'in-progress'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    tagline: 'My first taste of live data.',
    description: 'One of my earliest projects — a simple weather app that fetches live conditions from a public weather API and displays them for any city you search. This is the project that made API calls finally click for me.',
    challenge: 'As a beginner, the jump from static pages to real, live data felt huge. I had to figure out how to call an external API, handle the asynchronous response, and update the page with the result — all without a framework to lean on.',
    role: 'Solo — HTML, CSS & JavaScript',
    solution: 'Built entirely with vanilla JavaScript: a fetch call to a weather API, JSON parsing, and DOM updates to render the current conditions. No libraries, no build step — just the fundamentals.',
    lessons: [
      'Fetching and rendering real data is where JavaScript finally clicked for me.',
      'You can build something genuinely useful with just HTML, CSS, and vanilla JS.',
      'Loading and error states matter, even on a small project.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    image: '/images/projects/weather-app.png',
    live: 'https://softweatherapp.netlify.app/',
    featured: false,
    year: '2022',
    status: 'archived'
  }
]
