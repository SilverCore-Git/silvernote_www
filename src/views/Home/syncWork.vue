<template>

    <section class="sync-section bg-white relative flex flex-col justify-center items-center text-center gap-8 -mt-40 z-40 pt-16 px-4">

        <div class="sync-content flex flex-col gap-4 max-w-3xl">
            <div class="sync-badge inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md w-fit mx-auto">
                <span class="text-sm font-medium text-[#1A1615]">⚡ Synchronisation en temps réel</span>
            </div>

            <h2 class="sync-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="text-[var(--primary)]">Travaillez</span> où que vous soyez, 
                <br/>restez <span class="text-[var(--primary)]">synchronisé</span>
            </h2>

            <p class="sync-description text-lg text-gray-700">
                Accédez à vos notes sur n'importe quel appareil et voyez les modifications en direct.
            </p>
        </div>

        <!-- <div class="sync-viewer">
            <PicsViewer
                mobile-img="/assets/img/mobile_mockup.jpg"
                web-img="/assets/img/desktop_mockup.png"
            />
        </div> -->

    </section>

</template>

<script lang="ts" setup>
// import { PicsViewer } from '@/components/common';
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  // const section = document.querySelector('.sync-section');
  // if (!section) return;

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section,
  //     start: 'top 70%',
  //     toggleActions: 'play none none reverse',
  //   },
  // });

  // // Badge avec scale + fade
  // tl.from(section.querySelector('.sync-badge'), {
  //   opacity: 0,
  //   scale: 0.8,
  //   y: -15,
  //   duration: 0.6,
  //   ease: 'back.out',
  // }, 0.2);

  // // Titre avec fade + slide
  // tl.from(section.querySelector('.sync-title'), {
  //   opacity: 0,
  //   y: 30,
  //   duration: 0.8,
  //   ease: 'power3.out',
  // }, 0.4);

  // // Description avec fade
  // tl.from(section.querySelector('.sync-description'), {
  //   opacity: 0,
  //   y: 20,
  //   duration: 0.7,
  //   ease: 'power2.out',
  // }, 0.6);

  // // Image/Viewer avec scale + rotation
  // tl.from(section.querySelector('.sync-viewer'), {
  //   opacity: 0,
  //   scale: 0.9,
  //   rotation: -2,
  //   duration: 0.8,
  //   ease: 'back.out',
  // }, 0.8);
});

</script>