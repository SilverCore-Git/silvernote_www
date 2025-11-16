<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SButton from "../../components/SButton.vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {

    await nextTick();

    // État initial
    gsap.set(".hero-img", {
        rotateX: 40,
        y: -80,
        opacity: 1,
        scale: 0.8,
        zIndex: 10,
        transformOrigin: "center center",
    });

    // Animation
    gsap.to(".hero-img", {
        rotateX: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "none",
        zIndex: 10,

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
        class="flex justify-center items-center flex-col pt-40 bg shadow z-20"
    >
        <div 
            class="max-w-5xl text-center flex justify-center items-center flex-col gap-6"
        >

            <h1 class="max-w-4xl " style="line-height: 110%;">
                Vos notes <span class="text-(--primary)">accessibles</span> <span class="text-(--primary)">partout</span> et simplement
            </h1>

            <p class="mb-4 text-[20px]">
                SilverNote est l'application de prise de notes simple et intuitive conçue pour vous,
                <br />disponible sur mobile, PC et en tant qu'application web.
            </p>

            <div class="flex justify-center items-center my-8 gap-4">
                <SButton
                    content="Essayer silvernote"
                    href="/app"
                />
                <SButton
                    content="Voir les fonctionalités"
                    href="#features"
                    :nobg="true"
                />
            </div>

            <div class=" perspective-[2000px]">
                <img 
                    class="rounded-2xl hero-img "
                    src="/assets/img/silvernote_desktop_screen.png"
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