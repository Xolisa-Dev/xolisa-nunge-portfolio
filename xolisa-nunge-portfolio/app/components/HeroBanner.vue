<script setup lang="ts">
import {defineComponent} from 'vue'
import Heading1 from "~/components/common/typography/Heading1.vue";
import Heading2 from "~/components/common/typography/Heading2.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";
import PrimaryButton from "~/components/common/buttons/PrimaryButton.vue";
import SecondaryButton from "~/components/common/buttons/SecondaryButton.vue";

</script>

<template>
  <section class="p-28 max-h-137.5 text-center space-y-8 text-white">
    <Heading1 class="md:text-sm text-accent-300">FULL STACK DEVELOPER</Heading1>
    <Heading2 class="md:text-7xl">
      Crafting Digital Experiences
      <span class="text-accent-300">with Code & Creativity</span>
    </Heading2>
    <Paragraph class="text-gray-400">
      Specializing in Vue.js, Nuxt, React, and Directus integrations. Bringing creative solutions to complex problems.
    </Paragraph>
    <div class="flex items-center justify-center gap-4">
      <PrimaryButton>View My Work</PrimaryButton>
      <SecondaryButton>Get in touch</SecondaryButton>
    </div>
  </section>
</template>

