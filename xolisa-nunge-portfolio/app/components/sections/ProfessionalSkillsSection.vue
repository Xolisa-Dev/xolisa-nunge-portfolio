<script setup lang="ts">
import { professionalSkills } from '~/data/skills'
</script>

<template>
  <section class="section-padding bg-[#04060f] relative" aria-labelledby="prof-skills-heading">
    <div class="container-xl">
      <!-- Header -->
      <div class="text-center space-y-4 mb-16">
        <UiScrollReveal>
          <UiSectionLabel label="Skills" class="justify-center" />
        </UiScrollReveal>
        <UiScrollReveal :delay="100">
          <h2 id="prof-skills-heading" class="text-headline">
            What I bring to a team.
          </h2>
        </UiScrollReveal>
        <UiScrollReveal :delay="200">
          <p class="text-neutral-500 max-w-xl mx-auto">
            Beyond technologies — these are the disciplines that define how I work.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Skills grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <UiScrollReveal
          v-for="(skill, i) in professionalSkills"
          :key="skill.id"
          :delay="(i % 3) * 100"
        >
          <div class="card-base p-6 h-full group relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-[inherit]" />

            <div class="flex items-start gap-4">
              <div class="size-10 rounded-xl bg-pink-500/10 border border-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 group-hover:border-pink-500/20 transition-all">
                <UIcon :name="skill.icon" class="size-5 text-pink-400" />
              </div>
              <div class="space-y-2 min-w-0">
                <h3 class="text-neutral-100 font-semibold font-display">{{ skill.title }}</h3>
                <p class="text-neutral-500 text-sm leading-relaxed">{{ skill.description }}</p>
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span
                    v-for="tag in skill.tags"
                    :key="tag"
                    class="pill-neutral text-xs"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
