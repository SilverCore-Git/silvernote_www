<script lang="ts" setup>
import { ref, computed } from 'vue';
import SButton from './SButton.vue';

const props = defineProps({
  mobileImg: String,
  webImg: String,
});

const currentIndex = ref(0);
const totalSlides = 2;

// Translation en pourcentage
const translateX = computed(() => `-${currentIndex.value * 50}%`);

function moveLeft() {
  if (currentIndex.value > 0) currentIndex.value--;
}

function moveRight() {
  if (currentIndex.value < totalSlides - 1) currentIndex.value++;
}
</script>

<template>
  <div class="relative w-full max-w-[1244px] h-[800px] rounded-3xl backdrop-blur-md overflow-hidden mx-auto">

    <div
      class="flex w-[200%] h-full transition-transform duration-500"
      :style="{ transform: `translateX(${translateX})` }"
    >
      <div class="w-full h-full p-4">
        <div class="w-full h-full rounded-3xl overflow-hidden">
          <img
            :src="props.mobileImg"
            alt="Mobile preview"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div class="w-full h-full p-4">
        <div class="w-full h-full rounded-3xl overflow-hidden">
          <img
            :src="props.webImg"
            alt="Web app preview"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/25 backdrop-blur-xl 
             rounded-[40px] border border-black/10 shadow-lg p-2 flex gap-2 max-w-[300px]"
    >
      <SButton
        @click="moveLeft"
        :nobg="currentIndex === totalSlides - 1"
        content="Mobile App"
      />
      <SButton
        @click="moveRight"
        :nobg="currentIndex === 0"
        content="Web App"
      />
    </div>

  </div>
</template>
