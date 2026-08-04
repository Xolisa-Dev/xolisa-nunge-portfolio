<script setup lang="ts">
const values = [
  { icon: 'i-lucide-heart', label: 'Empathy-driven' },
  { icon: 'i-lucide-search', label: 'Detail-obsessed' },
  { icon: 'i-lucide-refresh-cw', label: 'Always learning' },
  { icon: 'i-lucide-users', label: 'Collaboration-first' }
]
</script>

<template>
  <section
    id="about"
    class="section-padding bg-[#080b16] relative overflow-hidden"
    aria-labelledby="about-heading"
  >
    <!-- Subtle background gradient -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="container-xl">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <!-- Text side -->
        <div class="space-y-8">
          <UiScrollReveal>
            <UiSectionLabel label="About Me" />
          </UiScrollReveal>

          <UiScrollReveal :delay="100">
            <h2 id="about-heading" class="text-headline">
              I didn't start with code.<br>
              <span class="text-gradient-pink">I started with curiosity.</span>
            </h2>
          </UiScrollReveal>

          <UiScrollReveal :delay="200">
            <div class="space-y-5 text-neutral-400 leading-relaxed">
              <p>
                What hooked me wasn't the syntax — it was the feeling of making something appear on a screen that hadn't existed before. A heading. A button. A layout that responded to the viewport. That small feedback loop became an obsession.
              </p>
              <p>
                Over the years, I've grown from someone who followed tutorials into someone who architects systems. I've built for real clients, learned from real constraints, and developed a genuine appreciation for the craft of frontend engineering.
              </p>
              <p>
                I'm drawn to the intersection where design meets engineering. Where the component tree is elegant, the loading is fast, the contrast passes WCAG, and someone — somewhere — has a better day because the interface didn't get in their way.
              </p>
              <p>
                I'm based in South Africa, working across industries and building products that I believe in.
              </p>
            </div>
          </UiScrollReveal>

          <!-- Values -->
          <UiScrollReveal :delay="300">
            <div class="grid grid-cols-2 gap-3 pt-4">
              <div
                v-for="value in values"
                :key="value.label"
                class="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-pink-500/20 hover:bg-pink-500/[0.03] transition-all duration-200"
              >
                <div class="size-8 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <UIcon :name="value.icon" class="size-4 text-pink-400" />
                </div>
                <span class="text-neutral-300 text-sm font-medium">{{ value.label }}</span>
              </div>
            </div>
          </UiScrollReveal>

          <!-- Social links -->
          <UiScrollReveal :delay="400">
            <div class="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Xolisa-Dev"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-neutral-500 hover:text-pink-400 text-sm font-medium transition-colors group"
              >
                <UIcon name="i-simple-icons-github" class="size-4" />
                <span>GitHub</span>
                <UIcon name="i-lucide-arrow-up-right" class="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/xolisa-nunge-441b25264/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-neutral-500 hover:text-pink-400 text-sm font-medium transition-colors group"
              >
                <UIcon name="i-simple-icons-linkedin" class="size-4" />
                <span>LinkedIn</span>
                <UIcon name="i-lucide-arrow-up-right" class="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </UiScrollReveal>
        </div>

        <!-- Code block side -->
        <UiScrollReveal variant="right" :delay="150">
          <div class="sticky top-28">
            <!-- Code window -->
            <div class="rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50">
              <!-- Window chrome -->
              <div class="flex items-center gap-2 px-4 py-3 bg-[#0d1117] border-b border-white/5">
                <span class="size-3 rounded-full bg-red-500/70" />
                <span class="size-3 rounded-full bg-yellow-400/70" />
                <span class="size-3 rounded-full bg-green-400/70" />
                <span class="ml-3 text-neutral-600 text-xs font-mono">developer.ts</span>
              </div>
              <!-- Code content -->
              <div class="bg-[#04060f] p-6">
                <pre class="text-sm font-mono leading-8 overflow-x-auto"><code><span class="text-indigo-400">const</span> <span class="text-sky-300">developer</span> <span class="text-neutral-400">=</span> <span class="text-neutral-400">{</span>
  <span class="text-pink-400">name</span><span class="text-neutral-400">:</span>     <span class="text-emerald-300">'Xolisa Nunge'</span><span class="text-neutral-400">,</span>
  <span class="text-pink-400">location</span><span class="text-neutral-400">:</span> <span class="text-emerald-300">'South Africa 🇿🇦'</span><span class="text-neutral-400">,</span>
  <span class="text-pink-400">role</span><span class="text-neutral-400">:</span>     <span class="text-emerald-300">'Frontend Developer'</span><span class="text-neutral-400">,</span>
  <span class="text-pink-400">loves</span><span class="text-neutral-400">:</span>    <span class="text-neutral-400">[</span>
    <span class="text-emerald-300">'Vue & Nuxt'</span><span class="text-neutral-400">,</span>
    <span class="text-emerald-300">'Design systems'</span><span class="text-neutral-400">,</span>
    <span class="text-emerald-300">'Accessibility'</span><span class="text-neutral-400">,</span>
    <span class="text-emerald-300">'The colour pink'</span>
  <span class="text-neutral-400">],</span>
  <span class="text-pink-400">currentlyLearning</span><span class="text-neutral-400">:</span> <span class="text-neutral-400">[</span>
    <span class="text-emerald-300">'Backend architecture'</span><span class="text-neutral-400">,</span>
    <span class="text-emerald-300">'AI integrations'</span><span class="text-neutral-400">,</span>
    <span class="text-emerald-300">'UX research'</span>
  <span class="text-neutral-400">],</span>
  <span class="text-pink-400">openToWork</span><span class="text-neutral-400">:</span> <span class="text-indigo-400">true</span>
<span class="text-neutral-400">};</span>
</code></pre>
              </div>
            </div>

            <!-- Mini stat cards below code -->
            <div class="grid grid-cols-2 gap-3 mt-4">
              <div
                v-for="item in [
                  { label: 'Vue/Nuxt', sub: 'Primary stack', icon: 'i-simple-icons-nuxt', color: 'text-green-400' },
                  { label: 'TypeScript', sub: 'Type-first', icon: 'i-simple-icons-typescript', color: 'text-blue-400' }
                ]"
                :key="item.label"
                class="card-base p-4 flex items-center gap-3"
              >
                <UIcon :name="item.icon" :class="['size-6', item.color]" />
                <div>
                  <p class="text-neutral-200 text-sm font-semibold">{{ item.label }}</p>
                  <p class="text-neutral-600 text-xs">{{ item.sub }}</p>
                </div>
              </div>
            </div>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
