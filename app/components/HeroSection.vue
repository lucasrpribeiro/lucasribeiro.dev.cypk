<template>
  <div class="container mx-auto px-5 mt-16 flex items-center justify-between gap-8">
    <div class="flex-1 flex flex-col gap-6 items-start">
      <h1 class="text-5xl md:text-6xl font-semibold leading-tight text-zinc-900">
        Olá, eu sou
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">Lucas</span>
      </h1>
      <p class="text-lg md:text-xl text-zinc-600 max-w-2xl">
        Desenvolvedor de software focado em SEO, performance e experiência premium. Eu ajudo marcas
        a construírem produtos rápidos, acessíveis e memoráveis.
      </p>

      <div class="flex items-center gap-3">
        <BaseButton frosty-glass contrast="dark">Entre em contato</BaseButton>
        <BaseButton>Ver Portifólio</BaseButton>
      </div>

      <div class="flex flex-wrap gap-2 text-xs">
        <span
          class="px-3 py-1 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-xl text-zinc-700">Nuxt</span>
        <span
          class="px-3 py-1 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-xl text-zinc-700">SEO</span>
        <span class="px-3 py-1 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-xl text-zinc-700">Core Web
          Vitals</span>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center relative">
      <img src="/assets/images/hero-desktop.jpg" alt="Foto da primeira seção" draggable="false" width="640" height="640"
        class="hidden xl:block rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]" />
      <span
        class="absolute bottom-2 right-14 px-2 py-1 rounded-full border border-white/20 bg-gradient-to-r from-white/10 via-neutral-200/20 to-white/10 text-white backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
        Desenvolvedor de Sofware
      </span>
    </div>
  </div>
</template>
