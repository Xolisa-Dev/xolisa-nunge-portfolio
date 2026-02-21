<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Heading2"
})
</script>

<template>
  <h2 class="text-2xl md:text-4xl font-bold text-white">
    <slot></slot>
  </h2>
</template>

<style scoped>

</style>
