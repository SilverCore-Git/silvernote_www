<template>
    
    <div class="space-y-40">
        <Hero />
        <SyncWork />
        <Features />
        <!-- <TestimonialsSection /> -->
        <!-- <PricingSection /> -->
        <FAQSection />
        <UseSnote />
    </div>

</template>

<script lang="ts" setup>
import Hero from '@/views/Home/Hero.vue';
import SyncWork from '@/views/Home/syncWork.vue';
import { FAQSection, UseSnote } from '@/components';
import Features from '@/views/Home/Features.vue';

definePageMeta({
  title: 'Silvernote - vos notes accessibles partout et simplement'
})
</script>
