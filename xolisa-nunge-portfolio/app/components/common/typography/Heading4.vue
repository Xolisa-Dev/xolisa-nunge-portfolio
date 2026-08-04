<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Heading4"
})
</script>

<template>
  <h4 class="text-lg md:text-2xl font-bold text-current">
    <slot></slot>
  </h4>
</template>

<style scoped>

</style>
