<script setup lang="ts">
import { Navbar, Footer } from '@/components/layout';
</script>

<template>

  <div class="w-screen h-screen">
      <Navbar />
      <router-view/>
      <Footer />
  </div>

</template>
