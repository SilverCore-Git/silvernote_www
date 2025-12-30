<template>
    
    <SmothScrollWrapper>
        <div class="space-y-40">
            <Hero />
            <SyncWork />
            <Features />
            <!-- <TestimonialsSection /> -->
            <!-- <PricingSection /> -->
            <FAQSection />
            <UseSnote />
        </div>
    </SmothScrollWrapper>

</template>

<script lang="ts" setup>
import Hero from './Hero.vue';
import SyncWork from './syncWork.vue';
import { SmothScrollWrapper, FAQSection, UseSnote } from '@/components';
import Features from './Features.vue';
</script>