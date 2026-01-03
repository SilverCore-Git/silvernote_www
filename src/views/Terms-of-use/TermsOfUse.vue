<template>
  <LegalPage :config="termsConfig" />
</template>

<script setup lang="ts">
import LegalPage from '@/components/LegalPage.vue';
import termsConfig from '@/configs/terms-of-use.json';
</script>
