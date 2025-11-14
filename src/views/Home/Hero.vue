<script setup lang="ts">
import SButton from '../../components/SButton.vue';

</script>

<template>

    <section 
        class="flex justify-center items-center flex-col pt-[13%] bg"
    >
        <div 
            class="max-w-5xl text-center flex justify-center items-center flex-col gap-6"
        >

            <div class="text-[76px] font-bold max-w-4xl ">
                Vos notes <span class="text-(--primary)">accessibles</span> <span class="text-(--primary)">partout</span> et simplement
            </div>

            <div class="mb-4 text-[20px]">
                SilverNote est l'application de prise de notes simple et intuitive conçue pour vous,
                <br />disponible sur mobile, PC et en tant qu'application web.
            </div>

            <div class="flex justify-center items-center my-8 gap-4">
                <SButton
                    content="Essayer silvernote"
                />
                <SButton
                    content="Voir les fonctionalités"
                    :nobg="true"
                />
            </div>

            <img 
                class="rounded-2xl"
                src="/assets/img/silvernote_desktop_screen.png"
            />

        </div>
    </section>
</template>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #9dc1e6, #ecdfd1);
}
</style>