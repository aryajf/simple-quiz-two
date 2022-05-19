<template>
    <div>
        <div class="splash-screen flex h-screen" v-if="menu != 'tutorial-math' && menu != 'tutorial-image'">
            <img src="@/assets/images/pot-atas.png" class="pot-top-left" alt="" srcset="">
            <img src="@/assets/images/pot-atas.png" class="pot-top-right" alt="" srcset="">
            <img src="@/assets/images/pot-bawah.png" class="pot-bottom-left" alt="" srcset="">
            <img src="@/assets/images/pot-bawah.png" class="pot-bottom-right" alt="" srcset="">
            <div class="splash-screen-box container rounded-lg m-auto p-3">
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
                                <div href="#" class="mt-3 arrow arrow-right" @click="menu = 'tutorial-math'"></div>
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
                                <div href="#" class="mt-3 arrow arrow-right" @click="menu = 'tutorial-image'"></div>
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
        <div id="app" class="w-full h-100" v-if="menu == 'tutorial-math'" @click="initQuiz('math')">
            <div class="container tutorial-header font-bold">
                <div class="row">
                    <div class="col-12 col-lg-8 pt-3 text-center">
                        Contoh Permainan
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="w-full max-w-xl p-3" style="z-index:2 !important;">
                    <div class="p-6 w-full">
                        <div class="row">
                            <div class="col-12 text-center font-bold">Hitunglah jumlah gambar kue di bawah <br> kemudian klik salah satu angka diantara 4 pilihan</div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-12 d-flex justify-content-center">
                                <img class="quiz-math-question" src="@/assets/images/math-quiz/cake.png" alt="">
                            </div>
                        </div>
                        <p class="bg-main p-2 text-center mt-3 font-bold">Gambar diatas menunjukkan ada 3 gambar kue, maka pilih angka 3 pada kotak dibawah</p>
                        <div class="row">
                            <div class="col-6 quiz-math-mobile" v-for="i in 4" v-bind:key="i">
                                <label
                                class="select-quiz font-bold block mt-4 rounded-full p-6 text-lg d-flex justify-content-center" :class="{'corrected' : i == 3}"
                                >
                                    <input
                                    type="radio"
                                    class="hidden"/>
                                    {{ i }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quiz-math-desktop container-fluid">
                <div class="row">
                    <div class="col-3 select-quiz" v-for="i in 4" v-bind:key="i">
                        <label
                        class="block font-bold mt-4 rounded-lg text-lg d-flex justify-content-center" :class="{'corrected' : i == 3}"
                        >
                            <input
                            type="radio"
                            class="hidden"/>
                            {{ i }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div id="app" class="w-full h-100" v-if="menu == 'tutorial-image'" @click="initQuiz('image')">
            <div class="container tutorial-header font-bold">
                <div class="row">
                    <div class="col-12 col-lg-8 pt-3 text-center">
                        Contoh Permainan
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="w-full max-w-xl p-3" style="z-index:2 !important;">
                    <div class="p-4 w-full mb-8">
                        <div class="row">
                            <div class="col-12 text-center font-bold">Lengkapilah gambar yang hilang untuk menjadi kue yang utuh kemudian klik salah satu angka diantara 4 pilihan</div>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-6 d-flex justify-content-center">
                                <img class="quiz-image-question" src="@/assets/images/image-quiz/1-1.png" alt="">
                            </div>
                        </div>
                        <p class="bg-main p-2 text-center mt-3 font-bold">Manakah dari gambar dibawah ini yang cocok untuk melengkapi gambar diatas?</p>
                        <div class="row">
                            <div class="col-6 quiz-image-mobile" v-for="(answer, index) in tutorialImages" :key="index">
                                <label
                                class="select-quiz block mt-4 rounded-full p-6 text-lg d-flex justify-content-center"
                                >
                                    <input
                                    type="radio"
                                    class="hidden"/>
                                    <img class="w-100" :src="answer" alt="" srcset="">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="quiz-image-desktop container-fluid">
                    <div class="row">
                        <div class="col-3 select-quiz" v-for="(answer, index) in tutorialImages" :key="index">
                            <label
                            class="block rounded-lg text-lg d-flex justify-content-center">
                                <input
                                type="radio"
                                class="hidden"/>
                                <img class="w-50" :src="answer" alt="" srcset="">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            menu: 'selecting',
            tutorialImages: {
                a: new URL('../../assets/images/image-quiz/5.png', import.meta.url).href,
                b: new URL('../../assets/images/image-quiz/6.png', import.meta.url).href,
                c: new URL('../../assets/images/image-quiz/1-2.png', import.meta.url).href,
                d: new URL('../../assets/images/image-quiz/7.png', import.meta.url).href
            }
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