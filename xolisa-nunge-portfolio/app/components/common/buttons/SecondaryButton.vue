<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SecondaryButton.vue"
})
</script>

<template>
  <UButton
    class="px-8 py-4 text-accent-400 text-base leading-tight bg-transparent border border-accent-400 hover:bg-accent-400 hover:text-white"
  >
    <slot></slot>
  </UButton>
</template>

<style scoped>

</style>
