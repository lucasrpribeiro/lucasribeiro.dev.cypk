<script setup lang="ts">
const links = ref([
  {name:'Sobre mim', link:''},
  {name:'Serviços', link:''},
  {name:'Portifólio', link:''},
  {name:'Contato', link:''},
  {name:'Blog', link:''}
])
</script>

<template>
  <nav class="relative container px-6 mx-auto flex items-center h-20">
    <div class="absolute bottom-0 left-0 right-0 h-[2px] neon-border-red"/>
    <div class="relative container z-10 w-full flex items-center justify-between text-primary-500">
      <span class="logo text-4xl">LUCAS RIBEIRO</span>
      <ul class="flex flex-wrap justify-end gap-3">
        <li v-for="(link, link_index) in links" :key="`${link_index}-link`">
          <a href="" class="hover:text-tertiary-500 uppercase hover:border-b hover:border-secondary-500">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>