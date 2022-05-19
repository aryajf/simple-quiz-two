<template>
    <div class="win flex h-screen">
        <audio id="yay">
            <source src="@/assets/audios/yay.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <audio id="tring">
            <source src="@/assets/audios/tring.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <img src="@/assets/images/confetti.png" class="background-win" alt="" srcset="">
        <div class="win-box container rounded-lg m-auto p-3">
            <div class="win-container container d-flex justify-content-center text-center">
                <div class="col-md-6">
                    <img src="@/assets/images/finish.png" class="win-image" alt="" srcset="">
                    <div class="row justify-content-center d-flex">
                        <div class="win-text rounded-6 font-bold text-center">
                            Selamat! kamu telah menyelesaikan<br>misi dengan baik
                        </div>
                    </div>
                    <div class="finish-button-container">
                        <span class="finish-button rounded-3 font-bold" @click="finishGame">Mulai dari awal</span>
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
            menu: 'start'
        }
    }
}
</script>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import store from "@/store";
const gameStatus = computed(() => store.getters["gameStatus"]);

onMounted(() => {
    document.getElementById("yay").play()
    document.getElementById("tring").play()
})

const finishGame = () => {
    store.dispatch("finishGame")
};
</script>