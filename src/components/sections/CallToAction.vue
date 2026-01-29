<script setup lang="ts">

import { onMounted, nextTick, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SButton } from '@/components/common';
import openApp from '../../utils/openApp';

gsap.registerPlugin(ScrollTrigger);
const sectionEl = ref<HTMLElement | null>(null);

const stats = ref<{ notesLength: number, tagsLength: number, usersLength: number }>({
    notesLength: 0,
    tagsLength: 0,
    usersLength: 0,
});

onMounted(async () => {

    await nextTick();
    
    const section = sectionEl.value;
    if (!section) return;

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        }
    });

    tl.from('.usesnote-badge', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out' }, 0.2)
        .from('.usesnote-title', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, 0.4)
        .from('.usesnote-description', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, 0.6)
        .from('.usesnote-buttons > div', { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, 0.8);


    const [ dbLength, usersLength ] = await Promise.all([
        fetch(`https://api.silvernote.fr/resources/db/length`).then(res => res.json()),
        fetch(`https://api.silvernote.fr/resources/clerk/users/length`).then(res => res.json())
    ]);

    stats.value = {
        notesLength: dbLength.notes.length,
        tagsLength: dbLength.tags.length,
        usersLength: usersLength.users,
    };

});

</script>

<template>

    <section ref="sectionEl" id="calltoaction" class="flex justify-center items-center w-full flex-col py-20 px-4">

        <div class="max-w-3xl text-center flex justify-center items-center flex-col gap-8 w-full">

            <div class="usesnote-badge inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md">
                <span class="text-sm font-medium text-[#1A1615]">🚀 Prêt à commencer ?</span>
            </div>

            <h2 class="usesnote-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tu t'es décidé ?
            </h2>

            <p class="usesnote-description text-lg md:text-xl text-gray-700 max-w-2xl">
                Décourvre Silvenote gratuitement dès maintenant
            </p>

            <div class="usesnote-buttons flex flex-col sm:flex-row gap-4 justify-center w-full">
                <div>
                    <SButton
                        content="Décourvrir Silvernote"
                        :href="'/redirect/'+openApp({ utm_medium: 'call-to-action', type: 'href' })"
                    />
                </div>
                <!-- <div>
                    <SButton
                        content="Voir les tarifs"
                        href="/pricing"
                        :nobg="true"
                    />
                </div> -->
            </div>

            <!-- Trust indicators -->
            <div v-if="stats" class="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-center opacity-75">
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">{{ stats.notesLength }}+</p>
                    <p class="text-sm text-gray-600">Notes créer</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">{{ stats.tagsLength }}+</p>
                    <p class="text-sm text-gray-600">Tags créer</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div class="usesnote-trust-item">
                    <p class="font-bold text-lg text-[var(--primary)]">{{ stats.usersLength }}+</p>
                    <p class="text-sm text-gray-600">Utilisateurs</p>
                </div>
            </div>

        </div>

    </section>

</template>