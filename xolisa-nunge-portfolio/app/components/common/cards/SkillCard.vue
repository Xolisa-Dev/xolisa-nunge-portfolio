<script setup lang="ts">
import Heading4 from "~/components/common/typography/Heading4.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";

defineProps<{
  skill: {
    icon: string;
    name: string;
    description: string;
  };
}>()
</script>

<template>
  <div class="rounded-xl bg-slate-800 p-6 shadow-lg ring-1 ring-white/10">
    <div class="space-y-3 text-center">
      <UIcon
        v-if="skill.icon"
        :name="skill.icon"
        class="size-6 text-accent-300"
      />
      <Heading4 class="text-white">{{ skill.name }}</Heading4>
      <Paragraph class="text-white hover:text-accent-300 transition-colors duration-300">
        {{ skill.description }}
      </Paragraph>
    </div>
  </div>
</template>

<style scoped>

</style>
