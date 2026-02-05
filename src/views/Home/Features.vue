<script lang="ts" setup>
import { onMounted, nextTick } from 'vue';
import { FeaturesSection } from '@/components';
import Features_config from '@/configs/Features.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SButton from '../../components/common/SButton.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const isMobile = window.innerWidth < 768;

  // Pas d'animations sur mobile
  if (isMobile) return;

  const wrapper = document.querySelector('.features-wrapper');
  if (!wrapper) return;

  // Header animations
  gsap.from(wrapper.querySelector('.features-header p'), {
    opacity: 0,
    y: -15,
    duration: 0.6,
    ease: 'back.out',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  gsap.from(wrapper.querySelector('.features-header h2'), {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    delay: 0.2,
  });

  gsap.from(wrapper.querySelector('.features-header p:last-of-type'), {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    delay: 0.4,
  });

  // Features sections animations
  gsap.from(wrapper.querySelectorAll('[data-feature-item]'), {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.2,
    scrollTrigger: {
      trigger: wrapper.querySelector('.divide-y'),
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });

  // CTA Button animation
  gsap.from(wrapper.querySelector('.features-cta'), {
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: wrapper.querySelector('.features-cta'),
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
});
</script>

<template>
    
    <div class="features-wrapper relative space-y-0 w-screen py-20 md:py-28 bg-white" id="features">
        
      <div class="features-header max-w-6xl mx-auto px-4 mb-20 md:mb-28">
        <div class="text-center flex flex-col gap-4 max-w-2xl mx-auto">
          <p class="text-[var(--primary)] font-semibold uppercase tracking-widest text-sm md:text-base">
            Fonctionnalités puissantes
          </p>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tout ce dont vous avez besoin
          </h2>
          <p class="text-gray-600 text-lg md:text-xl">
            Découvrez les fonctionnalités pensées pour vous rendre plus productif
          </p>
        </div>
      </div>

      <div class="divide-y divide-gray-100">
        <div v-for="(feature, index) in Features_config" :key="index" data-feature-item>
          <FeaturesSection
            :prop="feature"
            :img-pos="index"
          />
        </div>
      </div>

      <div class="features-cta w-full flex justify-center pt-20 md:pt-28 px-4">
        <SButton
          content="Voir plus de fonctionnalités"
          href="/features"
        />
      </div>

    </div>
</template>