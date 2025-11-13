<template>
    
    <SmothScrollWraper class="bg">
        <Hero />
    </SmothScrollWraper>

</template>

<script lang="ts" setup>

import Hero from './Hero.vue';
import SmothScrollWraper from '../../components/smothScrollWraper.vue';


</script>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);
}
</style>