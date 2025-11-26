<template>
    
    <SmothScrollWraper>
        <div class="space-y-40">
            <Hero />
            <SyncWork />
            <Features />
            <Colab />
            <UseSnote />
            <div class="h-120"></div>
        </div>
    </SmothScrollWraper>

</template>

<script lang="ts" setup>

import Hero from './Hero.vue';
import SmothScrollWraper from '../../components/smothScrollWraper.vue';
import SyncWork from './syncWork.vue';
import Features from './Features.vue';
import Colab from './Colab.vue';
import UseSnote from '../../components/UseSnote.vue';


</script>