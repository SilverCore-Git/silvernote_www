<script setup lang="ts">
import SButton from "./SButton.vue";

const navbar_config = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "/features" },
  { name: "Collaboratif", href: "/collab" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

const btn = { content: "Essayer Silvernote", href: "/signup" };

const button_contact = () => {
  window.location.href = btn.href;
};
</script>

<template>
    <nav

        class="fixed top-6 left-0 right-0 mx-auto max-w-[1200px] z-50 p-2 shadow-none
            bg-white/10 backdrop-blur-md rounded-[100px] flex justify-between items-center "
    >
        <div class="flex items-center gap-2 ml-2">
            <img
                src="/assets/logo/snote/favicon.svg"
                alt="Silvernote Logo"
                class="w-6"
            />
            <span class="text-[20px] font-semibold text-[#1A1615]">Silvernote</span>
        </div>

        <div class="flex items-center gap-4">
            <a
                v-for="tab in navbar_config"
                :key="tab.name"
                :href="tab.href"
                class="text-[#1A1615] rounded-full px-3 py-2 hover:bg-gray-100 transition"
            >
                {{ tab.name }}
            </a>
        </div>

        <SButton
            @click="button_contact"
            :content="btn.content"
        />

    </nav>

</template>

