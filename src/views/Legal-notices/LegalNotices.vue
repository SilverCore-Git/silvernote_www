<template>
  <LegalPage :config="legalNoticesConfig" />
</template>

<script setup lang="ts">
import LegalPage from '@/components/LegalPage.vue';
import legalNoticesConfig from '@/configs/legal-notices.json';
</script>
