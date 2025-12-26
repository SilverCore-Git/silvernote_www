<script setup lang="ts">
import { SButton } from '@/components/common';

const plans = [
  {
    name: "Gratuit",
    description: "Parfait pour commencer",
    price: "0 €",
    period: "à vie",
    features: [
      "Notes illimitées",
      "Synchronisation cloud",
      "Accès multi-appareils",
      "Support communautaire",
      "1 GB stockage"
    ],
    cta: "Commencer gratuitement",
    href: "/app",
    highlighted: false
  },
  {
    name: "Premium",
    description: "Pour les utilisateurs avancés",
    price: "4,99 €",
    period: "par mois",
    features: [
      "Tout du plan gratuit",
      "Collaboration illimitée",
      "Partage avancé",
      "100 GB stockage",
      "Support prioritaire",
      "Export en PDF/Word",
      "Thèmes personnalisés"
    ],
    cta: "Essayer Premium",
    href: "/app",
    highlighted: true
  },
  {
    name: "Équipe",
    description: "Pour les organisations",
    price: "9,99 €",
    period: "par utilisateur/mois",
    features: [
      "Tout du plan Premium",
      "Gestion d'équipe",
      "Contrôle d'accès avancé",
      "Stockage illimité",
      "Analytics d'équipe",
      "Support dédié",
      "SSO"
    ],
    cta: "Contacter les ventes",
    href: "/contact",
    highlighted: false
  }
];
</script>

<template>
  <section class="py-16 md:py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <p class="text-[var(--primary)] font-medium uppercase tracking-wide text-base md:text-lg mb-3">
          Tarification
        </p>
        <h2 class="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Trouvez le plan qui vous convient
        </h2>
        <p class="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
          Commencez gratuitement, passez à un plan premium quand vous êtes prêt
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="plan.highlighted ? 'md:scale-105 md:ring-2 md:ring-[var(--primary)]' : ''"
          class="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <!-- Badge -->
          <div v-if="plan.highlighted" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="inline-block px-4 py-1 bg-[var(--primary)] text-white text-sm font-semibold rounded-full">
              Populaire
            </span>
          </div>

          <!-- Plan Info -->
          <div class="mb-6 pt-2">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
            <p class="text-gray-600 text-sm">{{ plan.description }}</p>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl md:text-5xl font-bold text-gray-900">{{ plan.price }}</span>
              <span class="text-gray-600 text-sm">{{ plan.period }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="mb-8 w-full">
            <SButton
              :content="plan.cta"
              :href="plan.href"
              :nobg="!plan.highlighted"
              class="w-full"
            />
          </div>

          <!-- Features -->
          <div class="border-t border-gray-200 pt-6">
            <ul class="space-y-4">
              <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700 text-sm md:text-base">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQ Note -->
      <div class="mt-12 text-center">
        <p class="text-gray-700 mb-3">
          Vous avez des questions sur nos tarifs ?
        </p>
        <a href="/contact" class="text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold transition-colors">
          Contactez-nous →
        </a>
      </div>

      <!-- Comparison Note -->
      <div class="mt-8 p-6 md:p-8 bg-white/50 rounded-xl text-center">
        <p class="text-gray-700 text-sm">
          💡 Tous les plans incluent une période d'essai gratuite de 14 jours. Aucune carte bancaire requise.
        </p>
      </div>
    </div>
  </section>
</template>
