export interface Testimonial {
  id: string
  content: string
  author: string
  role: string
  company: string
  avatar?: string
  placeholder?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    content: 'Xolisa delivered exactly what we needed — and more. He took the time to understand our business, asked the right questions, and built something we\'re genuinely proud of. The final product was clean, fast, and easy to use.',
    author: 'Client',
    role: 'Business Owner',
    company: 'Professional Services',
    placeholder: true
  },
  {
    id: 'testimonial-2',
    content: 'What I appreciated most was how he communicated throughout the project. Never any jargon. Always honest about timelines. The website he rebuilt for us made a real difference — our mobile users finally have a great experience.',
    author: 'Client',
    role: 'Publisher',
    company: 'Media & Publishing',
    placeholder: true
  },
  {
    id: 'testimonial-3',
    content: 'Working with Xolisa felt collaborative rather than transactional. He had opinions about what would work best and was willing to explain his reasoning. That kind of thinking is rare in a developer.',
    author: 'Client',
    role: 'Founder',
    company: 'E-commerce',
    placeholder: true
  }
]
