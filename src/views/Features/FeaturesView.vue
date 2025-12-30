<template>

    <section class="py-40 px-4 bg">
    
        <div class="max-w-4xl mx-auto">

            <!-- Header -->
            <div class="text-center mb-14 feature-header">
                <div class="flex justify-center mb-6">
                    <i
                        v-if="feature"
                        class="bi text-7xl text-(--primary)"
                        :class="feature.icon"
                    />
                </div>

                <h1 class="text-3xl md:text-5xl font-bold mb-4">
                    {{ feature?.title }}
                </h1>

                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    {{ feature?.description }}
                </p>
            </div>

            <!-- Details -->
            <div
                v-if="feature"
                class="bg-white rounded-2xl shadow-lg p-8 md:p-10 feature-content"
            >
                <p class="text-gray-700 text-base md:text-lg mb-8">
                    {{ feature.details }}
                </p>

                <ul class="space-y-4">
                    <li
                        v-for="(item, index) in feature.features"
                        :key="index"
                        class="flex items-start gap-3 feature-item"
                    >
                        <i class="bi bi-check-circle-fill text-(--primary) mt-1"></i>
                        <span class="text-gray-800">
                            {{ item }}
                        </span>
                    </li>
                </ul>
            </div>

            <!-- Back button -->
            <div class="mt-12 text-center">
                <router-link
                    to="/features"
                >
                    <p
                        class="inline-flex items-center gap-2 text-(--primary) font-semibold text-lg hover:underline"
                    >    
                        <i class="bi bi-arrow-left"></i>
                        Retour aux fonctionnalités
                    </p>
                </router-link>
            </div>

        </div>
    
    </section>

</template>

<script setup lang="ts">

import { computed, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import features from './Features.json'

const route = useRoute()

const feature = computed(() =>
    features.find(f => f.slug === route.params.slug)
)

onMounted(async () => {
    await nextTick()

    gsap.from('.feature-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    })

    gsap.from('.feature-content', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.3
    })

    gsap.from('.feature-item', {
        opacity: 0,
        x: -20,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.6
    })
})
</script>
