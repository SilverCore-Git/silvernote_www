<template>

    <smoth-scroll-wraper>

        <section class="py-40 px-4 bg">

            <div class="max-w-6xl mx-auto">

                <div class="text-center mb-12 md:mb-16 collab-header">
                    <p class="collab-badge text-[var(--primary)] font-medium uppercase tracking-wide text-base md:text-lg">
                        Fonctionnalités
                    </p>
                    <h2 class="collab-title text-3xl md:text-5xl font-bold mt-3 leading-tight">
                        Ce que <span class="text-(--primary)">Silvernote</span> sait faire
                    </h2>
                </div>


                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    <router-link
                        v-for="(card, index) in config"
                        :key="index"
                        :to="`/features/${card.slug}`"
                        class="
                                collab-card group p-6 md:p-8 rounded-2xl shadow-lg 
                                hover:shadow-xl bg-white transition-all duration-300 
                                hover:-translate-y-1 cursor-pointer
                            "
                    >

                        <div 
                            :class="`
                                mb-6 flex items-center justify-center h-32 overflow-hidden
                            `"
                        >

                            <i class="bi text-6xl" :class="card.icon" />

                        </div>

                        <h5 class="text-lg md:text-xl font-bold mb-3 text-gray-900">
                            {{ card.title }}
                        </h5>
                        
                        <p class="text-gray-600 text-base leading-relaxed">
                            {{ card.description }}
                        </p>
                        
                        <div class="mt-4 flex items-center text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>En savoir plus</span>
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    
                    </router-link>

                </div>
                
            </div>

        </section>

    </smoth-scroll-wraper>

</template>

<script lang="ts" setup>
  
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import config from './Features.json';
import SmothScrollWraper from '@/components/common/smothScrollWraper.vue';

onMounted(async () => {
  await nextTick();
  
  // Header animations
  gsap.from('.collab-badge', { opacity: 0, y: 10, duration: 0.6, ease: 'power3.out', delay: 0.3 });
  gsap.from('.collab-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.5 });
  gsap.from('.collab-description', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.7 });
  
  // Cards animation (staggered)
  gsap.from('.collab-card', { opacity: 0, y: 40, duration: 0.6, stagger: 0.12, ease: 'back.out', delay: 0.9 });
  
  // Quick features animation
  gsap.from('.collab-quick-features > div', { opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 1.5 });
  
  // Hover effects on cards
  const cards = document.querySelectorAll('.collab-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -8, duration: 0.3, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
    });
  });
});

</script>