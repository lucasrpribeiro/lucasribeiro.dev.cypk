<script setup lang="ts">
const props = defineProps({
  frostyGlass: { type: Boolean, default: false },
  contrast: { type: String, default: 'light' },
})
</script>

<template>
  <button type="button" :class="[
    'font-semibold p-4 rounded-full hover:cursor-pointer transition-colors duration-300 relative overflow-hidden shine-button',
    props.frostyGlass
      ? [
        'bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.06)]',
        props.contrast === 'dark' ? 'text-zinc-900' : 'text-white',
      ]
      : 'bg-black text-zinc-100 hover:bg-neutral-700',
  ]">
    <slot />
  </button>
</template>

<style scoped>
.shine-button::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -30%;
  width: 40%;
  height: 200%;
  background: linear-gradient(120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: translateX(-150%) rotate(25deg);
  transition: transform 0.4s ease;
  pointer-events: none;
  filter: blur(24px);
}

.shine-button:hover::after {
  transform: translateX(300%) rotate(25deg);
}
</style>
