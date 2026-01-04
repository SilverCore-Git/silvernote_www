<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { SButton } from "@/components/common";
import gsap from "gsap";
import { useRouter } from "vue-router";

const navbar_config = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "/features" },
//   { name: "Tarifs", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const btn = { content: "Télécharger", href: "/download" };
const mobileMenuOpen = ref(false);
const router = useRouter();

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(async () => {
  await nextTick();

  // Animation du logo
  gsap.from(".navbar-logo", {
    opacity: 0,
    scale: 0.8,
    x: -30,
    duration: 0.6,
    ease: "back.out",
    delay: 0.2,
  });

  // Animation des boutons du menu desktop
  gsap.from(".navbar-menu-desktop > *", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out",
    delay: 0.4,
  });

  // Animation du bouton télécharger
  gsap.from(".navbar-download-btn", {
    opacity: 0,
    x: 30,
    duration: 0.6,
    ease: "power2.out",
    delay: 0.6,
  });

  // Animation du bouton mobile menu
  gsap.from(".navbar-mobile-btn", {
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    ease: "back.out",
    delay: 0.5,
  });
});
</script>

<template>

    <div class="fixed top-0 inset-x-0 z-50 flex justify-center">

        <nav
            class="
                mt-4
                w-full
                max-w-[1200px]
                mx-4
                px-4 py-4 md:py-2
                rounded-[100px]
                bg-white/20 backdrop-blur-xl
                flex justify-between items-center
                transition-all duration-300
            "
        >

            <div 
                class="navbar-logo flex items-center gap-2 ml-2 cursor-pointer"
                @click="router.push('/')"
            >
                <img
                    src="/assets/logo/snote/favicon.svg"
                    alt="Silvernote Logo"
                    class="w-10"
                />
                <span class="text-2xl font-semibold text-[#1A1615]">Silvernote</span>
            </div>

            <!-- Menu Desktop -->
            <div class="navbar-menu-desktop hidden md:flex items-center gap-4">
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
                class="navbar-download-btn hidden md:block"
                :content="btn.content"
                :href="btn.href"
            />

            <!-- Mobile Menu Button -->
            <button
                class="
                    navbar-mobile-btn md:hidden 
                    flex items-center justify-center
                    w-11 h-11 rounded-full hover:bg-white/20 
                    transition-colors cursor-pointer
                "
                @click="mobileMenuOpen = !mobileMenuOpen"
                aria-label="Toggle menu"
            >
                <i
                    class="
                        bi bi-list 
                        text-3xl font-bold text-black
                        transition-transform duration-300"
                    :style="{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }"
                />
            </button>

        </nav>

        <!-- Mobile Menu Dropdown -->
        <transition name="slide-down">

            <div
                v-if="mobileMenuOpen"
                class="
                        absolute top-full left-0 right-0 
                        mt-4 mx-4 md:hidden z-50
                        bg-white/20 backdrop-blur-xl 
                        rounded-4xl shadow-lg overflow-hidden
                "
            >

                <div
                    class="flex flex-col p-4 space-y-2"
                    @click="closeMobileMenu"
                >

                    <SButton
                        v-for="tab in navbar_config"
                        :key="tab.name"
                        :nobg="true"
                        :content="tab.name"
                        :href="tab.href"
                        twstyle="w-full"
                    />

                    <div class="border-t border-white/20 pt-2 mt-2">

                        <SButton
                            :content="btn.content"
                            :href="btn.href"
                            twstyle="w-full"
                        />

                    </div>

                </div>

            </div>

        </transition>

        <!-- Mobile Menu Overlay -->
        <div
            v-if="mobileMenuOpen"
            class="fixed inset-0 md:hidden z-30"
            @click="closeMobileMenu"
        ></div>

    </div>

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

