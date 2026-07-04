<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' }
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Xolisa-Dev', icon: 'i-simple-icons-github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xolisa-nunge-441b25264/', icon: 'i-simple-icons-linkedin' }
]
</script>

<template>
  <footer class="border-t border-white/5 bg-[#04060f]">
    <div class="container-xl py-16">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <!-- Brand -->
        <div class="space-y-3">
          <span class="font-mono text-sm font-bold text-pink-400 tracking-tight">
            &lt; XN /&gt;
          </span>
          <p class="text-neutral-500 text-sm max-w-xs leading-relaxed">
            Frontend Developer. Product Thinker. Based in South Africa.
          </p>
        </div>

        <!-- Nav -->
        <nav aria-label="Footer navigation" class="flex flex-wrap gap-6">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Socials -->
        <div class="flex items-center gap-4">
          <a
            v-for="link in socialLinks"
            :key="link.href"
            :href="link.href"
            :aria-label="link.label"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 text-neutral-500 hover:text-pink-400 transition-colors rounded-md hover:bg-white/5"
          >
            <UIcon :name="link.icon" class="size-4" />
          </a>
        </div>
      </div>

      <div class="separator mt-10 mb-6" />

      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-600 text-xs">
        <p>© {{ currentYear }} Xolisa Nunge. All rights reserved.</p>
        <p>Built with Vue, Nuxt & a lot of pink 🩷</p>
      </div>
    </div>
  </footer>
</template>
