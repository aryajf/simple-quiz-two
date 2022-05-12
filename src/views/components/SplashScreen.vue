<template>
    <div class="splash-screen flex h-screen">
        <img src="@/assets/images/pot-atas.png" class="pot-top-left" alt="" srcset="">
        <img src="@/assets/images/pot-atas.png" class="pot-top-right" alt="" srcset="">
        <img src="@/assets/images/pot-bawah.png" class="pot-bottom-left" alt="" srcset="">
        <img src="@/assets/images/pot-bawah.png" class="pot-bottom-right" alt="" srcset="">
        <div class="bg-main-2 splash-screen-box container rounded-lg m-auto p-3">
            <div class="splash-screen-container container text-center" v-if="menu == 'start'">
                <div class="mb-3 start-button-container">
                    <span class="start-button rounded-3 font-bold" @click="menu = 'introduction-1'">MULAI</span>
                </div>
            </div>
            <div class="introduction container" v-if="menu == 'introduction-1'">
                <div class="mb-3 introduction-container">
                    <div class="introduction-text rounded-3 font-bold text-center">
                        <div>Selamat Datang</div>
                        <div>Perkenalkan nama ku Mr.James. Hari ini aku akan membagikan 100 kue gratis untuk merayakan ulang tahun toko kue ku yang ke 30</div>
                    </div>
                    <div class="arrow-right-container">
                        <div href="#" class="mt-3 arrow arrow-right" @click="menu = 'introduction-2'"></div>
                    </div>
                </div>
            </div>
            <div class="introduction container" v-if="menu == 'introduction-2'">
                <div class="mb-3 introduction-container">
                    <div class="introduction-text rounded-3 font-bold text-center">
                        <div>Tapi aku kekurangan beberapa bahan untuk membuat 100 kue. Aku butuh bantuan kalian untuk menyelesaikan misi dan mendapatkan tepung sebanyak - banyaknya</div>
                    </div>
                    <div class="arrow-right-container">
                        <div href="#" class="mt-3 arrow arrow-right" @click="selectingGame"></div>
                    </div>
                </div>
            </div>
            <div class="splash-screen-bottom text-center">
                <div class="mb-3">
                    <span class="font-bold">BAKERY SHOP</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            menu: 'start'
        }
    }
}
</script>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import store from "@/store";
const gameStatus = computed(() => store.getters["gameStatus"]);

const selectingGame = () => {
    store.dispatch("selectingGame")
};
</script>