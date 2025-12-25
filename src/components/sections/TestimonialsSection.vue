<script setup lang="ts">
const testimonials = [
  {
    name: "Marie Dupont",
    role: "Étudiante",
    content: "SilverNote m'a changé ma façon de prendre des notes. Interface intuitive et synchronisation parfaite !",
    avatar: "👩‍🎓"
  },
  {
    name: "Pierre Leclerc",
    role: "Développeur",
    content: "Excellent outil pour organiser mes idées. La collaboration en temps réel fonctionne impeccablement.",
    avatar: "👨‍💻"
  },
  {
    name: "Sophie Bernard",
    role: "Chef de projet",
    content: "L'application la plus fiable que j'ai jamais utilisée pour mes projets. Support réactif et toujours à l'écoute.",
    avatar: "👩‍💼"
  },
  {
    name: "Thomas Martin",
    role: "Freelancer",
    content: "Parfait pour gérer mes client et mes projets. Disponible partout, c'est exactement ce qu'il me fallait.",
    avatar: "👨‍💼"
  },
];
</script>

<template>
  <section class="py-16 md:py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <p class="text-[var(--primary)] font-medium uppercase tracking-wide text-base md:text-lg mb-3">
          Témoignages
        </p>
        <h2 class="text-3xl md:text-5xl font-bold leading-tight">
          Ce que nos utilisateurs disent
        </h2>
        <p class="text-gray-700 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Rejoignez des milliers d'utilisateurs satisfaits qui font confiance à SilverNote
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="p-6 md:p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <!-- Rating -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-[var(--primary)] text-lg">★</span>
          </div>

          <!-- Content -->
          <p class="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
            "{{ testimonial.content }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4 pt-4 border-t border-gray-100">
            <div class="text-3xl">{{ testimonial.avatar }}</div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        <div class="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
          <p class="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">10K+</p>
          <p class="text-gray-600 text-sm md:text-base">Utilisateurs actifs</p>
        </div>
        <div class="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
          <p class="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">4.8/5</p>
          <p class="text-gray-600 text-sm md:text-base">Évaluation moyenne</p>
        </div>
        <div class="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
          <p class="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">50K+</p>
          <p class="text-gray-600 text-sm md:text-base">Notes créées</p>
        </div>
        <div class="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
          <p class="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">24/7</p>
          <p class="text-gray-600 text-sm md:text-base">Support disponible</p>
        </div>
      </div>
    </div>
  </section>
</template>
