<template>
    <div 
        class="relative w-full h-[500px] md:h-[60vw] max-h-[700px] rounded-3xl overflow-hidden"
        style="background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);"
    >
        <img
            :src="src"
            class="absolute inset-0 m-auto max-w-[90%] max-h-[90%] object-contain rounded-2xl"
        />
    </div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string;
}>();
</script>
