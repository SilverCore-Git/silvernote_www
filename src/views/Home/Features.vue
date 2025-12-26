<script lang="ts" setup>
import { FeaturesSection } from '@/components';
import Features_config from '@/configs/Features.json';
import { onMounted, nextTick } from 'vue';
import gsap from 'gsap';

onMounted(async () => {
  await nextTick();

  // Animer le titre "Features" avec une transition slide-in
  const featuresDiv = document.querySelector('#features');
  if (featuresDiv) {
    gsap.from(featuresDiv, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.2,
    });
  }
});

</script>

<template>
    
    <div class="features-wrapper relative space-y-40 w-screen" id="features">
        
      <FeaturesSection
        v-for="(feature, index) in Features_config"
        :prop="feature"
        :img-pos="index"
      />

    </div>

</template>