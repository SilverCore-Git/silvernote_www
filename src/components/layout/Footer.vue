<template>

    <footer class="w-full bg-gradient-to-b from-white/50 to-white/25 backdrop-blur-md border-t border-white/30 px-4 md:px-6 py-12 md:py-16 mt-20">
        
        <div class="max-w-6xl mx-auto">
            <!-- Main footer content -->
            <div class="flex justify-between items-center mb-12 flex-col lg:flex-row gap-12 lg:gap-0">
                <!-- Brand section -->
                <div class="footer-brand md:col-span-1 flex flex-col gap-4 max-w-lg">
                    <a href="./" class="flex items-center gap-2">
                        <img 
                            src="/assets/logo/snote/favicon.svg"
                            alt="Silvernote Logo"
                            class="w-8 h-8"
                        />
                        <span class="text-lg font-bold text-gray-900">Silvernote</span>
                    </a>
                    <p class="text-sm text-gray-700 leading-relaxed">
                        L'application de prise de notes simple, intuitive et sécurisée. Disponible sur tous vos appareils.
                    </p>
                    <!-- Social links -->
                    <!-- <div class="footer-socials flex gap-3 pt-2">
                        <a href="https://twitter.com" target="_blank" rel="noopener" class="footer-social-link w-9 h-9 bg-gray-900 hover:bg-[var(--primary)] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 18.407a11.616 11.616 0 006.29 1.84"/>
                            </svg>
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener" class="footer-social-link w-9 h-9 bg-gray-900 hover:bg-[var(--primary)] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13.545 2.907a13.227 13.227 0 00-3.573-1.04 9.756 9.756 0 00-.464 1.949 12.518 12.518 0 013.785.57 1.125 1.125 0 00.1 1.967 19.815 19.815 0 01-3.015.9 11.02 11.02 0 01-1.685-2.373 11.078 11.078 0 0110.25 6.289 11.301 11.301 0 01.766 5.288c0 2.52-1.393 4.721-3.285 6.022a10.066 10.066 0 01-3.107 1.271 9.897 9.897 0 00-.465-1.992 12.88 12.88 0 003.787-.771 9.01 9.01 0 002.412-.962 11.05 11.05 0 01-1.782-5.357 11.079 11.079 0 01.464-3.589 10.015 10.015 0 011.685 2.373z"/>
                            </svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener" class="footer-social-link w-9 h-9 bg-gray-900 hover:bg-[var(--primary)] rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.201.092-.937.349-1.576.636-1.938-2.22-.253-4.555-1.113-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.596 9.596 0 012.502.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div> -->
                </div>

                <div class="flex justify-between items-center flex-raw max-w-lg w-full">

                    <!-- Product -->
                    <div class="footer-section flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900">Pages</h4>
                        <ul class="footer-links flex flex-col gap-2">
                            <li><RouterLink to="/"  class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Accueil</RouterLink></li>
                            <li><RouterLink to="/features" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Fonctionnalités</RouterLink></li>
                            <li><RouterLink to="/download" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Télécharger</RouterLink></li>
                            <li>‎ </li>
                        </ul>
                    </div>

                    <!-- Company -->
                    <div class="footer-section flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900">Nous sommes aussi</h4>
                        <ul class="footer-links flex flex-col gap-2">
                            <li><a href="https://www.silvercore.fr/" target="_blank" rel="noopener" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Silvercore</a></li>
                            <li><a href="https://www.silvertransfert.fr/" target="_blank" rel="noopener" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Silvertransfert</a></li>
                            <li>‎ </li>
                            <li>‎ </li>
                        </ul>
                    </div>

                    <!-- Legal & Support -->
                    <div class="footer-section flex flex-col gap-4">
                        <h4 class="font-bold text-gray-900">Support</h4>
                        <ul class="footer-links flex flex-col gap-2">
                            <li><RouterLink to="/terms-of-use" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Conditions</RouterLink></li>
                            <li><RouterLink to="/privacy" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Confidentialité</RouterLink></li>
                            <li><RouterLink to="/contact" class="text-sm text-gray-700 hover:text-[var(--primary)] transition-colors">Contact</RouterLink></li>
                            <li>‎ </li>
                        </ul>
                    </div>

                </div>
                
            </div>

            <!-- Divider -->
            <div class="border-t border-white/20 pt-8">
                <!-- Bottom -->
                <div class="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-sm text-gray-600">
                        &copy; {{ new Date().getFullYear() }} Silvernote. Tous droits réservés.
                    </p>
                    <div class="footer-legal flex gap-6">
                        <RouterLink to="/privacy" class="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors">Politique de confidentialité</RouterLink>
                        <RouterLink to="/terms-of-use" class="text-sm text-gray-600 hover:text-[var(--primary)] transition-colors">Conditions d'utilisation</RouterLink>
                    </div>
                </div>
            </div>

        </div>

    </footer>

</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';

onMounted(async () => {
  await nextTick();
  
  // Brand animation
  gsap.from('.footer-brand', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.2 });
  
  // Social links animation
  gsap.from('.footer-social-link', { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.08, ease: 'back.out', delay: 0.5 });
  
  // Footer sections animation
  gsap.from('.footer-section', { opacity: 0, y: 30, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.7 });
  
  // Footer links stagger
  gsap.from('.footer-links > li', { opacity: 0, x: -15, duration: 0.4, stagger: 0.06, ease: 'power3.out', delay: 1.1 });
  
  // Bottom footer animation
  gsap.from('.footer-bottom', { opacity: 0, y: 15, duration: 0.6, ease: 'power3.out', delay: 1.5 });
  gsap.from('.footer-legal', { opacity: 0, y: 15, duration: 0.6, ease: 'power3.out', delay: 1.6 });
});
</script>
