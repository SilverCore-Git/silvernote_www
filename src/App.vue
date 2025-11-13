<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>

  <div class="w-screen h-screen">
      <Navbar />
      <router-view/>
      <Footer />
  </div>

</template>
