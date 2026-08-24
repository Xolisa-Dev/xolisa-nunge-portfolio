<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useActiveSection } from '~/composables/useActiveSection'

const sectionIds = ['hero', 'about', 'client-work', 'work', 'process', 'contact']
const { activeSection } = useActiveSection(sectionIds)

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#client-work' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
  // { label: 'Blog', href: '/blog' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 32
}

function scrollTo(href: string) {
  mobileOpen.value = false
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'py-3 bg-[#080b16]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
        : 'py-10 bg-transparent'
    ]"
  >
    <div class="container-xl flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2 group"
        aria-label="Xolisa Nunge — Home"
      >
        <span
          class="font-mono text-sm font-bold tracking-tight px-2 py-1 rounded-md border border-pink-500/30 text-pink-400 group-hover:border-pink-500/60 group-hover:text-pink-300 transition-all duration-200"
        >
          &lt; XN /&gt;
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav
        aria-label="Main navigation"
        class="hidden md:flex items-center gap-8"
      >
        <button
          v-for="item in navItems"
          :key="item.href"
          :class="[
            'nav-link text-sm font-medium transition-colors duration-200',
            activeSection === item.href.replace('#', '') ? 'active text-neutral-50' : ''
          ]"
          @click="scrollTo(item.href)"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          class="btn-primary text-sm px-4 py-2"
          @click.prevent="scrollTo('#contact')"
        >
          <span>Let's Talk</span>
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-4"
          />
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2 text-neutral-400 hover:text-neutral-50 transition-colors"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <UIcon
          :name="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          class="size-5"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-[#080b16]/98 backdrop-blur-xl border-t border-white/5 px-6 py-6"
      >
        <nav
          class="flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          <button
            v-for="item in navItems"
            :key="item.href"
            class="text-left py-3 text-neutral-300 hover:text-pink-400 font-medium transition-colors border-b border-white/5 last:border-none"
            @click="scrollTo(item.href)"
          >
            {{ item.label }}
          </button>
        </nav>
        <a
          href="#contact"
          class="btn-primary mt-6 w-full justify-center text-sm"
          @click.prevent="scrollTo('#contact')"
        >
          <span>Let's Talk</span>
          <UIcon
            name="i-lucide-arrow-up-right"
            class="size-4"
          />
        </a>
      </div>
    </Transition>
  </header>
</template>
