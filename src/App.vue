<script setup lang="ts">
import { Navbar } from '@/components';
</script>

<template>

  <div class="w-screen h-screen">
      <Navbar />
      <router-view />
  </div>

</template>
