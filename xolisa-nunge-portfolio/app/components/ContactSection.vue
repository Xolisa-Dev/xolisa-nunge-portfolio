<script setup lang="ts">
import Heading3 from "~/components/common/typography/Heading3.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";
import ContactCard from "~/components/common/cards/ContactCard.vue";
import PrimaryButton from "~/components/common/buttons/PrimaryButton.vue";

const contacts = [
  {
    icon: "i-lucide-mail",
    name: "Email",
    description: "devbyxolisa@gmail.com"
  },
  {
    icon: "i-lucide-phone",
    name: "Phone",
    description: "+27 63 537 7766"
  },
  {
    icon: "i-simple-icons-linkedin",
    name: "LinkedIn",
    description: "Xolisa Nunge"
  }
]

</script>

<template>
  <section id="contact" class="section-padding bg-slate-950">
    <div class="container-xl">
      <div class="text-center text-white space-y-4 mb-12 max-w-2xl mx-auto">
        <Heading3>Let's Build Something <span class="text-accent-300">Amazing</span></Heading3>
        <Paragraph>Have a project in mind? I'd love to hear about it. Whether it's a full-stack application or a creative web experience, let's make it happen together.</Paragraph>
      </div>

      <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        <ContactCard v-for="contact in contacts" :key="contact.name" :contact="contact" />
      </div>

      <div class="mt-12 flex justify-center">
        <PrimaryButton>
          <a href="mailto:devbyxolisa@gmail.com">Start a Conversation</a>
        </PrimaryButton>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
