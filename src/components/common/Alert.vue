<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "error" | "warning" | "success" | "info";
  title?: string;
  message: string;
  closeable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "error",
  closeable: true,
});

const emit = defineEmits<{
  close: [];
}>();

const colors = {
  error: "bg-red-100 border-red-300 text-red-800",
  warning: "bg-yellow-100 border-yellow-300 text-yellow-800",
  success: "bg-green-100 border-green-300 text-green-800",
  info: "bg-blue-100 border-blue-300 text-blue-800",
};

const icons = {
  error: "❌",
  warning: "⚠️",
  success: "✅",
  info: "ℹ️",
};

const colorClass = computed(() => colors[props.type]);
const icon = computed(() => icons[props.type]);
</script>

<template>
  <div :class="`p-4 rounded-lg border ${colorClass} flex items-start gap-3`">
    <span class="text-xl flex-shrink-0">{{ icon }}</span>
    <div class="flex-1">
      <h4 v-if="title" class="font-semibold mb-1">{{ title }}</h4>
      <p class="text-sm">{{ message }}</p>
    </div>
    <button
      v-if="closeable"
      @click="emit('close')"
      class="flex-shrink-0 hover:opacity-70 transition-opacity"
      aria-label="Fermer"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>
