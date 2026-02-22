<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'HOME',
    to: '/',
    active: route.path.startsWith('/')
  },
  {
    label: 'ABOUT',
    to: '#about',
    active: route.path.startsWith('#about')
  },
  {
    label: 'SKILLS',
    to: '#skills',
    active: route.path.startsWith('#skills')
  },
  {
    label: 'CASE STUDIES',
    to: '/case-studies',
    active: route.path.startsWith('/case-studies')
  },
  {
    label: 'CONTACT',
    to: '/contact',
    active: route.path.startsWith('/contact')
  }
])
</script>

<template>
  <UHeader
    class="bg-slate-950 text-white hover:text-accent-600"
    :ui="{
    root: 'border-none py-10 text-white',
    title: 'text-accent-600 ',
    }"
  >
    <template #title>
        <CommonTypographyHeading3 class="text-accent-500">
          < Dev / >
        </CommonTypographyHeading3>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        :ui="{
          link: 'text-white hover:text-accent-600 before:bg-transparent hover:before:bg-transparent data-[state=open]:before:bg-transparent',
          linkLabel: 'text-inherit',
          linkActive: 'text-accent-600'
        }"
      />
    </template>
  </UHeader>
</template>
