<script setup>
import trevoLogo from '../assets/images/trevo.png'
import hunterLogo from '../assets/images/hunter.jpeg'
import lenyegLogo from '../assets/images/lenyeg.jpeg'

const items = [
  {
    company: 'Saúde Trevo',
    role: 'Desenvolvedor Frontend Pleno',
    period: 'set 2024 – momento · 1 ano 2 meses',
    location: 'São Paulo, Brasil · Remota',
    description: 'Desenvolvimento frontend e testes de ponta a ponta.',
    badges: ['Vue', 'GitLab', 'E2E'],
    logoLetter: 'S',
    logoColor: 'bg-violet-500',
    logoSrc: trevoLogo,
  },
  {
    company: 'Desenvolvedor Frontend',
    role: 'Independente',
    period: 'abr 2023 – out 2024 · 1 ano 7 meses',
    description:
      'Migração do frontend para app independente em Nuxt.js e colaboração contínua em features.',
    badges: ['Nuxt', 'Vue.js'],
    logoLetter: 'LR',
  },
  {
    company: 'Hunter.FM',
    role: 'Desenvolvedor front‑end',
    period: 'dez 2021 – abr 2023 · 1 ano 5 meses',
    location: 'Brasília, DF · Remota',
    description: 'Atuação no desenvolvimento e aprimoramento de projetos front‑end.',
    badges: ['Vue.js', 'CSS'],
    logoLetter: 'H',
    logoColor: 'bg-orange-500',
    logoSrc: hunterLogo,
  },
  {
    company: 'Lenyeg',
    role: 'Desenvolvedor front‑end · Freelance',
    period: 'mar 2022 – mar 2023 · 1 ano 1 mês',
    location: 'Paranavaí, PR · Remota',
    description: 'Criação e otimização de produtos digitais com foco em performance e UX.',
    badges: ['Performance', 'UX'],
    logoLetter: 'L',
    logoColor: 'bg-emerald-600',
    logoSrc: lenyegLogo,
  },
]
</script>

<template>
  <section id="journey" class="w-full py-20">
    <div class="container mx-auto px-5 flex flex-col gap-10">
      <BaseSectionTitle>Jornada</BaseSectionTitle>

      <div class="relative">
        <div
          class="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-zinc-300/80 via-zinc-200/60 to-transparent" />

        <ul class="flex flex-col gap-8">
          <li v-for="(item, idx) in items" :key="`timeline-${idx}`" class="relative pl-16">
            <div
              class="absolute left-0 top-0 h-10 w-10 rounded-xl bg-black border border-white/30 backdrop-blur-xl shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden grid place-items-center">
              <img v-if="item.logoSrc" :src="item.logoSrc" :alt="item.company + ' logo'"
                class="h-full w-full object-cover" width="40" height="40" />
              <span v-else class="text-white text-base font-semibold">{{
                item.logoLetter ?? '●'
                }}</span>
            </div>

            <article
              class="shine-surface rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div class="flex flex-col gap-1">
                <div class="text-sm text-zinc-500">
                  {{ item.period }} <span v-if="item.location">· {{ item.location }}</span>
                </div>
                <h3 class="text-xl font-semibold text-zinc-900">{{ item.company }}</h3>
                <div class="text-zinc-700">{{ item.role }}</div>
              </div>
              <p v-if="item.description" class="mt-3 text-sm text-zinc-600">
                {{ item.description }}
              </p>
              <div v-if="item.badges?.length" class="mt-4 flex flex-wrap gap-2 text-xs">
                <span v-for="(b, i) in item.badges" :key="`b-${i}`"
                  class="px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-zinc-800 backdrop-blur-xl">{{
                    b }}</span>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
