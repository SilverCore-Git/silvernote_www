<template>
    
    <SmothScrollWrapper>
        <div class="space-y-40">
            <Hero />
            <SyncWork />
            <Features />
            <Collaboration />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <UseSnote />
            <div class="h-120"></div>
        </div>
    </SmothScrollWrapper>

</template>

<script lang="ts" setup>
import Hero from './Hero.vue';
import SyncWork from './syncWork.vue';
import Features from './Features.vue';
import Collaboration from './Collaboration.vue';
import { SmothScrollWrapper, TestimonialsSection, PricingSection, FAQSection, UseSnote } from '@/components';
</script>