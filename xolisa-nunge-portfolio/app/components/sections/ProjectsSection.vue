<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'

const activeProject = ref<string | null>(null)

const statusConfig = {
  live: { label: 'Live', class: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  'in-progress': { label: 'In Progress', class: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
  archived: { label: 'Archived', class: 'text-neutral-500 bg-neutral-500/10 border-neutral-500/20' }
}

// Project gradient colours for visual differentiation
const projectColours = ['from-pink-500/20', 'from-indigo-500/20', 'from-emerald-500/20']
</script>

<template>
  <section
    id="work"
    class="section-padding bg-[#080b16] relative overflow-hidden"
    aria-labelledby="work-heading"
  >
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="container-xl">
      <!-- Header -->
      <div class="grid lg:grid-cols-2 gap-8 items-end mb-16">
        <div class="space-y-4">
          <UiScrollReveal>
            <UiSectionLabel label="Featured Work" />
          </UiScrollReveal>
          <UiScrollReveal :delay="100">
            <h2 id="work-heading" class="text-headline">
              Problems I've solved.
            </h2>
          </UiScrollReveal>
        </div>
        <UiScrollReveal variant="right" :delay="150">
          <p class="text-neutral-500 leading-relaxed">
            Projects that challenged me to think harder, build better, and learn something I didn't know before.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Projects -->
      <div class="space-y-6">
        <UiScrollReveal
          v-for="(project, i) in projects"
          :key="project.id"
          :delay="i * 80"
        >
          <div
            :class="[
              'card-base overflow-hidden group',
              activeProject === project.id ? 'border-pink-500/20' : ''
            ]"
          >
            <!-- Project header -->
            <div class="grid lg:grid-cols-5 gap-0">
              <!-- Visual panel -->
              <div
                :class="[
                  'lg:col-span-2 relative overflow-hidden aspect-video lg:aspect-auto min-h-56 bg-gradient-to-br',
                  projectColours[i]!,
                  'to-transparent'
                ]"
              >
                <div class="absolute inset-0 bg-[#0d1117] flex items-center justify-center">
                  <div class="text-center space-y-3">
                    <div class="size-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center mx-auto">
                      <UIcon name="i-lucide-code-2" class="size-7 text-pink-400/60" />
                    </div>
                    <p class="text-neutral-700 text-xs">Project screenshot</p>
                  </div>
                </div>
                <!-- Year badge -->
                <div class="absolute top-4 left-4">
                  <span class="pill-neutral text-xs">{{ project.year }}</span>
                </div>
              </div>

              <!-- Content panel -->
              <div class="lg:col-span-3 p-8 flex flex-col justify-between">
                <div class="space-y-4">
                  <div class="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div class="flex items-center gap-2 mb-2">
                        <span
                          :class="[
                            'text-xs font-medium px-2 py-0.5 rounded-full border',
                            statusConfig[project.status].class
                          ]"
                        >
                          {{ statusConfig[project.status].label }}
                        </span>
                      </div>
                      <h3 class="text-xl font-display font-bold text-neutral-100">{{ project.title }}</h3>
                      <p class="text-pink-400/70 text-sm mt-1 italic">{{ project.tagline }}</p>
                    </div>
                    <div class="flex gap-2">
                      <a
                        v-if="project.github"
                        :href="project.github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2 glass rounded-lg text-neutral-500 hover:text-neutral-200 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <UIcon name="i-simple-icons-github" class="size-4" />
                      </a>
                      <a
                        v-if="project.live"
                        :href="project.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="p-2 glass rounded-lg text-neutral-500 hover:text-pink-400 transition-colors"
                        aria-label="View live site"
                      >
                        <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                      </a>
                    </div>
                  </div>

                  <p class="text-neutral-500 text-sm leading-relaxed">{{ project.description }}</p>

                  <!-- Tech badges -->
                  <div class="flex flex-wrap gap-2">
                    <UiTechBadge
                      v-for="tech in project.tech"
                      :key="tech"
                      :name="tech"
                    />
                  </div>
                </div>

                <!-- Expand toggle -->
                <button
                  :class="[
                    'mt-6 flex items-center gap-2 text-sm font-medium transition-colors',
                    activeProject === project.id ? 'text-pink-400' : 'text-neutral-600 hover:text-neutral-300'
                  ]"
                  :aria-expanded="activeProject === project.id"
                  @click="activeProject = activeProject === project.id ? null : project.id"
                >
                  <span>{{ activeProject === project.id ? 'Hide case study' : 'View case study' }}</span>
                  <UIcon
                    :name="activeProject === project.id ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
                    class="size-4"
                  />
                </button>
              </div>
            </div>

            <!-- Expanded case study -->
            <Transition
              enter-active-class="transition-all duration-400 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-[1000px]"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 max-h-[1000px]"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="activeProject === project.id"
                class="overflow-hidden border-t border-white/5"
              >
                <div class="p-8 grid md:grid-cols-3 gap-8">
                  <div class="space-y-3">
                    <h4 class="text-xs font-bold tracking-widest uppercase text-pink-400">The Challenge</h4>
                    <p class="text-neutral-500 text-sm leading-relaxed">{{ project.challenge }}</p>
                  </div>
                  <div class="space-y-3">
                    <h4 class="text-xs font-bold tracking-widest uppercase text-pink-400">My Solution</h4>
                    <p class="text-neutral-500 text-sm leading-relaxed">{{ project.solution }}</p>
                  </div>
                  <div class="space-y-3">
                    <h4 class="text-xs font-bold tracking-widest uppercase text-pink-400">What I Learned</h4>
                    <ul class="space-y-2">
                      <li
                        v-for="lesson in project.lessons"
                        :key="lesson"
                        class="text-neutral-500 text-sm leading-relaxed flex gap-2"
                      >
                        <UIcon name="i-lucide-arrow-right" class="size-3 mt-1.5 text-pink-500/50 flex-shrink-0" />
                        {{ lesson }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
