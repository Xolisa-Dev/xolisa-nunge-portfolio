<script setup lang="ts">
const tools = [
  { name: 'VS Code', icon: 'i-simple-icons-visualstudiocode', description: 'My editor. Highly customised, keyboard-driven, and indispensable.' },
  { name: 'Git', icon: 'i-simple-icons-git', description: 'Version control as a communication tool, not just a backup.' },
  { name: 'GitHub', icon: 'i-simple-icons-github', description: 'Where ideas become commits, and commits become products.' },
  { name: 'Figma', icon: 'i-simple-icons-figma', description: 'I can inspect, prototype, and collaborate directly in design files.' },
  { name: 'Postman', icon: 'i-simple-icons-postman', description: 'API exploration, testing, and documentation made reliable.' },
  { name: 'Netlify', icon: 'i-simple-icons-netlify', description: 'Fast, reliable deployment with CI/CD that just works.' },
  { name: 'Vercel', icon: 'i-simple-icons-vercel', description: 'Zero-config hosting for Nuxt apps. The gold standard.' },
  { name: 'Ploi', icon: 'i-lucide-server', description: 'Server management without the DevOps headache.' },
  { name: 'npm', icon: 'i-simple-icons-npm', description: 'Package management, scripts, and the Node ecosystem.' }
]
</script>

<template>
  <section class="section-padding bg-[#080b16] relative" aria-labelledby="toolbox-heading">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="container-xl">
      <!-- Header -->
      <div class="space-y-4 mb-16">
        <UiScrollReveal>
          <UiSectionLabel label="Toolbox" />
        </UiScrollReveal>
        <UiScrollReveal :delay="100">
          <h2 id="toolbox-heading" class="text-headline max-w-lg">
            The tools I<br>trust daily.
          </h2>
        </UiScrollReveal>
        <UiScrollReveal :delay="200">
          <p class="text-neutral-500 max-w-md">
            Great craftspeople know their tools. These are the ones I reach for every day.
          </p>
        </UiScrollReveal>
      </div>

      <!-- Tools grid -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <UiScrollReveal
          v-for="(tool, i) in tools"
          :key="tool.name"
          :delay="(i % 5) * 80"
        >
          <div class="card-base p-5 group h-full relative overflow-hidden">
            <!-- Hover gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

            <UIcon
              :name="tool.icon"
              class="size-8 text-neutral-400 group-hover:text-pink-300 transition-colors mb-4"
            />
            <h3 class="text-neutral-200 font-semibold text-sm mb-2 group-hover:text-pink-200 transition-colors">
              {{ tool.name }}
            </h3>
            <p class="text-neutral-600 text-xs leading-relaxed">
              {{ tool.description }}
            </p>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
