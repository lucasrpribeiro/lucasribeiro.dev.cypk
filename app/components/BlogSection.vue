<script setup lang="ts">
import heroImg from '../assets/images/hero-desktop.jpg'
</script>

<template>
  <section id="blog" class="w-full py-16">
    <div class="container mx-auto px-5 flex flex-col gap-8">
      <BaseSectionTitle>Blog</BaseSectionTitle>

      <div class="grid gap-8 md:grid-cols-2">
        <BaseCard :image="heroImg" title="Como melhorar seu Lighthouse e Core Web Vitals"
          subtitle="Técnicas de performance e SEO que realmente movem o ponteiro." :tags="['Performance', 'SEO']"
          href="#">
          <template #actions>
            <BaseButton frosty-glass>Ler mais</BaseButton>
          </template>
        </BaseCard>

        <BaseCard :image="heroImg" title="Renderização no Edge com Nuxt: quando e por quê"
          subtitle="Decisões de arquitetura para SSR/ISR e benefícios de latência." :tags="['Nuxt', 'Edge', 'SSR']"
          href="#">
          <template #actions>
            <BaseButton frosty-glass>Ler mais</BaseButton>
          </template>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
