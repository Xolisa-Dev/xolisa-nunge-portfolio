export interface ClientWork {
  id: string
  number: string
  client: string
  technologies: string[]
  description: string
  skills: string[]
}

export const clientWork: ClientWork[] = [
  {
    id: 'barron',
    number: '01',
    client: 'Barron',
    technologies: ['Nuxt', 'Directus', 'REST APIs', 'Headless CMS'],
    description: 'A rebuild of the Barron 2.0 website that introduced me to Nuxt. I worked with Nuxt, Directus CMS, and APIs to build a frontend capable of retrieving structured content from a headless CMS and dynamically displaying it across the website.',
    skills: ['Nuxt', 'Directus', 'API integration', 'Headless CMS architecture', 'Dynamic content', 'Frontend development']
  },
  {
    id: 'flume',
    number: '02',
    client: 'Flume Digital Marketing',
    technologies: ['WordPress', 'Elementor', 'CRO', 'A/B Testing', 'Debugging'],
    description: 'Working on the Flume website has expanded my experience with WordPress and Elementor. I work closely with the CRO team to support website improvements and A/B testing initiatives, including troubleshooting conflicts between Elementor functionality and testing implementations.',
    skills: ['WordPress', 'Elementor', 'CRO', 'A/B testing', 'Debugging', 'Production website maintenance', 'Troubleshooting', 'Website optimisation']
  },
  {
    id: 'toyota',
    number: '03',
    client: 'Toyota',
    technologies: ['Next.js', 'WordPress', 'Elementor', 'Apostrophe CMS', 'Component optimisation'],
    description: 'Working across Toyota web properties has exposed me to different frontend and CMS environments. I have worked with Next.js to update global components and enhance existing sections, while also working with Apostrophe CMS and WordPress/Elementor on other Toyota industries/subsections.',
    skills: ['Next.js', 'Reusable/global components', 'Component optimisation', 'Apostrophe CMS', 'WordPress', 'Elementor', 'CMS optimisation', 'Large-scale web properties']
  }
]
