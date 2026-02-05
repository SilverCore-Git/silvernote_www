<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { SButton } from "@/components";

onMounted(async () => {
  await nextTick();
  
  // Icon animation
  gsap.from('.notfound-icon', { opacity: 0, scale: 0.5, duration: 0.6, ease: 'back.out', delay: 0.2 });
  
  // Error code animation
  gsap.from('.notfound-code', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.5 });
  
  // Title animation
  gsap.from('.notfound-title', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.7 });
  
  // Description animation
  gsap.from('.notfound-description', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.9 });
  
  // Buttons animation
  gsap.from('.notfound-buttons', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 1.1 });
  
  // Divider animation
  gsap.from('.notfound-divider', { opacity: 0, scaleX: 0, duration: 0.6, ease: 'power3.out', delay: 1.3, transformOrigin: 'center' });
  
  // Help text animation
  gsap.from('.notfound-help-text', { opacity: 0, y: 15, duration: 0.5, ease: 'power3.out', delay: 1.5 });
  
  // Help links animation
  gsap.from('.notfound-help-link', { opacity: 0, x: -15, duration: 0.4, stagger: 0.1, ease: 'power3.out', delay: 1.7 });
});
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white/50 to-white/25" />
    <div class="text-center max-w-2xl">
      <!-- 404 Icon -->
      <div class="notfound-icon mb-8 inline-block">
        <div class="w-24 h-24 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
          <svg class="w-16 h-16 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
      </div>

      <!-- Error Code -->
      <h1 class="notfound-code text-7xl md:text-8xl font-bold text-[var(--primary)] mb-4">404</h1>

      <!-- Title -->
      <h2 class="notfound-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Page non trouvée
      </h2>

      <!-- Description -->
      <p class="notfound-description text-lg text-gray-700 mb-8">
        Oups ! La page que vous cherchez n'existe pas ou a été déplacée.
        Retournez à l'accueil pour continuer votre exploration.
      </p>

      <!-- Buttons -->
      <div class="notfound-buttons flex flex-col sm:flex-row gap-4 justify-center">
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
      <div class="notfound-divider mt-16 pt-12 border-t border-gray-200">
        <p class="notfound-help-text text-sm text-gray-600 mb-6">
          Vous êtes complètement perdu ? Voici quelques liens utiles :
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/" class="notfound-help-link text-[var(--primary)] hover:underline font-medium">
            Accueil
          </a>
          <a href="/#features" class="notfound-help-link text-[var(--primary)] hover:underline font-medium">
            Fonctionnalités
          </a>
          <a href="/download" class="notfound-help-link text-[var(--primary)] hover:underline font-medium">
            Télécharger
          </a>
          <a href="/contact" class="notfound-help-link text-[var(--primary)] hover:underline font-medium">
            Contact
          </a>
        </div>
      </div>
    </div>
</template>
