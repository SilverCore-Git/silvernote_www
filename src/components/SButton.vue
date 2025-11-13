<template>
  <button
    :href="href"
    :class="nobg ? 'bg-white/10 hover:bg-white/20 text-black' : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white'"
    class="
      font-semibold rounded-full  
      transition-all duration-300 cursor-pointer text-lg
    "
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="mx-4.5 my-2.5 overflow-hidden">
      <div
        class="
              flex flex-col items-start
              transition-transform duration-200 max-h-7 gap-3
            "
        :style="{ transform: hovered ? 'translateY(-150%)' : 'translateY(0)' }"
      >
        <span 
          v-for="i in 2"
          :key="i"
          class="block w-full"
        >{{ content }}</span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  content: { type: String, default: "content" },
  nobg: { type: Boolean, default: false },
  href: { type: String, default: "#services" },
});

const hovered = ref(false);
</script>
