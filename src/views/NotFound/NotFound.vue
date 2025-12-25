<script setup lang="ts">
import { SButton } from "@/components";
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white/50 to-white/25">
    <div class="text-center max-w-2xl">
      <!-- 404 Icon -->
      <div class="mb-8 inline-block">
        <div class="w-24 h-24 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
          <svg class="w-16 h-16 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Error Code -->
      <h1 class="text-7xl md:text-8xl font-bold text-[var(--primary)] mb-4">404</h1>

      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Page non trouvée
      </h2>

      <!-- Description -->
      <p class="text-lg text-gray-700 mb-8">
        Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
        Retournez à l'accueil pour continuer votre exploration.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <SButton
          content="Retour à l'accueil"
          href="/"
        />
        <SButton
          content="Contactez-nous"
          href="/contact"
          :nobg="true"
        />
      </div>

      <!-- Illustration placeholder -->
      <div class="mt-16 pt-12 border-t border-gray-200">
        <p class="text-sm text-gray-600 mb-6">
          Vous êtes complètement perdu ? Voici quelques liens utiles :
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/" class="text-[var(--primary)] hover:underline font-medium">
            Accueil
          </a>
          <a href="/#features" class="text-[var(--primary)] hover:underline font-medium">
            Fonctionnalités
          </a>
          <a href="/download" class="text-[var(--primary)] hover:underline font-medium">
            Télécharger
          </a>
          <a href="/contact" class="text-[var(--primary)] hover:underline font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
