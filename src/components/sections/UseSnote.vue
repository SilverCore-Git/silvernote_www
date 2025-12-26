<script setup lang="ts">
import { SButton } from '@/components/common';

</script>

<template>

    <section class="flex justify-center items-center w-full flex-col py-20 px-4">

        <div class="max-w-3xl text-center flex justify-center items-center flex-col gap-8 w-full">

            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md">
                <span class="text-sm font-medium text-[#1A1615]">🚀 Prêt à commencer ?</span>
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Tu t'es décidé ?
            </h2>

            <p class="text-lg md:text-xl text-gray-700 max-w-2xl">
                Essaye SilverNote gratuitement dès maintenant. Aucune carte bancaire requise, 
                accès illimité à toutes les fonctionnalités pendant 14 jours.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <SButton
                    content="Essayer Silvernote"
                    href="/app"
                />
                <SButton
                    content="Voir une démo"
                    href="#features"
                    :nobg="true"
                />
            </div>

            <!-- Trust indicators -->
            <div class="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-center opacity-75">
                <div>
                    <p class="font-bold text-lg text-(--primary)">10K+</p>
                    <p class="text-sm text-gray-600">Utilisateurs satisfaits</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div>
                    <p class="font-bold text-lg text-(--primary)">4.8/5</p>
                    <p class="text-sm text-gray-600">Évaluation moyenne</p>
                </div>
                <div class="hidden sm:block w-px h-8 bg-gray-300"></div>
                <div>
                    <p class="font-bold text-lg text-(--primary)">24/7</p>
                    <p class="text-sm text-gray-600">Support disponible</p>
                </div>
            </div>

        </div>

    </section>

</template>