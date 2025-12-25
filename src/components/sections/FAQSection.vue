<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    question: "SilverNote est-il gratuit ?",
    answer: "Oui ! SilverNote offre un plan gratuit complet avec toutes les fonctionnalités de base. Des plans premium sont disponibles pour les utilisateurs qui souhaitent des fonctionnalités avancées."
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Toutes vos données sont chiffrées de bout en bout et stockées sur des serveurs sécurisés. Nous respectons les normes RGPD et les meilleures pratiques en matière de sécurité."
  },
  {
    question: "Puis-je utiliser SilverNote hors ligne ?",
    answer: "Oui ! SilverNote fonctionne hors ligne et synchronise automatiquement vos notes une fois la connexion rétablie. Vous ne perdrez jamais vos données."
  },
  {
    question: "Sur quels appareils puis-je utiliser SilverNote ?",
    answer: "SilverNote est disponible sur iOS, Android, Windows, macOS et en tant qu'application web. Synchronisation complète sur tous les appareils."
  },
  {
    question: "Comment partager mes notes avec d'autres ?",
    answer: "Vous pouvez partager vos notes avec un lien simple ou inviter des collaborateurs spécifiques. Gérez les permissions pour contrôler qui peut voir, commenter ou modifier."
  },
  {
    question: "Comment puis-je supprimer mon compte ?",
    answer: "Vous pouvez demander la suppression de votre compte à tout moment depuis les paramètres. Vos données seront complètement supprimées en 30 jours."
  }
];

const openedIndex = ref<number | null>(null);

const toggleFAQ = (index: number) => {
  openedIndex.value = openedIndex.value === index ? null : index;
};
</script>

<template>
  <section class="py-16 md:py-20 px-4">
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
          Notre équipe de support est disponible 24/7 pour vous aider
        </p>
        <a
          href="/contact"
          class="inline-block px-6 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold rounded-full transition-all duration-300"
        >
          Contactez-nous
        </a>
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
