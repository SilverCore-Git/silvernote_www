<template>

    <div
        class="flex justify-start items-center
                flex-col py-45 bg min-h-screen"
    >

        <div class="text-center mb-8">
            <h1>
                <span class="text-(--primary)">Télécharger</span> silvernote
            </h1>
            <span>{{ version }}</span>
        </div>

        <div>
            <SButton
                :content="`Télécharger pour ${currentOS}`"
                :href="getHref(currentOS)"
            />
        </div>

        <div class="flex flex-wrap justify-center items-start gap-8 mt-20 max-w-6xl">

            <a
                v-for="card in downloads"
                :key="card.os"
                :href="getHref(card.os)"
                class="w-52 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all
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
                    class="mt-2 px-4 py-2 bg-(--primary) text-white rounded-xl font-medium
                            hover:brightness-110 transition cursor-pointer"
                >
                    Télécharger
                </button>
            </a>

        </div>

    </div>

</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import SButton from '../../components/SButton.vue';

const detectOS = (): "windows" | "macos" | "linux" | "android" | "ios" => {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  return "linux";
};


const getHref = (os: string) => {
    if (downloads.find(_os => _os.os === os)?.fileName === 'applestore') 
    {
        return '';
    }
    else if (downloads.find(_os => _os.os === os)?.fileName === 'playstore') 
    {
        return '';
    }
    else
    {
        const fileName = (downloads.find(_os => _os.os === os)?.fileName)?.replace('{{version}}', version.value.replace('v', ''));
        return `https://github.com/SilverCore-Git/silvernote_app/releases/download/${version.value}/${fileName}`;
    }
}


const currentOS = detectOS();
const version = ref<string>('');

const downloads = [
  {
    os: "windows",
    icon: "bi-windows",
    fileName: "silvernote-{{version}}-win-setup.exe"
  },
  {
    os: "macos",
    icon: "bi-apple",
    fileName: "silvernote-{{version}}-macos.dmg"
  },
  {
    os: "ios",
    icon: "bi-phone",
    fileName: "applestore"
  },
  {
    os: "android",
    icon: "bi-android",
    fileName: "playstore"
  },
  {
    os: "linux-rpm",
    icon: "bi-ubuntu",
    fileName: "silvernote-{{version}}-linux-setup.rpm"
  },
  {
    os: "linux-deb",
    icon: "bi-tux",
    fileName: "silvernote-{{version}}-linux-setup.deb"
  },
  {
    os: "linux-appimage",
    icon: "bi-box",
    fileName: "silvernote-{{version}}-linux-setup.appimage"
  }
];


onMounted(async () => {

    version.value = await fetch("https://api.github.com/repos/SilverCore-Git/silvernote_app/releases/latest")
        .then(res => res.json())
        .then(data => data.tag_name as string);

});

</script>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);
}
</style>