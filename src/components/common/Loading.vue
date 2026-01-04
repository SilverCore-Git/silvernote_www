<script setup lang="ts">
interface Props {
  message?: string;
  size?: "sm" | "md" | "lg";
}

withDefaults(defineProps<Props>(), {
  size: "md",
});

const sizeClass = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <svg
      :class="sizeClass[size]"
      class="animate-spin text-[var(--primary)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6h-6m0 6h-6"></path>
    </svg>
    <p v-if="message" class="text-gray-700 text-sm">{{ message }}</p>
  </div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
