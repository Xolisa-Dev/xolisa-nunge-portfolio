<script setup lang="ts">
import { clientWork } from '~/data/clients'
</script>

<template>
  <section class="section-padding bg-[#04060f] relative" aria-labelledby="clients-heading">
    <div class="container-xl">
      <!-- Header -->
      <div class="grid lg:grid-cols-2 gap-8 items-end mb-16">
        <div class="space-y-4">
          <UiScrollReveal>
            <UiSectionLabel label="Client Work" />
          </UiScrollReveal>
          <UiScrollReveal :delay="100">
            <h2 id="clients-heading" class="text-headline">
              Trusted by real<br>businesses.
            </h2>
          </UiScrollReveal>
        </div>
        <UiScrollReveal variant="right" :delay="150">
          <p class="text-neutral-500 leading-relaxed">
            Real clients, real requirements, real consequences. Some details are kept confidential out of respect for my clients' privacy.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Client work list -->
      <div class="space-y-5">
        <UiScrollReveal
          v-for="(work, i) in clientWork"
          :key="work.id"
          :delay="i * 100"
        >
          <div class="card-base p-6 md:p-8 group hover:border-pink-500/15">
            <div class="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
              <!-- Left: Client info -->
              <div class="flex-shrink-0 space-y-2 md:w-48">
                <div class="flex items-center gap-2">
                  <div class="size-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                    <UIcon
                      :name="work.confidential ? 'i-lucide-lock' : 'i-lucide-building-2'"
                      class="size-4 text-pink-400"
                    />
                  </div>
                  <span class="text-neutral-200 font-semibold text-sm">{{ work.client }}</span>
                </div>
                <p class="text-neutral-600 text-xs pl-10">{{ work.industry }}</p>
                <p class="text-neutral-600 text-xs pl-10">{{ work.year }}</p>
              </div>

              <!-- Right: Project details -->
              <div class="flex-1 space-y-4">
                <div>
                  <h3 class="text-neutral-100 font-semibold font-display">{{ work.project }}</h3>
                  <p class="text-pink-400/60 text-sm">{{ work.role }}</p>
                </div>
                <p class="text-neutral-500 text-sm leading-relaxed">{{ work.contribution }}</p>

                <!-- Outcome -->
                <div class="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <UIcon name="i-lucide-trending-up" class="size-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p class="text-neutral-400 text-sm leading-relaxed">
                    <span class="text-emerald-400 font-medium">Outcome: </span>{{ work.outcome }}
                  </p>
                </div>

                <!-- Tech -->
                <div class="flex flex-wrap gap-2">
                  <UiTechBadge
                    v-for="tech in work.tech"
                    :key="tech"
                    :name="tech"
                  />
                </div>
              </div>
            </div>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
