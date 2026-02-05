<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { SButton } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const isMobile = window.innerWidth < 768;

  // Pas d'animations sur mobile
  if (isMobile) return;

  const section = document.querySelector('.usesnote-section');
  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(section.querySelector('.usesnote-badge'), {
    opacity: 0,
    scale: 0.8,
    y: -15,
    duration: 0.6,
    ease: 'back.out',
  }, 0);

  tl.from(section.querySelector('.usesnote-title'), {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
  }, 0.2);

  tl.from(section.querySelector('.usesnote-description'), {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power2.out',
  }, 0.4);

  tl.from(section.querySelectorAll('.usesnote-item'), {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  }, 0.6);

  tl.from(section.querySelector('.usesnote-cta'), {
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.8,
    ease: 'power3.out',
  }, 0.9);

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
});
</script>

<template>
  <section class="usesnote-section py-20 md:py-28 px-4 bg-white">
    <div class="max-w-5xl mx-auto flex flex-col gap-12">
      <!-- Header -->
      <div class="text-center flex flex-col gap-4 max-w-2xl mx-auto">
        <div class="usesnote-badge inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full w-fit mx-auto border border-orange-100">
          <span class="text-sm font-semibold text-[var(--primary)]">✨ Prêt à utiliser</span>
        </div>

        <h2 class="usesnote-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Comment utiliser <span class="text-[var(--primary)]">Silvernote</span> ?
        </h2>

        <p class="usesnote-description text-lg md:text-xl text-gray-600">
          Trois étapes simples pour commencer à prendre vos notes en ligne, en toute sécurité.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <!-- Step 1 -->
        <div class="usesnote-item flex flex-col gap-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              1
            </div>
            <div class="flex flex-col gap-3 flex-1">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
                Créer un compte
              </h3>
              <p class="text-gray-600 text-base leading-relaxed">
                Inscrivez-vous avec votre email en quelques secondes. C'est gratuit et sans engagement.
              </p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="usesnote-item flex flex-col gap-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              2
            </div>
            <div class="flex flex-col gap-3 flex-1">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
                Synchronisez vos appareils
              </h3>
              <p class="text-gray-600 text-base leading-relaxed">
                Téléchargez l'application sur vos appareils. Vos notes seront accessibles partout.
              </p>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="usesnote-item flex flex-col gap-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              3
            </div>
            <div class="flex flex-col gap-3 flex-1">
              <h3 class="text-xl md:text-2xl font-semibold text-gray-900">
                Commencez à écrire
              </h3>
              <p class="text-gray-600 text-base leading-relaxed">
                Créez vos notes, organisez-les et collaborez avec d'autres utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="usesnote-cta flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
        <SButton
          content="Commencer maintenant"
          href="/redirect/app"
        />
        <SButton
          content="Voir les fonctionnalités"
          href="/features"
          :nobg="true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth hover effects */
.usesnote-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.usesnote-item:hover {
  transform: translateY(-4px);
}
</style>
