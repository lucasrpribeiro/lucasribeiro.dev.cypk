<script setup lang="ts">
const links = ref([
  {name:'Sobre mim', link:''},
  {name:'Serviços', link:''},
  {name:'Portifólio', link:''},
  {name:'Contato', link:''}
])
</script>

<template>
  <nav class="relative container px-6 mx-auto flex items-center h-20">
    <div class="absolute bottom-0 left-0 right-0 h-[2px] neon-border-red"></div>
    <div class="relative z-10 w-full flex items-center justify-between text-primary-500">
      <span>LKs</span>
      <ul class="flex gap-3">
        <li v-for="(link, link_index) in links" :key="`${link_index}-link`">
          <a href="" class="hover:text-primary-200 duration-300">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>