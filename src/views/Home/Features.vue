<script lang="ts" setup>
import { FeaturesSection } from '@/components';
import Features_config from '@/configs/Features.json';
import SButton from '../../components/common/SButton.vue';
</script>

<template>
    
    <div class="features-wrapper relative space-y-20 w-screen " id="features">
        
      <FeaturesSection
        v-for="(feature, index) in Features_config"
        :prop="feature"
        :img-pos="index"
      />

      <div class="w-full flex justify-center">
        <SButton
          content="Voir plus de fonctionnalités"
          href="/features"
        />
      </div>

    </div>

</template>