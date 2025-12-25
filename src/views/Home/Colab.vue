<template>
  <section id="collab" class="py-16 md:py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 md:mb-16">
        <p class="text-[var(--primary)] font-medium uppercase tracking-wide text-base md:text-lg">
          la productivité
        </p>
        <h2 class="text-3xl md:text-5xl font-bold mt-3 leading-tight">
          Collaborer avec des personnes
        </h2>
        <p class="text-gray-700 text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Travaillez ensemble en temps réel avec vos collègues et amis
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 gap-6 md:gap-8">
        <!-- Carte 1 -->
        <div class="group p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1">
          <div class="mb-6 flex items-center justify-center h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden">
            <svg class="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </div>
          <h5 class="text-lg md:text-xl font-bold mb-3 text-gray-900">
            Synchronisation Cloud
          </h5>
          <p class="text-gray-600 text-base leading-relaxed">
            Vos notes sont automatiquement synchronisées et sauvegardées
            en toute sécurité dans le cloud. Accédez-y de n'importe quel appareil, n'importe quand.
          </p>
          <div class="mt-4 flex items-center text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>En savoir plus</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>

        <!-- Carte 2 -->
        <div class="group p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl bg-white transition-all duration-300 hover:-translate-y-1">
          <div class="mb-6 flex items-center justify-center h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden">
            <svg class="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h5 class="text-lg md:text-xl font-bold mb-3 text-gray-900">
            Collaborer en temps réel
          </h5>
          <p class="text-gray-600 text-base leading-relaxed">
            Travaillez facilement à plusieurs dans vos notes partagées.
            Voyez les modifications en direct et collaborez sans friction.
          </p>
          <div class="mt-4 flex items-center text-[var(--primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>En savoir plus</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Features list -->
      <div class="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-6 h-6 text-[var(--primary)] mt-1">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Partage instantané</h3>
            <p class="text-sm text-gray-600">Partagez vos notes avec un simple lien</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-6 h-6 text-[var(--primary)] mt-1">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Permissions granulaires</h3>
            <p class="text-sm text-gray-600">Contrôlez qui peut voir et modifier</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-6 h-6 text-[var(--primary)] mt-1">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Historique complet</h3>
            <p class="text-sm text-gray-600">Revoyez chaque modification</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

