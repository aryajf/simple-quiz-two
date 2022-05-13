<template>
    <div class="splash-screen flex h-screen">
        <img src="@/assets/images/pot-atas.png" class="pot-top-left" alt="" srcset="">
        <img src="@/assets/images/pot-atas.png" class="pot-top-right" alt="" srcset="">
        <img src="@/assets/images/pot-bawah.png" class="pot-bottom-left" alt="" srcset="">
        <img src="@/assets/images/pot-bawah.png" class="pot-bottom-right" alt="" srcset="">
        <div class="bg-main-2 splash-screen-box container rounded-lg m-auto p-3">
            <div class="selecting container" v-if="menu == 'selecting'">
                <div class="mb-3 selecting-container row d-flex justify-content-around">
                    <div class="col-md-4 mb-3">
                        <div @click="(clear.math == false) ? menu = 'instruction-math' : menu = 'selecting'" class="selecting-text rounded-3 text-center">
                            <img v-if="clear.math == true" src="@/assets/images/check.png" class="checked" alt="" srcset="">
                            <img src="@/assets/images/menu/math.png" alt="" srcset="">
                        </div>
                        <h4 class="font-bold text-center mt-2">Berhitung</h4>
                    </div>
                    <div class="col-md-4">
                        <div @click="(clear.image == false) ? menu = 'instruction-image' : menu = 'selecting'" class="selecting-text rounded-3 text-center">
                            <img v-if="clear.image == true" src="@/assets/images/check.png" class="checked" alt="" srcset="">
                            <img src="@/assets/images/menu/image.png" alt="" srcset="">
                        </div>
                        <h4 class="font-bold text-center mt-2">Lengkapi Gambar</h4>
                    </div>
                </div>
            </div>
            <div class="instruction container" v-if="menu == 'instruction-math'">
                <div class="mb-3 instruction-container row d-flex justify-content-around">
                    <div class="col-md-6">
                        <img class="w-100" src="@/assets/images/characters/instruction.png" alt="" srcset="">
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <div style="position:relative;">
                        <div class="instruction-text rounded-3 font-bold">
                            <h4>Intruksi :</h4>
                            <div>Hitunglah berapa banyak gambar pada setiap soal dengan benar</div>
                            <div>Di akhir misi nanti kalian akan mengetahui berapa banyak jumlah tepung yang kalian dapatkan.</div>
                        </div>
                        <div class="arrow-right-container">
                            <div href="#" class="mt-3 arrow arrow-right" @click="initQuiz('math')"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="instruction container" v-if="menu == 'instruction-image'">
                <div class="mb-3 instruction-container row d-flex justify-content-around">
                    <div class="col-md-6">
                        <img class="w-100" src="@/assets/images/characters/instruction.png" alt="" srcset="">
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <div style="position:relative;">
                        <div class="instruction-text rounded-3 font-bold">
                            <h4>Intruksi :</h4>
                            <div>Pilih lah 1 gambar dari 4 pilihan yang paling cocok untuk melengkapi gambar pada setiap soal.</div>
                            <div>Di akhir misi nanti kalian akan mengetahui berapa banyak jumlah tepung yang kalian dapatkan.</div>
                        </div>
                        <div class="arrow-right-container">
                            <div href="#" class="mt-3 arrow arrow-right" @click="initQuiz('image')"></div>
                        </div>
                        </div>
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
            menu: 'selecting'
        }
    }
}
</script>

<script setup>
import { ref, computed, onMounted, watch } from "vue"
import store from "@/store"
const gameStatus = computed(() => store.getters["gameStatus"])
const clear = computed(() => store.getters["clear"])

const initQuiz = (type) => {
    store.dispatch("initQuiz", type)
}
</script>