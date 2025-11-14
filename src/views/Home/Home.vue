<template>
    
    <SmothScrollWraper>
        <div class="space-y-40">
            <Hero />
            <SyncWork />
            <Features />
            <div class="h-10000"></div>
        </div>
    </SmothScrollWraper>

</template>

<script lang="ts" setup>

import Hero from './Hero.vue';
import SmothScrollWraper from '../../components/smothScrollWraper.vue';
import SyncWork from './syncWork.vue';
import Features from './Features.vue';


</script>