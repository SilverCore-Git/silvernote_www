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
                href="none"
                @click="downloadsCurrentOS()"
            />
        </div>

        <div class="flex flex-wrap justify-center items-start gap-8 mt-20 max-w-6xl download-cards">

            <a
                v-for="card in downloads"
                :key="card.os"
                :href="getHref(card.os)"
                class="
                    download-card p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all
                    border border-gray-200 hover:border-gray-300 w-80 h-80
                    flex flex-col items-center gap-4 cursor-pointer
                "
            >
            
                <div class="text-8xl p-5 object-cover">
                    <i class="bi" :class="card.icon" />
                </div>

                <h3 class="text-xl font-semibold capitalize">
                    {{ card.os }}
                </h3>

                <button
                    class="mt-2 px-4 py-2 bg-[var(--primary)] text-white rounded-xl font-medium
                            hover:brightness-110 transition cursor-pointer"
                >
                    Télécharger
                </button>
            </a>

        </div>

    </div>


    <Transition name="fade-scale">

      <div
        v-if="showDownloadLinuxPopup"
        @click="showDownloadLinuxPopup = false"
        class="fixed inset-0 z-40 flex justify-center items-center
               bg-black/30 backdrop-blur-sm"
      >

        <div
          class="
            z-50 bg-white/50 backdrop-blur-2xl
            border border-gray-200 rounded-2xl
            p-6 w-full max-w-md shadow-md
          "
        >

          <i
            class="absolute top-6 right-6 bi bi-x text-4xl cursor-pointer"
            @click="showDownloadLinuxPopup = false"
          />

          <h3 class="text-lg font-bold mb-4">
            Télécharger Silvernote
          </h3>

          <div class="grid grid-cols-1 gap-3 w-full">

            <a
              v-for="btn in downloads.filter((d: any) => d.os.startsWith('linux'))"
              :key="btn.os + 'btn-menu'"
              :href="getHref(btn.os)"
              class="w-full"
            >
              <SButton
                :content="'Télécharger pour : ' + btn.os"
                href="none"
                twstyle="w-full"
                class="w-full"
              />
            </a>
          
          </div>

        </div>

      </div>

    </Transition>


</template>

<script setup lang="ts">

import { onMounted, ref, nextTick } from 'vue';
import { SButton } from '@/components';
import gsap from 'gsap';

const detectOS = (): "windows" | "macos" | "linux" | "android" | "ios" => {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "ios";
  if (/android/.test(ua)) return "android";
  if (ua.includes("win")) return "windows";
  if (ua.includes("mac")) return "macos";
  return "linux";
};

const showDownloadLinuxPopup = ref<boolean>(false);
const currentOS = detectOS();
const version = ref<string>('');

const downloads = [
  {
    os: "windows",
    icon: "bi-windows",
    fileName: "Silvernote-Setup-{{version}}.exe"
  },
  {
    os: "macos",
    icon: "bi-apple",
    fileName: "Silvernote-{{version}}-arm64.dmg"
  },
  // {
  //   os: "ios",
  //   icon: "bi-phone",
  //   fileName: "applestore"
  // },
  // {
  //   os: "android",
  //   icon: "bi-android",
  //   fileName: "playstore"
  // },
  {
    os: "linux-rpm",
    icon: "bi-ubuntu",
    fileName: "Silvernote-{{version}}.x86_64.rpm"
  },
  {
    os: "linux-deb",
    icon: "bi-tux",
    fileName: "Silvernote_{{version}}_amd64.deb"
  },
  {
    os: "linux-appimage",
    icon: "bi-box",
    fileName: "Silvernote-{{version}}.AppImage"
  }
];

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

const downloadsCurrentOS = () => {
  
  if (currentOS !== 'linux') {
    window.open(getHref(currentOS), '_self');
    return;
  }

  showDownloadLinuxPopup.value = true;
  
}

const animateOnMount = async () => {
  await nextTick();
  
  // Header animation
  gsap.from('.download-header', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
  
  // Cards animation (staggered)
  gsap.from('.download-card', { opacity: 0, y: 40, duration: 0.6, stagger: 0.1, ease: 'back.out', delay: 0.7 });
};

onMounted(async () => {
  version.value = await fetch("https://api.github.com/repos/SilverCore-Git/silvernote_app/releases/latest")
    .then(res => res.json())
    .then(data => data.tag_name as string);
  
  await animateOnMount();
});

</script>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);
}
</style>