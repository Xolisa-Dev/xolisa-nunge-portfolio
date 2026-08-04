import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0] ?? '')

  let observers: IntersectionObserver[] = []

  onMounted(() => {
    const options = {
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          activeSection.value = id
        }
      }, options)

      obs.observe(el)
      observers.push(obs)
    })
  })

  onUnmounted(() => {
    observers.forEach(obs => obs.disconnect())
    observers = []
  })

  return { activeSection }
}
