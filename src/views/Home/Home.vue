<template>
    
    <div class="space-y-30">
        <Hero />
        <SyncWork />
        <Features />
        <!-- <TestimonialsSection /> -->
        <!-- <PricingSection /> -->
        <UseSnote />
        <FAQSection />
    </div>

</template>

<script lang="ts" setup>
import Hero from './Hero.vue';
import SyncWork from './syncWork.vue';
import UseSnote from './UseSnote.vue';
import { FAQSection } from '@/components';
import Features from './Features.vue';
</script>