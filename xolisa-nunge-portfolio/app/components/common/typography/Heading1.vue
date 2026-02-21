<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Heading1.vue"
})
</script>

<template>
  <h1 class="text-3xl md:text-5xl font-bold text-current">
    <slot></slot>
  </h1>
</template>

<style scoped>

</style>
