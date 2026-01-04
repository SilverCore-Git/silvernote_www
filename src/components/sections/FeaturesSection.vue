<template>

    <section ref="sectionEl" class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-4 md:px-0 min-h-[600px] md:h-[700px] max-w-5xl mx-auto w-full">

        <div 
            class="
                flex flex-col-reverse md:flex-row items-center
                gap-8 md:gap-12 w-full
            "
        >
                
            <ImgWrapper
                v-if="isPair(imgPos)"
                :src="prop.img"
                class="md:w-1/2 w-full feature-image"
            />

            <div class="w-full md:w-1/2 flex flex-col gap-6 justify-center feature-content">

                <div class="flex flex-col gap-4">
                        
                    <span class="text-base md:text-lg font-semibold text-(--primary) uppercase tracking-wide">
                        {{ prop.subject }}
                    </span>
                    <h2 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        {{ prop.title }}
                    </h2>
                    <p class="text-gray-700 text-base md:text-lg leading-relaxed">
                        {{ prop.description }}
                    </p>

                    <SButton
                        :href="prop.btn.href.startsWith('https://app.silvernote.fr') 
                                ? '/redirect/' + openApp({ utm_medium: `features-${prop.subject}`, type: 'href' })
                                : prop.btn?.href"
                        :content="prop.btn?.content || 'Essayer silvernote'"
                        class="w-fit"
                    />

                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div 
                        v-for="(feature, index) in prop.features" 
                        :key="index" 
                        class="flex items-center gap-3 p-4 bg-white/50 rounded-xl backdrop-blur-sm hover:bg-white/80 transition-colors duration-300 shadow-sm"
                    >
                        <div class="flex-shrink-0 w-6 h-6 text-[var(--primary)] flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="font-medium text-gray-800 text-sm md:text-base">
                            {{ feature.title }}
                        </span>
                    </div>
                </div>
                
            </div>

            <ImgWrapper
                v-if="!isPair(imgPos)"
                :src="prop.img"
                class="md:w-1/2 w-full feature-image"
            />
            
        </div>

    </section>

</template>

<script lang="ts" setup>
    
import { SButton, ImgWrapper } from "@/components";
import openApp from "../../utils/openApp";
// import { onMounted, ref, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

defineProps<{
    prop: {
        img: string;
        subject: string;
        title: string;
        description: string;
        btn: {
            href: string;
            content: string;
        };
        features: {
            icon: string;
            title: string;
        }[];
    };
    imgPos: number;
}>();

const isPair = (n: number) => {
  return n % 2 === 0;
}

gsap.registerPlugin(ScrollTrigger);
// const sectionEl = ref<HTMLElement | null>(null);

// onMounted(async () => {
//     await nextTick();
//     const section = sectionEl.value;
//     if (!section) return;

//     const image = section.querySelector('.feature-image');
//     const content = section.querySelector('.feature-content');
//     const textElements = content?.querySelectorAll('span, h2, p');
//     const button = content?.querySelector('.w-fit');
//     const features = content?.querySelectorAll('.grid > div');
//     const innerImage = image?.querySelector('.img-gsap');

//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//         }
//     });

//     const imageIsLeft = isPair(props.imgPos);

//     if (image) {
//         tl.from(image, { xPercent: imageIsLeft ? -50 : 50, opacity: 0, duration: 1, ease: 'power3.out' });
//     }

//     if(textElements) {
//         tl.from(textElements, { xPercent: imageIsLeft ? 30 : -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.7');
//     }
    
//     if(button) {
//         tl.from(button, { xPercent: imageIsLeft ? 30 : -30, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6');
//     }

//     if (features) {
//         tl.from(features, { opacity: 0, scale: 0.9, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.5');
//     }

//     if(innerImage) {
//         gsap.to(innerImage, {
//             yPercent: -10,
//             ease: "none",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: 1,
//             }
//         });
//     }
// });

</script>