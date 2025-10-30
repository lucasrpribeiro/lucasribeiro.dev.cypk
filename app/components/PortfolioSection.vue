<script setup lang="ts">
import heroImg from '../assets/images/hero-desktop.jpg'
</script>

<template>
  <section id="portfolio" class="w-full py-16">
    <div class="container mx-auto px-5 flex flex-col gap-8">
      <BaseSectionTitle>Portifólio</BaseSectionTitle>

      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <BaseCard :image="heroImg" title="Buddychat Copilot" subtitle="My first AI chatbot"
          :tags="['Branding', 'AI', 'Crafts']" status="Ao Vivo" href="#" />

        <BaseCard :image="heroImg" title="Luxuria Hotel" subtitle="Imersão em experiências e amenidades de luxo"
          :tags="['Hospitality', 'Luxury', 'Booking']" status="Ao Vivo" href="#" />

        <BaseCard :image="heroImg" title="PROTECTA" subtitle="Website de alta conversão para segurança eletrônica"
          :tags="['Security Electronics', 'Monitoring', 'Alarms']" status="Ao Vivo" href="#" />
      </div>
    </div>
  </section>
</template>
