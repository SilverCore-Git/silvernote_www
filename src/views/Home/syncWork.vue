<template>

    <section class="bg-white relative flex flex-col justify-center items-center text-center gap-6 -mt-60 z-40 pt-10">

        <span class="uppercase text-[15px] font-semibold text-gray-600">
            Travaille synchronisé
        </span>

        <h2>
            <span class="text-(--primary)">Travaillez</span> où que vous soyez, 
            <br/>restez <span class="text-(--primary)">synchronisé</span>
        </h2>

        <PicsViewer
            mobile-img="/assets/img/mobile_mockup.jpg"
            web-img="/assets/img/desktop_mockup.png"
        />

    </section>

</template>

<script lang="ts" setup>
import PicsViewer from '@/components/PicsViewer.vue';

</script>