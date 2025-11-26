<template>
  <button
    @click="open(href)"
    :class="nobg ? 'bg-white/10 hover:bg-white/20 text-black' : 'bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white'"
    class="
      font-semibold rounded-full  text-lg
      transition-all duration-300 cursor-pointer 
    "
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div class="mx-5 my-3 overflow-hidden">
      <div
        class="
              flex flex-col items-start
              transition-transform duration-200 max-h-8 gap-3
            "
        :style="{ transform: hovered ? 'translateY(-120%)' : 'translateY(0)' }"
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
import { useRouter } from "vue-router";


defineProps<{
  content: string;
  nobg?: boolean;
  href: string;
}>();

const router = useRouter();
const hovered = ref<boolean>(false);

const open = (href: string) => {
  if (href === 'none') return;
  if (href.startsWith('#'))
  {
    const el = document.getElementById(href.replace('#', ''));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  else
  {
    if ([ '/', '/download', '/app' ].includes(href)) return router.push(href);
    window.location.href = href;
  }
}
</script>
