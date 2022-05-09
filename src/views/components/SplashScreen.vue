<template>
    <div class="splash-screen flex h-screen">
        <img id="splash-character-1" src="@/assets/images/characters/6.png" alt="" srcset="">
        <img id="splash-character-2" src="@/assets/images/characters/5.png" alt="" srcset="">
        <div class="bg-main-2 splash-screen-box container rounded-lg m-auto p-3">
            <div class="splash-screen-container container">
                <h1 class="font-bold">General Knowledge Quiz</h1>
                <p>Sejauh mana pengetahuan umum kamu?</p>
                <p>Kali ini, kami akan menguji sejauh mana wawasanmu dengan soal-soal pengetahuan umum. Daripada penasaran, yuk langsung coba uji pengetahuanmu dengan kuis di bawah ini!</p>
                <div class="mb-3 start-button-container">
                    <span class="start-button rounded-full font-bold" @click="startGame">START</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import store from "@/store";
const gameStatus = computed(() => store.getters["gameStatus"]);

const startGame = () => {
    store.dispatch("initGame")
};
</script>