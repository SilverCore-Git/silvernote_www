<script setup lang="ts">
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  --primary: #6366f1;
  --text-color: #1f2937;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
  color: var(--text-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
