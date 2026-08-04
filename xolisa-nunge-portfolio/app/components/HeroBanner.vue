<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Typewriter for subtitle
const subtitles = [
  'Frontend Developer.',
  'Product Thinker.',
  'Detail Obsessive.',
  'Experience Builder.',
  'Based in South Africa.'
]

const currentSubtitle = ref('')
const subtitleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let typeTimer: ReturnType<typeof setTimeout>

function typewriter() {
  const target = subtitles[subtitleIndex.value]!
  if (!isDeleting.value) {
    currentSubtitle.value = target.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === target.length) {
      isDeleting.value = true
      typeTimer = setTimeout(typewriter, 1800)
      return
    }
  }
  else {
    currentSubtitle.value = target.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      subtitleIndex.value = (subtitleIndex.value + 1) % subtitles.length
    }
  }
  typeTimer = setTimeout(typewriter, isDeleting.value ? 55 : 80)
}

// Mouse parallax on orbs
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouse(e: MouseEvent) {
  mouseX.value = (e.clientX / window.innerWidth - 0.5) * 40
  mouseY.value = (e.clientY / window.innerHeight - 0.5) * 40
}

onMounted(() => {
  typeTimer = setTimeout(typewriter, 500)
  window.addEventListener('mousemove', handleMouse, { passive: true })
})

onUnmounted(() => {
  clearTimeout(typeTimer)
  window.removeEventListener('mousemove', handleMouse)
})

function scrollDown() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden bg-[#080b16]"
    aria-label="Hero — introduction"
  >
    <!-- Dot grid -->
    <div class="absolute inset-0 dot-grid opacity-60" />

    <!-- Gradient orbs -->
    <div
      class="orb orb-pink absolute w-[600px] h-[600px] -top-32 -left-40 pointer-events-none"
      :style="`transform: translate(${mouseX * 0.4}px, ${mouseY * 0.4}px)`"
    />
    <div
      class="orb orb-indigo absolute w-[500px] h-[500px] -bottom-20 -right-32 pointer-events-none"
      :style="`transform: translate(${mouseX * -0.3}px, ${mouseY * -0.3}px)`"
    />

    <!-- Radial vignette -->
    <div class="absolute inset-0 bg-radial-[ellipse_80%_80%_at_50%_0%] from-transparent via-transparent to-[#080b16] pointer-events-none" />

    <div class="container-xl relative z-10 pt-28 pb-20">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="space-y-8">
          <!-- Eyebrow -->
          <UiScrollReveal variant="up">
            <div class="flex items-center gap-3">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/5 text-pink-400 text-xs font-medium tracking-wide">
                <span class="size-1.5 rounded-full bg-pink-400 animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </UiScrollReveal>

          <!-- Headline -->
          <UiScrollReveal variant="up" :delay="100">
            <h1 class="text-display">
              <span class="text-gradient-cool block">Xolisa</span>
              <span class="text-gradient-pink block">Nunge.</span>
            </h1>
          </UiScrollReveal>

          <!-- Typewriter subtitle -->
          <UiScrollReveal variant="up" :delay="200">
            <p class="text-2xl md:text-3xl font-display font-semibold text-neutral-300 min-h-[1.2em]">
              {{ currentSubtitle }}<span class="cursor-blink" aria-hidden="true" />
            </p>
          </UiScrollReveal>

          <!-- Description -->
          <UiScrollReveal variant="up" :delay="300">
            <p class="text-neutral-400 text-lg leading-relaxed max-w-lg">
              I build thoughtful digital experiences that sit at the intersection of clean engineering and intuitive design. Every line of code is a decision about how someone will feel using your product.
            </p>
          </UiScrollReveal>

          <!-- CTAs -->
          <UiScrollReveal variant="up" :delay="400">
            <div class="flex flex-wrap gap-4 py-10">
              <a href="#work" class="btn-primary" @click.prevent="() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })">
                <span>View My Work</span>
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </a>
              <a href="#contact" class="btn-ghost" @click.prevent="() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })">
                <UIcon name="i-lucide-mail" class="size-4" />
                <span>Let's Talk</span>
              </a>
            </div>
          </UiScrollReveal>

          <!-- Stats -->
          <UiScrollReveal variant="up" :delay="500">
            <div class="flex flex-wrap gap-8 pt-4">
              <div
                v-for="stat in [
                  { value: '3+', label: 'Years Learning' },
                  { value: '2', label: 'Projects Built' }
                ]"
                :key="stat.label"
                class="space-y-1"
              >
                <p class="text-2xl font-display font-bold text-gradient-pink">{{ stat.value }}</p>
                <p class="text-neutral-500 text-xs font-medium tracking-wide uppercase">{{ stat.label }}</p>
              </div>
            </div>
          </UiScrollReveal>
        </div>

        <!-- Photo Card -->
        <UiScrollReveal variant="right" :delay="200">
          <div class="relative mx-auto max-w-sm lg:max-w-full">
            <!-- Decorative ring -->
            <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink-500/20 via-indigo-500/10 to-transparent blur-xl" />
            <img 
              src="@/assets/images/xolisa-professional-image.png"
              alt="Xolisa Nunge"
              class="relative rounded-3xl border border-neutral-800 shadow-xl shadow-black/40"
            />
          </div>
        </UiScrollReveal>
      </div>
    </div>

    <!-- Scroll indicator -->
    <button
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600 hover:text-pink-400 transition-colors group"
      aria-label="Scroll to about section"
      @click="scrollDown"
    >
      <span class="text-xs font-medium tracking-widest uppercase">Scroll</span>
      <div class="w-6 h-9 border border-current rounded-full flex justify-center pt-2 group-hover:border-pink-400 transition-colors">
        <span class="w-1 h-2 rounded-full bg-current animate-bounce" />
      </div>
    </button>
  </section>
</template>
