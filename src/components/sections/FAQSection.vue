<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import faqs from "../../configs/FAQ.json"
import SButton from "../common/SButton.vue";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const openedIndex = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  openedIndex.value = openedIndex.value === index ? null : index;
};

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
    await nextTick();

    const section = document.querySelector('.faq-section');
    if (!section) return;

    const headerTexts = section.querySelectorAll('.faq-header > *');
    const faqItems = section.querySelectorAll('.faq-item');
    const cta = section.querySelector('.faq-cta');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
        }
    });

    tl.from(headerTexts, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
    });


    if (cta) {
        tl.from(cta, {
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.8,
            ease: 'power3.out'
        }, "-=0.3");
    }
});
</script>

<template>
  <section ref="sectionEl" class="faq-section py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="faq-header text-center mb-16 flex flex-col gap-4 max-w-2xl mx-auto">
        <p class="text-[var(--primary)] font-semibold uppercase tracking-widest text-sm md:text-base">
          Questions fréquentes
        </p>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Tout ce que vous devez savoir
        </h2>
        <p class="text-gray-600 text-lg md:text-xl">
          Découvrez les réponses aux questions les plus fréquemment posées sur Silvernote
        </p>
      </div>

      <!-- FAQs -->
      <div class="space-y-3">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--primary)]/50 hover:shadow-md transition-all duration-300"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <h3 class="font-semibold text-gray-900 text-base md:text-lg pr-4 leading-relaxed group-hover:text-[var(--primary)] transition-colors">
              {{ faq.question }}
            </h3>
            <svg
              class="w-5 h-5 md:w-6 md:h-6 text-[var(--primary)] flex-shrink-0 transition-transform duration-300"
              :style="{ transform: openedIndex === index ? 'rotate(180deg)' : 'rotate(0)' }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>

          <transition name="expand">
            <div
              v-if="openedIndex === index"
              class="px-6 md:px-8 pb-6 md:pb-8 border-t border-gray-100 bg-gray-50/50"
            >
              <p class="text-gray-700 text-base md:text-lg leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>

      <!-- CTA -->
      <div class="faq-cta mt-16 p-8 md:p-10 bg-gradient-to-r from-[var(--primary)]/5 via-[var(--primary)]/10 to-orange-500/5 rounded-2xl border border-[var(--primary)]/20 text-center">
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Vous ne trouvez pas votre réponse ?
        </h3>
        <p class="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Notre équipe de support est disponible pour vous aider et répondre à toutes vos questions
        </p>
        <SButton
          content="Contactez-nous"
          href="/contact"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>