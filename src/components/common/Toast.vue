<script setup lang="ts">
import { ref, computed } from "vue";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

const toasts = ref<Toast[]>([]);

const icons = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

const colors = {
  success: "bg-green-100 border-green-300 text-green-800",
  error: "bg-red-100 border-red-300 text-red-800",
  warning: "bg-yellow-100 border-yellow-300 text-yellow-800",
  info: "bg-blue-100 border-blue-300 text-blue-800",
};

const addToast = (type: ToastType, message: string, duration: number = 4000) => {
  const id = Date.now().toString();
  const toast: Toast = { id, type, message, duration };

  toasts.value.push(toast);

  if (duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }
};

const removeToast = (id: string) => {
  toasts.value = toasts.value.filter(t => t.id !== id);
};

// Expose les méthodes
defineExpose({
  addToast,
  removeToast,
  success: (msg: string) => addToast("success", msg),
  error: (msg: string) => addToast("error", msg),
  warning: (msg: string) => addToast("warning", msg),
  info: (msg: string) => addToast("info", msg),
});
</script>

<template>
  <div class="fixed top-6 right-6 z-[100] space-y-3 pointer-events-none">
    <transition-group name="toast" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="`${colors[toast.type]} border pointer-events-auto`"
        class="p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm animate-slide-in-right"
      >
        <span class="text-lg flex-shrink-0">{{ icons[toast.type] }}</span>
        <p class="text-sm">{{ toast.message }}</p>
        <button
          @click="removeToast(toast.id)"
          class="ml-auto flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
