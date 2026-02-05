<template>
    
    <SmothScrollWraper>
        <div class="space-y-30 h-full">
            <Hero />
            <SyncWork />
            <Features />
            <!-- <TestimonialsSection /> -->
            <!-- <PricingSection /> -->
            <UseSnote />
            <FAQSection />
        </div>
    </SmothScrollWraper>

</template>

<script lang="ts" setup>
import Hero from './Hero.vue';
import SyncWork from './syncWork.vue';
import UseSnote from './UseSnote.vue';
import { FAQSection } from '@/components';
import Features from './Features.vue';
import SmothScrollWraper from '@/components/common/smothScrollWraper.vue';
</script>