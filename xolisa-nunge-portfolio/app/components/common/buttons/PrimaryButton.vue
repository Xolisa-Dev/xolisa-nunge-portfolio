<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PrimaryButton.vue"
})
</script>

<template>
  <UButton class="px-8 py-4 text-base leading-tight bg-accent-400 hover:bg-transparent hover:text-accent-400 hover:border border-accent-400">
    <slot></slot>
  </UButton>
</template>

<style scoped>

</style>
