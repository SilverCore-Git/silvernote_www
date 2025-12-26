<script lang="ts" setup>
import { FeaturesSection } from '@/components';
import Features_config from './Features.json';

</script>

<template>
    
    <div class="relative space-y-40 w-screen" id="features">
        
      <FeaturesSection
        v-for="(feature, index) in Features_config"
        :prop="feature"
        :img-pos="index"
      />

    </div>

</template>