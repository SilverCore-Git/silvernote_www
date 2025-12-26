<template>

    <section class="bg-white relative flex flex-col justify-center items-center text-center gap-8 -mt-60 z-40 pt-16 px-4">

        <div class="flex flex-col gap-4 max-w-3xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md w-fit mx-auto">
                <span class="text-sm font-medium text-[#1A1615]">⚡ Synchronisation en temps réel</span>
            </div>

            <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span class="text-(--primary)">Travaillez</span> où que vous soyez, 
                <br/>restez <span class="text-(--primary)">synchronisé</span>
            </h2>

            <p class="text-lg text-gray-700">
                Accédez à vos notes sur n'importe quel appareil et voyez les modifications en direct.
            </p>
        </div>

        <PicsViewer
            mobile-img="/assets/img/mobile_mockup.jpg"
            web-img="/assets/img/desktop_mockup.png"
        />

    </section>

</template>

<script lang="ts" setup>
import { PicsViewer } from '@/components/common';

</script>