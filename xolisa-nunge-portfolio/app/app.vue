<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#080b16' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark'
  }
})

useSeoMeta({
  title: 'Xolisa Nunge — Frontend Developer & Product Thinker',
  description: 'Xolisa Nunge is a Frontend Developer based in South Africa building thoughtful digital experiences with Vue, Nuxt, TypeScript and a deep respect for design and accessibility.',
  ogTitle: 'Xolisa Nunge — Frontend Developer & Product Thinker',
  ogDescription: 'Frontend Developer based in South Africa. Building thoughtful digital experiences with Vue, Nuxt, and a deep respect for design, accessibility and performance.',
  ogImage: '/og-image.png',
  ogUrl: 'https://xolisanunge.dev',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Xolisa Nunge — Frontend Developer',
  twitterDescription: 'Frontend Developer building thoughtful digital experiences from South Africa.',
  twitterImage: '/og-image.png'
})
</script>

<template>
  <UApp>
    <AppHeader />
    <main id="main-content">
      <NuxtPage />
    </main>
    <AppFooter />
  </UApp>
</template>
