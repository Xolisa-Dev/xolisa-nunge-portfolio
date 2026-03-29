<script setup lang="ts">
import Heading3 from "~/components/common/typography/Heading3.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";
import SkillCard from "~/components/common/cards/SkillCard.vue";

const skills = [
  {
    icon: "i-simple-icons-vuedotjs",
    name: "VueJs",
    description: "Progressive Framework"
  },
  {
    icon: "i-simple-icons-react",
    name: "React",
    description: "UI Library"
  },
  {
    icon: "i-simple-icons-nuxt",
    name: "Nuxt",
    description: "SSR Framework"
  },
  {
    icon: "i-simple-icons-directus",
    name: "Directus",
    description: "Headless CMS"
  },
  {
    icon: "i-simple-icons-nodedotjs",
    name: "NodeJs",
    description: "Backend Runtime"
  },
  {
    icon: "i-simple-icons-typescript",
    name: "Typescript",
    description: "Type Safety"
  },
  {
    icon: "i-simple-icons-figma",
    name: "Figma",
    description: "Design Tool"
  },
  {
    icon: "i-simple-icons-mysql",
    name: "mySQL",
    description: "Database Management"
  },
]

</script>

<template>
  <div class="p-14">
    <div class="text-center text-white space-y-4 mb-10">
      <Heading3>Technical <span>Expertise</span></Heading3>
      <Paragraph>Tools and technologies I work with daily</Paragraph>
    </div>
    <div class="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-20">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </div>
</template>

<style scoped>

</style>
