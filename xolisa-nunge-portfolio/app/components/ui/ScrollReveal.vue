<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '~/composables/useScrollReveal'

interface Props {
  variant?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'up',
  delay: 0,
  threshold: 0.12
})

const el = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(el, { threshold: props.threshold })

const variantClass = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale'
}
</script>

<template>
  <div
    ref="el"
    :class="[
      variantClass[variant],
      isVisible ? 'reveal-visible' : '',
      delay ? `delay-${delay}` : ''
    ]"
  >
    <slot />
  </div>
</template>
