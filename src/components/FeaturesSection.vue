<template>

    <section class="flex flex-col-reverse md:flex-row items-center gap-12 h-[700px] w-[1200px] mx-auto">

        <div 
            class="
                flex flex-col-reverse md:flex-row items-center
                gap-12 h-[700px] w-[1200px] mx-auto
            "
        >
                
            <ImgWrapper
                v-if="isPair(imgPos)"
                :src="prop.img"
                class=" md:w-1/2 w-full h-full"
            />

            <div class="w-full h-full md:w-1/2 flex flex-col gap-6 justify-between">

                <div class="flex flex-col gap-6">
                        
                    <span class="text-lg font-semibold text-(--primary)">
                        {{ prop.subject }}
                    </span>
                    <h2 class="text-3xl font-bold">
                        {{ prop.title }}
                    </h2>
                    <p class="text-gray-700">
                        {{ prop.description }}
                    </p>

                    <SButton
                        :href="prop.btn.href || 'https://app.silvernote.fr/'"
                        :content="prop.btn.content || 'Essayer silvernote'"
                        class="w-50"
                    />

                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div 
                        v-for="(feature, index) in prop.features" 
                        :key="index" 
                        class="flex items-center gap-2 p-3 bg-white rounded-xl shadow"
                    >
                        <i class="w-6 h-6 text-gray-800" :class="feature.icon" />
                        <span class="font-medium text-gray-800">
                            {{ feature.title }}
                        </span>
                    </div>
                </div>
                
            </div>

            <ImgWrapper
                v-if="!isPair(imgPos)"
                :src="prop.img"
                class=" md:w-1/2 w-full h-full"
            />
            
        </div>

    </section>

</template>

<script lang="ts" setup>
import ImgWrapper from './ImgWrapper.vue';
import SButton from './SButton.vue';


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