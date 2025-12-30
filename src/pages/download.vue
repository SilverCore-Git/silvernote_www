<template>

    <div
        class="flex justify-start items-center
                flex-col py-45 bg min-h-screen"
    >

        <div class="text-center mb-8 download-header">
            <h1>
                <span class="text-[var(--primary)]">Télécharger</span> silvernote
            </h1>
            <span class="download-version">{{ version }}</span>
        </div>

        <div>
            <SButton
                :content="`Télécharger pour ${currentOS}`"
                :href="getHref(currentOS)"
            />
        </div>

        <div class="flex flex-wrap justify-center items-start gap-8 mt-20 max-w-6xl download-cards">

            <a
                v-for="card in downloads"
                :key="card.os"
                :href="getHref(card.os)"
                class="download-card w-52 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all
                    border border-gray-200 hover:border-gray-300 
                    flex flex-col items-center gap-4 cursor-pointer"
            >
            
                <div class="text-4xl">
                    <i class="bi" :class="card.icon" />
                </div>

                <h3 class="text-xl font-semibold capitalize">
                    {{ card.os }}
                </h3>

                <p class="text-sm text-gray-500 text-center">
                    Télécharger la version {{ version }}
                </p>

                <button
                    class="mt-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl font-medium
                            hover:brightness-110 transition cursor-pointer"
                >
                    Télécharger
                </button>

            </a>

        </div>

    </div>

</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { SButton } from "@/components";
import { getVersion } from "@/utils";

definePageMeta({
  title: 'Télécharger - Silvernote'
})

const version = ref(getVersion());

const downloads = [
    { os: 'Windows', icon: 'bi-windows', href: import.meta.env.VITE_DOWNLOAD_WINDOWS },
    { os: 'macOS', icon: 'bi-apple', href: import.meta.env.VITE_DOWNLOAD_MACOS },
    { os: 'Linux', icon: 'bi-ubuntu', href: import.meta.env.VITE_DOWNLOAD_LINUX },
];

const currentOS = computed(() => {
    if (typeof window === 'undefined') return 'Windows';
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'Windows';
    if (ua.includes('Mac')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    return 'Windows';
});

const getHref = (os: string) => {
    const download = downloads.find(d => d.os === os);
    return download?.href || '#';
};
</script>

<style scoped>
.download-header h1 {
    font-size: clamp(2rem, 8vw, 4rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.download-version {
    font-size: 0.9rem;
    color: #999;
}

.download-cards {
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
