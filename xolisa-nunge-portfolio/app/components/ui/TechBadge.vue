<script setup lang="ts">
defineProps<{
  name: string
  icon?: string
}>()
</script>

<template>
  <span class="pill">
    <UIcon v-if="icon" :name="icon" class="size-3" />
    {{ name }}
  </span>
</template>
