<script setup lang="ts">
defineProps({
  image: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  status: { type: String, default: '' },
  href: { type: String, default: '' },
})
</script>

<template>
  <article
    class="group shine-surface relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900/5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300">
    <img v-if="image" :src="image" :alt="title"
      class="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.01] group-hover:scale-[1.03] transition duration-500 ease-out" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0"></div>
    <div v-if="status"
      class="absolute top-3 right-3 z-10 flex items-center gap-2 text-xs border border-white/20 bg-white/10 text-white px-2 py-1 rounded-full backdrop-blur-xl">
      <span class="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
      {{ status }}
    </div>
    <div class="relative z-10 p-5 flex flex-col gap-3">
      <h3 class="text-xl font-semibold text-zinc-900">{{ title }}</h3>
      <p v-if="subtitle" class="text-sm text-zinc-100/90">{{ subtitle }}</p>

      <div v-if="tags?.length" class="flex flex-wrap gap-2 text-xs">
        <span v-for="(tag, i) in tags" :key="`tag-${i}`"
          class="px-2 py-1 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          {{ tag }}
        </span>
      </div>

      <div class="pt-2">
        <slot name="actions">
          <a v-if="href" :href="href" target="_blank" rel="noopener" class="inline-block">
            <BaseButton frosty-glass>Ver Projeto</BaseButton>
          </a>
        </slot>
      </div>
    </div>
  </article>
</template>
