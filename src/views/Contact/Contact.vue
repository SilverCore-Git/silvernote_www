<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { SButton } from "@/components";
import { emailService, type ContactFormData } from "@/services";
import { useNotification } from "@/composables";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref("");

const submitForm = async () => {
  isSubmitting.value = true;
  submitError.value = "";
  submitSuccess.value = false;

  try {
    // Validation basique
    if (!formData.value.name || !formData.value.email || !formData.value.message) {
      submitError.value = "Veuillez remplir tous les champs obligatoires";
      isSubmitting.value = false;
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.value.email)) {
      submitError.value = "Veuillez entrer une adresse email valide";
      isSubmitting.value = false;
      return;
    }

    // Envoi via le service
    const response = await emailService.sendContactForm(formData.value as ContactFormData);
    
    if (response.success) {
      submitSuccess.value = true;
      formData.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      // Réinitialiser après 3 secondes
      setTimeout(() => {
        submitSuccess.value = false;
      }, 3000);
    } else {
      submitError.value = response.message || "Une erreur est survenue";
    }
  } catch (error) {
    submitError.value = error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer.";
  } finally {
    isSubmitting.value = false;
  }
};

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
    <div class="max-w-4xl mx-auto">
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
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Email</h3>
                <p class="text-gray-600">
                  <a href="mailto:support@silvernote.fr" class="hover:text-[var(--primary)] transition-colors">
                    support@silvernote.fr
                  </a>
                </p>
              </div>
            </div>

            <!-- Discord -->
            <div class="contact-info-item flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.545 2.907a13.227 13.227 0 00-3.573-1.04 9.756 9.756 0 00-.464 1.949 12.518 12.518 0 013.785.57 1.125 1.125 0 00.1 1.967 19.815 19.815 0 01-3.015.9 11.02 11.02 0 01-1.685-2.373 11.078 11.078 0 0110.25 6.289 11.301 11.301 0 01.766 5.288c0 2.52-1.393 4.721-3.285 6.022a10.066 10.066 0 01-3.107 1.271 9.897 9.897 0 00-.465-1.992 12.88 12.88 0 003.787-.771 9.01 9.01 0 002.412-.962 11.05 11.05 0 01-1.782-5.357 11.079 11.079 0 01.464-3.589 10.015 10.015 0 011.685 2.373z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Discord</h3>
                <p class="text-gray-600">SilverCore Community</p>
              </div>
            </div>

            <!-- Response Time -->
            <div class="contact-info-item flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">Temps de réponse</h3>
                <p class="text-gray-600">24 heures en moyenne</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="md:col-span-2 space-y-5">
          <!-- Name -->
          <div class="contact-form-group">
            <label for="name" class="block text-sm font-medium text-gray-900 mb-2">
              Nom complet *
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              placeholder="Votre nom"
              required
            />
          </div>

          <!-- Email -->
          <div class="contact-form-group">
            <label for="email" class="block text-sm font-medium text-gray-900 mb-2">
              Adresse email *
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <!-- Subject -->
          <div class="contact-form-group">
            <label for="subject" class="block text-sm font-medium text-gray-900 mb-2">
              Sujet
            </label>
            <select
              id="subject"
              v-model="formData.subject"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
            >
              <option value="">Choisir un sujet...</option>
              <option value="support">Support technique</option>
              <option value="feature">Demande de fonctionnalité</option>
              <option value="feedback">Retour utilisateur</option>
              <option value="partnership">Partenariat</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <!-- Message -->
          <div class="contact-form-group">
            <label for="message" class="block text-sm font-medium text-gray-900 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <!-- Error Message -->
          <div v-if="submitError" class="p-4 bg-red-100 border border-red-300 rounded-lg">
            <p class="text-red-800 text-sm">{{ submitError }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="submitSuccess" class="p-4 bg-green-100 border border-green-300 rounded-lg">
            <p class="text-green-800 text-sm">
              ✓ Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
            </p>
          </div>

          <!-- Submit Button -->
          <div class="contact-form-submit flex gap-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <span v-if="!isSubmitting">Envoyer le message</span>
              <span v-else class="flex items-center gap-2">
                <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6h-6m0 6h-6"></path>
                </svg>
                Envoi en cours...
              </span>
            </button>
          </div>

          <p class="text-xs text-gray-600">
            Les champs marqués d'un * sont obligatoires.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
