export interface Milestone {
  id: string
  year: string
  title: string
  description: string
  icon: string
  highlight?: boolean
  future?: boolean
}

export const journey: Milestone[] = [
  {
    id: 'curiosity',
    year: '2020',
    title: 'The First Line of Code',
    description: 'Opened a browser, found a tutorial, and wrote my first HTML file. It was a basic webpage with a heading and a paragraph. I was hooked — I couldn\'t believe I could make something real appear on a screen with nothing but text.',
    icon: 'i-lucide-sparkles',
    highlight: true
  },
  {
    id: 'css',
    year: '2021',
    title: 'Falling in Love with CSS',
    description: 'Discovered that CSS was more expressive than it looked. Started playing with flexbox, animations, and — of course — pink colour palettes. Rebuilt the same page ten times just to make it prettier each time.',
    icon: 'i-lucide-palette'
  },
  {
    id: 'javascript',
    year: '2021',
    title: 'JavaScript Changed Everything',
    description: 'Moved beyond static pages and learned JavaScript. Event listeners, DOM manipulation, fetch API. The moment I made an API call and displayed real data on screen, something clicked — this was real engineering.',
    icon: 'i-lucide-code-2'
  },
  {
    id: 'vue',
    year: '2022',
    title: 'Discovering Vue',
    description: 'Found Vue 3 and the Composition API. It felt like programming with superpowers. Reactive state, components, props, emits — suddenly I was building real interfaces that felt alive.',
    icon: 'i-simple-icons-vuedotjs',
    highlight: true
  },
  {
    id: 'nuxt',
    year: '2022',
    title: 'Nuxt Opens New Doors',
    description: 'Learned Nuxt and discovered server-side rendering, file-based routing, and auto-imports. My apps became faster, more SEO-friendly, and better structured. Nuxt remains my framework of choice.',
    icon: 'i-simple-icons-nuxt'
  },
  {
    id: 'wordpress',
    year: '2023',
    title: 'WordPress & Real Client Work',
    description: 'Built custom WordPress themes for real clients. Learned that professional development means understanding client needs, writing documentation, meeting deadlines, and communicating clearly even when things get complicated.',
    icon: 'i-simple-icons-wordpress'
  },
  {
    id: 'typescript',
    year: '2023',
    title: 'Embracing TypeScript',
    description: 'Made the switch to TypeScript. It slowed me down at first. Then it made me faster. More importantly, it made my code more trustworthy. I stopped shipping entire categories of bugs.',
    icon: 'i-simple-icons-typescript'
  },
  {
    id: 'professional',
    year: '2024',
    title: 'Becoming a Professional',
    description: 'Moved beyond hobby projects into professional development. Worked with real clients, real budgets, and real consequences. Learned the difference between code that works and code that is maintainable.',
    icon: 'i-lucide-briefcase',
    highlight: true
  },
  {
    id: 'databases',
    year: '2024',
    title: 'Going Deeper: Databases & Backend',
    description: 'Pushed beyond the frontend. Worked with MySQL and SQLite. Built and consumed APIs with Node.js and Strapi. Started understanding the full picture of how applications actually work end-to-end.',
    icon: 'i-lucide-database'
  },
  {
    id: 'product-thinking',
    year: '2025',
    title: 'Thinking in Products, Not Pages',
    description: 'A mindset shift: stopped building websites and started building products. Started asking why before how. User research, accessibility audits, performance budgets, and design systems became part of my workflow.',
    icon: 'i-lucide-lightbulb',
    highlight: true
  },
  {
    id: 'future',
    year: 'Next',
    title: 'What Comes Next',
    description: 'Deepening my backend knowledge. Exploring AI-powered interfaces. Getting better at UX research and design. Building something that reaches people beyond my immediate network.',
    icon: 'i-lucide-rocket',
    future: true
  }
]
