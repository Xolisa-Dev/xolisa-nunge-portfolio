<script setup lang="ts">
import {defineComponent} from 'vue'
import Heading2 from "~/components/common/typography/Heading2.vue";
import Paragraph from "~/components/common/typography/Paragraph.vue";


</script>

<template>
  <section class="bg-slate-700 text-white p-24" id="about">
    <div class="grid md:grid-cols-2 ">
    <!--Content-->
      <div class="space-y-6 px-5">
          <Heading2 class="pb-10">Hello , I'm Xolisa Nunge <br>(CodeLisa ).<span class="text-accent-500"> I'm a creative developer</span></Heading2>
          <div class="space-y-6">
          <Paragraph>
            I blend the technical precision of full-stack development with a creative mindset that loves pushing boundaries. My passion lies in building beautiful, functional applications that users love.
            <div class="p-4"/>
            When I'm not coding, you'll find me exploring new design trends, experimenting with pink color palettes, and contributing to open-source projects. I believe great development is where logic meets creativity.
          </Paragraph>
          </div>
          <div class="space-x-4 pt-8">
            <NuxtLink to="https://github.com/Xolisa-Dev" target="_blank" class="text-accent-300">
              <UIcon name="i-simple-icons-github" class="size-8" />
            </NuxtLink>

            <NuxtLink to="https://www.linkedin.com/in/xolisa-nunge-441b25264/" target="_blank" class="text-accent-300">
              <UIcon name="i-simple-icons-linkedin" class="size-8" />
            </NuxtLink>
          </div>
      </div>
    <!--Code Section-->
        <div class="mx-auto w-full max-w-xl rounded-2xl bg-slate-900/90 p-6 shadow-accent-600 shadow-2xl ring-1 ring-white/10">
          <div class="mb-4 flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-red-600" />
            <span class="h-3 w-3 rounded-full bg-yellow-400" />
            <span class="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <pre class="overflow-x-auto text-sm leading-7 font-mono">
        <code>
          <span class="text-indigo-300">const</span> <span class="text-sky-300">developer</span> <span class="text-white">=</span> <span class="text-white">{</span>
            <span class="text-pink-400">name</span><span class="text-white">:</span> <span class="text-emerald-300">'Creative Dev'</span><span class="text-white">,</span>
            <span class="text-pink-400">role</span><span class="text-white">:</span> <span class="text-emerald-300">'Full Stack'</span><span class="text-white">,</span>
            <span class="text-pink-400">loves</span><span class="text-white">:</span> <span class="text-white">[</span>
              <span class="text-emerald-300">'Pink'</span><span class="text-white">,</span>
              <span class="text-emerald-300">'Coding'</span><span class="text-white">,</span>
              <span class="text-emerald-300">'Design'</span>
            <span class="text-white">],</span>
             <span class="text-pink-400">skills</span><span class="text-white">:</span> <span class="text-white">{</span>
              <span class="text-sky-300">frontend</span><span class="text-white">:</span> <span class="text-white">[</span><span class="text-emerald-300">'Vue'</span><span class="text-white">,</span> <span class="text-emerald-300">'React'</span><span class="text-white">],</span>
              <span class="text-sky-300">framework</span><span class="text-white">:</span> <span class="text-white">[</span><span class="text-emerald-300">'Nuxt'</span><span class="text-white">],</span>
              <span class="text-sky-300">cms</span><span class="text-white">:</span> <span class="text-white">[</span><span class="text-emerald-300">'Directus'</span><span class="text-white">]</span>
            <span class="text-white">}</span>
          <span class="text-white">};</span>
          </code>
            </pre>
                  </div>
                </div>
  </section>
</template>

<style scoped>

</style>
