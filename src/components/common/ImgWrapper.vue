<template>
    <div 
        class="
                relative w-full h-[600px] 
                rounded-3xl overflow-hidden
            "
        style="background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);"
    >
        <img
            :src="src"
            class="
                    absolute inset-0 m-auto max-w-[90%] max-h-[90%]
                    object-contain rounded-2xl img-gsap
                "
        />
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nextTick, onMounted } from 'vue';

defineProps<{
  src: string;
}>();

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {

    await nextTick();

    gsap.from(".img-gsap", {
        translateY: 100,
    });

    gsap.to(".img-gsap", {
        translateY: 0,
        scrollTrigger: {
            trigger: ".img-gsap",
            start: "top 80%",
            end: "top 20%",
            scrub: 1.5,
            markers: false,
        },
    })

    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 200);

})

</script>
