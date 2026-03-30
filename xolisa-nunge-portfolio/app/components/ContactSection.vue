<script setup lang="ts">
import Heading3 from "~/components/common/typography/Heading3.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";
import ContactCard from "~/components/common/cards/ContactCard.vue";
import PrimaryButton from "~/components/common/buttons/PrimaryButton.vue";

const contacts = [
  {
    icon: "i-simple-icons-vuedotjs",
    name: "Email",
    description: "devbyxolisa@gmail.com"
  },
  {
    icon: "i-simple-icons-react",
    name: "Phone",
    description: "+27 63 537 7766"
  },
  {
    icon: "i-simple-icons-nuxt",
    name: "LinkedIn",
    description: "Xolisa Nunge"
  }
]

</script>

<template>
  <div class="bg-slate-950 p-14">
    <div class="text-center text-white space-y-4 mb-10">
      <Heading3>Let's Build Something <span class="text-accent-300">Amazing</span></Heading3>
      <Paragraph>Have a project in mind? I'd love to hear about it. Whether it's a full-stack application or a creative web experience, let's make it happen together.
      </Paragraph>
    </div>
    <div class="grid gap-6 px-6 sm:grid-cols-1 lg:grid-cols-3 lg:px-20">
      <ContactCard v-for="contact in contacts" :key="contact.name" :contact="contact" />
    </div>
<div class="py-10 align-center">
  <PrimaryButton>Start a Conversation</PrimaryButton>
</div>
  </div>
</template>

<style scoped>

</style>
