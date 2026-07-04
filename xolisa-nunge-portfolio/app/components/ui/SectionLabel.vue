<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <span class="text-section-label">{{ label }}</span>
    <span class="h-px w-12 bg-gradient-to-r from-pink-500 to-transparent" />
  </div>
</template>
