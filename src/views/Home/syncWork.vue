<template>

    <section class="sync-section bg-gradient-to-b from-white via-white to-gray-50 relative flex flex-col justify-center items-center -mt-40 z-40 pt-24 pb-24 px-4">

        <div class="sync-content flex flex-col gap-12 max-w-5xl w-full">
            
            <!-- Header -->
            <div class="text-center flex flex-col gap-4 max-w-3xl mx-auto">
                <div class="sync-badge inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm backdrop-blur-md w-fit mx-auto border border-gray-100">
                    <span class="text-sm font-semibold text-[var(--primary)]">⚡ Synchronisation en temps réel</span>
                </div>

                <h2 class="sync-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Accédez à vos notes <span class="text-[var(--primary)]">partout</span>
                </h2>

                <p class="sync-description text-lg md:text-xl text-gray-600">
                    Travaillez sur vos appareils mobiles, PC ou navigateur web. Vos modifications se synchronisent instantanément sur tous les appareils.
                </p>
            </div>

            <!-- Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <!-- Desktop -->
                <div class="sync-feature group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-xl group-hover:shadow-md transition-shadow">
                        💻
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-xl font-semibold text-gray-900">Application PC</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Accédez à toutes vos notes en mode hors ligne avec la synchronisation automatique.
                        </p>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="sync-feature group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-xl group-hover:shadow-md transition-shadow">
                        📱
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-xl font-semibold text-gray-900">Application Mobile</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Prenez des notes où que vous soyez avec l'application iOS et Android.
                        </p>
                    </div>
                </div>

                <!-- Web -->
                <div class="sync-feature group flex flex-col gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-xl group-hover:shadow-md transition-shadow">
                        🌐
                    </div>
                    <div class="flex flex-col gap-2">
                        <h3 class="text-xl font-semibold text-gray-900">Application Web</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Accédez instantanément à vos notes depuis n'importe quel navigateur.
                        </p>
                    </div>
                </div>
            </div>

        </div>

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

  const isMobile = window.innerWidth < 768;

  // Pas d'animations sur mobile
  if (isMobile) return;

  const section = document.querySelector('.sync-section');
  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(section.querySelector('.sync-badge'), {
    opacity: 0,
    scale: 0.8,
    y: -15,
    duration: 0.6,
    ease: 'back.out',
  }, 0);

  tl.from(section.querySelector('.sync-title'), {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
  }, 0.2);

  tl.from(section.querySelector('.sync-description'), {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: 'power2.out',
  }, 0.4);

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);

});

</script>