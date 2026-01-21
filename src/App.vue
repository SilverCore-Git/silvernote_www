<script setup lang="ts">
import { Navbar, Footer } from '@/components';
</script>

<template>

  <div class="w-screen h-screen">
      <Navbar />
      <router-view />
      <Footer />
  </div>

</template>
