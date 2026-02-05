<template>
  <div ref="scrollWrapper" class="smooth-wrapper">
    <div ref="scrollContent" class="smooth-content">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Footer from '../layout/Footer.vue';

const scrollWrapper = ref<HTMLElement | null>(null);
const scrollContent = ref<HTMLElement | null>(null);

let rafId: number;
let current = 0;
let target = 0;
const ease = 0.1;

const updateHeight = () => {
  if (scrollContent.value && scrollWrapper.value) {
    const h = scrollContent.value.getBoundingClientRect().height;
    // On force la hauteur sur le wrapper ET sur le body pour être sûr
    scrollWrapper.value.style.height = `${h}px`;
    document.body.style.height = `${h}px`;
  }
};

const animate = () => {
  target = window.scrollY;
  current += (target - current) * ease;

  if (scrollContent.value) {
    // Utilisation de fixed pour bloquer le contenu pendant que le wrapper simule le scroll
    scrollContent.value.style.transform = `translate3d(0, ${-current.toFixed(2)}px, 0)`;
  }
  rafId = requestAnimationFrame(animate);
};

onMounted(async () => {
  // 1. On attend que le DOM soit prêt
  await nextTick();
  
  // 2. Un petit délai supplémentaire pour les composants lourds (Hero, etc.)
  setTimeout(() => {
    updateHeight();
    animate();
  }, 100);

  window.addEventListener('scroll', () => { target = window.scrollY; }, { passive: true });
  window.addEventListener('resize', updateHeight);

  // 3. Observer les changements (si une section s'ouvre ou charge)
  const observer = new ResizeObserver(updateHeight);
  if (scrollContent.value) observer.observe(scrollContent.value);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  window.removeEventListener('resize', updateHeight);
  document.body.style.height = ''; // Reset
});
</script>

<style>
/* CSS GLOBAL : Indispensable pour que ça marche */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  /* On laisse le scroll activé mais on gère la hauteur en JS */
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.smooth-wrapper {
  position: relative;
  width: 100%;
  z-index: 1;
}

.smooth-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
  /* On s'assure que le contenu ne s'effondre pas */
  min-height: 100vh; 
  display: block;
}
</style>