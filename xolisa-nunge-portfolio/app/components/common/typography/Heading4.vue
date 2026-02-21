<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Heading4"
})
</script>

<template>
  <h1 class="text-lg md:text-2xl font-bold text-current">
    <slot></slot>
  </h1>
</template>

<style scoped>

</style>
