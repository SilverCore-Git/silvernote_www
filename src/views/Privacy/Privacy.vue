<template>
  <LegalPage :config="privacyConfig" />
</template>

<script setup lang="ts">
import LegalPage from '@/components/LegalPage.vue';
import privacyConfig from '@/configs/privacy.json';
</script>
