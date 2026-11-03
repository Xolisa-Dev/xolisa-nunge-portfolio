<script setup lang="ts">
const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  message: '',
  // Honeypot: left empty by humans, filled in by most form bots.
  botcheck: ''
})

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
const status = ref<FormStatus>('idle')

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return
  if (form.botcheck) return // silently drop bot submissions

  status.value = 'submitting'

  try {
    const response = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: config.public.web3formsAccessKey,
        subject: 'New message from your portfolio',
        from_name: form.name,
        name: form.name,
        email: form.email,
        message: form.message
      }
    })

    if (!response.success) throw new Error('Submission rejected')

    status.value = 'success'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch {
    status.value = 'error'
  }
}

const directContacts = [
  { icon: 'i-lucide-mail', label: 'devbyxolisa@gmail.com', href: 'mailto:devbyxolisa@gmail.com', external: false },
  { icon: 'i-simple-icons-linkedin', label: 'Xolisa Nunge', href: 'https://www.linkedin.com/in/xolisa-nunge-441b25264/', external: true }
]
</script>

<template>
  <section
    id="contact"
    class="section-padding bg-[#04060f] relative overflow-hidden"
    aria-labelledby="contact-heading"
  >
    <div class="absolute inset-0 dot-grid opacity-[0.025] pointer-events-none" />
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

    <div class="container-xl relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Copy + direct contacts -->
        <div class="space-y-8">
          <UiScrollReveal>
            <UiSectionLabel label="Get In Touch" />
          </UiScrollReveal>

          <UiScrollReveal :delay="100">
            <h2
              id="contact-heading"
              class="text-headline"
            >
              Let's build something<br>
              <span class="text-gradient-pink">amazing together.</span>
            </h2>
          </UiScrollReveal>

          <UiScrollReveal :delay="200">
            <p class="text-neutral-400 leading-relaxed max-w-md">
              Have a project in mind? I'd love to hear about it. Whether it's a full-stack application or a creative web experience, let's make it happen together.
            </p>
          </UiScrollReveal>

          <UiScrollReveal :delay="300">
            <div class="space-y-3 pt-2">
              <a
                v-for="contact in directContacts"
                :key="contact.label"
                :href="contact.href"
                :target="contact.external ? '_blank' : undefined"
                :rel="contact.external ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-3 w-fit text-neutral-300 hover:text-pink-400 transition-colors group"
              >
                <span class="size-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/10 transition-colors">
                  <UIcon
                    :name="contact.icon"
                    class="size-4 text-pink-400"
                  />
                </span>
                <span class="text-sm font-medium">{{ contact.label }}</span>
              </a>
            </div>
          </UiScrollReveal>
        </div>

        <!-- Form -->
        <UiScrollReveal
          variant="right"
          :delay="150"
        >
          <div class="glass rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/30">
            <form
              v-if="status !== 'success'"
              class="space-y-5"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <input
                v-model="form.botcheck"
                type="text"
                name="botcheck"
                tabindex="-1"
                autocomplete="off"
                class="hidden"
                aria-hidden="true"
              >

              <div>
                <label
                  for="contact-name"
                  class="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2"
                >Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  :disabled="status === 'submitting'"
                  class="w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-pink-500/40 transition-colors disabled:opacity-50"
                >
              </div>

              <div>
                <label
                  for="contact-email"
                  class="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2"
                >Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  :disabled="status === 'submitting'"
                  class="w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-pink-500/40 transition-colors disabled:opacity-50"
                >
              </div>

              <div>
                <label
                  for="contact-message"
                  class="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2"
                >Message</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  placeholder="Hey CodeLisa , I am looking for ..."
                  required
                  :disabled="status === 'submitting'"
                  class="w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-pink-500/40 transition-colors disabled:opacity-50 resize-none"
                />
              </div>

              <p
                v-if="status === 'error'"
                class="flex items-start gap-2 text-sm text-pink-400/90"
              >
                <UIcon
                  name="i-lucide-alert-circle"
                  class="size-4 mt-0.5 flex-shrink-0"
                />
                <span>
                  Something went wrong sending that — please try again, or email me directly at
                  <a
                    href="mailto:devbyxolisa@gmail.com"
                    class="underline hover:text-pink-300"
                  >devbyxolisa@gmail.com</a>.
                </span>
              </p>

              <button
                type="submit"
                :disabled="status === 'submitting'"
                class="btn-primary w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
              >
                <UIcon
                  v-if="status === 'submitting'"
                  name="i-lucide-loader-circle"
                  class="size-4 animate-spin"
                />
                <span>{{ status === 'submitting' ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>

            <div
              v-else
              class="text-center py-6 space-y-3"
            >
              <div class="size-12 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto">
                <UIcon
                  name="i-lucide-check"
                  class="size-6 text-pink-400"
                />
              </div>
              <h3 class="text-neutral-100 font-semibold font-display text-lg">
                Thanks for reaching out!
              </h3>
              <p class="text-neutral-500 text-sm">
                I'll get back to you as soon as I can.
              </p>
            </div>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </section>
</template>
