<script setup lang="ts">
import { ref } from "vue";
import SButton from "./SButton.vue";

const navbar_config = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "#features" },
  { name: "Collaboratif", href: "#collab" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "/contact" },
];

const btn = { content: "Télécharger", href: "/download" };
const mobileMenuOpen = ref(false);

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

</script>

<template>
    <nav
        class="fixed top-6 left-0 right-0 mx-auto max-w-[1200px] z-50 px-4 md:px-2 shadow-none
            bg-white/10 backdrop-blur-3xl rounded-[100px] flex justify-between items-center transition-all duration-300"
    >
        <div class="flex items-center gap-2 ml-2">
            <img
                src="/assets/logo/snote/favicon.svg"
                alt="Silvernote Logo"
                class="w-6"
            />
            <span class="text-[16px] md:text-[20px] font-semibold text-[#1A1615]">Silvernote</span>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center gap-4">
            <SButton
                v-for="tab in navbar_config"
                :key="tab.name"
                :nobg="true"
                :content="tab.name"
                :href="tab.href"
            />
        </div>

        <!-- Bouton Télécharger Desktop -->
        <SButton
            class="hidden md:block"
            :content="btn.content"
            :href="btn.href"
        />

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-colors"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle menu"
        >
            <svg
                class="w-6 h-6 text-[#1A1615] transition-transform duration-300"
                :style="{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </button>

        <!-- Mobile Menu Overlay -->
        <transition name="fade">
            <div
                v-if="mobileMenuOpen"
                class="fixed inset-0 bg-black/20 md:hidden z-40"
                @click="closeMobileMenu"
            ></div>
        </transition>

        <!-- Mobile Menu Dropdown -->
        <transition name="slide-down">
            <div
                v-if="mobileMenuOpen"
                class="absolute top-full left-0 right-0 mt-4 mx-4 md:hidden bg-white/20 backdrop-blur-3xl rounded-3xl shadow-lg overflow-hidden z-50"
            >
                <div class="flex flex-col p-4 space-y-2">
                    <button
                        v-for="tab in navbar_config"
                        :key="tab.name"
                        @click="closeMobileMenu"
                        class="text-left text-[#1A1615] px-4 py-3 rounded-2xl hover:bg-white/20 transition-colors font-medium"
                    >
                        <a :href="tab.href">{{ tab.name }}</a>
                    </button>
                    <div class="border-t border-white/20 pt-2 mt-2">
                        <button
                            @click="closeMobileMenu"
                            class="w-full"
                        >
                            <SButton
                                :content="btn.content"
                                :href="btn.href"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </transition>

    </nav>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

