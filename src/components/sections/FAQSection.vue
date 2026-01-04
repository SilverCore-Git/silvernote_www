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

//const sectionEl = ref<HTMLElement | null>(null);

onMounted(async () => {
    await nextTick();

    // const section = sectionEl.value;
    // if (!section) return;

    // const headerTexts = section.querySelectorAll('.text-center.mb-12 > *');
    // const faqItems = section.querySelectorAll('.space-y-4 > div');
    // const cta = section.querySelector('.mt-12');

    // const tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: section,
    //         start: "top 80%",
    //         toggleActions: "play none none reverse",
    //     }
    // });

    // tl.from(headerTexts, {
    //     opacity: 0,
    //     y: 20,
    //     duration: 0.6,
    //     stagger: 0.2,
    //     ease: 'power2.out'
    // });

    // tl.from(faqItems, {
    //     opacity: 0,
    //     y: 20,
    //     duration: 0.5,
    //     stagger: 0.1,
    //     ease: 'power2.out'
    // }, "-=0.3");

    // if (cta) {
    //     tl.from(cta, {
    //         opacity: 0,
    //         y: 30,
    //         scale: 0.95,
    //         duration: 0.8,
    //         ease: 'power3.out'
    //     }, "-=0.5");
    // }
});
</script>

<template>
  <section ref="sectionEl" class="py-16 md:py-20 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-[var(--primary)] font-medium uppercase tracking-wide text-base md:text-lg mb-3">
          Questions fréquentes
        </p>
        <h2 class="text-3xl md:text-5xl font-bold leading-tight">
          Nous répondons à vos questions
        </h2>
        <p class="text-gray-700 text-base md:text-lg mt-4">
          Trouvez les réponses aux questions les plus courantes
        </p>
      </div>

      <!-- FAQs -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-200 rounded-lg overflow-hidden hover:border-[var(--primary)] transition-colors"
        >
          <button
            @click="toggleFAQ(index)"
            class="w-full px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors text-left"
          >
            <h3 class="font-semibold text-gray-900 text-base md:text-lg pr-4">
              {{ faq.question }}
            </h3>
            <svg
              class="w-5 h-5 text-[var(--primary)] flex-shrink-0 transition-transform duration-300"
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
              class="px-6 pb-4 border-t border-gray-100 bg-white/30"
            >
              <p class="text-gray-700 text-base leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 p-6 md:p-8 bg-gradient-to-r from-[var(--primary)]/10 to-orange-500/10 rounded-2xl border border-[var(--primary)]/20 text-center">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">
          Vous ne trouvez pas votre réponse ?
        </h3>
        <p class="text-gray-700 mb-4">
          Notre équipe de support est disponible pour vous aider
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
