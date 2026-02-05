<script lang="ts" setup>
import { FeaturesSection } from '@/components';
import Features_config from '@/configs/Features.json';
import SButton from '../../components/common/SButton.vue';
</script>

<template>
    
    <div class="features-wrapper relative space-y-0 w-screen py-20 md:py-28 bg-white" id="features">
        
      <div class="max-w-6xl mx-auto px-4 mb-20 md:mb-28">
        <div class="text-center flex flex-col gap-4 max-w-2xl mx-auto">
          <p class="text-[var(--primary)] font-semibold uppercase tracking-widest text-sm md:text-base">
            Fonctionnalités puissantes
          </p>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tout ce dont vous avez besoin
          </h2>
          <p class="text-gray-600 text-lg md:text-xl">
            Découvrez les fonctionnalités pensées pour vous rendre plus productif
          </p>
        </div>
      </div>

      <div class="divide-y divide-gray-100">
        <FeaturesSection
          v-for="(feature, index) in Features_config"
          :prop="feature"
          :img-pos="index"
        />
      </div>

      <div class="w-full flex justify-center pt-20 md:pt-28 px-4">
        <SButton
          content="Voir plus de fonctionnalités"
          href="/features"
        />
      </div>

    </div>
</template>