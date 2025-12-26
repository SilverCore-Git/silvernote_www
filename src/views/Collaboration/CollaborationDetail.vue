<template>
  <div class="w-screen min-h-screen mt-10">

    <main class="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <!-- Header -->
      <div class="text-center mb-12">
        <router-link to="/" class="inline-flex items-center gap-2 text-[var(--primary)] text-sm font-semibold mb-4 hover:underline">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Retour aux fonctionnalités
        </router-link>
        
        <div v-if="card" class="mt-6">
          <p class="text-[var(--primary)] font-medium uppercase tracking-wide text-sm">Collaborer</p>
          <h1 class="text-4xl md:text-5xl font-bold mt-3 leading-tight">{{ card.title }}</h1>
          <p class="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">{{ card.fullDescription }}</p>
        </div>
      </div>

      <!-- Main Content -->
      <div v-if="card" class="grid md:grid-cols-3 gap-8 mt-16">
        <!-- Features List -->
        <div class="md:col-span-2">
          <h2 class="text-2xl font-bold mb-8">Fonctionnalités principales</h2>
          <div class="space-y-4">
            <div v-for="(feature, index) in card.features" :key="index" class="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <div class="flex-shrink-0 w-6 h-6 mt-1 text-[var(--primary)]">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-gray-900">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="md:col-span-1">
          <!-- Icon Card -->
          <div :class="`mb-8 p-8 rounded-2xl bg-gradient-to-br from-${card.icon.color}-100 to-${card.icon.color}-50 flex items-center justify-center`">
            <svg :class="`w-24 h-24 text-${card.icon.color}-500`" fill="currentColor" viewBox="0 0 20 20">
              <!-- Icon SVG -->
              <template v-if="card.icon.type === 'edit'">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </template>
              <template v-else-if="card.icon.type === 'users'">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </template>
              <template v-else-if="card.icon.type === 'share'">
                <path d="M15 8a3 3 0 11-6 0 3 3 0 016 0zM6.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM12 15.5c-1.104 0-2.092.404-2.848 1.039.527-.881 1.529-1.539 2.848-1.539 1.319 0 2.321.658 2.848 1.539-.756-.635-1.744-1.039-2.848-1.039zM5.5 15.5c-1.104 0-2.092.404-2.848 1.039C3.179 15.658 4.171 15 5.5 15s2.321.658 2.848 1.539c-.756-.635-1.744-1.039-2.848-1.039z" />
              </template>
              <template v-else>
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </template>
            </svg>
          </div>

          <!-- CTA Card -->
          <div class=" p-6 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            <h3 class="font-bold text-gray-900 mb-2">Prêt à commencer ?</h3>
            <p class="text-sm text-gray-700 mb-4">Rejoignez des milliers d'utilisateurs qui font confiance à Silvernote</p>
            <router-link to="/download" class="block w-full bg-[var(--primary)] text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-[var(--primary-hover)] transition-colors">
              Commencer gratuitement
            </router-link>
          </div>

          <!-- Related Features -->
          <div class="mt-8 p-6 rounded-2xl bg-gray-50">
            <h3 class="font-bold text-gray-900 mb-4">Autres fonctionnalités</h3>
            <div class="space-y-2">
              <router-link
                v-for="otherCard in relatedCards"
                :key="otherCard.id"
                :to="`/collaboration/${otherCard.slug}`"
                class="block text-sm text-[var(--primary)] hover:underline font-medium"
              >
                → {{ otherCard.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- 404 Fallback -->
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Fonctionnalité non trouvée</h2>
        <p class="text-gray-700 mb-6">Désolé, la fonctionnalité que vous cherchez n'existe pas.</p>
        <router-link to="/" class="inline-block px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)]">
          Retour à l'accueil
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import collaborationConfig from '@/configs/collaboration-detail.json';

const route = useRoute();

const card = computed(() => {
  const slug = route.params.slug as string;
  return collaborationConfig.find((c: any) => c.slug === slug);
});

const relatedCards = computed(() => {
  return collaborationConfig.filter((c: any) => c.id !== card.value?.id).slice(0, 4);
});
</script>
