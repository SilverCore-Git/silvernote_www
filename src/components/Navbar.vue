<script setup lang="ts">
import SButton from "./SButton.vue";



</script>

<template>
            <div 
                class="
                        fixed top-6 inset-x-[10%] 2xl:inset-x-[20%] z-50
                        rounded-[7px] flex justify-between items-center 
                        border border-gray-400/50 bg-black/70 backdrop-blur-sm
                    "

            >
                <div
                    class="center justify-around cursor-pointer ml-[25px]"

                >
                    <img 
                        class="h-[38px]"
                        src="" 
                    
                    >
                    <h3 class="ml-[8px] Heading_4">test</h3>
                </div>

                <div 
                    class="center my-[5px]"

                >

                    <!-- <a 
                            v-for="Nav in navbar_config.tab"
                            class="text-white p-[15px] text-white cursor-pointer Body_XS"
                            :href="Nav.href"
                        
                    >{{ Nav.name }}</a> -->

                </div>

                <!-- <button
                    @click="button_contact"
                    class="btn_basic center mr-[25px]"
                    :href="btn.href"
                
                >{{ btn.content }}</button> -->

       
            </div>

</template>


<style scoped></style>