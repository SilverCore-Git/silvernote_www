<template></template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const target = route.fullPath.replace('/redirect/', '');

if (!target.startsWith('http')) {
  throw new Error('URL de redirection invalide');
}

window.location.replace(target);
</script>
