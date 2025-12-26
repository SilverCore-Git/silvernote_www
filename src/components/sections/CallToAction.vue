<script setup lang="ts">

import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { SButton } from '@/components/common';
import openApp from '../../utils/openApp';

onMounted(async () => {
  await nextTick();
  
  // Badge animation
  gsap.from('.usesnote-badge', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out', delay: 0.2 });
  
  // Title animation
  gsap.from('.usesnote-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.4 });
  
  // Description animation
  gsap.from('.usesnote-description', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.6 });
  
  // Buttons animation
  gsap.from('.usesnote-buttons > div', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.8 });
  
  // Trust indicators animation
  gsap.from('.usesnote-trust-item', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: 'power3.out', delay: 1.2 });
});

</script>

<template>

    <section id="calltoaction" class="flex justify-center items-center w-full flex-col py-20 px-4">

        <div class="max-w-3xl text-center flex justify-center items-center flex-col gap-8 w-full">

            <div class="usesnote-badge inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md">
                <span class="text-sm font-medium text-[#1A1615]">🚀 Prêt à commencer ?</span>
            </div>

            <h2 class="usesnote-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tu t'es décidé ?
            </h2>

            <p class="usesnote-description text-lg md:text-xl text-gray-700 max-w-2xl">
                Essaye Silvenote gratuitement dès maintenant. Aucune carte bancaire requise.
            </p>

            <div class="usesnote-buttons flex flex-col sm:flex-row gap-4 justify-center w-full">
                <div>
                    <SButton
                        content="Essayer Silvernote"
                        :href="'/redirect/'+openApp({ utm_medium: 'call-to-action', type: 'href' })"
                    />
                </div>
                <div>
                    <SButton
                        content="Voir les tarifs"
                        href="/pricing"
                        :nobg="true"
                    />
                </div>
            </div>

            <!-- Trust indicators -->
            <div class="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-center opacity-75">
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">10K+</p>
                    <p class="text-sm text-gray-600">Utilisateurs satisfaits</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">4.8/5</p>
                    <p class="text-sm text-gray-600">Évaluation moyenne</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">24/7</p>
                    <p class="text-sm text-gray-600">Support disponible</p>
                </div>
            </div>

        </div>

    </section>

</template>