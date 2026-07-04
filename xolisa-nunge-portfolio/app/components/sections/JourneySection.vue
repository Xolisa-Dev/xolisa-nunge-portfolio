<script setup lang="ts">
import { journey } from '~/data/journey'
</script>

<template>
  <section
    id="journey"
    class="section-padding bg-[#04060f] relative overflow-hidden"
    aria-labelledby="journey-heading"
  >
    <!-- Background blur -->
    <div class="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="container-xl">
      <!-- Section header -->
      <div class="text-center space-y-4 mb-20">
        <UiScrollReveal>
          <UiSectionLabel label="Journey" class="justify-center" />
        </UiScrollReveal>
        <UiScrollReveal :delay="100">
          <h2 id="journey-heading" class="text-headline">
            How I got here.
          </h2>
        </UiScrollReveal>
        <UiScrollReveal :delay="200">
          <p class="text-neutral-500 max-w-xl mx-auto">
            Not a linear path — a series of curious detours that led somewhere meaningful.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Centre line (desktop) -->
        <div class="hidden md:block timeline-line" />

        <div class="space-y-8 md:space-y-0">
          <div
            v-for="(milestone, index) in journey"
            :key="milestone.id"
            :class="[
              'relative md:grid md:grid-cols-2 md:gap-8 md:items-center',
              index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
            ]"
          >
            <UiScrollReveal
              :variant="index % 2 === 0 ? 'left' : 'up'"
              :delay="100"
              :class="[
                'md:mb-0 mb-6',
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'
              ]"
            >
              <!-- Card -->
              <div
                :class="[
                  'card-base p-6 relative group',
                  milestone.future ? 'border-dashed opacity-70' : '',
                  milestone.highlight ? 'border-pink-500/20' : '',
                  index % 2 === 0 ? '' : 'md:text-left'
                ]"
              >
                <!-- Pink glow for highlights -->
                <div
                  v-if="milestone.highlight"
                  class="absolute inset-0 rounded-[inherit] bg-pink-500/3 pointer-events-none"
                />

                <div
                  :class="[
                    'flex items-center gap-3 mb-3',
                    index % 2 === 0 ? 'md:justify-end' : ''
                  ]"
                >
                  <div
                    :class="[
                      'size-8 rounded-lg flex items-center justify-center flex-shrink-0',
                      milestone.highlight ? 'bg-pink-500/20' : 'bg-white/5',
                      milestone.future ? 'bg-indigo-500/10' : ''
                    ]"
                  >
                    <UIcon
                      :name="milestone.icon"
                      :class="[
                        'size-4',
                        milestone.highlight ? 'text-pink-400' : 'text-neutral-400',
                        milestone.future ? 'text-indigo-400' : ''
                      ]"
                    />
                  </div>
                  <span
                    :class="[
                      'text-xs font-bold tracking-widest uppercase',
                      milestone.highlight ? 'text-pink-400' : 'text-neutral-600',
                      milestone.future ? 'text-indigo-400' : ''
                    ]"
                  >
                    {{ milestone.year }}
                  </span>
                </div>

                <h3 class="text-neutral-100 font-semibold text-lg mb-2 font-display">
                  {{ milestone.title }}
                </h3>
                <p class="text-neutral-500 text-sm leading-relaxed">
                  {{ milestone.description }}
                </p>

                <div
                  v-if="milestone.future"
                  class="mt-3 text-xs text-indigo-400 font-medium"
                >
                  ← What comes next
                </div>
              </div>
            </UiScrollReveal>

            <!-- Centre dot (desktop) -->
            <div class="hidden md:flex justify-center items-center md:order-2 md:col-span-1 md:absolute md:left-1/2 md:-translate-x-1/2">
              <div
                :class="[
                  'timeline-dot z-10',
                  milestone.highlight ? '' : 'bg-neutral-600 shadow-none border-neutral-700',
                  milestone.future ? 'bg-indigo-500 shadow-indigo-500/30' : ''
                ]"
              />
            </div>

            <!-- Empty cell for offset (right side on even, left on odd) -->
            <div
              :class="[
                'hidden md:block',
                index % 2 === 0 ? 'md:order-3' : 'md:order-1'
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
