<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import { SButton } from "@/components";
import { emailService, type ContactFormData } from "@/services";
import { useNotification } from "@/composables";

definePageMeta({
  title: 'Contactez-nous - Silvernote'
})

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
    } else {
      submitError.value = response.error || "Une erreur est survenue lors de l'envoi du message";
    }
  } catch (error) {
    console.error("Contact form error:", error);
    submitError.value = "Une erreur est survenue lors de l'envoi du message";
  } finally {
    isSubmitting.value = false;
  }
};

onMounted(async () => {
  await nextTick();
  const form = document.querySelector('.contact-form');
  if (form) {
    gsap.from(form, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power2.out"
    });
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-20 px-4">
    <div class="contact-form w-full max-w-2xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Nous <span class="text-[var(--primary)]">contacter</span>
        </h1>
        <p class="text-gray-600 text-lg">
          Des questions ? Nous aimerions vous entendre
        </p>
      </div>

      <!-- Error Message -->
      <div v-if="submitError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
        {{ submitError }}
      </div>

      <!-- Success Message -->
      <div v-if="submitSuccess" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
        Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
            Nom complet *
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
            placeholder="Votre nom"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <!-- Subject -->
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
            Sujet
          </label>
          <input
            id="subject"
            v-model="formData.subject"
            type="text"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition"
            placeholder="Sujet de votre message"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            rows="5"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition resize-none"
            placeholder="Votre message..."
          />
        </div>

        <!-- Submit Button -->
        <div class="pt-4">
          <SButton
            :content="isSubmitting ? 'Envoi en cours...' : 'Envoyer'"
            :disabled="isSubmitting"
            type="submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(2rem, 8vw, 3rem);
}
</style>
