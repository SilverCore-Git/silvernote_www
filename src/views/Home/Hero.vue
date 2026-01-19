<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minuteur, SButton, SnoteStatus } from "@/components";
import getVersion from "@/utils/getVersion";
import openApp from "@/utils/openApp";

const version = ref<string>('');
const showSStatus = ref<boolean>(false);

let canToggleSStatus = true;
const toggleSStatus = () => {
    if (!canToggleSStatus) return;
    canToggleSStatus = false;
    showSStatus.value = !showSStatus.value;
    setTimeout(() => {
        canToggleSStatus = true;
    }, 100);
};

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {

    version.value = await getVersion;

    await nextTick();

    // ===== ANIMATIONS D'APPARITION =====
    
    // Badge version
    gsap.from(".hero-badge", {
        opacity: 0,
        scale: 0.8,
        y: -20,
        duration: 0.6,
        ease: "back.out",
        delay: 0.3,
    });

    // Titre principal
    gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
    });

    // Description
    gsap.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.7,
    });

    // Boutons CTA
    gsap.from(".hero-buttons > *", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.9,
    });

    // ===== ANIMATION IMAGE SCROLL =====
    
    // État initial
    gsap.set(".hero-img", {
        rotateX: 40,
        y: -80,
        opacity: 0,
        scale: 0.8,
        transformOrigin: "center center",
    });

    // Animation d'apparition de l'image
    gsap.to(".hero-img", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.1,
    });

    // Animation scroll
    gsap.to(".hero-img", {
        rotateX: 0,
        y: 0,
        scale: 1,
        ease: "none",

        scrollTrigger: {
            trigger: ".hero-img",
            start: "top 80%",
            end: "top 20%",
            scrub: 1.5,
            markers: false,
        },
    });

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);

});
</script>

<template>

    <section 
        class="flex justify-center items-center flex-col pt-36 pb-40 bg-with-white shadow z-20 px-4"
    >
        <div 
            class="max-w-5xl text-center flex justify-center items-center flex-col gap-8 relative"
        >
            <!-- Badge -->
            <div 
                class="
                    hero-badge inline-flex items-center gap-2
                    px-4 py-2 bg-white/20 rounded-full 
                    backdrop-blur-md cursor-pointer z-10
                "
                @mouseenter="toggleSStatus"
            >
                <span class="text-sm font-medium text-[#1A1615]">✨ Version {{ version }}</span>
            </div>

            <SnoteStatus
                v-if="showSStatus"
                class="absolute top-16"
            />

            <div
                class="fixed inset-0 z-5"
                @click="showSStatus = false"
                v-if="showSStatus"
                @mouseenter="toggleSStatus"
            ></div>

            <h1 class="hero-title max-w-4xl text-4xl md:text-6xl lg:text-7xl" style="line-height: 110%;">
                Vos notes <span class="text-[var(--primary)]">accessibles</span> <span class="text-[var(--primary)]">partout</span> et simplement
            </h1>

            <p class="hero-description mb-4 text-lg md:text-xl text-gray-700 max-w-3xl">
                Silvernote est l'application de prise de notes simple et intuitive conçue pour vous,
                disponible sur mobile, PC et en tant qu'application web. Synchronisation en temps réel,
                collaboration fluide et sécurité garantie.
            </p>

            <div class="hero-buttons flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
                <SButton
                    content="Ouvrir silvernote"
                    :href="'/redirect/'+openApp({ utm_medium: 'hero', type: 'href' })"
                />
                <SButton
                    content="Voir les fonctionnalités"
                    href="/features"
                    :nobg="true"
                />
            </div>

            <!-- <Minuteur
                title="Silvernote sort dans :"
                date="30-01-2026" 
            /> -->

            <div class="z-10 perspective-[2000px] w-full max-w-4xl">
                <img 
                    class="rounded-2xl hero-img z-10 w-full shadow-2xl"
                    src="/assets/img/silvernote_desktop_screen.png"
                    alt="SilverNote Interface"
                />
            </div>

        </div>

    </section>

</template>
