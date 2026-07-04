<script setup lang="ts">
import { ref, computed } from 'vue'
import { techStack, type TechCategory } from '~/data/skills'

type FilterCategory = 'All' | TechCategory
const categories: FilterCategory[] = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'CMS', 'Styling', 'Tools']

const activeCategory = ref<FilterCategory>('All')

const filtered = computed(() => {
  if (activeCategory.value === 'All') return techStack
  return techStack.filter(t => t.category === activeCategory.value)
})

const experienceColour: Record<string, string> = {
  Expert: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Proficient: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Comfortable: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  Familiar: 'text-neutral-400 bg-neutral-400/10 border-neutral-400/20'
}

const activeTooltip = ref<string | null>(null)
</script>

<template>
  <section
    id="stack"
    class="section-padding bg-[#04060f] relative"
    aria-labelledby="stack-heading"
  >
    <div class="container-xl">
      <!-- Header -->
      <div class="text-center space-y-4 mb-12">
        <UiScrollReveal>
          <UiSectionLabel label="Tech Stack" class="justify-center" />
        </UiScrollReveal>
        <UiScrollReveal :delay="100">
          <h2 id="stack-heading" class="text-headline">
            The tools I reach for.
          </h2>
        </UiScrollReveal>
        <UiScrollReveal :delay="200">
          <p class="text-neutral-500 max-w-lg mx-auto">
            Every technology below has a reason to be here. Click to filter by category.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Category filter -->
      <UiScrollReveal :delay="250">
        <div class="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter by category">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === cat
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                : 'bg-white/5 text-neutral-400 hover:text-neutral-200 hover:bg-white/8 border border-white/8'
            ]"
            :aria-pressed="activeCategory === cat"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </UiScrollReveal>

      <!-- Tech grid -->
      <TransitionGroup
        tag="div"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        move-class="transition-all duration-300"
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200 absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          v-for="tech in filtered"
          :key="tech.name"
          class="relative group"
          @mouseenter="activeTooltip = tech.name"
          @mouseleave="activeTooltip = null"
          @focusin="activeTooltip = tech.name"
          @focusout="activeTooltip = null"
        >
          <div
            class="card-base p-4 flex flex-col items-center text-center gap-3 h-full cursor-default"
          >
            <UIcon :name="tech.icon" class="size-7 text-neutral-300 group-hover:text-pink-300 transition-colors" />
            <p class="text-neutral-300 text-sm font-medium leading-tight">{{ tech.name }}</p>
            <span
              :class="[
                'text-xs font-medium px-2 py-0.5 rounded-full border',
                experienceColour[tech.experience]
              ]"
            >
              {{ tech.experience }}
            </span>
          </div>

          <!-- Tooltip -->
          <Transition
            enter-active-class="transition-all duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="activeTooltip === tech.name"
              role="tooltip"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 w-56 glass rounded-xl p-3 shadow-xl shadow-black/50 pointer-events-none"
            >
              <p class="text-neutral-200 text-xs font-semibold mb-1">{{ tech.name }}</p>
              <p class="text-neutral-500 text-xs leading-relaxed">{{ tech.description }}</p>
              <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/10" />
            </div>
          </Transition>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
