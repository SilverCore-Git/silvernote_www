<template>

    <section class="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-4 md:px-0 min-h-[600px] md:h-[700px] max-w-5xl mx-auto w-full">

        <div 
            class="
                flex flex-col-reverse md:flex-row items-center
                gap-8 md:gap-12 w-full
            "
        >
                
            <ImgWrapper
                v-if="isPair(imgPos)"
                :src="prop.img"
                class="md:w-1/2 w-full"
            />

            <div class="w-full md:w-1/2 flex flex-col gap-6 justify-center">

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
                        :href="prop.btn.href || 'https://app.silvernote.fr/'"
                        :content="prop.btn.content || 'Essayer silvernote'"
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
                class="md:w-1/2 w-full"
            />
            
        </div>

    </section>

</template>

<script lang="ts" setup>
    
import { SButton, ImgWrapper } from "@/components";

defineProps<{
    prop: {
        img: string;
        subject: string;
        title: string;
        description: string;
        btn?: {
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

</script>