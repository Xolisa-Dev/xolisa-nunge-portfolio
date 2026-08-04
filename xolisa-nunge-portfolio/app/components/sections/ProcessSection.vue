<script setup lang="ts">
import { ref } from 'vue'

const steps = [
  {
    number: '01',
    title: 'Discover',
    icon: 'i-lucide-search',
    short: 'What are we actually solving?',
    description: 'I begin by asking questions. Lots of them. Who is using this? What frustrates them today? What does success look like? Understanding the problem before touching a keyboard is the single most important investment I make in any project.'
  },
  {
    number: '02',
    title: 'Research',
    icon: 'i-lucide-book-open',
    short: 'What do others know that I don\'t?',
    description: 'I look at how similar problems have been solved. What patterns exist? What are the conventions in this space? What can I learn from competing products, user feedback, and existing documentation before I reinvent anything?'
  },
  {
    number: '03',
    title: 'Plan',
    icon: 'i-lucide-layout-template',
    short: 'What am I building, exactly?',
    description: 'Architecture first. I think through the component hierarchy, data flow, routing and edge cases before writing a line of production code. A good plan makes the build feel obvious rather than improvised.'
  },
  {
    number: '04',
    title: 'Design',
    icon: 'i-lucide-figma',
    short: 'How will it feel to use?',
    description: 'Whether I\'m working from a Figma file or designing independently, I think through the visual hierarchy, interaction states, and typography before building. Accessibility is part of the design phase, not a correction at the end.'
  },
  {
    number: '05',
    title: 'Build',
    icon: 'i-lucide-code-2',
    short: 'Write code worth reading.',
    description: 'I build with components that have single responsibilities, composables that encapsulate logic cleanly, and naming that communicates intent. TypeScript, semantic HTML, and CSS that scales. I write code for the next developer, not just the compiler.'
  },
  {
    number: '06',
    title: 'Test',
    icon: 'i-lucide-check-circle',
    short: 'Does it actually work?',
    description: 'Cross-browser testing, screen reader verification, mobile testing at multiple viewports. Lighthouse for performance and accessibility. I look for the edge cases before users find them.'
  },
  {
    number: '07',
    title: 'Improve',
    icon: 'i-lucide-trending-up',
    short: 'How can this be better?',
    description: 'Launch is not the end. I gather feedback, monitor performance, fix what\'s broken, and find what can be better. Continuous improvement is not a phase in the process — it\'s a mindset that outlasts every project.'
  }
]

const activeStep = ref<number | null>(null)
</script>

<template>
  <section
    id="process"
    class="section-padding bg-[#080b16] relative overflow-hidden"
    aria-labelledby="process-heading"
  >
    <div class="absolute top-1/2 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

    <div class="container-xl">
      <!-- Header -->
      <div class="grid lg:grid-cols-2 gap-12 items-end mb-20">
        <div class="space-y-5">
          <UiScrollReveal>
            <UiSectionLabel label="My Process" />
          </UiScrollReveal>
          <UiScrollReveal :delay="100">
            <h2 id="process-heading" class="text-headline">
              How I think<br>before I build.
            </h2>
          </UiScrollReveal>
        </div>
        <UiScrollReveal variant="right" :delay="150">
          <p class="text-neutral-500 leading-relaxed">
            Good engineering isn't just about writing code — it's about writing the right code, in the right order, for the right reasons. This is the process that keeps my work intentional rather than reactive.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Steps grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <UiScrollReveal
          v-for="(step, i) in steps"
          :key="step.number"
          :delay="(i % 4) * 100"
        >
          <button
            :class="[
              'card-base p-6 w-full text-left h-full transition-all duration-300 group',
              activeStep === i ? 'border-pink-500/30 bg-pink-500/5' : ''
            ]"
            :aria-expanded="activeStep === i"
            @click="activeStep = activeStep === i ? null : i"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="size-10 rounded-xl bg-white/5 group-hover:bg-pink-500/10 flex items-center justify-center transition-colors">
                <UIcon :name="step.icon" class="size-5 text-neutral-400 group-hover:text-pink-400 transition-colors" />
              </div>
              <span class="text-xs font-mono text-neutral-700 font-bold">{{ step.number }}</span>
            </div>
            <h3 class="text-neutral-200 font-semibold font-display text-lg mb-1 group-hover:text-pink-300 transition-colors">
              {{ step.title }}
            </h3>
            <p class="text-neutral-600 text-xs mb-3">
              {{ step.short }}
            </p>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-48"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-48"
              leave-to-class="opacity-0 max-h-0"
            >
              <p v-if="activeStep === i" class="text-neutral-500 text-sm leading-relaxed overflow-hidden">
                {{ step.description }}
              </p>
            </Transition>
            <div class="mt-3 flex items-center gap-1 text-xs text-neutral-700 group-hover:text-pink-500/60 transition-colors">
              <span>{{ activeStep === i ? 'Read less' : 'Read more' }}</span>
              <UIcon :name="activeStep === i ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" class="size-3" />
            </div>
          </button>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
