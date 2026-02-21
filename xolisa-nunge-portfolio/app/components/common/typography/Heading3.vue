<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Heading3"
})
</script>

<template>
  <h3 class="text-xl md:text-3xl font-bold text-white">
    <slot></slot>
  </h3>
</template>

<style scoped>

</style>
