<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import gsap from "gsap";


onMounted(async () => {
  await nextTick();
  
  // Header animations
  gsap.from('.contact-header', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
  gsap.from('.contact-header h1', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.3 });
  gsap.from('.contact-header p', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.5 });
  
  // Contact info animation
  gsap.from('.contact-info-item', { opacity: 0, x: -30, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.7 });
  
  // Form animation
  gsap.from('.contact-form-group', { opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 1.1 });
  gsap.from('.contact-form-submit', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 1.6 });
});

</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white/50 to-white/25 pt-32 pb-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="contact-header text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Vous avez des questions ? Nous sommes là pour vous aider.
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Contact Info -->
        <div class="md:col-span-1">
          <div class="space-y-6">
            <!-- Email -->
            <div class="contact-info-item flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                  <i class="bi bi-envelope" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Email contact</h3>
                <p class="text-gray-600">
                  <a href="mailto:contact@silvercore.fr" class="hover:text-[var(--primary)] transition-colors">
                    contact@silvercore.fr
                  </a>
                </p>
              </div>

            </div>

            <div class="contact-info-item flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                  <i class="bi bi-envelope" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Email support</h3>
                <p class="text-gray-600">
                  <a href="mailto:support@silvercore.fr" class="hover:text-[var(--primary)] transition-colors">
                    support@silvercore.fr
                  </a>
                </p>
              </div>

            </div>

            <!-- Discord -->
            <div class="contact-info-item flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                <i class="bi bi-discord" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Discord</h3>
                <p class="text-gray-600">
                  <a
                    href="https://taap.it/silvercore.discord"
                    target="_blank"
                    class="hover:text-[var(--primary)] transition-colors"
                  >
                    Silvercore Community
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        <!-- Contact Form -->
        <form 
          class="md:col-span-2 space-y-5 max-w-2xl"
          action="https://getform.io/f/aejvlppb"
          method="POST"
        >
          <!-- Name -->
          <div class="contact-form-group">
            <label for="name" class="block text-sm font-medium text-gray-900 mb-2">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              placeholder="Votre nom"
              required
            />
          </div>

          <!-- Email -->
          <div class="contact-form-group">
            <label for="email" class="block text-sm font-medium text-gray-900 mb-2">
              Adresse email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <!-- Message -->
          <div class="contact-form-group">
            <label for="message" class="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <input type="hidden" name="_gotcha" style="display:none !important">

          <!-- Submit Button -->
          <div class="contact-form-submit flex gap-4 ">
            <button
              type="submit"
              class=" cursor-pointer px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span>Envoyer le message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
