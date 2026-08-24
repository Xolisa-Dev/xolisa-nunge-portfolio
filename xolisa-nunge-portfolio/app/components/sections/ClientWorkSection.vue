<script setup lang="ts">
import { clientWork } from '~/data/clients'
</script>

<template>
  <section
    id="client-work"
    class="section-padding bg-[#04060f] relative overflow-hidden"
    aria-labelledby="client-work-heading"
  >
    <div class="absolute inset-0 dot-grid opacity-[0.025] pointer-events-none" />
    <div class="absolute top-1/3 -left-48 size-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

    <div class="container-xl relative">
      <div class="grid lg:grid-cols-2 gap-8 items-end mb-14 md:mb-20">
        <div class="space-y-4">
          <UiScrollReveal>
            <UiSectionLabel label="Selected Work" />
          </UiScrollReveal>
          <UiScrollReveal :delay="100">
            <h2
              id="client-work-heading"
              class="text-headline"
            >
              Selected client work.
            </h2>
          </UiScrollReveal>
        </div>
        <UiScrollReveal
          variant="right"
          :delay="150"
        >
          <p class="max-w-xl text-neutral-500 leading-relaxed">
            A selection of client projects that have shaped my experience across frontend development, CMS integration, CRO, debugging, and website optimisation.
          </p>
        </UiScrollReveal>
      </div>

      <ol class="border-t border-white/8">
        <li
          v-for="(work, index) in clientWork"
          :key="work.id"
          class="border-b border-white/8"
        >
          <UiScrollReveal :delay="index * 100">
            <article class="group grid lg:grid-cols-12 gap-x-8 gap-y-6 py-8 md:py-11 transition-colors duration-300 hover:bg-white/[0.015]">
              <div class="lg:col-span-2 flex items-start gap-4 lg:block">
                <span
                  class="font-display text-5xl md:text-6xl font-bold tracking-[-0.06em] text-pink-500/75 group-hover:text-pink-400 transition-colors duration-300"
                  aria-hidden="true"
                >
                  {{ work.number }}
                </span>
                <span class="mt-3 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-neutral-600 lg:flex">
                  <span class="size-1.5 rounded-full bg-pink-500/70" />
                  Client project
                </span>
              </div>

              <div class="lg:col-span-6 xl:col-span-7 space-y-5">
                <div>
                  <h3 class="font-display text-2xl md:text-3xl font-bold text-neutral-100">
                    {{ work.client }}
                  </h3>
                  <p class="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-neutral-500">
                    {{ work.description }}
                  </p>
                </div>
                <div
                  class="flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  <UiTechBadge
                    v-for="technology in work.technologies"
                    :key="technology"
                    :name="technology"
                  />
                </div>
              </div>

              <div class="lg:col-span-4 xl:col-span-3 lg:border-l lg:border-white/8 lg:pl-8">
                <h4 class="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-pink-400">
                  Experience built
                </h4>
                <ul
                  class="grid gap-2"
                  aria-label="Key skills"
                >
                  <li
                    v-for="skill in work.skills"
                    :key="skill"
                    class="flex items-start gap-2 text-sm leading-relaxed text-neutral-500"
                  >
                    <UIcon
                      name="i-lucide-arrow-up-right"
                      class="mt-1 size-3 shrink-0 text-pink-500/60"
                      aria-hidden="true"
                    />
                    <span>{{ skill }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </UiScrollReveal>
        </li>
      </ol>
    </div>
  </section>
</template>
