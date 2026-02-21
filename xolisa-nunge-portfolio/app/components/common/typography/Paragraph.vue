<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Paragraph.vue"
})
</script>

<template>
  <p class="text-sm md:text-base font-bold text-white">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>
