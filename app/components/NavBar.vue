<script setup lang="ts">
const links = ref([
  { name: 'Sobre mim', link: '#about' },
  { name: 'Portifólio', link: '#portfolio' },
  { name: 'Blog', link: '#blog' },
  { name: 'Contato', link: '#contact' },
])
</script>

<template>
  <nav class="sticky top-0 z-50 w-full h-20">
    <div
      class="container mx-auto px-6 h-full flex items-center justify-between rounded-b-2xl bg-white/60 backdrop-blur-xl border-b border-zinc-200 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
      <a href="#" class="flex items-center gap-3 group select-none">
        <span
          class="h-10 w-10 rounded-full border border-zinc-300 bg-white/70 backdrop-blur-xl shadow-sm grid place-items-center text-[12px] font-semibold text-zinc-800">LR</span>
        <span class="text-lg font-medium text-zinc-800 group-hover:text-zinc-900 transition-colors">Lucas Ribeiro</span>
      </a>

      <ul class="flex items-center gap-8">
        <li v-for="(link, link_index) in links" :key="`${link_index}-link`">
          <a :href="link.link"
            class="text-sm text-zinc-700 hover:text-zinc-900 transition-colors py-3 inline-block border-b border-transparent hover:border-zinc-900/50">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
