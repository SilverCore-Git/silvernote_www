<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SButton } from "@/components";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {

    await nextTick();

    // État initial
    gsap.set(".hero-img", {
        rotateX: 40,
        y: -80,
        opacity: 1,
        scale: 0.8,
        transformOrigin: "center center",
    });

    // Animation
    gsap.to(".hero-img", {
        rotateX: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "none",

        scrollTrigger: {
            trigger: ".hero-img",
            start: "top 80%",
            end: "top 20%",
            scrub: 1.5,
            markers: false, // mets true pour debug
        },
    });

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);

});
</script>


<template>

    <section 
        class="flex justify-center items-center flex-col pt-36 pb-20 bg shadow z-20 px-4"
    >
        <div 
            class="max-w-5xl text-center flex justify-center items-center flex-col gap-8"
        >
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md">
                <span class="text-sm font-medium text-[#1A1615]">✨ Nouvelle version bientôt</span>
            </div>

            <h1 class="max-w-4xl text-4xl md:text-6xl lg:text-7xl" style="line-height: 110%;">
                Vos notes <span class="text-(--primary)">accessibles</span> <span class="text-(--primary)">partout</span> et simplement
            </h1>

            <p class="mb-4 text-lg md:text-xl text-gray-700 max-w-3xl">
                SilverNote est l'application de prise de notes simple et intuitive conçue pour vous,
                disponible sur mobile, PC et en tant qu'application web. Synchronisation en temps réel,
                collaboration fluide et sécurité garantie.
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 md:gap-8 my-6">
                <div class="text-center">
                    <p class="text-2xl md:text-3xl font-bold text-(--primary)">10K+</p>
                    <p class="text-sm md:text-base text-gray-600">Utilisateurs actifs</p>
                </div>
                <div class="text-center">
                    <p class="text-2xl md:text-3xl font-bold text-(--primary)">50K+</p>
                    <p class="text-sm md:text-base text-gray-600">Notes créées</p>
                </div>
                <div class="text-center">
                    <p class="text-2xl md:text-3xl font-bold text-(--primary)">99.9%</p>
                    <p class="text-sm md:text-base text-gray-600">Disponibilité</p>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
                <SButton
                    content="Essayer silvernote"
                    href="/app"
                />
                <SButton
                    content="Voir les fonctionnalités"
                    href="#features"
                    :nobg="true"
                />
            </div>

            <div class="z-10 perspective-[2000px] w-full max-w-2xl">
                <img 
                    class="rounded-2xl hero-img z-10 w-full shadow-2xl"
                    src="/assets/img/silvernote_desktop_screen.png"
                    alt="SilverNote Interface"
                />
            </div>

        </div>

    </section>

</template>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);
}
</style>