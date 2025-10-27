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
  <nav class="px-6 flex items-center h-20 bg-white  backdrop-blur-3xl opacity-85 w-full">
    <div class="container mx-auto z-10 w-full flex items-center justify-between">
      <div class="flex items-center gap-2 text-4xl">
        <span class="p-2 border font-bold text-xs shadow-xl rounded-lg flex items-center justify-center">LR</span>
        <span>Lucas Ribeiro</span>
      </div>
      <ul class="flex flex-wrap justify-end gap-3">
        <li v-for="(link, link_index) in links" :key="`${link_index}-link`">
          <a href="" class="font-bold border-b-2 border-transparent hover:border-black duration-300">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>