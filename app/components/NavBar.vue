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
    <div class="absolute bottom-0 left-0 right-0 h-[2px] neon-border-red overflow-hidden">
      <div class="animated-light"></div>
    </div>
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

<style scoped>
.animated-light {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent 15%,
    #e8615a 25%,
    #f4908b 35%,
    #ffffff 45%,
    #f4908b 55%,
    #e8615a 65%,
    transparent 75%,
    transparent 100%
  );
  box-shadow: 
    0 0 5px rgba(255, 0, 0, 0.8),
    0 0 10px rgba(255, 0, 0, 0.6),
    0 0 15px rgba(255, 0, 0, 0.4),
    0 0 20px rgba(232, 97, 90, 0.8),
    0 0 30px rgba(232, 97, 90, 0.6),
    0 0 40px rgba(232, 97, 90, 0.4),
    0 0 50px rgba(232, 97, 90, 0.2);
  animation: light-sweep 4s ease-in-out infinite;
  filter: brightness(1.5) contrast(1.2);
}

@keyframes light-sweep {
  0% {
    left: -100%;
    opacity: 0;
  }
  5% {
    opacity: 0.8;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  95% {
    opacity: 0.8;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}
</style>